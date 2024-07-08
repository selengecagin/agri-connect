import React, { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
    // Implement your search logic here
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center w-full max-w-[800px] border border-lightGray rounded-lg shadow-sm">
        <div className="pl-3 flex items-center"></div>
        <input
          type="text"
          className="w-full pl-3 pr-4 py-2 focus:outline-none rounded-full"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className=" text-white font-bold py-1 px-4 rounded-full mr-2"
        >
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
