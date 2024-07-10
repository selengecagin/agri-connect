import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 // Adjust the path to your actual search icon file

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const navigate = useNavigate();

  const searchHandler = () => {
    if (searchInput) {
      const filteredInput = searchInput.replace(/ /g, "+");
      navigate(`/shop/s?filter=${filteredInput}`);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-52 lg:w-full rounded-md border bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none"
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? searchHandler() : null)}
        placeholder="Search in Store"
        value={searchInput}
      />
      <img
        src={"xxx"}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
        onClick={searchHandler}
        alt="Search"
      />
    </div>
  );
};

export default SearchBar;
