import { Hono } from 'hono';
import { getSupabaseClient } from '../services/supabase';
import {
  validateQuestSubmission,
  getQuestValidationSchema,
  calculateXPMultiplier,
  isHighQualitySubmission
} from '../services/validator';
import { z } from 'zod';

const router = new Hono();

const questSubmitSchema = z.object({
  userId: z.string(),
  gameId: z.string(),
  levelNumber: z.number().min(1).max(7),
  questNumber: z.number().min(1).max(3),
  answer: z.string().min(1).max(10000)
});

// Submit a quest answer
router.post('/submit', async (c) => {
  try {
    const body = await c.req.json();
    const { userId, gameId, levelNumber, questNumber, answer } = questSubmitSchema.parse(body);

    const supabase = getSupabaseClient(c.env);

    // Store submission
    const { data: submission, error: submitError } = await supabase
      .from('quest_submissions')
      .insert([{
        user_id: userId,
        game_id: gameId,
        level_number: levelNumber,
        quest_number: questNumber,
        answer,
        submitted_at: new Date().toISOString(),
        status: 'pending'
      }])
      .select()
      .single();

    if (submitError) throw submitError;

    // Get validation schema
    const schema = getQuestValidationSchema(levelNumber, questNumber);
    if (!schema) {
      return c.json({ error: 'Quest not found' }, 404);
    }

    // Validate submission
    const { valid, score, feedback } = validateQuestSubmission(answer, schema);

    // Update submission with validation results
    const { data: validatedSubmission, error: updateError } = await supabase
      .from('quest_submissions')
      .update({
        status: valid ? 'validated' : 'needs_improvement',
        validation_score: score,
        validation_feedback: feedback,
        validated_at: new Date().toISOString()
      })
      .eq('id', submission.id)
      .select()
      .single();

    if (updateError) throw updateError;

    return c.json({
      success: true,
      submission: validatedSubmission,
      validation: {
        valid,
        score,
        feedback,
        isHighQuality: isHighQualitySubmission(score)
      }
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return c.json({ error: 'Validation error', details: err.errors }, 400);
    }
    return c.json({ error: 'Failed to submit quest' }, 500);
  }
});

// Get quest submission details
router.get('/:questSubmissionId', async (c) => {
  try {
    const questSubmissionId = c.req.param('questSubmissionId');

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('quest_submissions')
      .select('*')
      .eq('id', questSubmissionId)
      .single();

    if (error) throw error;
    if (!data) {
      return c.json({ error: 'Quest submission not found' }, 404);
    }

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to fetch quest submission' }, 500);
  }
});

// Validate a submitted quest (manual validation)
router.post('/:questSubmissionId/validate', async (c) => {
  try {
    const questSubmissionId = c.req.param('questSubmissionId');
    const supabase = getSupabaseClient(c.env);

    // Fetch submission
    const { data: submission, error: fetchError } = await supabase
      .from('quest_submissions')
      .select('*')
      .eq('id', questSubmissionId)
      .single();

    if (fetchError || !submission) {
      return c.json({ error: 'Quest submission not found' }, 404);
    }

    // Get validation schema
    const schema = getQuestValidationSchema(submission.level_number, submission.quest_number);
    if (!schema) {
      return c.json({ error: 'Quest schema not found' }, 404);
    }

    // Re-validate submission
    const { valid, score, feedback } = validateQuestSubmission(submission.answer, schema);

    // If valid, award XP
    if (valid && isHighQualitySubmission(score)) {
      const xpMultiplier = calculateXPMultiplier(
        submission.level_number,
        score,
        schema.difficultyMultiplier
      );

      // Base XP for quest (varies by level)
      const baseQuestXP = {
        1: 100,
        2: 150,
        3: 200,
        4: 250,
        5: 300,
        6: 350,
        7: 500
      }[submission.level_number] || 100;

      const totalXP = Math.floor(baseQuestXP * xpMultiplier);

      // Update user XP
      const { data: user, error: userError } = await supabase
        .from('users')
        .select('total_xp, current_rank')
        .eq('id', submission.user_id)
        .single();

      if (userError) throw userError;

      const newTotalXP = user.total_xp + totalXP;

      // Determine new rank based on XP
      const { data: ranks } = await supabase
        .from('rank_thresholds')
        .select('*')
        .lte('total_xp_required', newTotalXP)
        .order('total_xp_required', { ascending: false })
        .limit(1);

      const newRank = ranks?.[0]?.rank || user.current_rank;

      // Update user
      const { data: updatedUser, error: updateError } = await supabase
        .from('users')
        .update({
          total_xp: newTotalXP,
          current_rank: newRank,
          updated_at: new Date().toISOString()
        })
        .eq('id', submission.user_id)
        .select()
        .single();

      if (updateError) throw updateError;

      // Record XP transaction
      const { data: transaction } = await supabase
        .from('xp_transactions')
        .insert([{
          user_id: submission.user_id,
          game_id: submission.game_id,
          level_id: `${submission.game_id}-l${submission.level_number}`,
          base_xp: baseQuestXP,
          total_xp: totalXP,
          multipliers: {
            levelMultiplier: 1 + (submission.level_number - 1) * 0.1,
            streakMultiplier: 1,
            powerUpMultiplier: 1,
            metaBonus: xpMultiplier / (1 + (submission.level_number - 1) * 0.1)
          },
          created_at: new Date().toISOString()
        }])
        .select()
        .single();

      // Mark submission as approved
      const { data: approvedSubmission } = await supabase
        .from('quest_submissions')
        .update({
          status: 'approved',
          xp_awarded: totalXP,
          approved_at: new Date().toISOString()
        })
        .eq('id', questSubmissionId)
        .select()
        .single();

      return c.json({
        success: true,
        submission: approvedSubmission,
        validation: { valid, score, feedback },
        xpAwarded: totalXP,
        user: updatedUser,
        transaction
      });
    }

    return c.json({
      success: false,
      submission,
      validation: { valid, score, feedback },
      message: 'Submission did not meet quality standards'
    }, 400);
  } catch (err) {
    console.error('Validation error:', err);
    return c.json({ error: 'Failed to validate quest' }, 500);
  }
});

// Get user's quest submissions
router.get('/user/:userId/all', async (c) => {
  try {
    const userId = c.req.param('userId');
    const gameId = c.req.query('gameId');

    const supabase = getSupabaseClient(c.env);

    let query = supabase
      .from('quest_submissions')
      .select('*')
      .eq('user_id', userId);

    if (gameId) {
      query = query.eq('game_id', gameId);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) throw error;

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to fetch quest submissions' }, 500);
  }
});

// Get quest completion status for a level
router.get('/user/:userId/level/:levelNumber', async (c) => {
  try {
    const userId = c.req.param('userId');
    const levelNumber = parseInt(c.req.param('levelNumber'));

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('quest_submissions')
      .select('*')
      .eq('user_id', userId)
      .eq('level_number', levelNumber)
      .in('status', ['approved', 'validated']);

    if (error) throw error;

    const completedQuests = data?.length || 0;
    const isLevelComplete = completedQuests >= 3;

    return c.json({
      userId,
      levelNumber,
      completedQuests,
      totalQuests: 3,
      isLevelComplete,
      submissions: data
    });
  } catch (err) {
    return c.json({ error: 'Failed to fetch level completion status' }, 500);
  }
});

// Mini-boss validator endpoint
// Tests adversarial prompts and edge cases
router.post('/validator/mini-boss', async (c) => {
  try {
    const body = await c.req.json();
    const { userId, levelNumber } = body;

    const supabase = getSupabaseClient(c.env);

    // Fetch player's level completion
    const { data: levelCompletion } = await supabase
      .from('quest_submissions')
      .select('*')
      .eq('user_id', userId)
      .eq('level_number', levelNumber)
      .in('status', ['approved', 'validated']);

    if (!levelCompletion || levelCompletion.length < 3) {
      return c.json({
        success: false,
        message: 'Must complete all 3 quests before facing mini-boss',
        questsCompleted: levelCompletion?.length || 0,
        questsRequired: 3
      }, 400);
    }

    // Validate test case against difficulty
    const testCases: Record<number, any[]> = {
      1: [
        { constraint: 'Must handle empty input gracefully' },
        { constraint: 'Must work with special characters' },
        { constraint: 'Must preserve formatting' }
      ],
      2: [
        { constraint: 'Must handle contradictions' },
        { constraint: 'Must work with ambiguous instructions' },
        { constraint: 'Must optimize for clarity' }
      ],
      3: [
        { constraint: 'Must decompose complex problems' },
        { constraint: 'Must suggest architectural improvements' },
        { constraint: 'Must identify edge cases' }
      ],
      4: [
        { constraint: 'Must handle systemic complexity' },
        { constraint: 'Must propose scalable solutions' },
        { constraint: 'Must consider failure modes' }
      ],
      5: [
        { constraint: 'Must orchestrate multi-system interactions' },
        { constraint: 'Must optimize for performance and reliability' },
        { constraint: 'Must suggest meta-improvements' }
      ],
      6: [
        { constraint: 'Must master all previous constraints' },
        { constraint: 'Must provide strategic guidance' },
        { constraint: 'Must demonstrate transcendent understanding' }
      ],
      7: [
        { constraint: 'Must achieve Godmode mastery' },
        { constraint: 'Must transcend all limitations' },
        { constraint: 'Must ascend to ultimate authority' }
      ]
    };

    const bossChallenges = testCases[levelNumber] || [];
    const baseMinibossXP = 250;
    const minibossXP = Math.floor(baseMinibossXP * (1 + (levelNumber - 1) * 0.3));

    // Award XP if all quests completed
    const { data: user } = await supabase
      .from('users')
      .select('total_xp, current_rank')
      .eq('id', userId)
      .single();

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    const newTotalXP = user.total_xp + minibossXP;

    // Check rank progression
    const { data: ranks } = await supabase
      .from('rank_thresholds')
      .select('*')
      .lte('total_xp_required', newTotalXP)
      .order('total_xp_required', { ascending: false })
      .limit(1);

    const newRank = ranks?.[0]?.rank || user.current_rank;

    // Record mini-boss completion
    await supabase
      .from('boss_completions')
      .insert([{
        user_id: userId,
        level_number: levelNumber,
        boss_type: 'mini-boss',
        completed_at: new Date().toISOString(),
        xp_awarded: minibossXP
      }])
      .select()
      .single();

    // Update user XP
    await supabase
      .from('users')
      .update({
        total_xp: newTotalXP,
        current_rank: newRank,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId);

    return c.json({
      success: true,
      minibossPassed: true,
      xpAwarded: minibossXP,
      totalXP: newTotalXP,
      previousRank: user.current_rank,
      newRank,
      rankedUp: newRank !== user.current_rank,
      bossChallenges,
      nextChallenge: 'Final Boss - Unlock the truth'
    });
  } catch (err) {
    console.error('Mini-boss validation error:', err);
    return c.json({ error: 'Failed to process mini-boss challenge' }, 500);
  }
});

// Final-boss validator endpoint
// Ultimate test of mastery for each level
router.post('/validator/final-boss', async (c) => {
  try {
    const body = await c.req.json();
    const { userId, levelNumber } = body;

    const supabase = getSupabaseClient(c.env);

    // Check if mini-boss completed
    const { data: miniboss } = await supabase
      .from('boss_completions')
      .select('*')
      .eq('user_id', userId)
      .eq('level_number', levelNumber)
      .eq('boss_type', 'mini-boss')
      .single();

    if (!miniboss) {
      return c.json({
        success: false,
        message: 'Must defeat the mini-boss first'
      }, 400);
    }

    // Get player stats
    const { data: user } = await supabase
      .from('users')
      .select('total_xp, current_rank')
      .eq('id', userId)
      .single();

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    // Final boss XP scales by level
    const baseFinalBossXP = 500;
    const finalBossXP = Math.floor(baseFinalBossXP * (1 + (levelNumber - 1) * 0.4));

    const newTotalXP = user.total_xp + finalBossXP;

    // Check rank progression
    const { data: ranks } = await supabase
      .from('rank_thresholds')
      .select('*')
      .lte('total_xp_required', newTotalXP)
      .order('total_xp_required', { ascending: false })
      .limit(1);

    const newRank = ranks?.[0]?.rank || user.current_rank;

    // Record final-boss completion
    await supabase
      .from('boss_completions')
      .insert([{
        user_id: userId,
        level_number: levelNumber,
        boss_type: 'final-boss',
        completed_at: new Date().toISOString(),
        xp_awarded: finalBossXP
      }])
      .select()
      .single();

    // Update user XP
    await supabase
      .from('users')
      .update({
        total_xp: newTotalXP,
        current_rank: newRank,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId);

    // Check for Godmode unlock
    const { data: allBossCompletions } = await supabase
      .from('boss_completions')
      .select('*')
      .eq('user_id', userId)
      .eq('boss_type', 'final-boss');

    const godmodeEligible =
      allBossCompletions &&
      allBossCompletions.length >= 6 &&
      newTotalXP >= 156000 &&
      newRank === 'Overlord';

    // If eligible for Godmode, unlock level 7
    if (godmodeEligible) {
      await supabase
        .from('users')
        .update({
          current_rank: 'Godmode'
        })
        .eq('id', userId);
    }

    return c.json({
      success: true,
      finalBossPassed: true,
      xpAwarded: finalBossXP,
      totalXP: newTotalXP,
      previousRank: user.current_rank,
      newRank: godmodeEligible ? 'Godmode' : newRank,
      rankedUp: newRank !== user.current_rank,
      levelComplete: true,
      godmodeUnlocked: godmodeEligible,
      message: godmodeEligible
        ? '🌟 GODMODE UNLOCKED! You have ascended to ultimate authority.'
        : levelNumber === 7
        ? '🏆 Ultimate mastery achieved!'
        : `Level ${levelNumber} conquered! Ready for the next challenge.`
    });
  } catch (err) {
    console.error('Final-boss validation error:', err);
    return c.json({ error: 'Failed to process final-boss challenge' }, 500);
  }
});

// Godmode Gate - check unlock status
router.get('/validator/godmode-status/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');

    const supabase = getSupabaseClient(c.env);

    const { data: user } = await supabase
      .from('users')
      .select('total_xp, current_rank')
      .eq('id', userId)
      .single();

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    // Get final-boss completion count
    const { data: bosses } = await supabase
      .from('boss_completions')
      .select('*')
      .eq('user_id', userId)
      .eq('boss_type', 'final-boss');

    const finalBossesCompleted = bosses?.length || 0;

    // Godmode requirements
    const xpRequired = 156000;
    const bossesRequired = 6;
    const minRank = 'Overlord';

    const godmodeProgress = {
      xpAccumulated: user.total_xp,
      xpRequired,
      xpProgress: Math.min(100, (user.total_xp / xpRequired) * 100),
      conditions: {
        xpAccumulation: user.total_xp >= xpRequired,
        finalBosses: {
          completed: finalBossesCompleted,
          required: bossesRequired
        },
        minRankMet: user.current_rank === minRank || user.current_rank === 'Godmode'
      }
    };

    const godmodeUnlocked =
      godmodeProgress.conditions.xpAccumulation &&
      godmodeProgress.conditions.finalBosses.completed >= bossesRequired &&
      godmodeProgress.conditions.minRankMet;

    return c.json({
      userId,
      currentRank: user.current_rank,
      godmodeProgress,
      godmodeUnlocked,
      message: godmodeUnlocked
        ? '🌟 You have proven yourself worthy of Godmode!'
        : 'Continue your journey to Godmode mastery...'
    });
  } catch (err) {
    return c.json({ error: 'Failed to fetch Godmode status' }, 500);
  }
});

export default router;
