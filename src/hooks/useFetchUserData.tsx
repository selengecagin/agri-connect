import { useState, useEffect, useCallback } from 'react';
import { axiosInstance } from '../api/axiosInstance';

interface Post {
    postId: string;
    userId: string;
    title: string;
    content: string;
    images: string[];
}

interface User {
    userId: string;
    name: string;
    bio: string;
    profilePhoto: string;
}

const useFetchUserData = (userId: string) => {
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchImagePath = async (imageId: string): Promise<string> => {
        const response = await axiosInstance.get(`/images/fileSystem/id/${imageId}`);
        return response.data.path; // assuming the response contains the path in the "path" field
    };

    const fetchUser = useCallback(async () => {
        try {
            const userResponse = await axiosInstance.get(`/users/${userId}`);
            const postResponse = await axiosInstance.get(`/posts/user/${userId}`);

            const user = userResponse.data;
            const profilePhoto = await fetchImagePath(user.profilePhotoId);
            const posts = await Promise.all(postResponse.data.map(async (post: any) => ({
                ...post,
                images: await Promise.all(post.imageIds.map((id: string) => fetchImagePath(id))),
            })));

            setUser({
                ...user,
                profilePhoto,
            });
            setPosts(posts);
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
