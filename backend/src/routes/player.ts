import { Hono } from 'hono';
import { getSupabaseClient, getUser } from '../services/supabase';

const router = new Hono();

// Get player profile
router.get('/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');
    
    const player = await getUser(c.env, userId);
    
    if (!player) {
      return c.json({ error: 'Player not found' }, 404);
    }

    return c.json(player);
  } catch (err) {
    return c.json({ error: 'Failed to fetch player profile' }, 500);
  }
});

// Update player profile
router.patch('/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');
    const updates = await c.req.json();

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();

    if (error) throw error;

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to update player profile' }, 500);
  }
});

// Get player games progress
router.get('/:userId/games', async (c) => {
  try {
    const userId = c.req.param('userId');

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('player_games')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to fetch player games' }, 500);
  }
});

// Get player achievements
router.get('/:userId/achievements', async (c) => {
  try {
    const userId = c.req.param('userId');

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('achievements')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to fetch achievements' }, 500);
  }
});

// Get player skill tree progress
router.get('/:userId/skill-trees', async (c) => {
  try {
    const userId = c.req.param('userId');

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('skill_trees')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to fetch skill trees' }, 500);
  }
});

// Get player quest completion progress
router.get('/:userId/quest-progress', async (c) => {
  try {
    const userId = c.req.param('userId');

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('quest_submissions')
      .select('*')
      .eq('user_id', userId)
      .in('status', ['approved', 'validated']);

    if (error) throw error;

    // Aggregate completion by level
    const progressByLevel: Record<number, { completed: number; total: number; isComplete: boolean }> = {};

    for (let level = 1; level <= 7; level++) {
      const completedInLevel = data?.filter(q => q.level_number === level).length || 0;
      progressByLevel[level] = {
        completed: completedInLevel,
        total: 3,
        isComplete: completedInLevel >= 3
      };
    }

    return c.json({
      userId,
      progressByLevel,
      totalLevelsComplete: Object.values(progressByLevel).filter(p => p.isComplete).length,
      submissions: data
    });
  } catch (err) {
    return c.json({ error: 'Failed to fetch quest progress' }, 500);
  }
});

// Unlock skill tree node
router.post('/:userId/skill-trees/:skillTreeId/unlock-node', async (c) => {
  try {
    const userId = c.req.param('userId');
    const skillTreeId = c.req.param('skillTreeId');
    const body = await c.req.json();
    const { nodeId } = body;

    const supabase = getSupabaseClient(c.env);

    // Check if node is already unlocked
    const { data: userNode } = await supabase
      .from('user_skill_nodes')
      .select('*')
      .eq('user_id', userId)
      .eq('node_id', nodeId)
      .single();

    if (userNode) {
      return c.json({ error: 'Node already unlocked' }, 400);
    }

    // Unlock node
    const { data: unlockedNode, error: unlockError } = await supabase
      .from('user_skill_nodes')
      .insert([{
        user_id: userId,
        node_id: nodeId,
        unlocked_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (unlockError) throw unlockError;

    // Update skill tree unlocked count
    const { data: allUnlockedNodes } = await supabase
      .from('user_skill_nodes')
      .select('*')
      .eq('user_id', userId);

    const { data: skillTree } = await supabase
      .from('skill_trees')
      .select('game_id, tree_type')
      .eq('id', skillTreeId)
      .single();

    if (skillTree) {
      const unlockedInTree = allUnlockedNodes?.filter(() => {
        // This is simplified - ideally would join with skill_nodes
        return true;
      }).length || 0;

      await supabase
        .from('skill_trees')
        .update({
          nodes_unlocked: unlockedInTree,
          updated_at: new Date().toISOString()
        })
        .eq('id', skillTreeId);
    }

    return c.json({
      success: true,
      unlockedNode
    });
  } catch (err) {
    return c.json({ error: 'Failed to unlock skill tree node' }, 500);
  }
});

// Get available skill tree nodes for unlock (based on rank/level)
router.get('/:userId/skill-nodes/:gameId/:treeType', async (c) => {
  try {
    const userId = c.req.param('userId');
    const gameId = c.req.param('gameId');
    const treeType = c.req.param('treeType');

    const supabase = getSupabaseClient(c.env);

    // Get player rank
    const { data: user } = await supabase
      .from('users')
      .select('current_rank, total_xp')
      .eq('id', userId)
      .single();

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    // Map rank to unlock level
    const rankUnlockLevels: Record<string, number> = {
      'Noob': 1,
      'User': 2,
      'Hacker': 3,
      'Engineer': 4,
      'Architect': 5,
      'Overlord': 6,
      'Godmode': 7
    };

    const unlockedLevel = rankUnlockLevels[user.current_rank] || 1;

    // Get all available nodes for this tree
    const { data: availableNodes } = await supabase
      .from('skill_nodes')
      .select('*')
      .eq('game_id', gameId)
      .eq('tree_type', treeType)
      .lte('unlock_level', unlockedLevel)
      .order('unlock_level', { ascending: true });

    // Get already unlocked nodes
    const { data: unlockedNodes } = await supabase
      .from('user_skill_nodes')
      .select('node_id')
      .eq('user_id', userId);

    const unlockedNodeIds = new Set(unlockedNodes?.map(n => n.node_id) || []);

    return c.json({
      userId,
      gameId,
      treeType,
      currentRank: user.current_rank,
      currentLevel: unlockedLevel,
      availableNodes: availableNodes?.filter(n => !unlockedNodeIds.has(n.id)) || [],
      unlockedNodes: availableNodes?.filter(n => unlockedNodeIds.has(n.id)) || []
    });
  } catch (err) {
    return c.json({ error: 'Failed to fetch skill nodes' }, 500);
  }
});

export default router;
