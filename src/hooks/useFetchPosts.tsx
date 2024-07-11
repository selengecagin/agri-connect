// src/hooks/useFetchPosts.tsx

import { useState, useEffect, useCallback } from 'react';
import { axiosInstance } from '../api/axiosInstance';

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    comments: string[];
}

const useFetchPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchPosts = useCallback(async () => {
        try {
            const response = await axiosInstance.get('/posts');
            setPosts(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch posts');
            setLoading(false);
        }
    }, []);

    const fetchMoreData = useCallback(async () => {
        try {
            const response = await axiosInstance.get(`/posts?offset=${posts.length}`);
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
