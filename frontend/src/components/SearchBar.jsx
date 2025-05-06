import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-full max-w-sm flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200 focus-within:ring-2 focus-within:ring-cyan-400 transition">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 text-sm  outline-none placeholder:text-slate-400"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      {/* Clear icon */}
      {value && (
        <IoMdClose
          className="text-lg text-slate-500 cursor-pointer hover:text-red-500 transition"
          onClick={onClearSearch}
          title="Clear"
        />
      )}

      {/* Search icon */}
      <FaSearch
        className="text-slate-500 cursor-pointer hover:text-cyan-600 transition"
        onClick={handleSearch}
        title="Search"
      />
    </div>
  );
};

export default SearchBar;

