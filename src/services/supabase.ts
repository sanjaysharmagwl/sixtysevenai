import { createClient } from '@supabase/supabase-js';

let supabaseClient: any = null;

export function getSupabaseClient(env: any) {
  if (!supabaseClient) {
    const supabaseUrl = env.SUPABASE_URL;
    const supabaseKey = env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials');
    }

    supabaseClient = createClient(supabaseUrl, supabaseKey);
  }

  return supabaseClient;
}

export async function getUser(env: any, userId: string) {
  const supabase = getSupabaseClient(env);
  
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}

export async function createUser(env: any, userData: any) {
  const supabase = getSupabaseClient(env);
  
  const { data, error } = await supabase
    .from('users')
    .insert([userData])
    .select()
    .single();

  if (error) throw error;
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
