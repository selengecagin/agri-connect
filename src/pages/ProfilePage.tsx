import React from 'react';
import '../stylesheets/ProfilePage.css';

const userProfile = {
    name: "John Doe",
    location: "New York, USA",
    bio: "Photographer & Traveler",
    profilePicture: "https://via.placeholder.com/150", // Profil fotoğrafı için yer tutucu URL
    posts: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
    ],
};

const ProfilePage = () => {
    return (
        <div className="profile-page-container">
            <div className="profile-header">
                <img src={userProfile.profilePicture} alt="Profile" className="profile-picture" />
                <div className="profile-info">
                    <h1 className="profile-name">{userProfile.name}</h1>
                    <p className="profile-location">{userProfile.location}</p>
                    <p className="profile-bio">{userProfile.bio}</p>
                </div>
            </div>
            <div className="profile-posts">
                {userProfile.posts.map((post, index) => (
                    <img key={index} src={post} alt={`Post ${index + 1}`} className="profile-post-image" />
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;
