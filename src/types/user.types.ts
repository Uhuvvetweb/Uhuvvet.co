/**
 * User related type definitions
 */

export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  avatar?: string;
  bio?: string;
  isVerified: boolean;
  joinedAt: Date;
  followersCount: number;
  followingCount: number;
  postsCount: number;
}

export interface UserProfile extends User {
  followers: User[];
  following: User[];
  savedPosts: string[];
  communities: string[];
}

export interface UserStats {
  postsCount: number;
  commentsCount: number;
  likesReceived: number;
  followersCount: number;
  followingCount: number;
}
