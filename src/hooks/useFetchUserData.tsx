import { useState, useEffect, useCallback } from 'react';
import { axiosInstance } from '../api/axiosInstance';

interface Post {
    postId: string;
    userId: string;
    title: string;
    content: string;
    imageIds: string[];
}

interface User {
    userId: string;
    name: string;
    bio: string;
    profilePhotoId: string;
    postIds: string[];
}

const useFetchUserData = (userId: string) => {
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUser = useCallback(async () => {
        try {
            const userResponse = await axiosInstance.get(`/users/${userId}`);
            const postResponse = await axiosInstance.get(`/posts/user/${userId}`);
            setUser(userResponse.data);
            setPosts(postResponse.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch user data');
            setLoading(false);
        }
    }, [userId]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return { user, posts, loading, error };
};

export default useFetchUserData;
