import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchPosts from '../hooks/useFetchPosts';
import PostComponent from '../assets/components/PostComponent';
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
                <PostComponent key={post.postId} post={post} comments={[]} />
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
