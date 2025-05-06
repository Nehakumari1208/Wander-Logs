import React from "react";
import { useSelector } from "react-redux";
import { getInitials } from "../utils/helper";

const Profile = ({ onLogout }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="flex items-center gap-4 p-3 bg-white mr-0">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-800 font-semibold text-lg uppercase">
        {getInitials(currentUser?.username)}
      </div>

      <div className="flex flex-col">
        <p className="text-base font-medium text-slate-800">
          {currentUser?.username || "Guest"}
        </p>

        <button
          onClick={onLogout}
          className="text-base text-red-500 hover:text-red-600 mt-1 transition underline cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

