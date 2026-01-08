import { Hono } from 'hono';
import { getSupabaseClient, updateUserXP } from '../services/supabase';
import { z } from 'zod';

const router = new Hono();

const xpGainSchema = z.object({
  userId: z.string(),
  gameId: z.string(),
  levelId: z.string(),
  baseXP: z.number().min(0),
  multipliers: z.object({
    levelMultiplier: z.number().min(1),
    streakMultiplier: z.number().min(1),
    powerUpMultiplier: z.number().min(1),
    metaBonus: z.number().min(1)
  })
});

// Award XP to player
router.post('/award', async (c) => {
  try {
    const body = await c.req.json();
    const {
      userId,
      gameId,
      levelId,
      baseXP,
      multipliers
    } = xpGainSchema.parse(body);

    // Calculate total XP earned
    const totalXP = Math.floor(
      baseXP *
      multipliers.levelMultiplier *
      multipliers.streakMultiplier *
      multipliers.powerUpMultiplier *
      multipliers.metaBonus
    );

    // Update player XP
    const player = await updateUserXP(c.env, userId, totalXP);

    // Record XP transaction
    const supabase = getSupabaseClient(c.env);

    const { data: transaction, error: txError } = await supabase
      .from('xp_transactions')
      .insert([{
        user_id: userId,
        game_id: gameId,
        level_id: levelId,
        base_xp: baseXP,
        total_xp: totalXP,
        multipliers,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (txError) throw txError;

    // Check for rank up
    const { data: rankData } = await supabase
      .from('rank_thresholds')
      .select('*')
      .lte('total_xp_required', player.total_xp)
      .order('total_xp_required', { ascending: false })
      .limit(1)
      .single();

    const newRank = rankData?.rank || player.current_rank;

    // Update rank if changed
    if (newRank !== player.current_rank) {
      await supabase
        .from('users')
        .update({
          current_rank: newRank,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId);

      // Unlock skill tree nodes based on new rank
      const { data: skillTrees } = await supabase
        .from('skill_trees')
        .select('*')
        .eq('user_id', userId);

      if (skillTrees) {
        for (const skillTree of skillTrees) {
          // Get unlock level for new rank
          const rankUnlockLevels: Record<string, number> = {
            'Noob': 1,
            'User': 2,
            'Hacker': 3,
            'Engineer': 4,
            'Architect': 5,
            'Overlord': 6,
            'Godmode': 7
          };

          const unlockedLevel = rankUnlockLevels[newRank] || 1;

          // Count newly unlocked nodes
          const { data: newNodes } = await supabase
            .from('skill_nodes')
            .select('*')
            .eq('game_id', skillTree.game_id)
            .eq('tree_type', skillTree.tree_type)
            .lte('unlock_level', unlockedLevel);

          if (newNodes) {
            await supabase
              .from('skill_trees')
              .update({
                nodes_unlocked: newNodes.length,
                updated_at: new Date().toISOString()
              })
              .eq('id', skillTree.id);
          }
        }
      }
    }

    return c.json({
      success: true,
      xpAwarded: totalXP,
      totalXP: player.total_xp,
      previousRank: player.current_rank,
      newRank,
      rankedUp: newRank !== player.current_rank,
      transaction
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return c.json({ error: 'Validation error', details: err.errors }, 400);
    }
    return c.json({ error: 'Failed to award XP' }, 500);
  }
});

// Get XP history
router.get('/history/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');
    const limit = c.req.query('limit') || '50';

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('xp_transactions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(parseInt(limit as string));

    if (error) throw error;

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to fetch XP history' }, 500);
  }
});

// Get rank information
router.get('/ranks', async (c) => {
  try {
    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('rank_thresholds')
      .select('*')
      .order('total_xp_required', { ascending: true });

    if (error) throw error;

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to fetch ranks' }, 500);
  }
});

export default router;
