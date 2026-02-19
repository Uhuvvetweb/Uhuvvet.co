/**
 * User API endpoints
 */

import { apiClient } from './client.api';
import type { 
  User, 
  UserProfile,
  UserStats,
  Post,
  ApiResponse 
} from '../types';

export const usersApi = {
  /**
   * Get current user profile
   */
  getCurrentUser: async (): Promise<ApiResponse<UserProfile>> => {
    return apiClient.get('/users/me');
  },

  /**
   * Get user by ID
   */
  getUserById: async (userId: string): Promise<ApiResponse<UserProfile>> => {
    return apiClient.get(`/users/${userId}`);
  },

  /**
   * Update user profile
   */
  updateProfile: async (data: Partial<User>): Promise<ApiResponse<User>> => {
    return apiClient.patch('/users/me', data);
  },

  /**
   * Get user stats
   */
  getUserStats: async (userId: string): Promise<ApiResponse<UserStats>> => {
    return apiClient.get(`/users/${userId}/stats`);
  },

  /**
   * Follow a user
   */
  followUser: async (userId: string): Promise<ApiResponse<void>> => {
    return apiClient.post(`/users/${userId}/follow`);
  },

  /**
   * Unfollow a user
   */
  unfollowUser: async (userId: string): Promise<ApiResponse<void>> => {
    return apiClient.post(`/users/${userId}/unfollow`);
  },

  /**
   * Get user's posts
   */
  getUserPosts: async (userId: string): Promise<ApiResponse<Post[]>> => {
    return apiClient.get(`/users/${userId}/posts`);
  },

  /**
   * Get user's saved posts
   */
  getSavedPosts: async (): Promise<ApiResponse<Post[]>> => {
    return apiClient.get('/users/me/saved');
  },

  /**
   * Get user's followers
   */
  getFollowers: async (userId: string): Promise<ApiResponse<User[]>> => {
    return apiClient.get(`/users/${userId}/followers`);
  },

  /**
   * Get user's following
   */
  getFollowing: async (userId: string): Promise<ApiResponse<User[]>> => {
    return apiClient.get(`/users/${userId}/following`);
  },
};
