import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function Login({ setIsLoggedIn }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Logged in!
    alert("Logged in successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-center py-12 px-6 sm:px-8 font-sans">
      
      {/* 1. TOP NAVIGATION: Brand Logo */}
      <div className="absolute top-6 left-6 sm:left-12">
        <Link to="/" className="inline-flex items-center space-x-2.5 group">
          <span className="text-2xl">🍔</span>
          <span className="text-xl sm:text-[20px] font-bold tracking-tight font-heading">
            <span style={{ color: "#ff7800" }}>Quick</span>
            <span className="text-[#2B2D42]">Bite</span>
          </span>
        </Link>
      </div>

      {/* CENTERED LOGIN CARD CONTAINER */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md mt-8 sm:mt-0">
        
        <div className="bg-white py-8 px-6 sm:px-10 shadow-sm rounded-[16px] border border-gray-100">
          
          {/* HEADER AREA */}
          <div className="text-center mb-8">
            <h2 className="text-[22px] font-bold text-[#2B2D42] font-heading mb-1">
              Login
            </h2>
            <p className="text-[13px] sm:text-[14px] text-[#6B7280] font-sans">
              Login to start ordering in seconds
            </p>
          </div>

          {/* LOGIN FORM */}
          <form onSubmit={handleLogin} className="space-y-4">
            
            <div>
              <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">
                Email or Phone number
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-3.5 text-gray-400" />
                <input 
                  type="text" 
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required 
                  placeholder="Email" 
                  className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-4 top-3.5 text-gray-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  placeholder="Password" 
                  className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800]"
                />
              </div>
            </div>

            {/* PRIMARY FORM ACTION */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 rounded-lg transition-all shadow-md font-heading text-sm"
              >
                Sign In
              </button>
            </div>

          </form>

          {/* NAVIGATION LINK (Redirect to Sign Up) */}
          <div className="mt-6 text-center text-sm font-sans">
            <span className="text-gray-500">Don't have an account? </span>
            <Link
              to="/signup"
              className="font-bold text-[#ff7800] hover:underline focus:outline-none"
            >
              Sign up
            </Link>
          </div>

          {/* SOCIAL AUTHENTICATION SECTION */}
          <div className="mt-6">
            
            {/* Divider */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-xs text-gray-400 font-sans">Or with</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* SSO BUTTON STACK */}
            <div className="mt-4 space-y-3">
              
              <button
                type="button"
                className="w-full flex items-center justify-center space-x-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-xl transition-all shadow-sm text-xs sm:text-sm font-sans"
              >
                <FcGoogle size={18} />
                <span>Google</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center space-x-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-xl transition-all shadow-sm text-xs sm:text-sm font-sans"
              >
                <FaFacebookF size={16} className="text-blue-600" />
                <span>Facebook</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center space-x-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-xl transition-all shadow-sm text-xs sm:text-sm font-sans"
              >
                <FiMail size={16} className="text-gray-600" />
                <span>Email</span>
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}