/**
 * Custom hook for authentication
 */

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { authApi, usersApi } from '../api';
import { storage } from '../lib/utils';
import type { User } from '../types';
import type { LoginInput, RegisterInput } from '../api/auth.api';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: LoginInput) => Promise<void>;
  register: (data: RegisterInput) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = storage.getAuthToken();
    if (token) {
      try {
        const response = await usersApi.getCurrentUser();
        if (response.success && response.data) {
          setUser(response.data);
        }
      } catch (err) {
        storage.removeAuthToken();
      }
    }
    setLoading(false);
  };

  const login = async (data: LoginInput) => {
    try {
      const response = await authApi.login(data);
      if (response.success && response.data) {
        storage.setAuthToken(response.data.token);
        setUser(response.data.user);
      }
    } catch (err: any) {
      throw new Error(err.message || 'Login failed');
    }
  };

  const register = async (data: RegisterInput) => {
    try {
      const response = await authApi.register(data);
      if (response.success && response.data) {
        storage.setAuthToken(response.data.token);
        setUser(response.data.user);
      }
    } catch (err: any) {
      throw new Error(err.message || 'Registration failed');
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } finally {
      storage.removeAuthToken();
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
