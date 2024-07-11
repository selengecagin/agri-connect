import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const userProfile = {
    name: "John Doer",
    profilePicture: "https://via.placeholder.com/150", // Profil fotoğrafı için yer tutucu URL
};

const postComments = [
    {
        name: "Jane Smith",
        profilePicture: "https://via.placeholder.com/150",
        comment: "Harika olmuş!"
    },
    {
        name: "Alice Johnson",
        profilePicture: "https://via.placeholder.com/150",
        comment: "Güzel fotoğraf!"
    }
];

const ViewPostPage: React.FC = () => {
    const navigate = useNavigate();
    const image = "https://via.placeholder.com/600";
    const description = "Yürüyen Uçak ve upuzun açıklamalar blah blah. Yürüyen Uçak ve upuzun açıklamalar blah blah. Yürüyen Uçak ve upuzun açıklamalar blah blah. Yürüyen Uçak ve upuzun açıklamalar blah blah. Yürüyen Uçak ve upuzun açıklamalar blah blah. Yürüyen Uçak ve upuzun açıklamalar blah blah. Yürüyen Uçak ve upuzun açıklamalar blah blah. ";

    return (
        <div className="max-w-4xl mx-auto p-4 border border-gray-400 rounded">
            <button
                className="mb-4 px-4 py-2 bg-gray-200 rounded"
                onClick={() => navigate(-1)}
            >
                &larr; Geri Dön
            </button>
            <hr className="border-t border-gray-300 mb-4"/>
            <div className="flex gap-4">
                <div className="w-1/2">
                    <img src={image} alt="Selected" className="w-full h-full object-cover rounded" />
                </div>
                <div className="w-1/2">
                    <div className="flex items-center mb-4">
                        <img src={userProfile.profilePicture} alt="User" className="w-12 h-12 rounded-full mr-4" />
                        <span className="text-lg font-bold">{userProfile.name}</span>
                    </div>
                    <div className="w-full h-48 p-2 border-b border-gray-400 rounded mb-4">
                        {description}
                    </div>
                    {postComments.map((comment, index) => (
                        <div key={index} className="w-full p-2 border-b border-gray-300 rounded mb-2">
                            <div className="flex gap-4">
                                <img src={comment.profilePicture} alt="Post" className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <h1 className="text-lg font-bold">{comment.name}</h1>
                                    <p>{comment.comment}</p>
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
        </div>
    );
};

export default ViewPostPage;
