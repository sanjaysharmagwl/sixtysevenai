import { Hono } from 'hono';
import { getSupabaseClient, getUser, createUser } from '../services/supabase';
import { z } from 'zod';

const router = new Hono();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

// Register endpoint
router.post('/register', async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name } = registerSchema.parse(body);

    const supabase = getSupabaseClient(c.env);

    // Create auth user in Supabase
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password
    });

    if (authError) {
      return c.json({ error: authError.message }, 400);
    }

    // Create player profile
    const playerData = {
      id: authData.user!.id,
      email,
      name,
      total_xp: 0,
      current_rank: 'Noob',
      streak: 0,
      created_at: new Date().toISOString()
    };

    const player = await createUser(c.env, playerData);

    // Get session for access token
    const { data: sessionData } = await supabase.auth.getSession();

    return c.json({
      success: true,
      session: {
        accessToken: authData.session?.access_token || sessionData?.session?.access_token || ''
      },
      user: {
        id: player.id,
        email: player.email,
        name: player.name,
        current_rank: player.current_rank,
        total_xp: player.total_xp
      }
    }, 201);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return c.json({ error: 'Validation error', details: err.errors }, 400);
    }
    return c.json({ error: 'Registration failed' }, 500);
  }
});

// Login endpoint
router.post('/login', async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = loginSchema.parse(body);

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return c.json({ error: error.message }, 401);
    }

    const player = await getUser(c.env, data.user.id);

    return c.json({
      success: true,
      session: {
        accessToken: data.session.access_token
      },
      user: {
        id: player.id,
        email: player.email,
        name: player.name,
        current_rank: player.current_rank,
        total_xp: player.total_xp
      }
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return c.json({ error: 'Validation error' }, 400);
    }
    return c.json({ error: 'Login failed' }, 500);
  }
});

// Logout endpoint
router.post('/logout', async (c) => {
  const supabase = getSupabaseClient(c.env);
  
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    return c.json({ error: error.message }, 400);
  }

  return c.json({ success: true });
});

export default router;
