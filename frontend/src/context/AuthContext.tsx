import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { authAPI } from '../lib/api';

interface User {
  id: string;
  email: string;
  name: string;
  current_rank: string;
  total_xp: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const userData = localStorage.getItem('userData');

    if (token && userId && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Failed to parse user data:', error);
        localStorage.clear();
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await authAPI.login(email, password);
    
    if (response.success) {
      const userData = response.user;
      setUser(userData);
      localStorage.setItem('token', response.session.accessToken);
      localStorage.setItem('userId', userData.id);
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('currentRank', userData.current_rank);
      localStorage.setItem('totalXP', userData.total_xp.toString());
    }
  };

  const register = async (email: string, password: string, name: string) => {
    const response = await authAPI.register(email, password, name);
    
    if (response.success) {
      const userData = response.user;
      setUser(userData);
      localStorage.setItem('token', response.session.accessToken);
      localStorage.setItem('userId', userData.id);
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('currentRank', userData.current_rank);
      localStorage.setItem('totalXP', userData.total_xp.toString());
    }
  };

  const logout = () => {
    authAPI.logout().catch(console.error);
    setUser(null);
    localStorage.clear();
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('userData', JSON.stringify(updatedUser));
      if (updates.current_rank) {
        localStorage.setItem('currentRank', updates.current_rank);
      }
      if (updates.total_xp !== undefined) {
        localStorage.setItem('totalXP', updates.total_xp.toString());
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
