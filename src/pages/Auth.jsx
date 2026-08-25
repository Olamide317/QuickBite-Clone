import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser, FiPhone, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Auth({ setIsLoggedIn }) {
  const [isSignup] = useState(true); // Default to Sign Up as per prompt
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Redirect to OTP verification screen on successful sign up
      navigate("/otp");
    } else {
      // Log straight in if signing in
      setIsLoggedIn(true);
      alert("Logged in successfully!");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-between font-sans relative">

      {/* 1. TOP NAVIGATION (Logo Only) */}
      <header className="bg-white/90 backdrop-blur-md shadow-xs border-b border-gray-200/60 px-6 sm:px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-start">
          
          {/* QuickBite Logo */}
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
          type="button"
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-[#ffd6b1] hover:bg-orange-200 text-gray-700 flex items-center justify-center transition-all shadow-sm border border-gray-200/60 focus:outline-none"
          aria-label="Go back"
        >
          <FiArrowLeft size={18} />
        </button>
      </div>

      <div className="absolute top-24 right-6 sm:right-10 z-20 lg:hidden">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-10 h-10 rounded-full bg-[#ffd6b1] hover:bg-orange-200 text-gray-700 flex items-center justify-center transition-all shadow-sm border border-gray-200/60 focus:outline-none"
          aria-label="Close"
        >
          <IoClose size={20} />
        </button>
      </div>

      {/* CENTERED REGISTRATION CARD CONTAINER */}
      <main className="flex-grow flex items-center justify-center px-6 sm:px-8 py-12 mb-12">
        <div className="bg-transparent md:bg-white w-full max-w-md md:rounded-[28px] md:p-10 md:shadow-xl md:border border-gray-100 flex flex-col">

          {/* HEADER AREA */}
          <div className="text-center mb-6 order-0">
            <h2 className="text-[22px] font-bold text-[#2B2D42] font-heading mb-1">
              {isSignup ? "Create your account" : "Welcome back"}
            </h2>
            <p className="text-[13px] sm:text-[14px] text-[#6B7280] font-sans">
              {isSignup ? "Create your account or Continue with Google" : "Sign in to access your account"}
            </p>
          </div>

          {/* REGISTRATION FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 order-1">

            {isSignup && (
              <div>
                <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">
                  Full name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder="Full name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800] transition-colors shadow-xs"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">
                Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-3.5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800] transition-colors shadow-xs"
                />
              </div>
            </div>

            {isSignup && (
              <div>
                <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">
                  Phone number
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-4 top-3.5 text-gray-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="Phone no."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800] transition-colors shadow-xs"
                  />
                </div>
              </div>
            )}

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
                  placeholder="At least 8 characters"
                  minLength="8"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800] transition-colors shadow-xs"
                />
              </div>
            </div>

            {isSignup && (
              <div>
                <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">
                  Confirm Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-4 top-3.5 text-gray-400" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm Password"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800] transition-colors shadow-xs"
                  />
                </div>
              </div>
            )}

            {/* PRIMARY FORM ACTION - ONLY VISIBLE ON LG AND ABOVE */}
            <div className="pt-2 hidden lg:block">
              <button
                type="submit"
                className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 rounded-lg transition-all shadow-md font-heading text-sm"
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </button>
            </div>

          </form>

          {/* NAVIGATION REDIRECT */}
          <div className="mt-6 text-center text-sm font-sans order-2">
            <span className="text-gray-500">
              {isSignup ? "Already have an account? " : "Don't have an account? "}
            </span>
            <button
              type="button"
              onClick={() => navigate(isSignup ? "/login" : "/signup")}
              className="font-bold text-[#ff7800] hover:underline focus:outline-none"
            >
              {isSignup ? "Sign in" : "Sign up"}
            </button>
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
              onClick={handleSubmit}
              className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md font-heading text-sm flex items-center justify-center space-x-2"
            >
              <span>{isSignup ? "Sign Up" : "Sign In"}</span>
              <FiArrowRight size={16} />
            </button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}