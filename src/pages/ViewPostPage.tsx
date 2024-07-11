import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, getCommentsByPostId } from '../services/postDataService';
import useFetchUserData from '../hooks/useFetchUserData';

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

const ViewPostPage: React.FC = () => {
    const navigate = useNavigate();
    const { postId } = useParams<{ postId: string }>(); 
    const [post, setPost] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [userId, setUserId] = useState<string | null>(null);


    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const data = await getPostById(postId!);
                setPost(data);
                setUserId(data.userId);

                const commentsData = await getCommentsByPostId(postId!);
                setComments(commentsData);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching post or comments:', error);
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    return (
        <div className="max-w-4xl mx-auto p-4 border border-gray-400 rounded">
            <button
                className="mb-4 px-4 py-2 bg-gray-200 rounded"
                onClick={() => navigate(-1)}
            >
                &larr; Geri Dön
            </button>
            <hr className="border-t border-gray-300 mb-4"/>
            <div className="flex gap-4">
                <div className="w-1/2">
                    <img src={`http://localhost:8080/api/images/fileSystem/id/${post?.imageIds[0]}`} alt="Selected" className="w-full h-full object-cover rounded" />
                </div>
                <div className="w-1/2">
                    <div className="flex items-center mb-4">
                        <img src={"https://via.placeholder.com/150"} alt="User" className="w-12 h-12 rounded-full mr-4" />
                        <span className="text-lg font-bold">{post?.userId}</span>
                    </div>
                    <div className="w-full h-48 p-2 border-b border-gray-400 rounded mb-4">
                        {post?.content}
                    </div>
                    {comments.map(comment => (
                        <div key={comment.commentId} className="w-full p-2 border-b border-gray-300 rounded mb-2">
                            <div className="flex gap-4">
                                <img src={`https://via.placeholder.com/150?text=${comment.userId}`} alt="Post" className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <h1 className="text-lg font-bold">{comment.userId}</h1>
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <textarea
                            className="w-full h-16 p-2 border border-gray-300 rounded"
                            placeholder="Yeni yorum yaz..."
                        ></textarea>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Gönder
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPostPage;
