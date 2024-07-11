import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchPostData from '../hooks/useFetchPostData';

const ViewPostPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const { post, loading, error } = useFetchPostData(postId!);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!post) return <p>Post not found</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <button
                className="mb-4 px-4 py-2 bg-gray-200 rounded"
                onClick={() => window.history.back()}
            >
                &larr; Back
            </button>
            <hr className="border-t border-gray-300 mb-4"/>
            <div className="post-header flex items-center mb-4">
                <img
                    src={`http://localhost:8080/api/images/fileSystem/id/${post.userId}`} // Assuming userId is the imageId
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full mr-4"
                />
                <div>
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <p className="text-gray-700">{post.content}</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {post.images && post.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Post Image ${index}`}
                        className="w-full h-48 object-cover rounded"
                    />
                ))}
            </div>
            <div className="mt-4">
                <textarea
                    className="w-full h-16 p-2 border border-gray-300 rounded"
                    placeholder="Add a comment..."
                ></textarea>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ViewPostPage;
