/**
 * Custom hook for managing communities
 */

import { useState, useEffect } from 'react';
import { communitiesApi } from '../api';
import type { Community, CommunityDetail } from '../types';

export const useCommunities = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCommunities();
  }, []);

  const fetchCommunities = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await communitiesApi.getCommunities();
      if (response.success && response.data) {
        setCommunities(response.data);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch communities');
    } finally {
      setLoading(false);
    }
  };

  const joinCommunity = async (communityId: string) => {
    try {
      await communitiesApi.joinCommunity(communityId);
      setCommunities(prev =>
        prev.map(community =>
          community.id === communityId
            ? { ...community, membersCount: community.membersCount + 1 }
            : community
        )
      );
    } catch (err: any) {
      throw new Error(err.message || 'Failed to join community');
    }
  };

  const leaveCommunity = async (communityId: string) => {
    try {
      await communitiesApi.leaveCommunity(communityId);
      setCommunities(prev =>
        prev.map(community =>
          community.id === communityId
            ? { ...community, membersCount: community.membersCount - 1 }
            : community
        )
      );
    } catch (err: any) {
      throw new Error(err.message || 'Failed to leave community');
    }
  };

  return {
    communities,
    loading,
    error,
    joinCommunity,
    leaveCommunity,
    refetch: fetchCommunities,
  };
};

export const useCommunity = (communityId: string) => {
  const [community, setCommunity] = useState<CommunityDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCommunity();
  }, [communityId]);

  const fetchCommunity = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await communitiesApi.getCommunityById(communityId);
      if (response.success && response.data) {
        setCommunity(response.data);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch community');
    } finally {
      setLoading(false);
    }
  };

  return {
    community,
    loading,
    error,
    refetch: fetchCommunity,
  };
};
