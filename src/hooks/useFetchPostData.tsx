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
    createdAt: string;
    updatedAt: string;
    isPrivate: boolean;
    location: string;
    shareCount: number;
    images?: string[]; // Adding this for the fetched paths
}

const useFetchPostData = (postId: string) => {
    const [post, setPost] = useState<Post | null>(null);
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

    const fetchPost = useCallback(async () => {
        try {
            const response = await axiosInstance.get(`/api/posts/${postId}`);
            const post: Post = response.data;
            const images = await Promise.all(post.imageIds.map((id: string) => fetchImagePath(id)));

            setPost({
                ...post,
                images,
            });
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch post data');
            setLoading(false);
        }
    }, [postId]);

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    return { post, loading, error };
};

export default useFetchPostData;
