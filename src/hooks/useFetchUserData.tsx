import { useState, useEffect, useCallback } from 'react';
import { axiosInstance } from '../api/axiosInstance';

interface Image {
    imageId: string;
    name: string;
    type: string;
    filePath: string;
}

interface Post {
    postId: string;
    userId: string;
    title: string;
    content: string;
    imageIds: Image[];
    favoriteCount: number;
    likeCount: number;
    commentCount: number;
    categoryTags: string[];
    commentIds: string[];
    isPrivate: boolean;
    location: string;
    shareCount: number;
    createdAt: string;
    updatedAt: string;
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
    const [profilePhotoId, setProfilePhotoId] = useState<Image | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchImage = async (imageId: string): Promise<Image> => {
        try {
            const response = await axiosInstance.get(`/images/fileSystem/id/${imageId}`);
            return response.data; // assuming the response contains the full image object
        } catch (err) {
            console.error(`Failed to fetch image with id ${imageId}`, err);
            return { imageId, name: '', type: '', filePath: '' };
        }
    };

    const fetchPost = async (postId: string): Promise<Post | null> => {
        try {
            const response = await axiosInstance.get(`/posts/${postId}`);
            const post = response.data;
            const images = await Promise.all(post.imageIds.map((id: string) => fetchImage(id)));
            return { ...post, images };
        } catch (err) {
            console.error(`Failed to fetch post with id ${postId}`, err);
            return null;
        }
    };

    const fetchUser = useCallback(async () => {
        try {
            const userResponse = await axiosInstance.get(`/users/${userId}`);
            const user = userResponse.data;

            const profilePhotoId = await fetchImage(user.profilePhotoId);
            const posts = await Promise.all(user.postIds.map((postId: string) => fetchPost(postId)));

            setUser(user);
            setProfilePhotoId(profilePhotoId);
            setPosts(posts.filter(post => post !== null) as Post[]);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch user data');
            setLoading(false);
        }
    }, [userId]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return { user, profilePhotoId, posts, loading, error };
};

export default useFetchUserData;
