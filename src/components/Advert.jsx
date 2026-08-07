import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const popularAdvertRestaurants = [
  {
    title: "Kilimanjaro",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=600&auto=format&fit=crop",
    rating: "4.8",
    reviews: "500+",
    time: "25-35 mins",
    path: "/restaurant/kilimanjaro"
  },
  {
    title: "Asia Town Restaurant",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=600&auto=format&fit=crop",
    rating: "4.8",
    reviews: "500+",
    time: "25-35 mins",
    path: "/restaurant/asia-town"
  },
  {
    title: "KFC",
    image: "https://images.unsplash.com/photo-1513639779879-7cbdcf8fc9c5?q=80&w=600&auto=format&fit=crop",
    rating: "4.8",
    reviews: "500+",
    time: "25-35 mins",
    path: "/restaurant/kfc"
  },
];

export default function Advert() {
  return (
    <div className="mt-12 flex flex-col space-y-8 w-full">
      
      {/* SECTION HEADER */}
      <h3 className="text-2xl font-semibold text-[#2B2D42] font-heading">
        Popular Items
      </h3>

      {/* 3-COLUMN RESTAURANT CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {popularAdvertRestaurants.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="bg-white rounded-2xl p-3 border border-gray-200/70 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-gray-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h4 className="text-base font-bold text-[#2B2D42] group-hover:text-[#ff7800] transition-colors font-heading mb-1.5">
              {item.title}
            </h4>

            {/* Metadata Row */}
            <div className="flex items-center space-x-3 text-xs font-medium text-gray-600 font-sans">
              <div className="flex items-center space-x-1">
                <FaStar className="text-[#ff7800]" size={12} />
                <span className="font-bold text-gray-800">{item.rating}</span>
                <span className="text-gray-400">({item.reviews})</span>
              </div>

              <div className="flex items-center space-x-1">
                <FiClock className="text-gray-400" size={13} />
                <span>{item.time}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* BOTTOM MOBILE APP CTA BANNER */}
      <div className="bg-[#F3E8DF] rounded-xl  p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        
        {/* Left Text Content */}
        <div className="text-center sm:text-left">
          <h4 className="text-xs sm:text-sm font-semibold text-[#2B2D42] font-heading mb-1">
            Download the QuickBite App
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 font-sans">
            Get the best experience on our mobile app
          </p>
        </div>

        {/* Right Button Group (Google Play & Apple Store) */}
        <div className="flex items-center space-x-3 flex-wrap justify-center gap-y-2">
          
          {/* Google Play Button */}
          <a 
            href="https://play.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#2B303A] hover:bg-black text-white px-4 py-2.5 rounded-xl flex items-center space-x-2 transition-all shadow-sm"
          >
            <FaGooglePlay size={18} className="text-green-400" />
            <div className="text-left">
              <p className="text-xs font-bold font-heading">Google Play</p>
            </div>
          </a>

          {/* Apple Store Button */}
          <a 
            href="https://apple.com/app-store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#2B303A] hover:bg-black text-white px-4 py-2.5 rounded-xl flex items-center space-x-2 transition-all shadow-sm"
          >
            <FaApple size={20} className="text-white" />
            <div className="text-left">
              <p className="text-xs font-bold font-heading">Apple Store</p>
            </div>
          </a>

        </div>

      </div>

    </div>
  );
}