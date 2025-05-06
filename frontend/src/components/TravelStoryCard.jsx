import React from "react";
import moment from "moment";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const TravelStoryCard = ({
  imageUrl,
  title,
  story,
  date,
  visitedLocation,
  isFavourite,
  onEdit,
  onClick,
  onFavouriteClick,
}) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer w-[500px] mx-auto">
      {/* Image with fixed aspect ratio */}
      <div className="w-full h-56 relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
          onClick={onClick}
        />
      </div>

      <button
        className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/60 rounded-full border border-white/40 shadow-md hover:bg-red-500 hover:text-white transition-all"
        onClick={onFavouriteClick}
      >
        <FaHeart
          className={`text-xl ${isFavourite ? "text-red-500" : "text-white"}`}
        />
      </button>

      <div className="p-4" onClick={onClick}>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h6 className="text-lg font-semibold text-gray-900">{title}</h6>
            <span className="text-xs text-gray-500">
              {date ? moment(date).format("Do MMM YYYY") : "-"}
            </span>
          </div>
          <button
            className="text-base text-cyan-600 font-2xl cursor-pointer"
            onClick={onEdit}
          >
            Edit
          </button>
        </div>

        <p className="text-sm text-gray-700 mt-2 line-clamp-3">
          {story || "No story provided..."}
        </p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-600 bg-cyan-200/60 rounded-full px-3 py-1">
          <FaLocationDot className="text-sm" />
          {visitedLocation.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default TravelStoryCard;
