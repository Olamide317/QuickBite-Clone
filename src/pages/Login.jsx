import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

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
      
      {/* TOP NAVIGATION (Logo Only) */}
      <header className="bg-white/90 backdrop-blur-md shadow-xs border-b border-gray-200/60 px-6 sm:px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-start">
          <Link to="/" className="flex items-center space-x-2.5 group">
            <span className="text-2xl">🍔</span>
            <span className="text-xl font-bold tracking-tight font-heading">
              <span style={{ color: "#ff7800" }}>Quick</span>
              <span className="text-[#2B2D42]">Bite</span>
            </span>
          </Link>
        </div>
      </header>

      {/* FIXED TOP-LEFT & TOP-RIGHT NAVIGATION BUTTONS (Hidden on lg screens and up) */}
      <div className="absolute top-24 left-6 sm:left-10 z-20 lg:hidden">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-[#ffd6b1] hover:bg-orange-200 text-gray-700 flex items-center justify-center transition-all shadow-sm border border-gray-200/60 focus:outline-none"
          aria-label="Go back"
        >
          <FiArrowLeft size={18} />
        </button>
      </div>

      <div className="absolute top-24 right-6 sm:right-10 z-20 lg:hidden">
        <button
          onClick={() => navigate("/")}
          className="w-10 h-10 rounded-full bg-[#ffd6b1] hover:bg-orange-200 text-gray-700 flex items-center justify-center transition-all shadow-sm border border-gray-200/60 focus:outline-none"
          aria-label="Close"
        >
          <IoClose size={20} />
        </button>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <main className="flex-grow flex items-center justify-center px-6 sm:px-8 py-12 mb-12">
        <div className="bg-transparent md:bg-white w-full max-w-md md:rounded-[28px] md:p-10 md:shadow-xl md:border border-gray-100 flex flex-col">

          {/* FORM HEADER */}
          <div className="text-center mb-6 order-0">
            <h1 className="text-xl sm:text-2xl font-bold text-[#2B2D42] font-heading mb-1">
              Login your account
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 font-sans">
              Start ordering in seconds.
            </p>
          </div>

          {/* LOGIN FORM */}
          <form onSubmit={handleLogin} className="space-y-4 order-1">
            
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
              <div className="text-right mt-1.5">
                <Link to="/forgot-password" className="text-xs text-gray-500 hover:text-[#ff7800] transition-colors">
                  Forgotten password
                </Link>
              </div>
            </div>

            {/* PRIMARY FORM ACTION - ONLY VISIBLE ON LG AND ABOVE */}
            <div className="pt-2 hidden lg:block">
              <button
                type="submit"
                className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 rounded-lg transition-all shadow-md font-heading text-sm"
              >
                Sign in
              </button>
            </div>

          </form>

          {/* ACCOUNT PROMPT */}
          <div className="mt-6 text-center text-sm font-sans order-2">
            <span className="text-gray-500">Have not create account? </span>
            <Link
              to="/signup"
              className="font-bold text-[#ff7800] hover:underline focus:outline-none"
            >
              Sign Up
            </Link>
          </div>

          {/* SOCIAL AUTHENTICATION SECTION */}
          <div className="mt-6 order-3">
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-xs text-gray-400 font-sans">Or with</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 mt-4">
              <button
                type="button"
                className="flex flex-col lg:flex-row items-center justify-center lg:space-x-3 bg-transparent lg:bg-white border-0 lg:border border-gray-200 hover:bg-gray-100/50 lg:hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-2 lg:px-4 rounded-2xl transition-all shadow-none lg:shadow-xs text-xs font-sans text-center lg:text-left"
              >
                <FaFacebookF size={18} className="text-blue-600 shrink-0 mb-1 lg:mb-0" />
                <span className="truncate">Facebook</span>
              </button>

              <button
                type="button"
                className="flex flex-col lg:flex-row items-center justify-center lg:space-x-3 bg-transparent lg:bg-white border-0 lg:border border-gray-200 hover:bg-gray-100/50 lg:hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-2 lg:px-4 rounded-2xl transition-all shadow-none lg:shadow-xs text-xs font-sans text-center lg:text-left"
              >
                <FcGoogle size={20} className="shrink-0 mb-1 lg:mb-0" />
                <span className="truncate">Google</span>
              </button>

              <button
                type="button"
                className="flex flex-col lg:flex-row items-center justify-center lg:space-x-3 bg-transparent lg:bg-white border-0 lg:border border-gray-200 hover:bg-gray-100/50 lg:hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-2 lg:px-4 rounded-2xl transition-all shadow-none lg:shadow-xs text-xs font-sans text-center lg:text-left"
              >
                <FiMail size={18} className="text-gray-600 shrink-0 mb-1 lg:mb-0" />
                <span className="truncate">Email</span>
              </button>
            </div>
          </div>

          {/* PRIMARY FORM ACTION - ONLY VISIBLE BELOW LG (With Right Arrow) */}
          <div className="pt-6 order-4 block lg:hidden">
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md font-heading text-sm flex items-center justify-center space-x-2"
            >
              <span>Sign in</span>
              <FiArrowRight size={16} />
            </button>
          </div>

        </div>
      </main>

    </div>
  );
}