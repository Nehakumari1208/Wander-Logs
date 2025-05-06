import moment from "moment";
import React from "react";
import { IoMdClose } from "react-icons/io";

const FilterInfoTitle = ({ filterType, filterDate, onClear }) => {
  const DateRangeChip = ({ date }) => {
    const startDate = date?.from
      ? moment(date?.from).format("Do MMM YYYY")
      : "N/A";
    const endDate = date?.to ? moment(date?.to).format("Do MMM YYYY") : "N/A";

    return (
      <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-md text-slate-700 text-sm font-medium shadow-sm">
        <span>
          {startDate} – {endDate}
        </span>
        <button
          onClick={onClear}
          className="text-slate-500 hover:text-red-500 transition"
          title="Clear Filter"
        >
          <IoMdClose size={16} />
        </button>
      </div>
    );
  };

  if (!filterType) return null;

  return (
    <div className="mb-5">
      {filterType === "search" ? (
        <h3 className="text-lg font-semibold text-slate-800">
          Showing Search Results
        </h3>
      ) : (
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-lg font-semibold text-slate-800">
            Travel Stories from
          </h3>
          <DateRangeChip date={filterDate} />
        </div>
      )}
    </div>
  );
};

export default FilterInfoTitle;
