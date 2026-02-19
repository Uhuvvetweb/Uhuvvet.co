/**
 * Posts API endpoints
 */

import { apiClient } from './client.api';
import type { 
  Post, 
  PostDetail, 
  CreatePostInput, 
  UpdatePostInput,
  Comment,
  PaginationParams,
  FilterParams,
  ApiResponse 
} from '../types';

export const postsApi = {
  /**
   * Get all posts with pagination and filters
   */
  getPosts: async (
    params?: PaginationParams & FilterParams
  ): Promise<ApiResponse<Post[]>> => {
    return apiClient.get('/posts', { params });
  },

  /**
   * Get a single post by ID
   */
  getPostById: async (postId: string): Promise<ApiResponse<PostDetail>> => {
    return apiClient.get(`/posts/${postId}`);
  },

  /**
   * Create a new post
   */
  createPost: async (data: CreatePostInput): Promise<ApiResponse<Post>> => {
    return apiClient.post('/posts', data);
  },

  /**
   * Update an existing post
   */
  updatePost: async (
    postId: string,
    data: UpdatePostInput
  ): Promise<ApiResponse<Post>> => {
    return apiClient.patch(`/posts/${postId}`, data);
  },

  /**
   * Delete a post
   */
  deletePost: async (postId: string): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/posts/${postId}`);
  },

  /**
   * Like/unlike a post
   */
  toggleLikePost: async (postId: string): Promise<ApiResponse<{ isLiked: boolean }>> => {
    return apiClient.post(`/posts/${postId}/like`);
  },

  /**
   * Save/unsave a post
   */
  toggleSavePost: async (postId: string): Promise<ApiResponse<{ isSaved: boolean }>> => {
    return apiClient.post(`/posts/${postId}/save`);
  },

  /**
   * Get post comments
   */
  getPostComments: async (postId: string): Promise<ApiResponse<Comment[]>> => {
    return apiClient.get(`/posts/${postId}/comments`);
  },

  /**
   * Add a comment to a post
   */
  createComment: async (
    postId: string,
    content: string,
    isAnonymous: boolean,
    parentId?: string
  ): Promise<ApiResponse<Comment>> => {
    return apiClient.post(`/posts/${postId}/comments`, {
      content,
      isAnonymous,
      parentId,
    });
  },

  /**
   * Get trending posts
   */
  getTrendingPosts: async (): Promise<ApiResponse<Post[]>> => {
    return apiClient.get('/posts/trending');
  },
};
