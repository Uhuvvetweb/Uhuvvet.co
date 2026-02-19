/**
 * Notifications API endpoints
 */

import { apiClient } from './client.api';
import type { 
  Notification,
  NotificationPreferences,
  ApiResponse,
  PaginationParams
} from '../types';

export const notificationsApi = {
  /**
   * Get all notifications for current user
   */
  getNotifications: async (params?: PaginationParams): Promise<ApiResponse<Notification[]>> => {
    return apiClient.get('/notifications', { params });
  },

  /**
   * Mark notification as read
   */
  markAsRead: async (notificationId: string): Promise<ApiResponse<void>> => {
    return apiClient.patch(`/notifications/${notificationId}/read`);
  },

  /**
   * Mark all notifications as read
   */
  markAllAsRead: async (): Promise<ApiResponse<void>> => {
    return apiClient.post('/notifications/read-all');
  },

  /**
   * Delete a notification
   */
  deleteNotification: async (notificationId: string): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/notifications/${notificationId}`);
  },

  /**
   * Get unread notifications count
   */
  getUnreadCount: async (): Promise<ApiResponse<{ count: number }>> => {
    return apiClient.get('/notifications/unread-count');
  },

  /**
   * Get notification preferences
   */
  getPreferences: async (): Promise<ApiResponse<NotificationPreferences>> => {
    return apiClient.get('/notifications/preferences');
  },

  /**
   * Update notification preferences
   */
  updatePreferences: async (
    data: Partial<NotificationPreferences>
  ): Promise<ApiResponse<NotificationPreferences>> => {
    return apiClient.patch('/notifications/preferences', data);
  },
};
