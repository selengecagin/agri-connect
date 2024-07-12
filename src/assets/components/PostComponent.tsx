import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../hooks/useFetchUserData';

interface Post {
    postId: string;
    userId: string;
    user: User;
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


interface PostComponentProps {
    post: Post;
}

const PostComponent: React.FC<PostComponentProps> = ({ post }) => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`/profile/${post.userId}`);
    };

    const handlePostClick = () => {
        navigate(`/post/${post.postId}`);
    };

    return (
        <div className="post bg-white border border-gray-300 rounded-lg shadow-md mb-4 p-4 w-3/5 mx-auto">
            <div className="flex items-center mb-4 cursor-pointer" onClick={handleUserClick}>
                <img src={`https://via.placeholder.com/40?text=${post.userId}`} alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
                <span className="font-bold"> {post.user.name}</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="post-images grid grid-cols-1 gap-4 cursor-pointer" onClick={handlePostClick}>
                {post.imageIds.map((imageId, index) => (
                    <img
                        key={index}
                        src={`http://localhost:8080/api/images/fileSystem/id/${imageId}`}
                        alt={`Post image ${index}`}
                        className="w-full h-48 object-cover rounded"
                    />
                ))}
            </div>
        </div>
    );
};

export default PostComponent;
