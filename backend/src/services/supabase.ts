import { createClient } from '@supabase/supabase-js';

let supabaseClient: any = null;

export function getSupabaseClient(env: any) {
  if (!supabaseClient) {
    const supabaseUrl = env.SUPABASE_URL;
    const supabaseKey = env.SUPABASE_ANON_KEY;

    console.log('Initializing Supabase client with:', {
      url: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'MISSING',
      hasKey: !!supabaseKey
    });

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials - check .dev.vars file');
    }

    supabaseClient = createClient(supabaseUrl, supabaseKey);
  }

  return supabaseClient;
}

export async function getUser(env: any, userId: string) {
  const supabase = getSupabaseClient(env);
  
  console.log('Fetching user from database:', userId);
  
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
  
  console.log('User fetched successfully:', data?.email);
  return data;
}

export async function createUser(env: any, userData: any) {
  const supabase = getSupabaseClient(env);
  
  console.log('Creating user in database:', userData.email);
  
  const { data, error } = await supabase
    .from('users')
    .insert([userData])
    .select()
    .single();

  if (error) {
    console.error('Error creating user:', error);
    throw error;
  }
  
  console.log('User created successfully:', data?.email);
  return data;
}

export async function updateUserXP(env: any, userId: string, xpGain: number) {
  const supabase = getSupabaseClient(env);
  
  const { data, error } = await supabase
    .from('users')
    .update({ total_xp: supabase.raw('total_xp + ' + xpGain) })
    .eq('id', userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}
