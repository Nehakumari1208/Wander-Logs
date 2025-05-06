import React from "react";

const EmptyCard = ({ imgSrc, message, setOpenAddEditModal }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mx-auto p-8 bg-white rounded-xl shadow border border-slate-200 max-w-md transition-all">
      <div className="bg-slate-50 p-5 rounded-full shadow-sm">
        <img
          src={imgSrc}
          alt="Empty State"
          className="w-28 h-28 object-contain"
        />
      </div>

      <p className="text-base sm:text-lg font-medium text-slate-700 text-center mt-6">
        {message}
      </p>

      <button
        className="mt-5 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full shadow transition duration-200"
        onClick={() =>
          setOpenAddEditModal({ isShown: true, type: "add", data: null })
        }
      >
        + Create New
      </button>
    </div>
  );
};

export default EmptyCard;
