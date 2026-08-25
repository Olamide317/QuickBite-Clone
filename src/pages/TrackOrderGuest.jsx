import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPackage, FiArrowRight } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function TrackOrderGuest() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FA] sm:bg-[#F8F9FA] flex flex-col justify-between font-sans">
      
      {/* TOP NAVIGATION */}
      <header className="bg-white/90 backdrop-blur-md shadow-xs border-b border-gray-200/60 px-6 sm:px-8 py-4 sticky top-0 z-50">
        <div className="max-w-md mx-auto sm:max-w-7xl flex justify-between items-center">
          
          {/* QuickBite Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <span className="text-2xl">🍔</span>
            <span className="text-xl font-bold tracking-tight font-heading">
              <span style={{ color: "#ff7800" }}>Quick</span>
              <span className="text-[#2B2D42]">Bite</span>
            </span>
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 text-2xl focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>

        </div>

        {/* Mobile Dropdown Menu if toggled */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-4 px-6 flex flex-col space-y-3 sm:hidden animate-fadeIn">
            <Link to="/" onClick={() => setMenuOpen(false)} className="font-medium text-gray-700 py-2">Home</Link>
            <Link to="/restaurants" onClick={() => setMenuOpen(false)} className="font-medium text-gray-700 py-2">Restaurants</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)} className="font-medium text-[#ff7800] py-2">Sign Up</Link>
          </div>
        )}
      </header>

      {/* HERO CONTENT CONTAINER (Mobile-first centered onboarding modal style) */}
      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-md flex flex-col items-center text-center lg:bg-white lg:rounded-[28px] lg:p-10 lg:shadow-xl lg:border lg:border-gray-100">
          
          {/* Center-aligned Light Orange Container housing Line-art Package Icon */}
          <div className="w-20 h-20 rounded-3xl bg-orange-50 text-[#ff7800] flex items-center justify-center mb-6 shadow-xs">
            <FiPackage size={36} />
          </div>

          {/* Primary Headline */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2B2D42] font-heading mb-2">
            Track Your Order
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-gray-500 font-sans mb-8 max-w-xs leading-relaxed">
            Sign up to track order or continue as a guest
          </p>

          {/* Call to Action Buttons Stack */}
          <div className="w-full space-y-3">
            
            {/* Primary CTA: Sign Up */}
            <button
              onClick={() => navigate("/signup")}
              className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center space-x-2 text-sm font-heading"
            >
              <span>Sign UP</span>
              <FiArrowRight size={16} />
            </button>

            {/* Secondary CTA: For Vendors */}
            <button
              onClick={() => navigate("/vendors")}
              className="w-full bg-white hover:bg-gray-50 text-[#ff7800] border border-orange-200 font-semibold py-3.5 px-6 rounded-2xl transition-all text-sm font-heading"
            >
              For vendors
            </button>

          </div>

          {/* Text Action Link: Continue as a guest */}
          <div className="mt-6">
            <button
              onClick={() => navigate("/restaurants")}
              className="text-xs sm:text-sm font-medium text-gray-600 hover:text-[#ff7800] transition-colors focus:outline-none"
            >
              Continue as a guest
            </button>
          </div>

        </div>
      </main>

      {/* Simple Footer spacing */}
      <footer className="py-6 text-center text-xs text-gray-400 font-sans">
        © 2026 QuickBite. All rights reserved.
      </footer>

    </div>
  );
}