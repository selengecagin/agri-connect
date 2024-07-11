import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchUserData from '../hooks/useFetchUserData';
import '../stylesheets/ProfilePage.css';

const ProfilePage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const { user, posts, loading, error } = useFetchUserData(userId!);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!user) return <p>User not found</p>;

    const profilePhotoUrl = user ? `http://localhost:8080/api/images/fileSystem/id/${user.profilePhotoId}` : '';

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="profile-header flex items-center mb-4">
                <img
                    src={profilePhotoUrl}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mr-4"
                />
                <div>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-gray-700">{user.bio}</p>
                </div>
            </div>
            <hr className="border-t border-gray-300 mb-4" />
            <div className="grid grid-cols-3 gap-4">
                {posts.map((post) => (
                    <div key={post.postId}>
                        {post.imageIds.map((imageId) => {
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
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;
