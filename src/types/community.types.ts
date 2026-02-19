/**
 * Community related type definitions
 */

export interface Community {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconColor: string;
  banner?: string;
  creatorId: string;
  createdAt: Date;
  membersCount: number;
  postsCount: number;
  category: string;
  isPrivate: boolean;
  rules?: string[];
  moderators: string[];
}

export interface CommunityDetail extends Community {
  members: Array<{ id: string; username: string; role: CommunityRole }>;
  posts: string[];
  announcements: string[];
  events: string[];
}

export type CommunityRole = 'creator' | 'moderator' | 'member';

export interface CommunityTab {
  id: string;
  label: string;
  path: string;
}

export interface CreateCommunityInput {
  name: string;
  description: string;
  category: string;
  isPrivate: boolean;
  icon?: string;
  iconColor?: string;
  rules?: string[];
}

export interface UpdateCommunityInput {
  name?: string;
  description?: string;
  category?: string;
  isPrivate?: boolean;
  banner?: string;
  rules?: string[];
}

export interface JoinCommunityInput {
  communityId: string;
  userId: string;
}
