/**
 * Notification related type definitions
 */

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  actionUrl?: string;
  metadata?: Record<string, any>;
}

export type NotificationType = 
  | 'comment' 
  | 'like' 
  | 'follow' 
  | 'mention' 
  | 'community_invite'
  | 'event_reminder'
  | 'announcement'
  | 'system';

export interface CreateNotificationInput {
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  actionUrl?: string;
  metadata?: Record<string, any>;
}

export interface NotificationPreferences {
  userId: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  commentNotifications: boolean;
  likeNotifications: boolean;
  followNotifications: boolean;
  mentionNotifications: boolean;
  communityNotifications: boolean;
  eventNotifications: boolean;
}
