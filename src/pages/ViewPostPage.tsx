import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPostData } from '../hooks/useFetchPostData'; // Dosya yolunu mevcut yapıya göre ayarlayın
import '../stylesheets/ViewPostPage.css'; // Stil dosyasını mevcut yapıya göre ayarlayın

const ViewPostPage: React.FC = () => {
    const { postId } = useParams<{ postId?: string }>();

    const { data, loading, error } = useFetchPostData(postId || '');

    if (!postId) {
        return <div>Invalid post ID</div>;
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const { post, user, comments, images, userProfileImage, commentUserImages } = data!;

    return (
        <div className="view-post-page">
            <h1>{post.title}</h1>
            <div className="post-images">
                {images.map((image, index) => (
                    <img
                        key={image.imageId || index}
                        src={`http://localhost:8080/api/images/fileSystem/id/${image.imageId}`}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded"
                    />
                ))}
            </div>
            <p>{post.content}</p>
            <div className="post-owner">
                {userProfileImage && (
                    <img
                        src={`http://localhost:8080/api/images/fileSystem/id/${userProfileImage.imageId}`}
                        alt={user.name}
                        className="rounded-full w-16 h-16"
                    />
                )}
                <p>{user.name}</p>
            </div>
            <h2>Comments</h2>
            {comments.map((comment, index) => (
                <div key={comment.commentId || index} className="comment">
                    {commentUserImages[comment.userId] && (
                        <img
                            src={`http://localhost:8080/api/images/fileSystem/id/${commentUserImages[comment.userId].imageId}`}
                            alt={comment.userId}
                            className="rounded-full w-12 h-12"
                        />
                    )}
                    <p>{comment.content}</p>
                </div>
            ))}
        </div>
    );
};

export default ViewPostPage;