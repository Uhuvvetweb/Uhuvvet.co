/**
 * Custom hook for managing posts
 */

import { useState, useEffect } from 'react';
import { postsApi } from '../api';
import type { Post, PostDetail, CreatePostInput, PaginationParams, FilterParams } from '../types';

export const usePosts = (params?: PaginationParams & FilterParams) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, [params]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await postsApi.getPosts(params);
      if (response.success && response.data) {
        setPosts(response.data);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (data: CreatePostInput) => {
    try {
      const response = await postsApi.createPost(data);
      if (response.success && response.data) {
        setPosts(prev => [response.data!, ...prev]);
        return response.data;
      }
    } catch (err: any) {
      throw new Error(err.message || 'Failed to create post');
    }
  };

  const toggleLike = async (postId: string) => {
    try {
      const response = await postsApi.toggleLikePost(postId);
      if (response.success) {
        setPosts(prev =>
          prev.map(post =>
            post.id === postId
              ? {
                  ...post,
                  isLiked: response.data?.isLiked || false,
                  likesCount: post.isLiked
                    ? post.likesCount - 1
                    : post.likesCount + 1,
                }
              : post
          )
        );
      }
    } catch (err: any) {
      throw new Error(err.message || 'Failed to toggle like');
    }
  };

  const toggleSave = async (postId: string) => {
    try {
      const response = await postsApi.toggleSavePost(postId);
      if (response.success) {
        setPosts(prev =>
          prev.map(post =>
            post.id === postId
              ? { ...post, isSaved: response.data?.isSaved || false }
              : post
          )
        );
      }
    } catch (err: any) {
      throw new Error(err.message || 'Failed to toggle save');
    }
  };

  const deletePost = async (postId: string) => {
    try {
      await postsApi.deletePost(postId);
      setPosts(prev => prev.filter(post => post.id !== postId));
    } catch (err: any) {
      throw new Error(err.message || 'Failed to delete post');
    }
  };

  return {
    posts,
    loading,
    error,
    createPost,
    toggleLike,
    toggleSave,
    deletePost,
    refetch: fetchPosts,
  };
};

export const usePost = (postId: string) => {
  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await postsApi.getPostById(postId);
      if (response.success && response.data) {
        setPost(response.data);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch post');
    } finally {
      setLoading(false);
    }
  };

  return {
    post,
    loading,
    error,
    refetch: fetchPost,
  };
};
