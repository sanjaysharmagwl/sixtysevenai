-- Users table (Supabase Auth extension)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  avatar_url TEXT,
  total_xp INTEGER DEFAULT 0,
  current_rank TEXT DEFAULT 'Noob',
  streak INTEGER DEFAULT 0,
  last_played_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Games table
CREATE TABLE IF NOT EXISTS games (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon_emoji TEXT,
  primary_gradient TEXT,
  secondary_gradient TEXT,
  unlock_level INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Levels table
CREATE TABLE IF NOT EXISTS levels (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID NOT NULL REFERENCES games(id),
  level_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  xp_reward INTEGER NOT NULL,
  is_boss_level BOOLEAN DEFAULT FALSE,
  is_final_boss BOOLEAN DEFAULT FALSE,
  unlock_requirement INTEGER,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(game_id, level_number)
);

-- Player games (progress tracking)
CREATE TABLE IF NOT EXISTS player_games (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  game_id UUID NOT NULL REFERENCES games(id),
  level INTEGER DEFAULT 1,
  level_xp INTEGER DEFAULT 0,
  total_xp INTEGER DEFAULT 0,
  rank TEXT DEFAULT 'Noob',
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, game_id)
);

-- XP transactions (audit log)
CREATE TABLE IF NOT EXISTS xp_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  game_id UUID NOT NULL REFERENCES games(id),
  level_id UUID NOT NULL REFERENCES levels(id),
  base_xp INTEGER NOT NULL,
  total_xp INTEGER NOT NULL,
  multipliers JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT now()
);

-- Skill trees
CREATE TABLE IF NOT EXISTS skill_trees (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  game_id UUID NOT NULL REFERENCES games(id),
  tree_type TEXT NOT NULL,
  nodes_unlocked INTEGER DEFAULT 0,
  total_nodes INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, game_id, tree_type)
);

-- Skill tree nodes (individual unlocks)
CREATE TABLE IF NOT EXISTS skill_nodes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  game_id UUID NOT NULL REFERENCES games(id),
  tree_type TEXT NOT NULL,
  node_name TEXT NOT NULL,
  description TEXT,
  unlock_level INTEGER NOT NULL,
  effect JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT now()
);

-- Achievements
CREATE TABLE IF NOT EXISTS achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  achievement_type TEXT NOT NULL,
  achievement_name TEXT NOT NULL,
  description TEXT,
  icon_emoji TEXT,
  unlocked_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, achievement_type)
);

-- Power-ups
CREATE TABLE IF NOT EXISTS powerups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  icon_emoji TEXT,
  description TEXT,
  boost_multiplier DECIMAL DEFAULT 1.0,
  duration_minutes INTEGER NOT NULL,
  rarity TEXT DEFAULT 'common',
  unlock_condition TEXT,
  color_gradient TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Active player power-ups
CREATE TABLE IF NOT EXISTS player_active_powerups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  powerup_id UUID NOT NULL REFERENCES powerups(id),
  activated_at TIMESTAMP DEFAULT now(),
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

-- Payments
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  payment_intent_id TEXT UNIQUE NOT NULL,
  amount INTEGER NOT NULL,
  currency TEXT DEFAULT 'usd',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Subscriptions
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  stripe_subscription_id TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active',
  plan_type TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Rank thresholds
CREATE TABLE IF NOT EXISTS rank_thresholds (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  rank TEXT NOT NULL UNIQUE,
  rank_order INTEGER NOT NULL,
  total_xp_required INTEGER NOT NULL,
  multiplier DECIMAL DEFAULT 1.0,
  philosophy TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Insert rank thresholds
INSERT INTO rank_thresholds (rank, rank_order, total_xp_required, multiplier, philosophy) VALUES
('Noob', 1, 0, 1.0, 'I have entered the system.'),
('User', 2, 1000, 1.1, 'I can operate tools.'),
('Hacker', 3, 4000, 1.25, 'I can bend systems.'),
('Engineer', 4, 11000, 1.4, 'I can build systems.'),
('Architect', 5, 26000, 1.6, 'I can design machines.'),
('Overlord', 6, 56000, 2.0, 'I command automation armies.'),
('Godmode', 7, 156000, 3.0, 'I define the future systems.')
ON CONFLICT DO NOTHING;

-- Insert default games
INSERT INTO games (name, slug, description, icon_emoji, primary_gradient, secondary_gradient, unlock_level) VALUES
('Prompt Architect', 'prompt-architect', 'Build elite command systems', '🎯', 'linear-gradient(135deg, #26E6C8, #2A8CFF)', 'linear-gradient(90deg, #26E6C8, #2A8CFF)', 0),
('Agent Engineer', 'agent-engineer', 'Build autonomous AI workers', '🤖', 'linear-gradient(135deg, #2A8CFF, #7B3FE4)', 'linear-gradient(90deg, #2A8CFF, #7B3FE4)', 5),
('Automation Forge', 'automation-forge', 'Build business machines', '🔧', 'linear-gradient(135deg, #7B3FE4, #FF4FD8)', 'linear-gradient(90deg, #7B3FE4, #FF4FD8)', 10),
('Creator OS', 'creator-os', 'Build influence systems', '🎨', 'linear-gradient(135deg, #FF4FD8, #FF8A00)', 'linear-gradient(90deg, #FF4FD8, #FF8A00)', 15),
('Startup Builder', 'startup-builder', 'Build monetizable AI companies', '💰', 'linear-gradient(135deg, #FF8A00, #26E6C8)', 'linear-gradient(90deg, #FF8A00, #26E6C8)', 25)
ON CONFLICT DO NOTHING;

-- Insert default power-ups
INSERT INTO powerups (name, icon_emoji, description, boost_multiplier, duration_minutes, rarity, color_gradient) VALUES
('Focus Mode', '🧠', 'Deep work tunnel vision', 1.3, 25, 'common', 'linear-gradient(135deg, #0F172A, #26E6C8)'),
('Memory Lock', '🧠', 'What you learn sticks', 1.5, 30, 'rare', 'linear-gradient(135deg, #7B3FE4, #2A8CFF)'),
('Speed Burst', '⚡', 'Execute faster', 1.4, 25, 'rare', 'linear-gradient(135deg, #2A8CFF, #26E6C8)'),
('XP Multiplier', '✨', 'Level up faster', 1.5, 60, 'epic', 'linear-gradient(135deg, #FF8A00, #FACC15)'),
('Time Warp', '⏰', 'One hour becomes three', 3.0, 45, 'legendary', 'linear-gradient(135deg, #FF8A00, #FF4FD8)')
ON CONFLICT DO NOTHING;

-- Create indices for performance
CREATE INDEX IF NOT EXISTS idx_player_games_user ON player_games(user_id);
CREATE INDEX IF NOT EXISTS idx_player_games_game ON player_games(game_id);
CREATE INDEX IF NOT EXISTS idx_xp_transactions_user ON xp_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_xp_transactions_game ON xp_transactions(game_id);
CREATE INDEX IF NOT EXISTS idx_skill_trees_user ON skill_trees(user_id);
CREATE INDEX IF NOT EXISTS idx_achievements_user ON achievements(user_id);
CREATE INDEX IF NOT EXISTS idx_active_powerups_user ON player_active_powerups(user_id);
