import React, { useEffect, useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { validateEmail } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loading, currentUser } = useSelector((state) => state.user);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setError(null);

    try {
      const response = await axiosInstance.post("/auth/signup", {
        username: name,
        email,
        password,
      });

      if (response.data) {
        navigate("/login");
      }
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  useEffect(() => {
    if (!loading && currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div className="min-h-screen bg-cyan-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden w-full max-w-6xl">
        {/* Left Side - Image */}
        <div
          className="hidden md:flex md:w-1/2 bg-cover bg-center p-10 items-end"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div>
            <h4 className="text-3xl lg:text-4xl font-semibold text-black leading-tight">
              Create Your <br /> Travel Stories
            </h4>
            <p className="text-black text-sm mt-3 opacity-90">
              Record your travel experiences and memories in your travel
              journey.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-14">
          <form onSubmit={handleSignUp} className="space-y-6">
            <h4 className="text-2xl font-semibold text-gray-800">
              Create Your Account
            </h4>

            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {loading ? (
              <p className="w-full text-center py-2 bg-cyan-400 text-white rounded-md animate-pulse">
                LOADING...
              </p>
            ) : (
              <button
                type="submit"
                className="w-full py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition duration-200"
              >
                SIGN UP
              </button>
            )}

            <div className="text-center text-sm text-gray-500">Or</div>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full py-2 border border-cyan-500 text-cyan-500 rounded-md hover:bg-cyan-50 transition duration-200"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
