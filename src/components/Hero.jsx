import { FiSearch, FiMapPin, FiClock } from "react-icons/fi";
import { TbMotorbike, TbRadar } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative bg-[#1a1714] text-white overflow-hidden">

            {/* Main Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[60vh] relative">

                {/* MOBILE BACKGROUND IMAGE (Visible on small screens, hidden on lg screens) */}
                <div className="absolute inset-0 lg:hidden z-0">
                    <img
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
                        alt="Deluxe cheeseburger background"
                        className="w-full h-full object-cover object-center brightness-110 contrast-125 saturate-125"
                    />
                    {/* Dark overlay for contrast */}
                    <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
                </div>

                {/* LEFT COLUMN: Text Content & Search */}
                <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-8 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 z-10 bg-transparent lg:bg-[#1a1714]/90 backdrop-blur-sm">

                    {/* Pill-shaped Badge / Eyebrow Tag */}
                    <div className="inline-block self-start bg-[#3D1B18]/90 border border-[#6E2E25] rounded-full px-4 py-1.5 mb-4 shadow-inner">
                        <span className="text-[#ff7800] font-bold tracking-wider px-3.5 text-xs uppercase font-sans">
                            Fastest Delivery
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 tracking-tight leading-tight mb-2 animate-fadeIn">
                        Fast Delivery Of <br />
                        <span className="text-[#ff7800]">Your Favorite Meals</span>
                    </h1>

                    {/* Sub-headline description */}
                    <p className="text-gray-200 lg:text-gray-400 text-sm sm:text-base max-w-lg mb-8 animate-fadeIn">
                        Order delicious meals from your favorite restaurants and get them delivered fast to your doorstep.
                    </p>

                    {/* Search and Location Bar (Call to Action) */}
                    <div className="bg-white rounded-2xl p-2 shadow-xl flex flex-col sm:flex-row items-center gap-2 max-w-xl mb-8 animate-fadeIn">

                        {/* Search Input Side */}
                        <div className="flex items-center space-x-3 px-3 py-1.5 w-full sm:w-1/2">
                            <FiSearch className="text-gray-400 text-lg flex-shrink-0" />
                            <input
                                type="text"
                                placeholder="Search for restaurants or meals"
                                className="w-full text-gray-800 placeholder-gray-400 bg-transparent outline-none text-sm font-medium"
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden sm:block w-[1px] h-6 bg-gray-200" />

                        {/* Location Selector Side */}
                        <div className="flex items-center justify-between w-full sm:w-auto px-3 py-1.5 sm:px-3">
                            <div className="flex items-center space-x-2">
                                <FiMapPin className="text-[#ff7800] text-base flex-shrink-0" />
                                <span className="text-gray-700 text-sm font-medium whitespace-nowrap">Location</span>
                            </div>
                            <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>

                        {/* Sign Up Action Button */}
                        <Link
                            to="/signup"
                            className="w-full sm:w-auto text-center bg-[#ff7800] hover:bg-[#e06a00] text-white font-semibold px-6 py-2.5 rounded-xl transition-all shadow-md whitespace-nowrap text-sm"
                        >
                            Sign up
                        </Link>

                    </div>

                    {/* Feature List (3 horizontal icons) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-600/60 lg:border-gray-800/80 max-w-2xl">

                        {/* Feature 1 */}
                        <div className="flex items-center space-x-3">
                            <div className="text-[#ff7800] bg-[#ff7800]/15 lg:bg-[#ff7800]/10 p-2.5 rounded-xl">
                                <TbMotorbike size={20} />
                            </div>
                            <div>
                                <p className="text-[11px] text-gray-200 lg:text-gray-400 font-medium">Free Delivery</p>
                                <p className="text-xs font-bold text-white lg:text-gray-200">On orders over N10,000</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center space-x-3">
                            <div className="text-[#ff7800] bg-[#ff7800]/15 lg:bg-[#ff7800]/10 p-2.5 rounded-xl">
                                <FiClock size={20} />
                            </div>
                            <div>
                                <p className="text-[11px] text-gray-200 lg:text-gray-400 font-medium">30 Min Delivery</p>
                                <p className="text-xs font-bold text-white lg:text-gray-200">Fast and reliable</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center space-x-3">
                            <div className="text-[#ff7800] bg-[#ff7800]/15 lg:bg-[#ff7800]/10 p-2.5 rounded-xl">
                                <TbRadar size={20} />
                            </div>
                            <div>
                                <p className="text-[11px] text-gray-200 lg:text-gray-400 font-medium">Live Tracking</p>
                                <p className="text-xs font-bold text-white lg:text-gray-200">Track your order live</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* DESKTOP RIGHT COLUMN IMAGE (Visible only on lg screens and up) */}
                <div className="hidden lg:block lg:col-span-5 xl:col-span-5 2xl:col-span-4 relative min-h-[400px] z-10">
                    <img
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
                        alt="Deluxe cheeseburger and french fries"
                        className="absolute inset-0 w-full h-full object-cover object-center brightness-110 contrast-125 saturate-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a1714] via-transparent to-black/10" />
                </div>

            </div>

        </section>
    );
}