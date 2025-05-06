import React, { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const addNewTag = () => {
    if (inputValue.trim() !== "" && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) =>
    setTags(tags.filter((tag) => tag !== tagToRemove));

  return (
    <div className="w-full">
      {/* Tag List */}
      {tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-sm text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full shadow-sm"
            >
              <FaLocationDot className="text-cyan-500" />
              {tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="hover:text-red-500 transition"
                aria-label="Remove tag"
              >
                <IoMdClose size={16} />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Input & Add Button */}
      <div className="flex items-center gap-3 mt-4">
        <input
          type="text"
          value={inputValue}
          placeholder="Add location..."
          className="flex-1 text-sm border border-slate-300 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400 transition"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="w-10 h-10 rounded-lg border border-cyan-500 bg-white hover:bg-cyan-500 transition flex items-center justify-center"
          onClick={addNewTag}
          aria-label="Add tag"
        >
          <IoMdAdd className="text-cyan-500 hover:text-white text-xl transition" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
