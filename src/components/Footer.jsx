import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] text-gray-600 pt-12 pb-16 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* TOP SECTION: Navbar-matching Logo + Split Name */}
        <Link to="/" className="flex items-center space-x-3 mb-8 group">
          <span className="text-4xl">🍔</span>
          <span className="text-3xl font-extrabold tracking-tight">
            <span style={{ color: "#ff7800" }}>Quick</span>Bite
          </span>
        </Link>

        {/* Tagline (Increased font size) */}
        <p className="text-gray-500 font-normal text-lg max-w-lg mb-10">
          Joy in every order — delivering happiness to your<br />doorstep.
        </p>

        {/* Social Media Icons Row (Increased size & spacing) */}
        <div className="flex items-center space-x-5 mb-10">
          {[
            { icon: <FaWhatsapp size={22} />, href: "https://whatsapp.com" },
            { icon: <FaInstagram size={22} />, href: "https://instagram.com" },
            { icon: <FaLinkedinIn size={22} />, href: "https://linkedin.com" },
            { icon: <FaXTwitter size={22} />, href: "https://twitter.com" },
            { icon: <FaTiktok size={22} />, href: "https://tiktok.com" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center transition-all duration-200 hover:bg-[#3A414D] hover:text-white hover:scale-110 shadow-sm"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Navigation Links (Increased font size) */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-base text-gray-600 font-medium mb-14">
          <Link to="/faqs" className="hover:text-[#ff7800] transition-colors">FAQs</Link>
          <span className="text-gray-300">•</span>
          <Link to="/blog" className="hover:text-[#ff7800] transition-colors">Blog</Link>
          <span className="text-gray-300">•</span>
          <Link to="/vendors" className="hover:text-[#ff7800] transition-colors">Partner with us</Link>
          <span className="text-gray-300">•</span>
          <Link to="/delete-account" className="hover:text-[#ff7800] transition-colors">Delete Account</Link>
        </div>

        {/* SUBTLE DIVIDER LINE */}
        <div className="w-full h-[1px] bg-gray-200 mb-10" />

        {/* BOTTOM BAR (Two-Column Flex Row, increased font size) */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-base text-gray-500 gap-4">
          
          {/* Left Side: Copyright */}
          <div>
            ©2026 QuickBite. Made with <span className="text-red-500">❤️</span> in Nigeria
          </div>

          {/* Right Side: Policy Links */}
          <div className="flex space-x-8">
            <Link to="/terms" className="hover:text-gray-700 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-gray-700 transition-colors">Privacy</Link>
            <Link to="/refund-policy" className="hover:text-gray-700 transition-colors">Refund Policy</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}