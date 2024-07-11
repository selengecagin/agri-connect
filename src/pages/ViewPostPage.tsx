import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPostData } from '../hooks/useFetchPostData'; // Dosya yolunu mevcut yapıya göre ayarlayın
import './ViewPostPage.css'; // Stil dosyasını mevcut yapıya göre ayarlayın

const ViewPostPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const { data, loading, error } = useFetchPostData(postId);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const { post, user, comments } = data!;

    return (
        <div className="view-post-page">
            <h1>{post.title}</h1>
            <div className="post-images">
                {post.imageIds.map(imageId => {
                    const imageUrl = `http://localhost:8080/api/images/fileSystem/id/${imageId}`;
                    return (
                        <img
                            key={imageId}
                            src={imageUrl}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded"
                        />
                    );
                })}
            </div>
            <p>{post.content}</p>
            <div className="post-owner">
                <img src={`http://localhost:8080/api/users/${user.userId}/profile-photo`} alt={user.name} className="rounded-full w-16 h-16"/>
                <p>{user.name}</p>
            </div>
            <h2>Comments</h2>
            {comments.map(comment => (
                <div key={comment.commentId} className="comment">
                    <img src={`http://localhost:8080/api/users/${comment.userId}/profile-photo`} alt={comment.userId} className="rounded-full w-12 h-12"/>
                    <p>{comment.content}</p>
                </div>
            ))}
        </div>
    );
};

export default ViewPostPage;
