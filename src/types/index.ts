// SixtySeven AI Type Definitions

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  totalXP: number;
  currentRank: Rank;
  streak: number;
  lastPlayedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Player extends User {
  games: PlayerGame[];
  achievements: Achievement[];
  skillTrees: SkillTree[];
  godmodeProgress: GodmodeProgress;
}

export type Rank = 'Noob' | 'User' | 'Hacker' | 'Engineer' | 'Architect' | 'Overlord' | 'Godmode';

export interface RankThreshold {
  id: string;
  rank: Rank;
  rankOrder: number;
  totalXPRequired: number;
  multiplier: number;
  philosophy: string;
}

export interface Game {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconEmoji: string;
  primaryGradient: string;
  secondaryGradient: string;
  unlockLevel: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Level {
  id: string;
  gameId: string;
  levelNumber: number;
  title: string;
  description: string;
  xpReward: number;
  isBossLevel: boolean;
  isFinalBoss: boolean;
  unlockRequirement?: number;
}

export interface PlayerGame {
  id: string;
  userId: string;
  gameId: string;
  level: number;
  levelXP: number;
  totalXP: number;
  rank: Rank;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface XPTransaction {
  id: string;
  userId: string;
  gameId: string;
  levelId: string;
  baseXP: number;
  totalXP: number;
  multipliers: XPMultipliers;
  createdAt: Date;
}

export interface XPMultipliers {
  levelMultiplier: number;
  streakMultiplier: number;
  powerUpMultiplier: number;
  metaBonus: number;
}

export interface SkillTree {
  id: string;
  userId: string;
  gameId: string;
  treeType: 'mind' | 'systems' | 'output' | 'meta';
  nodesUnlocked: number;
  totalNodes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SkillNode {
  id: string;
  gameId: string;
  treeType: string;
  nodeName: string;
  description: string;
  unlockLevel: number;
  effect: Record<string, any>;
}

export interface Achievement {
  id: string;
  userId: string;
  achievementType: string;
  achievementName: string;
  description: string;
  iconEmoji: string;
  unlockedAt?: Date;
  createdAt: Date;
}

export interface PowerUp {
  id: string;
  name: string;
  iconEmoji: string;
  description: string;
  boostMultiplier: number;
  durationMinutes: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockCondition?: string;
  colorGradient: string;
}

export interface PlayerActivePowerUp {
  id: string;
  userId: string;
  powerupId: string;
  activatedAt: Date;
  expiresAt: Date;
}

export interface Payment {
  id: string;
  userId: string;
  paymentIntentId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  stripeSubscriptionId: string;
  status: 'active' | 'canceled' | 'past_due';
  planType?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GodmodeProgress {
  percentage: number;
  xpAccumulated: number;
  xpRequired: number;
  conditions: {
    xpAccumulation: boolean;
    finalBosses: {
      completed: number;
      required: number;
    };
    publicDeployment: boolean;
    authorityReview: boolean;
    ascensionSeal: boolean;
  };
}

// API Request/Response Types

export interface AuthRegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthLoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user: User;
  session?: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };
}

export interface XPAwardRequest {
  userId: string;
  gameId: string;
  levelId: string;
  baseXP: number;
  multipliers: XPMultipliers;
}

export interface XPAwardResponse {
  success: boolean;
  xpAwarded: number;
  totalXP: number;
  newRank: Rank;
}

export interface PaymentIntentRequest {
  userId: string;
  amount: number;
  description: string;
  metadata?: Record<string, string>;
}

export interface PaymentIntentResponse {
  clientSecret: string;
  paymentIntentId: string;
}

export interface CheckoutSessionRequest {
  userId: string;
  priceId: string;
}

export interface CheckoutSessionResponse {
  sessionId: string;
  url: string;
}

// Worker Environment Types

export interface CloudflareEnv {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  SUPABASE_SERVICE_KEY: string;
  STRIPE_SECRET_KEY: string;
  STRIPE_PUBLISHABLE_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  JWT_SECRET: string;
  JWT_EXPIRATION: string;
  CLOUDFLARE_ACCOUNT_ID: string;
  CLOUDFLARE_API_TOKEN: string;
  NODE_ENV: 'development' | 'staging' | 'production';
  API_BASE_URL: string;
  FRONTEND_URL: string;
}

// Game-specific types

export enum GameSlug {
  PromptArchitect = 'prompt-architect',
  AgentEngineer = 'agent-engineer',
  AutomationForge = 'automation-forge',
  CreatorOS = 'creator-os',
  StartupBuilder = 'startup-builder'
}

export const GameConfig: Record<GameSlug, {
  name: string;
  icon: string;
  primaryGradient: string;
  secondaryGradient: string;
}> = {
  [GameSlug.PromptArchitect]: {
    name: 'Prompt Architect',
    icon: '🎯',
    primaryGradient: 'linear-gradient(135deg, #26E6C8, #2A8CFF)',
    secondaryGradient: 'linear-gradient(90deg, #26E6C8, #2A8CFF)'
  },
  [GameSlug.AgentEngineer]: {
    name: 'Agent Engineer',
    icon: '🤖',
    primaryGradient: 'linear-gradient(135deg, #2A8CFF, #7B3FE4)',
    secondaryGradient: 'linear-gradient(90deg, #2A8CFF, #7B3FE4)'
  },
  [GameSlug.AutomationForge]: {
    name: 'Automation Forge',
    icon: '🔧',
    primaryGradient: 'linear-gradient(135deg, #7B3FE4, #FF4FD8)',
    secondaryGradient: 'linear-gradient(90deg, #7B3FE4, #FF4FD8)'
  },
  [GameSlug.CreatorOS]: {
    name: 'Creator OS',
    icon: '🎨',
    primaryGradient: 'linear-gradient(135deg, #FF4FD8, #FF8A00)',
    secondaryGradient: 'linear-gradient(90deg, #FF4FD8, #FF8A00)'
  },
  [GameSlug.StartupBuilder]: {
    name: 'Startup Builder',
    icon: '💰',
    primaryGradient: 'linear-gradient(135deg, #FF8A00, #26E6C8)',
    secondaryGradient: 'linear-gradient(90deg, #FF8A00, #26E6C8)'
  }
};
