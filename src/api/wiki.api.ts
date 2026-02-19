/**
 * Wiki API endpoints
 */

import { apiClient } from './client.api';
import type { 
  WikiArticle, 
  WikiCategory,
  CreateWikiArticleInput,
  UpdateWikiArticleInput,
  PaginationParams,
  FilterParams,
  ApiResponse 
} from '../types';

export const wikiApi = {
  /**
   * Get all wiki articles
   */
  getArticles: async (
    params?: PaginationParams & FilterParams
  ): Promise<ApiResponse<WikiArticle[]>> => {
    return apiClient.get('/wiki/articles', { params });
  },

  /**
   * Get a single wiki article by ID
   */
  getArticleById: async (articleId: string): Promise<ApiResponse<WikiArticle>> => {
    return apiClient.get(`/wiki/articles/${articleId}`);
  },

  /**
   * Create a new wiki article
   */
  createArticle: async (data: CreateWikiArticleInput): Promise<ApiResponse<WikiArticle>> => {
    return apiClient.post('/wiki/articles', data);
  },

  /**
   * Update a wiki article
   */
  updateArticle: async (
    articleId: string,
    data: UpdateWikiArticleInput
  ): Promise<ApiResponse<WikiArticle>> => {
    return apiClient.patch(`/wiki/articles/${articleId}`, data);
  },

  /**
   * Delete a wiki article
   */
  deleteArticle: async (articleId: string): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/wiki/articles/${articleId}`);
  },

  /**
   * Get all wiki categories
   */
  getCategories: async (): Promise<ApiResponse<WikiCategory[]>> => {
    return apiClient.get('/wiki/categories');
  },

  /**
   * Search wiki articles
   */
  searchArticles: async (query: string): Promise<ApiResponse<WikiArticle[]>> => {
    return apiClient.get('/wiki/search', { params: { q: query } });
  },

  /**
   * Get popular wiki articles
   */
  getPopularArticles: async (): Promise<ApiResponse<WikiArticle[]>> => {
    return apiClient.get('/wiki/articles/popular');
  },

  /**
   * Increment article view count
   */
  incrementViews: async (articleId: string): Promise<ApiResponse<void>> => {
    return apiClient.post(`/wiki/articles/${articleId}/view`);
  },
};
