import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    comments: string[];
}

interface CommentFormInputs {
    comment: string;
}

interface PostComponentProps {
    post: Post;
}

const PostComponent: React.FC<PostComponentProps> = ({ post }) => {
    const [visibleComments, setVisibleComments] = useState<boolean>(false);
    const [commentErrors, setCommentErrors] = useState<string>("");
    const [comments, setComments] = useState<string[]>(post.comments);

    const { register, handleSubmit, reset } = useForm<CommentFormInputs>();

    const addComment = (data: CommentFormInputs) => {
        if (data.comment.trim().length === 0) {
            setCommentErrors("Comment cannot be empty");
            return;
        }

        setComments((prevComments) => [...prevComments, data.comment]);
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
                <span className="font-semibold">{post.author}</span>
            </div>
            <img
                src={`https://via.placeholder.com/600x400?text=Post+${post.id}`}
                alt={`Post ${post.id}`}
                className="w-full"
            />
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
                            <p key={index} className="text-sm text-gray-700">
                                {comment}
                            </p>
                        ))}
                    </div>
                )}
                <form
                    className="mt-2 flex"
                    onSubmit={handleSubmit(addComment)}
                >
                    <input
                        type="text"
                        className="flex-grow border border-gray-300 rounded-l p-2"
                        placeholder="Add a comment..."
                        {...register("comment")}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-r"
                    >
                        Post
                    </button>
                </form>
                {commentErrors && (
                    <p className="text-red-500 text-sm mt-1">
                        {commentErrors}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PostComponent;
