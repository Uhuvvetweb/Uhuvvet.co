/**
 * Post related type definitions
 */

export interface Post {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  isAnonymous: boolean;
  createdAt: Date;
  updatedAt: Date;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  viewsCount: number;
  isLiked: boolean;
  isSaved: boolean;
  tags: string[];
  category?: string;
  images?: string[];
  communityId?: string;
}

export interface Comment {
  id: string;
  postId: string;
  content: string;
  authorId: string;
  authorName: string;
  isAnonymous: boolean;
  createdAt: Date;
  updatedAt: Date;
  likesCount: number;
  isLiked: boolean;
  parentId?: string;
  replies?: Comment[];
}

export interface PostDetail extends Post {
  comments: Comment[];
  relatedPosts: Post[];
}

export type PostCategory = 'general' | 'announcement' | 'event' | 'question' | 'discussion';

export interface CreatePostInput {
  content: string;
  isAnonymous: boolean;
  tags?: string[];
  category?: PostCategory;
  images?: string[];
  communityId?: string;
}

export interface UpdatePostInput {
  content?: string;
  tags?: string[];
  category?: PostCategory;
}
