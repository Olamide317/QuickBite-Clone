import { FaStar, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { TbMotorbike, TbPercentage } from "react-icons/tb";
import { MdOutlineFoodBank } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

const testimonials = [
  {
    name: "Sarah A.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "QuickBite is my go-to app! Fast delivery and the food is always delicious.",
  },
  {
    name: "David O.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "This is the best food delivery service in lagos. I love the tracking feature.",
  },
  {
    name: "Mercy J.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    quote: "Great variety of restaurants and amazing customer services.",
  },
];

export default function PromoSection() {
  return (
    // Trimmed vertical padding further from py-8 to py-5
    <section className="bg-[#F8F9FA] py-5 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* LEFT COLUMN: Promotional Banner Container (Super compact padding) */}
          <div 
            className="lg:col-span-4 rounded-3xl p-4 text-white relative overflow-hidden flex flex-col justify-between shadow-xl"
            style={{ backgroundColor: "#ff7800" }}
          >
            {/* Top Subheader */}
            <div className="flex items-center space-x-1.5 text-yellow-300 font-bold text-[10px] tracking-wider uppercase mb-1 font-sans">
              <TbMotorbike className="text-sm" />
              <span>FOOD YOU LOVE, DELIVERED FAST!</span>
            </div>

            {/* Middle Content Area */}
            <div className="relative z-10 my-0.5 flex justify-between items-center">
              <div>
                <div className="relative inline-block">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading leading-none">
                    50% OFF
                  </h2>
                  <HiSparkles className="absolute -top-2 -right-4 text-yellow-300 text-lg animate-pulse" />
                </div>

                <div className="mt-1.5 bg-[#1a1714] text-yellow-300 font-bold text-[9px] px-2 py-0.5 rounded inline-block shadow-sm tracking-wide font-sans">
                  ON YOUR FAVORITE FOOD
                </div>
              </div>

              {/* Right Side Visual Thumbnail */}
              <div className="relative flex flex-col items-center">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop" 
                  alt="Burger and Fries" 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full shadow-md border-2 border-white/80 mb-0.5"
                />
                <div className="bg-[#1a1714] text-yellow-300 text-[8px] font-extrabold px-2 py-0.5 rounded-full border border-yellow-300 tracking-wider uppercase">
                  ORDER NOW
                </div>
              </div>
            </div>

            {/* Bottom Feature Strip */}
            <div className="grid grid-cols-3 gap-1 py-1.5 my-1.5 border-y border-white/20 text-center font-sans">
              <div className="flex flex-col items-center justify-center border-r border-white/20 pr-1">
                <TbPercentage className="text-yellow-300 text-base mb-0.5" />
                <span className="text-[8px] font-semibold leading-tight">50% OFF SITEWIDE</span>
              </div>
              <div className="flex flex-col items-center justify-center border-r border-white/20 px-1">
                <MdOutlineFoodBank className="text-yellow-300 text-base mb-0.5" />
                <span className="text-[8px] font-semibold leading-tight">WIDE RESTAURANTS</span>
              </div>
              <div className="flex flex-col items-center justify-center pl-1">
                <TbMotorbike className="text-yellow-300 text-base mb-0.5" />
                <span className="text-[8px] font-semibold leading-tight">FAST & SAFE DELIVERY</span>
              </div>
            </div>

            {/* Bottom Overlay Pill */}
            <div className="bg-white text-gray-900 rounded-full px-3 py-1 flex items-center space-x-2 shadow-md max-w-[260px] self-center">
              <div className="w-4 h-4 rounded-full bg-[#ff7800] text-white flex items-center justify-center flex-shrink-0 text-[8px]">
                <FaPhoneAlt size={8} />
              </div>
              <p className="text-[9px] font-bold tracking-tight font-sans">
                ORDER ON OUR APP. FAST & DELICIOUS!
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Testimonial Section */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            
            {/* Section Header */}
            <h3 className="text-base sm:text-lg font-bold text-[#2B2D42] font-heading mb-2">
              What Our Customers Say
            </h3>

            {/* Testimonial Cards Horizontal Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 h-full items-stretch">
              {testimonials.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl p-5 border border-gray-100/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* 1. Ratings Icon */}
                    <div className="flex space-x-1 text-[#ff7800] mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                    </div>

                    {/* 2. Testimonial Quote */}
                    <p className="text-gray-600 text-[13px] italic font-sans mb-4 leading-snug">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Profile info block */}
                  <div className="flex items-center space-x-2.5 pt-3">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-9 h-9 rounded-full object-cover shadow-sm border border-gray-200"
                    />
                    <div>
                      {/* 3. Name */}
                      <h4 className="font-bold text-[#2B2D42] text-[12px] font-heading leading-tight">
                        {item.name}
                      </h4>
                      
                      {/* 4. Verified Customer */}
                      <div className="flex items-center space-x-1 text-[10px] text-[#ff7800] font-medium font-sans mt-0.5">
                        <FaCheckCircle size={10} />
                        <span>Verified Customer</span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}