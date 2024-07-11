import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

interface Comment {
    name: string;
    profilePicture: string;
    comment: string;
}

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

interface CommentFormInputs {
    comment: string;
}

interface PostComponentProps {
    post: Post;
    comments: Comment[];
}

const PostComponent: React.FC<PostComponentProps> = ({ post, comments: initialComments }) => {
    const [visibleComments, setVisibleComments] = useState<boolean>(false);
    const [commentErrors, setCommentErrors] = useState<string>("");
    const [comments, setComments] = useState<Comment[]>(initialComments);

    const { register, handleSubmit, reset } = useForm<CommentFormInputs>();

    const addComment = (data: CommentFormInputs) => {
        if (data.comment.trim().length === 0) {
            setCommentErrors("Comment cannot be empty");
            return;
        }

        const newComment = {
            name: "Current User",
            profilePicture: "https://via.placeholder.com/40",
            comment: data.comment,
        };

        setComments((prevComments) => [...prevComments, newComment]);
        reset();
        setCommentErrors("");
    };

    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-md mb-6 max-w-md mx-auto">
            <div className="flex items-center p-4">
                <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-4"
                />
                <span className="font-semibold">{post.userId}</span>
            </div>
            {post.imageIds.length > 0 && (
                <img
                    src={`http://172.16.99.112:8080/api/images/${post.imageIds[0]}`}
                    alt={`Post ${post.postId}`}
                    className="w-full"
                />
            )}
            <div className="p-4">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="text-gray-800">{post.content}</p>
                <div className="flex items-center mt-4 space-x-4">
                    <FontAwesomeIcon
                        icon={faHeart}
                        className="text-gray-600 cursor-pointer hover:text-red-600"
                    />
                    <FontAwesomeIcon
                        icon={faComment}
                        className="text-gray-600 cursor-pointer hover:text-blue-600"
                    />
                </div>
                <button
                    onClick={() => setVisibleComments(!visibleComments)}
                    className="text-blue-600 text-sm mt-2"
                >
                    View all {comments.length} comments
                </button>
                {visibleComments && (
                    <div className="mt-2">
                        {comments.map((comment, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <img
                                    src={comment.profilePicture}
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <div>
                                    <p className="font-semibold">{comment.name}</p>
                                    <p className="text-gray-700">{comment.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <form className="mt-2 flex" onSubmit={handleSubmit(addComment)}>
                    <input
                        type="text"
                        className="flex-grow border border-gray-300 rounded-l p-2"
                        placeholder="Add a comment..."
                        {...register("comment")}
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
                        Post
                    </button>
                </form>
                {commentErrors && (
                    <p className="text-red-500 text-sm mt-1">{commentErrors}</p>
                )}
            </div>
        </div>
    );
};

export default PostComponent;
