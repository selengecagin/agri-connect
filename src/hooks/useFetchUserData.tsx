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
    images?: string[]; // Adding this for the fetched paths
}

interface User {
    userId: string;
    name: string;
    email: string;
    password: string;
    accountLocked: boolean;
    accountEnabled: boolean;
    emailVerified: boolean;
    emailVerificationToken: string;
    createdDate: string;
    lastModifiedDate: string;
    phoneNo: string;
    location: string;
    followerCount: number;
    followingCount: number;
    questionCount: number;
    postCount: number;
    followerIds: string[];
    followingIds: string[];
    questionIds: string[];
    postIds: string[];
    profilePhotoId: string;
    privateAccount: boolean;
    bio: string;
    coverPhotoId: string;
    dateOfBirth: string;
    socialMediaLinks: string[];
    interests: string[];
    emailNotificationsEnabled: boolean;
    profilePhotoPath?: string; // Adding this for the fetched path
}

const useFetchUserData = (userId: string) => {
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchImagePath = async (imageId: string): Promise<string> => {
        try {
            const response = await axiosInstance.get(`/api/images/fileSystem/id/${imageId}`);
            return response.data.path; // Assuming the response contains the path in the "path" field
        } catch (error) {
            console.error("Failed to fetch image path", error);
            return "";
        }
    };

    const fetchUser = useCallback(async () => {
        try {
            const userResponse = await axiosInstance.get(`/api/users/${userId}`);
            const user: User = userResponse.data;
            const profilePhotoPath = await fetchImagePath(user.profilePhotoId);

            const postResponse = await axiosInstance.get(`/api/posts/user/${userId}`);
            const posts = await Promise.all(postResponse.data.map(async (post: Post) => ({
                ...post,
                images: await Promise.all(post.imageIds.map((id: string) => fetchImagePath(id))),
            })));

            setUser({
                ...user,
                profilePhotoPath,
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
