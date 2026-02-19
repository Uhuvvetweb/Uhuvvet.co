/**
 * Communities API endpoints
 */

import { apiClient } from './client.api';
import type { 
  Community, 
  CommunityDetail, 
  CreateCommunityInput,
  UpdateCommunityInput,
  JoinCommunityInput,
  Post,
  PaginationParams,
  ApiResponse 
} from '../types';

export const communitiesApi = {
  /**
   * Get all communities
   */
  getCommunities: async (params?: PaginationParams): Promise<ApiResponse<Community[]>> => {
    return apiClient.get('/communities', { params });
  },

  /**
   * Get a single community by ID
   */
  getCommunityById: async (communityId: string): Promise<ApiResponse<CommunityDetail>> => {
    return apiClient.get(`/communities/${communityId}`);
  },

  /**
   * Create a new community
   */
  createCommunity: async (data: CreateCommunityInput): Promise<ApiResponse<Community>> => {
    return apiClient.post('/communities', data);
  },

  /**
   * Update a community
   */
  updateCommunity: async (
    communityId: string,
    data: UpdateCommunityInput
  ): Promise<ApiResponse<Community>> => {
    return apiClient.patch(`/communities/${communityId}`, data);
  },

  /**
   * Delete a community
   */
  deleteCommunity: async (communityId: string): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/communities/${communityId}`);
  },

  /**
   * Join a community
   */
  joinCommunity: async (communityId: string): Promise<ApiResponse<void>> => {
    return apiClient.post(`/communities/${communityId}/join`);
  },

  /**
   * Leave a community
   */
  leaveCommunity: async (communityId: string): Promise<ApiResponse<void>> => {
    return apiClient.post(`/communities/${communityId}/leave`);
  },

  /**
   * Get community posts
   */
  getCommunityPosts: async (
    communityId: string,
    params?: PaginationParams
  ): Promise<ApiResponse<Post[]>> => {
    return apiClient.get(`/communities/${communityId}/posts`, { params });
  },

  /**
   * Get popular communities
   */
  getPopularCommunities: async (): Promise<ApiResponse<Community[]>> => {
    return apiClient.get('/communities/popular');
  },

  /**
   * Get user's joined communities
   */
  getUserCommunities: async (userId: string): Promise<ApiResponse<Community[]>> => {
    return apiClient.get(`/users/${userId}/communities`);
  },
};
