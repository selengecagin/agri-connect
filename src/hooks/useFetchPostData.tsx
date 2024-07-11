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
}

interface PostData {
    post: Post;
    user: User;
    comments: Comment[];
}

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

                setData({ post, user, comments });
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
