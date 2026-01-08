import { Hono } from 'hono';
import { getSupabaseClient } from '../services/supabase';

const router = new Hono();

// Get all games
router.get('/', async (c) => {
  try {
    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('games')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) throw error;

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to fetch games' }, 500);
  }
});

// Get game by ID
router.get('/:gameId', async (c) => {
  try {
    const gameId = c.req.param('gameId');

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('games')
      .select('*')
      .eq('id', gameId)
      .single();

    if (error) throw error;

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to fetch game' }, 500);
  }
});

// Get game levels
router.get('/:gameId/levels', async (c) => {
  try {
    const gameId = c.req.param('gameId');

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('levels')
      .select('*')
      .eq('game_id', gameId)
      .order('level_number', { ascending: true });

    if (error) throw error;

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to fetch levels' }, 500);
  }
});

// Get game leaderboard
router.get('/:gameId/leaderboard', async (c) => {
  try {
    const gameId = c.req.param('gameId');
    const limit = c.req.query('limit') || '100';

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase
      .from('player_games')
      .select(`
        user:users(id, name, avatar),
        level,
        total_xp
      `)
      .eq('game_id', gameId)
      .order('total_xp', { ascending: false })
      .limit(parseInt(limit as string));

    if (error) throw error;

    return c.json(data);
  } catch (err) {
    return c.json({ error: 'Failed to fetch leaderboard' }, 500);
  }
});

export default router;
