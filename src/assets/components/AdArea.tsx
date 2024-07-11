import React, { useEffect, useState } from "react";
import axios from "axios";

interface AdAreaProps {
  userId: any;
}

const AdArea: React.FC<AdAreaProps> = ({ userId }) => {
  const [adImagePath, setAdImagePath] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdImage = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/images/${userId}`);
        setAdImagePath(response.data.filePath);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch ad image");
        setLoading(false);
      }
    };

    fetchAdImage();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="relative max-w-lg mx-auto">
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        <img
          src={adImagePath || "https://via.placeholder.com/600x400"}
          alt="Ad Image"
          className="w-full h-auto object-cover rounded-md shadow-md hover:shadow-lg"
        />
      </a>
      <div className="absolute top-2 right-2 bg-gray-400 text-white text-xs px-2 py-1 rounded">
        Sponsored
      </div>
    </div>
  );
};

export default AdArea;
