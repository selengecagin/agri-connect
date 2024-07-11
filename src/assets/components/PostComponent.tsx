import React from 'react';

interface Post {
    id: string;
    userId: string;
    title: string;
    content: string;
    imageIds: string[];
}

interface PostComponentProps {
    post: Post;
}

const PostComponent: React.FC<PostComponentProps> = ({ post }) => {
    return (
        <div className="post-container">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="post-images">
                {post.imageIds.map((imageId, index) => (
                    <img
                        key={index}
                        src={`http://localhost:8080/api/images/fileSystem/id/${imageId}`}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded"
                    />
                ))}
            </div>
        </div>
    );
};

export default PostComponent;
