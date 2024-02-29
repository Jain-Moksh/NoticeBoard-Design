import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="container mx-2">
      <div className="relative flex items-center text-black">
        <input 
          type="text"
          id="searchInput"
          className="w-[100%] h-9 2xl:h-14 3xl:h-14 px-4 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 "
          placeholder="Search "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label
          htmlFor="searchInput"
          className="absolute right-4 text-gray-500 cursor-pointer"
        >
          <FaSearch />
        </label>
      </div>

      {/* Other content or components can be added here */}
    </div>
  );
};

export default SearchComponent;
