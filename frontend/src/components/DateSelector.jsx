import React, { useState } from "react";
import moment from "moment";
import { IoMdClose } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DateSelector = ({ date, setDate }) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);

  return (
    <div className="relative">
      <button
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-900 bg-sky-200/40 hover:bg-sky-200/70 rounded px-3 py-1.5 transition-all"
        onClick={() => setOpenDatePicker(true)}
      >
        <MdDateRange className="text-lg" />
        {date
          ? moment(date).format("Do MMM YYYY")
          : moment().format("Do MMM YYYY")}
      </button>

      {openDatePicker && (
        <div className="absolute z-10 mt-2 bg-white rounded-md border border-sky-100 shadow-lg p-4 w-fit">
          <div className="flex justify-end">
            <button
              className="w-8 h-8 flex items-center justify-center bg-sky-100 hover:bg-sky-200 rounded-full transition-all"
              onClick={() => setOpenDatePicker(false)}
            >
              <IoMdClose className="text-lg text-blue-900" />
            </button>
          </div>

          <DayPicker
            captionLayout="dropdown"
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              setOpenDatePicker(false); // Auto-close on select
            }}
            pagedNavigation
            className="mt-2"
          />
        </div>
      )}
    </div>
  );
};
export default DateSelector; 
