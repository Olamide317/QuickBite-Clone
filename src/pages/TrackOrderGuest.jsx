import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPackage, FiArrowRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function TrackOrderGuest() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FA] sm:bg-[#F8F9FA] flex flex-col justify-between font-sans">
      
      {/* Standard Public Navbar Component */}
      <Navbar />

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