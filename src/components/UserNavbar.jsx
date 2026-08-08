import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiOutlineShoppingBag, HiChevronDown } from "react-icons/hi";
import { HiOutlineWallet } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

export default function UserNavbar({ cartCount = 0 }) { // <-- Destructure cartCount here!
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [dropdownOpen, setDropdownOpen] = useState(false); // Profile dropdown state
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#fafafa]/90 backdrop-blur-md shadow-sm border-b border-gray-200/60 px-6 sm:px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Side: Burger Logo + Split Name */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-3 group">
          <span className="text-3xl">🍔</span>
          <span className="text-2xl font-extrabold tracking-tight font-heading">
            <span style={{ color: "#ff7800" }}>Quick</span>Bite
          </span>
        </Link>

        {/* Middle Links (Desktop View) */}
        <div className="hidden md:flex space-x-8">
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

        {/* Right Side Utility Navigation Widget (Desktop View) */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* 1. Wallet Balance Badge */}
          <Link 
            to="/wallet" 
            className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200/80 text-[#3A414D] px-3.5 py-1.5 rounded-full transition-colors shadow-sm text-sm font-medium font-sans"
            title="Wallet Balance"
          >
            <HiOutlineWallet size={18} className="text-gray-600" />
            <span className="font-bold text-[#3A414D]">₦0.00</span>
          </Link>

          {/* 2. Shopping Cart Icon */}
          <Link 
            to="/cart" 
            className="text-[#3A414D] hover:text-[#ff7800] transition-colors p-2 rounded-full hover:bg-gray-100 relative flex items-center justify-center" 
          >
            <HiOutlineShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#ff7800] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>

          {/* 3. Points / Currency Abbreviation (GC) */}
          <div className="text-xs font-extrabold text-[#3A414D] tracking-wider px-1.5 font-heading">
            GC
          </div>

          {/* 4. User Profile Avatar & Menu Toggle */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none group p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" 
                alt="User Avatar" 
                className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <HiChevronDown size={14} className={`text-[#3A414D] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-50 animate-fadeIn">
                <Link
                  to="/profile"
                  onClick={handleLinkClick}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff7800] transition-colors font-sans"
                >
                  Account
                </Link>
                <Link
                  to="/wallet"
                  onClick={handleLinkClick}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff7800] transition-colors font-sans"
                >
                  Wallet
                </Link>
                <div className="border-t border-gray-100 my-1" />
                <Link
                  to="/logout"
                  onClick={handleLinkClick}
                  className="block px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-sans font-medium"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>

        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-3 md:hidden">
          <Link to="/wallet" className="flex items-center space-x-1 bg-gray-100 text-[#3A414D] px-2.5 py-1 rounded-full text-xs font-bold">
            <HiOutlineWallet size={14} />
            <span>₦0.00</span>
          </Link>

          <Link to="/cart" className="text-[#3A414D] relative p-1">
            <HiOutlineShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ff7800] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 text-3xl focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-4 px-6 flex flex-col space-y-2 animate-fadeIn">
          {[
            { name: "Home", path: "/" },
            { name: "Restaurants", path: "/restaurants" },
            { name: "Track Order", path: "/track-order" },
            { name: "Account", path: "/profile" },
            { name: "Wallet", path: "/wallet" },
            { name: "Logout", path: "/logout" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={handleLinkClick}
              className={`font-medium py-2.5 px-3 rounded-xl transition-all duration-200 hover:text-[#ff7800] hover:bg-orange-50/60 ${
                item.name === "Logout" ? "text-red-600 hover:bg-red-50" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}