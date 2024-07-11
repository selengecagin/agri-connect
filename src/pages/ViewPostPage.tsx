import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchPosts from '../hooks/useFetchPosts';
import '../stylesheets/ViewPostPage.css';

const ViewPostPage: React.FC = () => {
    const navigate = useNavigate();
    const { posts, loading, error, fetchMoreData, hasMore } = useFetchPosts();

    return (
        <div className="max-w-4xl mx-auto p-4 border border-gray-400 rounded">
            <button
                className="mb-4 px-4 py-2 bg-gray-200 rounded"
                onClick={() => navigate(-1)}
            >
                &larr; Geri Dön
            </button>
            <hr className="border-t border-gray-300 mb-4"/>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {posts.map((post) => (
                <div key={post.postId} className="mb-4">
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            {post.imageIds.length > 0 && (
                                <img src={`http://172.16.99.112:8080/api/images/${post.imageIds[0]}`} alt="Selected" className="w-full h-full object-cover rounded" />
                            )}
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center mb-4">
                                <img src="https://via.placeholder.com/150" alt="User" className="w-12 h-12 rounded-full mr-4" />
                                <span className="text-lg font-bold">{post.userId}</span>
                            </div>
                            <div className="w-full h-48 p-2 border-b border-gray-400 rounded mb-4">
                                <h2 className="text-xl font-bold">{post.title}</h2>
                                <p>{post.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-bold">Comments</h3>
                        {post.commentIds.map((commentId, index) => (
                            <div key={index} className="w-full p-2 border-b border-gray-300 rounded mb-2">
                                <div className="flex gap-4">
                                    <img src="https://via.placeholder.com/150" alt="User" className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <h1 className="text-lg font-bold">Commenter Name</h1>
                                        <p>Comment content for {commentId}</p>
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
            ))}
            {hasMore && (
                <button onClick={fetchMoreData} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Load More
                </button>
            )}
        </div>
    );
};

export default ViewPostPage;
