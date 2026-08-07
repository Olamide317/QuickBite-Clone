import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiClock, FiChevronDown } from "react-icons/fi";
import { RiVipCrownLine } from "react-icons/ri";

const restaurantsData = [
  {
    title: "Chicken Republic",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop",
    rating: "4.8",
    reviews: "500+",
    time: "25-35 mins",
    promo: "free delivery over ₦10,000",
    path: "/restaurant/chicken-republic"
  },
  {
    title: "Domino's Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    reviews: "700+",
    time: "30-40 mins",
    promo: "free delivery over ₦8,000",
    path: "/restaurant/dominos-pizza"
  },
  {
    title: "Burger King",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    reviews: "600+",
    time: "20-30 mins",
    promo: "free delivery over ₦10,000",
    path: "/restaurant/burger-king"
  },
  {
    title: "Kfc",
    image: "https://images.unsplash.com/photo-1513639779879-7cbdcf8fc9c5?q=80&w=800&auto=format&fit=crop", 
    rating: "4.8",
    reviews: "400+",
    time: "25-35 mins",
    promo: "free delivery over ₦9,000",
    path: "/restaurant/kfc"
  },
];

export default function PopularRestaurants() {
  return (
    <section className="bg-[#F8F9FA] py-10 sm:py-14 px-4 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP FILTER BAR */}
        <div 
          className="flex items-center space-x-2.5 overflow-x-auto pb-3 mb-6 sm:mb-8" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <button className="flex items-center space-x-2 bg-gray-200/80 hover:bg-gray-200 text-[#2B2D42] text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap flex-shrink-0">
            <span>Food types</span>
            <FiChevronDown className="text-gray-500" />
          </button>

          <button className="flex items-center space-x-2 bg-gray-200/80 hover:bg-gray-200 text-[#2B2D42] text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap flex-shrink-0">
            <span>Sort by</span>
            <FiChevronDown className="text-gray-500" />
          </button>

          <button className="flex items-center space-x-2 bg-[#D1E7DD] text-[#0f5132] text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl shadow-sm whitespace-nowrap flex-shrink-0">
            <RiVipCrownLine className="text-[#0f5132] text-base" />
            <span>Top Rated</span>
            <FiChevronDown className="text-[#0f5132]" />
          </button>

          <button className="flex items-center space-x-2 bg-gray-200/80 hover:bg-gray-200 text-[#2B2D42] text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap flex-shrink-0">
            <span>Local</span>
            <FiChevronDown className="text-gray-500" />
          </button>
        </div>

        {/* SECTION HEADER */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-2xl font-bold text-[#2B2D42] font-heading">
            Popular Restaurants
          </h2>
          
          <Link 
            to="/restaurants" 
            className="text-[#ff7800] hover:text-[#e06a00] font-semibold text-xs sm:text-base flex items-center space-x-1 group transition-colors"
          >
            <span>View all restaurants</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* 4-COLUMN RESPONSIVE GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {restaurantsData.map((restaurant, index) => (
            <Link 
              key={index} 
              to={restaurant.path}
              className="bg-white rounded-2xl p-3 border border-gray-200/70 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col"
            >
              <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-3 bg-gray-100">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-base font-bold text-[#2B2D42] group-hover:text-[#ff7800] transition-colors font-heading mb-1.5">
                {restaurant.title}
              </h3>

              <div className="flex items-center space-x-4 text-xs font-medium text-gray-600 mb-3 font-sans">
                <div className="flex items-center space-x-1">
                  <FaStar className="text-[#ff7800] text-xs" />
                  <span className="font-bold text-gray-800">{restaurant.rating}</span>
                  <span className="text-gray-400">({restaurant.reviews})</span>
                </div>

                <div className="flex items-center space-x-1">
                  <FiClock className="text-gray-400 text-sm" />
                  <span>{restaurant.time}</span>
                </div>
              </div>

              <div className="mt-auto pt-2 border-t border-gray-100 text-xs font-semibold text-[#22c55e] font-sans">
                {restaurant.promo}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}