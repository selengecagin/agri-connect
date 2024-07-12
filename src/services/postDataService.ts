import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

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
}

interface Comment {
    commentId: string;
    userId: string;
    content: string;
    postId: string;
    questionId?: string;
    likeCount: number;
    createdAt: string;
    updatedAt: string;
    parentCommentId?: string;
    isEdited: boolean;
    originalContent?: string;
}

export const getPostById = async (postId: string): Promise<Post> => {
    try {
        const response = await axios.get<Post>(`${API_URL}/posts/${postId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching post data:', error);
        throw error;
    }
};


export const getCommentsByPostId = async (postId: string): Promise<Comment[]> => {
    try {
        const response = await axios.get<Comment[]>(`${API_URL}/comments/post/${postId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
};