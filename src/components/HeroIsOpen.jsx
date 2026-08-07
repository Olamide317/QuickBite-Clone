import { useNavigate } from "react-router-dom";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { FiClock, FiArrowLeft } from "react-icons/fi";
import { TbMotorbike } from "react-icons/tb";

export default function HeroIsOpen() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#F8F9FA]">
      
      {/* TOP COVER BANNER */}
      <div className="relative w-full h-48 sm:h-64 lg:h-72 overflow-hidden bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1400&auto=format&fit=crop" 
          alt="Chicken Republic Fast Food Cover" 
          className="w-full h-full object-cover object-center brightness-90"
        />
        
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Top-left Floating Navigation Button ("← Back") */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 hover:bg-white text-gray-800 font-semibold px-4 py-2 rounded-full shadow-md flex items-center space-x-2 backdrop-blur-sm transition-all text-sm font-sans z-10"
        >
          <FiArrowLeft size={16} />
          <span>Back</span>
        </button>
      </div>

      {/* VENDOR INFO AREA (White Background Container) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative pb-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between">
          
          {/* Left Block: Overlapping Logo + Title + Metrics + Cuisines */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-6 w-full">
            
            {/* Avatar / Logo Badge (Maintains original overlap position) */}
            <div className="relative -mt-14 sm:-mt-16 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-red-600 border-4 border-white shadow-xl overflow-hidden flex items-center justify-center flex-shrink-0 bg-white z-20">
              <img 
                src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=300&auto=format&fit=crop" 
                alt="Chicken Republic Logo" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Vendor Text Details */}
            <div className="pt-2 sm:pt-4 w-full">
              
              {/* Title Row */}
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2B2D42] font-heading tracking-tight">
                  Chicken Republic
                </h1>
                {/* Verified Checkmark Badge Icon */}
                <FaCheckCircle className="text-[#ff7800] text-lg sm:text-xl" title="Verified Vendor" />
              </div>

              {/* Metrics Row (Inline Flex) */}
              <div className="flex flex-wrap items-center gap-y-1 gap-x-5 text-xs sm:text-sm font-medium text-gray-600 mb-2 font-sans">
                
                {/* Rating */}
                <div className="flex items-center space-x-1.5">
                  <FaStar className="text-[#ff7800]" size={14} />
                  <span className="font-bold text-gray-900">4.8</span>
                  <span className="text-gray-400">(500+)</span>
                </div>

                <span className="text-gray-300">•</span>

                {/* Timer */}
                <div className="flex items-center space-x-1.5">
                  <FiClock className="text-gray-400" size={15} />
                  <span>25-35 mins</span>
                </div>

                <span className="text-gray-300">•</span>

                {/* Delivery Fee */}
                <div className="flex items-center space-x-1.5">
                  <TbMotorbike className="text-[#ff7800]" size={16} />
                  <span className="font-semibold text-gray-800">₦1,000 Delivery</span>
                </div>

              </div>

              {/* Cuisine Categories Row */}
              <div className="text-xs sm:text-sm text-gray-500 font-sans font-medium flex items-center space-x-2">
                <span>Fried Chicken</span>
                <span className="text-gray-300">•</span>
                <span>Nigerian</span>
                <span className="text-gray-300">•</span>
                <span>Fast Food</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}