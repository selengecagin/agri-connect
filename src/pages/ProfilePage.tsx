import React, { useEffect, useState } from 'react';
import '../stylesheets/ProfilePage.css';
import { axiosInstance } from '../api/axiosInstance';

interface UserProfile {
    id: number;
    name: string;
    location: string;
    bio: string;
    profilePicture: string;
}

interface Post {
    id: number;
    imageUrl: string;
}

const ProfilePage = () => {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const profileResponse = await axiosInstance.get('/user/profile');
                setUserProfile(profileResponse.data);

                const postsResponse = await axiosInstance.get(`/user/${profileResponse.data.id}/posts`);
                setUserPosts(postsResponse.data);

                setLoading(false);
            } catch (err) {
                setError('Failed to fetch profile data');
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="profile-page-container">
            <div className="profile-header">
                <img src={userProfile?.profilePicture || "https://via.placeholder.com/150"} alt="Profile" className="profile-picture" />
                <div className="profile-info">
                    <h1 className="profile-name">{userProfile?.name}</h1>
                    <p className="profile-location">{userProfile?.location}</p>
                    <p className="profile-bio">{userProfile?.bio}</p>
                </div>
            </div>
            <div className="profile-posts">
                {userPosts.map((post, index) => (
                    <img key={index} src={post.imageUrl || "https://via.placeholder.com/150"} alt={`Post ${index + 1}`} className="profile-post-image" />
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;
