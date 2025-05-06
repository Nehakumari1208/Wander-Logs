import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import axiosInstance from "../utils/axiosInstance";
import { signOutSuccess } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar";

const Navbar = ({
  searchQuery,
  setSearchQuery,
  onSearchNote,
  handleClearSearch,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      const response = await axiosInstance.post("/user/signout");
      if (response.data) {
        dispatch(signOutSuccess());
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    handleClearSearch();
    setSearchQuery("");
  };

  return (
    <header className="bg-cyan-50 border-b border-slate-200 px-6 sm:px-10 py-3 sticky top-0 z-20 shadow-sm">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Logo */}
        <Link to={"/"} className="text-2xl font-bold flex items-center gap-1">
          <span className="text-cyan-500">Wander</span>
          <span className="text-cyan-900">Logs</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />
        </div>

        {/* Profile */}
        <Profile onLogout={onLogout} />
      </div>
    </header>
  );
};

export default Navbar;
