import React from "react";

export default function AdArea() {
  return (
    <div className="relative max-w-lg mx-auto">
      <a
        href="https://www.example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://via.placeholder.com/600x400"
          alt="Ad Image"
          className="w-full h-auto object-cover rounded-md shadow-md hover:shadow-lg"
        />
      </a>
      <div className="absolute top-2 right-2 bg-gray-400 text-white text-xs px-2 py-1 rounded">
        Sponsored
      </div>
    </div>
  );
}
