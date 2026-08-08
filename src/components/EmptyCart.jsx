import { FiPackage } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="flex items-center justify-center py-16 px-4">
      <div className="bg-white rounded-2xl p-[36px_32px] border border-gray-100 shadow-sm max-w-md w-full flex flex-col items-center text-center">
        
        {/* Icon Badge */}
        <div className="w-14 h-14 rounded-xl bg-[#ff7800]/10 flex items-center justify-center mt-6 mb-5">
          <FiPackage className="text-[#ff7800] text-2xl" />
        </div>

        {/* Header Text */}
        <h2 className="text-[18px] sm:text-[20px] font-bold text-[#2B2D42] font-heading mb-2">
          Your cart is empty
        </h2>

        {/* Subtext */}
        <p className="text-[13px] sm:text-[14px] text-[#6B7280] font-sans mb-8 leading-relaxed">
          Add some delicious items to get started
        </p>

        {/* Call to Action Button */}
        <Link
          to="/restaurants"
          className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-medium text-[14px] py-3 px-6 mb-8 rounded-3xl transition-all shadow-sm font-sans"
        >
          Browse restaurants
        </Link>

      </div>
    </div>
  );
}