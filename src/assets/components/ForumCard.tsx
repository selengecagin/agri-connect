import React from 'react';

interface ForumCardProps {
  questionId: string;
  title: string;
  body: string;
  userId: string;
  favoriteCount: number;
  likeCount: number;
  commentCount: number;
  categoryTags: string[];
  imageIds: string[];
}

const ForumCard: React.FC<ForumCardProps> = ({
  questionId,
  title,
  body,
  userId,
  favoriteCount,
  likeCount,
  commentCount,
  categoryTags,
  imageIds
}) => {
  return (
    <div className="forum-card bg-white border border-gray-300 rounded-lg shadow-md mb-4 p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{body}</p>
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-gray-500">Likes: {likeCount}</span>
          <span className="text-gray-500 ml-2">Favorites: {favoriteCount}</span>
          <span className="text-gray-500 ml-2">Comments: {commentCount}</span>
        </div>
        <div className="flex">
          {categoryTags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tag}</span>
          ))}
        </div>
      </div>
      <div className="flex">
        {imageIds.map((imageId, index) => (
          <img key={index} src={`http://localhost:8080/api/images/fileSystem/id/${imageId}`} alt={`image-${index}`} className="w-16 h-16 rounded mr-2" />
        ))}
      </div>
    </div>
  );
};

export default ForumCard;
