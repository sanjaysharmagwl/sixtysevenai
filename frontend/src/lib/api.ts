import axios, { AxiosError } from 'axios';
import type { AxiosRequestConfig } from 'axios';

// API Configuration
const API_BASE = import.meta.env.VITE_API_BASE || '/api';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear auth and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Generic API call function
export async function apiCall<T>(
  endpoint: string,
  options?: AxiosRequestConfig
): Promise<T> {
  const response = await apiClient(endpoint, options);
  return response.data;
}

// Auth API
export const authAPI = {
  login: async (email: string, password: string) => {
    return apiCall<{
      success: boolean;
      session: { accessToken: string };
      user: {
        id: string;
        email: string;
        name: string;
        current_rank: string;
        total_xp: number;
      };
    }>('/auth/login', {
      method: 'POST',
      data: { email, password },
    });
  },

  register: async (email: string, password: string, name: string) => {
    return apiCall<{
      success: boolean;
      session: { accessToken: string };
      user: {
        id: string;
        email: string;
        name: string;
        current_rank: string;
        total_xp: number;
      };
    }>('/auth/register', {
      method: 'POST',
      data: { email, password, name },
    });
  },

  logout: async () => {
    return apiCall('/auth/logout', { method: 'POST' });
  },
};

// Player API
export const playerAPI = {
  getProfile: async (userId: string) => {
    return apiCall<{
      id: string;
      email: string;
      name: string;
      current_rank: string;
      total_xp: number;
      created_at: string;
    }>(`/player/${userId}`);
  },

  updateProfile: async (userId: string, data: Partial<{ name: string }>) => {
    return apiCall(`/player/${userId}`, {
      method: 'PATCH',
      data,
    });
  },

  getGameProgress: async (userId: string) => {
    return apiCall<
      Array<{
        game_id: string;
        level: number;
        completed_quests: number;
      }>
    >(`/player/${userId}/games`);
  },

  getAchievements: async (userId: string) => {
    return apiCall(`/player/${userId}/achievements`);
  },

  getSkillTrees: async (userId: string) => {
    return apiCall(`/player/${userId}/skill-trees`);
  },

  getSkillNodes: async (userId: string, gameId: string, treeType: string) => {
    return apiCall(`/player/${userId}/skill-nodes/${gameId}/${treeType}`);
  },

  unlockSkillNode: async (userId: string, treeId: string, nodeId: string) => {
    return apiCall(`/player/${userId}/skill-trees/${treeId}/unlock-node`, {
      method: 'POST',
      data: { nodeId },
    });
  },
};

// Games API
export const gamesAPI = {
  getAll: async () => {
    return apiCall<
      Array<{
        id: string;
        name: string;
        slug: string;
        description: string;
        max_level: number;
      }>
    >('/games');
  },

  getLevels: async (gameId: string) => {
    return apiCall(`/games/${gameId}/levels`);
  },
};

// Quests API
export const questsAPI = {
  submit: async (data: {
    userId: string;
    gameId: string;
    levelNumber: number;
    questNumber: number;
    answer: string;
  }) => {
    return apiCall<{
      success: boolean;
      submission: {
        id: string;
        validation_status: string;
      };
      validation: {
        valid: boolean;
        score: number;
        feedback: string[];
      };
    }>('/quests/submit', {
      method: 'POST',
      data,
    });
  },

  validate: async (questSubmissionId: string) => {
    return apiCall<{
      success: boolean;
      xpAwarded: number;
      user: {
        id: string;
        current_rank: string;
        total_xp: number;
      };
      rankedUp: boolean;
      newRank?: string;
    }>(`/quests/${questSubmissionId}/validate`, {
      method: 'POST',
    });
  },

  getUserQuests: async (userId: string) => {
    return apiCall(`/quests/user/${userId}/all`);
  },

  getLevelProgress: async (userId: string, levelNumber: number) => {
    return apiCall<{
      completedQuests: number;
      miniBossCompleted: boolean;
      finalBossCompleted: boolean;
    }>(`/quests/user/${userId}/level/${levelNumber}`);
  },

  submitMiniBoss: async (userId: string, levelNumber: number) => {
    return apiCall<{
      success: boolean;
      xpAwarded: number;
      totalXP: number;
      message: string;
    }>('/quests/validator/mini-boss', {
      method: 'POST',
      data: { userId, levelNumber },
    });
  },

  submitFinalBoss: async (userId: string, levelNumber: number) => {
    return apiCall<{
      success: boolean;
      xpAwarded: number;
      totalXP: number;
      message: string;
    }>('/quests/validator/final-boss', {
      method: 'POST',
      data: { userId, levelNumber },
    });
  },

  getGodmodeStatus: async (userId: string) => {
    return apiCall<{
      isEligible: boolean;
      godmodeProgress: {
        xpProgress: number;
        requiredXP: number;
        levelsCompleted: number;
      };
      requirements: {
        xpRequirement: boolean;
        allLevelsComplete: boolean;
      };
    }>(`/quests/validator/godmode-status/${userId}`);
  },
};

// XP & Leaderboard API
export const xpAPI = {
  getHistory: async (userId: string) => {
    return apiCall(`/xp/history/${userId}`);
  },

  getRanks: async () => {
    return apiCall<
      Array<{
        rank: string;
        min_xp: number;
        max_xp: number;
      }>
    >('/xp/ranks');
  },
};

export default apiClient;
