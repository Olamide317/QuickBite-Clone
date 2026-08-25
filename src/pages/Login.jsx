import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login({ setIsLoggedIn }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (setIsLoggedIn) setIsLoggedIn(true);
    alert("Logged in successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-between font-sans relative">
      
      {/* Standard Public Navbar */}
      <Navbar />

      {/* FIXED TOP-LEFT & TOP-RIGHT NAVIGATION BUTTONS */}
      <div className="absolute top-24 left-6 sm:left-10 z-20">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-[#ffd6b1] hover:bg-orange-200 text-gray-700 flex items-center justify-center transition-all shadow-sm border border-gray-200/60 focus:outline-none"
          aria-label="Go back"
        >
          <FiArrowLeft size={18} />
        </button>
      </div>

      <div className="absolute top-24 right-6 sm:right-10 z-20">
        <button
          onClick={() => navigate("/")}
          className="w-10 h-10 rounded-full bg-[#ffd6b1] hover:bg-orange-200 text-gray-700 flex items-center justify-center transition-all shadow-sm border border-gray-200/60 focus:outline-none"
          aria-label="Close"
        >
          <IoClose size={20} />
        </button>
      </div>

      {/* MAIN CONTENT CONTAINER (Transparent below md, white card container on md+ screens) */}
      <main className="flex-grow flex items-center justify-center px-6 sm:px-8 py-12">
        <div className="bg-transparent md:bg-white w-full max-w-md md:rounded-[28px] md:p-10 md:shadow-xl md:border border-gray-100">

          {/* FORM HEADER */}
          <div className="text-center mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-[#2B2D42] font-heading mb-1">
              Login your account
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 font-sans">
              Start ordering in seconds.
            </p>
          </div>

          {/* LOGIN FORM */}
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Field 1: Email or phone */}
            <div>
              <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">
                Email or phone
              </label>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                placeholder="Email or phone number"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800] transition-colors shadow-xs"
              />
            </div>

            {/* Field 2: Password */}
            <div>
              <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800] transition-colors shadow-xs"
              />
              {/* Right-aligned helper link */}
              <div className="text-right mt-1.5">
                <Link to="/forgot-password" className="text-xs text-gray-500 hover:text-[#ff7800] transition-colors">
                  Forgotten password
                </Link>
              </div>
            </div>

            {/* PRIMARY ACTION BUTTON */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 rounded-xl transition-all shadow-md font-heading text-sm"
              >
                Sign in
              </button>
            </div>

          </form>

          {/* ACCOUNT PROMPT */}
          <div className="mt-6 text-center text-xs sm:text-sm font-sans">
            <span className="text-gray-500">Have not create account? </span>
            <Link
              to="/signup"
              className="font-bold text-[#ff7800] hover:underline focus:outline-none"
            >
              Sign Up
            </Link>
          </div>

          {/* SOCIAL AUTHENTICATION SECTION */}
          <div className="mt-6">
            
            {/* Separator text */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-xs text-gray-400 font-sans">Or with</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* 3-COLUMN HORIZONTAL SOCIAL LOGIN ROW */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              
              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-3 rounded-2xl transition-all shadow-xs text-xs font-sans"
              >
                <FaFacebookF size={15} className="text-blue-600 shrink-0" />
                <span className="truncate">Facebook</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-3 rounded-2xl transition-all shadow-xs text-xs font-sans"
              >
                <FcGoogle size={16} className="shrink-0" />
                <span className="truncate">Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-3 rounded-2xl transition-all shadow-xs text-xs font-sans"
              >
                <FiMail size={15} className="text-gray-600 shrink-0" />
                <span className="truncate">Email</span>
              </button>

            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}