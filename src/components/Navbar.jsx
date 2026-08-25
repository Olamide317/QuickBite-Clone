import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#fafafa]/90 backdrop-blur-md shadow-sm border-b border-gray-200/60 px-6 sm:px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Burger Logo + Split Name */}
        <Link
          to="/"
          onClick={handleLinkClick}
          className="flex items-center space-x-3 group"
        >
          <span className="text-3xl">🍔</span>
          <span className="text-2xl font-extrabold tracking-tight font-heading">
            <span style={{ color: "#ff7800" }}>Quick</span>Bite
          </span>
        </Link>

        {/* Middle Links (Visible on Large screens and up) */}
        <div className="hidden lg:flex space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Restaurants", path: "/restaurants" },
            { name: "Track Order", path: "/track-order" },
          ].map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-1 font-medium transition-colors duration-200 group ${
                  active ? "text-[#ff7800]" : "text-black hover:text-[#ff7800]"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff7800] transition-transform duration-300 origin-left ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right Side Actions (Visible on Large screens and up, Log In link removed) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/vendors"
            className="text-gray-700 font-medium transition-colors duration-200 hover:text-[#ff7800]"
          >
            For Vendors
          </Link>

          <Link
            to="/signup"
            className="text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:brightness-110 active:scale-95 shadow-sm"
            style={{ backgroundColor: "#ff7800" }}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button (Shows on screens smaller than lg) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800 text-3xl focus:outline-none p-1 transition-transform active:scale-90"
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown Menu Drawer (Shows on screens smaller than lg) */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-4 px-6 flex flex-col space-y-2 animate-fadeIn transform-gpu transition-transform duration-300 ease-out">
          {[
            { name: "Home", path: "/" },
            { name: "Restaurants", path: "/restaurants" },
            { name: "Track Order", path: "/track-order" },
            { name: "For Vendors", path: "/vendors" },
          ].map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleLinkClick}
                className={`font-medium py-2.5 px-3 rounded-xl transition-all duration-200 hover:text-[#ff7800] hover:bg-orange-50/60 hover:pl-4 ${
                  active
                    ? "text-[#ff7800] font-bold bg-orange-50/40"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="pt-3 pb-1 flex flex-col space-y-2">
            <Link
              to="/signup"
              onClick={handleLinkClick}
              className="block text-center text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{ backgroundColor: "#ff7800" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
