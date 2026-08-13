import { FiMapPin } from "react-icons/fi";
import { TbMotorbike } from "react-icons/tb";

export default function Address() {
  return (
    <div className="w-full bg-[#F3E8DF] rounded-2xl p-4 sm:p-5 shadow-sm mb-6 font-sans">
      
      {/* TOP ROW: Location Details */}
      <div className="flex items-center justify-between mb-4">
        
        <div className="flex items-start space-x-3">
          {/* Orange/Coral location pin marker icon */}
          <div className="mt-0.5">
            <FiMapPin className="text-[#ff7800] text-xl flex-shrink-0" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium leading-none mb-1">
              Delivery to
            </p>
            <h4 className="text-base font-bold text-[#374151] font-heading">
              Orogbum, Lagos
            </h4>
          </div>
        </div>

        {/* Right Action Link */}
        <button className="text-[#ff7800] hover:text-[#e06a00] font-medium text-sm transition-colors">
          Change
        </button>

      </div>

      {/* BOTTOM INSET CARD: Estimated Delivery Time */}
      <div className="bg-[#EAD8CC]/80 rounded-xl px-4 py-3.5 flex items-center justify-between">
        
        {/* Left Text Content */}
        <div>
          <p className="text-xs text-gray-500 font-medium mb-0.5">
            Delivery in
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-[#374151] font-heading">
            25-35 mins
          </h3>
        </div>

        {/* Right Graphic Illustration (Delivery Rider on Scooter with motion trails) */}
        <div className="flex items-center space-x-1.5 select-none">
          {/* Motion cloud trails */}
          <div className="flex flex-col space-y-1 opacity-70">
            <span className="w-2 h-0.5 bg-white rounded-full"></span>
            <span className="w-3 h-0.5 bg-white rounded-full"></span>
            <span className="w-1.5 h-0.5 bg-white rounded-full"></span>
          </div>

          {/* Scooter Icon badge representation */}
          <div className="bg-[#ff7800] text-white p-2.5 rounded-xl shadow-sm flex items-center justify-center">
            <TbMotorbike size={24} />
          </div>
        </div>

      </div>

    </div>
  );
}