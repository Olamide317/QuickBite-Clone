import { FiSearch, FiMapPin } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function RestaurantHero() {
  return (
    <section className="relative overflow-hidden text-white" style={{ backgroundColor: "#ff7800" }}>
      
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[36vh] relative">

        {/* MOBILE BACKGROUND IMAGE (Visible on small screens, hidden on lg screens) */}
        <div className="absolute inset-0 lg:hidden z-0">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
            alt="Gourmet cheeseburger background"
            className="w-full h-full object-cover object-center brightness-105 contrast-115"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>
        
        {/* LEFT COLUMN: Typography, Discount Graphics & Interactive Search Bar */}
        <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-8 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 z-10 bg-transparent lg:bg-transparent backdrop-blur-sm">
          
          <div className="flex items-center space-x-3 mb-1">
            <div className="relative inline-flex items-baseline">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-none">
                50%
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-300 ml-2 tracking-wide font-heading">
                OFF
              </span>
              <HiSparkles className="absolute -top-3 -right-6 text-yellow-300 text-xl animate-pulse" />
            </div>
          </div>

          {/* Ribbon Banner */}
          <div className="mt-1 mb-8">
            <div className="bg-[#1a1714] text-white font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-md inline-block shadow-md tracking-wider uppercase font-sans">
              ON YOUR FAVORITE FOOD
            </div>
          </div>

          {/* INTERACTIVE SEARCH BAR (Now embedded inside the Left Column) */}
          <div className="bg-white rounded-xl p-2.5 shadow-2xl border border-gray-100 flex flex-col sm:flex-row items-center gap-2 max-w-2xl w-full">
            
            {/* Left Input: Search */}
            <div className="flex items-center space-x-3 px-3 py-2 w-full sm:w-1/2">
              <FiSearch className="text-gray-400 text-lg flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Search for restaurants or meals" 
                className="w-full text-gray-800 placeholder-gray-400 bg-transparent outline-none text-sm font-medium font-sans"
              />
            </div>

            {/* Muted Vertical Divider */}
            <div className="hidden sm:block w-[1px] h-8 bg-gray-200" />

            {/* Middle Dropdown: Location */}
            <div className="flex items-center justify-between w-full sm:w-auto px-3 py-2 sm:px-4">
              <div className="flex items-center space-x-2">
                <FiMapPin className="text-[#ff7800] text-base flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium whitespace-nowrap font-sans">
                  Lagos, Nigeria
                </span>
              </div>
              <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            {/* Right CTA Button: Sign Up */}
            <Link 
              to="/signup" 
              className="w-full sm:w-auto text-center bg-[#ff7800] hover:bg-[#e06a00] text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-md whitespace-nowrap text-sm font-sans"
            >
              Sign up
            </Link>

          </div>

        </div>

        {/* DESKTOP RIGHT COLUMN IMAGE (Visible only on lg screens and up) */}
        <div className="hidden lg:block lg:col-span-5 xl:col-span-5 2xl:col-span-4 relative min-h-[220px] lg:min-h-full overflow-hidden flex items-center justify-end">
          
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" 
            alt="Gourmet cheeseburger and french fries" 
            className="absolute inset-0 w-full h-full object-cover object-center brightness-105 contrast-115"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff7800] via-transparent to-black/20 lg:block hidden" />

          <div className="absolute top-4 right-4 z-20">
            <div className="bg-yellow-300 text-gray-900 font-extrabold text-[10px] sm:text-xs px-3.5 py-3 rounded-full border-2 border-white shadow-lg tracking-widest uppercase text-center animate-bounce">
              ORDER NOW
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}