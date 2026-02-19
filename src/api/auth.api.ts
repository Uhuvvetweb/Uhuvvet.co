/**
 * Authentication API endpoints
 */

import { apiClient } from './client.api';
import type { User, ApiResponse } from '../types';

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  username: string;
  email: string;
  password: string;
  displayName: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const authApi = {
  /**
   * Login user
   */
  login: async (data: LoginInput): Promise<ApiResponse<AuthResponse>> => {
    return apiClient.post('/auth/login', data);
  },

  /**
   * Register new user
   */
  register: async (data: RegisterInput): Promise<ApiResponse<AuthResponse>> => {
    return apiClient.post('/auth/register', data);
  },

  /**
   * Logout user
   */
  logout: async (): Promise<ApiResponse<void>> => {
    return apiClient.post('/auth/logout');
  },

  /**
   * Refresh token
   */
  refreshToken: async (): Promise<ApiResponse<{ token: string }>> => {
    return apiClient.post('/auth/refresh');
  },

  /**
   * Verify email
   */
  verifyEmail: async (token: string): Promise<ApiResponse<void>> => {
    return apiClient.post('/auth/verify-email', { token });
  },

  /**
   * Request password reset
   */
  requestPasswordReset: async (email: string): Promise<ApiResponse<void>> => {
    return apiClient.post('/auth/forgot-password', { email });
  },

  /**
   * Reset password
   */
  resetPassword: async (token: string, newPassword: string): Promise<ApiResponse<void>> => {
    return apiClient.post('/auth/reset-password', { token, newPassword });
  },
};
