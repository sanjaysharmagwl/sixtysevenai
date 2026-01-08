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
    console.log('Register request body:', body);
    
    const { email, password, name } = registerSchema.parse(body);

    const supabase = getSupabaseClient(c.env);
    console.log('Supabase client created');

    // Create auth user in Supabase
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password
    });

    console.log('Supabase auth response:', { authData, authError });

    if (authError) {
      console.error('Auth error:', authError);
      // Check for duplicate user error
      if (authError.message.includes('already registered') || authError.message.includes('already exists')) {
        return c.json({ error: 'User with this email already exists. Please login instead.' }, 409);
      }
      return c.json({ error: authError.message }, 400);
    }

    if (!authData.user) {
      console.error('No user returned from signUp');
      return c.json({ error: 'Failed to create user' }, 500);
    }

    // Create player profile
    const playerData = {
      id: authData.user.id,
      email,
      name,
      total_xp: 0,
      current_rank: 'Noob',
      streak: 0,
      created_at: new Date().toISOString()
    };

    console.log('Creating player with data:', playerData);
    
    let player;
    try {
      player = await createUser(c.env, playerData);
      console.log('Player created:', player);
    } catch (dbError: any) {
      console.error('Database error creating user:', dbError);
      // If user profile already exists, fetch it instead
      if (dbError.code === '23505' || dbError.message?.includes('duplicate') || dbError.message?.includes('unique')) {
        console.log('User profile already exists, fetching existing user');
        player = await getUser(c.env, authData.user.id);
        console.log('Existing player fetched:', player);
      } else {
        throw dbError;
      }
    }

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
    console.error('Register error:', err);
    if (err instanceof z.ZodError) {
      return c.json({ error: 'Validation error', details: err.errors }, 400);
    }
    return c.json({ 
      error: 'Registration failed', 
      message: err instanceof Error ? err.message : 'Unknown error' 
    }, 500);
  }
});

// Login endpoint
router.post('/login', async (c) => {
  try {
    const body = await c.req.json();
    console.log('Login request for:', body.email);
    
    const { email, password } = loginSchema.parse(body);

    const supabase = getSupabaseClient(c.env);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    console.log('Supabase login response:', { hasData: !!data, error });

    if (error) {
      console.error('Login error:', error);
      return c.json({ error: error.message }, 401);
    }

    if (!data.user) {
      console.error('No user returned from signIn');
      return c.json({ error: 'Authentication failed' }, 401);
    }

    console.log('Fetching player data for user:', data.user.id);
    const player = await getUser(c.env, data.user.id);
    console.log('Player data fetched:', player);

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
    console.error('Login exception:', err);
    if (err instanceof z.ZodError) {
      return c.json({ error: 'Validation error', details: err.errors }, 400);
    }
    return c.json({ 
      error: 'Login failed', 
      message: err instanceof Error ? err.message : 'Unknown error' 
    }, 500);
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
