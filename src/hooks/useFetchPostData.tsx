import { useState, useEffect } from 'react';
import axios from 'axios';

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
    profilePhotoId: string;
}

interface Comment {
    commentId: string;
    userId: string;
    content: string;
    profilePhotoId: string;
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
}

const fetchImage = async (imageId: string): Promise<Image> => {
    try {
        const response = await axios.get(`/api/images/fileSystem/id/${imageId}`);
        return response.data; // assuming the response contains the full image object
    } catch (err) {
        console.error(`Failed to fetch image with id ${imageId}`, err);
        return { imageId, name: '', type: '', filePath: '' };
    }
};

export const useFetchPostData = (postId: string) => {
    const [data, setData] = useState<PostData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postResponse = await axios.get(`/api/posts/${postId}`);
                const post = postResponse.data;

                const userResponse = await axios.get(`/api/users/${post.userId}`);
                const user = userResponse.data;

                const commentsResponse = await axios.get(`/api/comments/post/${postId}`);
                const comments = commentsResponse.data;

                const images = await Promise.all(post.imageIds.map(fetchImage));
                user.profilePhotoId = await fetchImage(user.profilePhotoId);
                await Promise.all(comments.map(async (comment) => {
                    const userResponse = await axios.get(`/api/users/${comment.userId}`);
                    const commentUser = userResponse.data;
                    comment.profilePhotoId = await fetchImage(commentUser.profilePhotoId);
                }));

                setData({ post, user, comments, images });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [postId]);

    return { data, loading, error };
};
