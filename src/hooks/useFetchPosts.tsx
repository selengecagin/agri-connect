import { useState, useEffect, useCallback } from 'react';
import { axiosInstance } from '../api/axiosInstance';

interface Post {
    postId: string;
    userId: string;
    title: string;
    content: string;
    favoriteCount: number;
    likeCount: number;
    commentCount: number;
    categoryTags: string[];
    imageIds: string[];
    commentIds: string[];
    isPrivate: boolean;
    location: string;
    shareCount: number;
    createdAt: string;
    updatedAt: string;
}

const useFetchPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchPosts = useCallback(async () => {
        try {
            const response = await axiosInstance.get('/api/posts');
            setPosts(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch posts');
            setLoading(false);
        }
    }, []);

    const fetchMoreData = useCallback(async () => {
        try {
            const response = await axiosInstance.get(`/api/posts?offset=${posts.length}`);
            if (response.data.length === 0) {
                setHasMore(false);
                return;
            }
            setPosts((prevPosts) => [...prevPosts, ...response.data]);
        } catch (err) {
            setError('Failed to fetch more posts');
        }
    }, [posts.length]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return { posts, loading, error, fetchMoreData, hasMore };
};

export default useFetchPosts;
