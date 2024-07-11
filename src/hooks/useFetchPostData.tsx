import { useState, useEffect } from 'react';
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
    profilePhotoId?: string;
}

interface Comment {
    commentId: string;
    userId: string;
    content: string;
    profilePhotoId?: string;
}

interface Image {
    imageId: string;
    name: string;
    type: string;
    filePath: string;
}

interface PostData {
    post: Post;
    user: User;
    comments: Comment[];
    images: Image[];
    userProfileImage?: Image;
    commentUserImages: { [key: string]: Image };
}

const fetchImage = async (imageId: string): Promise<Image> => {
    try {
        const response = await axiosInstance.get(`/api/images/fileSystem/id/${imageId}`);
        console.log(`Fetched image: ${imageId}`, response.data);  // Debugging
        return response.data;
    } catch (err) {
        console.error(`Failed to fetch image with id ${imageId}`, err);
        return { imageId, name: '', type: '', filePath: '' };
    }
};

export const useFetchPostData = (postId: string) => {
    const [data, setData] = useState<PostData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!postId) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const postResponse = await axiosInstance.get(`/api/posts/${postId}`);
                const post: Post = postResponse.data;
                console.log('Fetched post:', post);  // Debugging

                const userResponse = await axiosInstance.get(`/api/users/${post.userId}`);
                const user: User = userResponse.data;
                console.log('Fetched user:', user);  // Debugging

                const commentsResponse = await axiosInstance.get(`/api/comments/post/${postId}`);
                const comments: Comment[] = commentsResponse.data;
                console.log('Fetched comments:', comments);  // Debugging

                const images = await Promise.all(post.imageIds.map(fetchImage));
                console.log('Fetched images:', images);  // Debugging

                let userProfileImage: Image | undefined;
                if (user.profilePhotoId) {
                    userProfileImage = await fetchImage(user.profilePhotoId);
                    console.log('Fetched user profile image:', userProfileImage);  // Debugging
                }

                const commentUserImages: { [key: string]: Image } = {};
                for (const comment of comments) {
                    const commentUserResponse = await axiosInstance.get(`/api/users/${comment.userId}`);
                    const commentUser: User = commentUserResponse.data;
                    if (commentUser.profilePhotoId) {
                        commentUserImages[comment.userId] = await fetchImage(commentUser.profilePhotoId);
                        console.log(`Fetched comment user image for user ${comment.userId}:`, commentUserImages[comment.userId]);  // Debugging
                    }
                }

                setData({ post, user, comments, images, userProfileImage, commentUserImages });
            } catch (err) {
                console.error('Error fetching data:', err);  // Debugging
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [postId]);

    return { data, loading, error };
};