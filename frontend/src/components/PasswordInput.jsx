import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  return (
    <div className="flex items-center border border-slate-300 rounded-md px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-cyan-500">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Enter your password"}
        className="w-full text-sm bg-transparent outline-none"
        type={isShowPassword ? "text" : "password"}
      />

      <button type="button" onClick={toggleShowPassword} className="ml-2">
        {isShowPassword ? (
          <FaRegEye className="text-cyan-600 hover:text-cyan-700" size={18} />
        ) : (
          <FaRegEyeSlash className="text-slate-500 hover:text-cyan-600" size={18} />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
