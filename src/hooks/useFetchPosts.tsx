import { useState, useEffect } from 'react';
import { axiosInstance } from '../api/axiosInstance';

interface Post {
    id: string;
    userId: string;
    title: string;
    content: string;
    imageIds: string[];
}

const useFetchPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosInstance.get(`/posts?page=${page}`);
                const fetchedPosts: Post[] = response.data;
                setPosts(prevPosts => [...prevPosts, ...fetchedPosts]);
                setHasMore(fetchedPosts.length > 0);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPosts();
    }, [page]);

    const fetchMoreData = () => {
        setPage(prevPage => prevPage + 1);
    };

    return { posts, loading, error, fetchMoreData, hasMore };
};

export default useFetchPosts;
