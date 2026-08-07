import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Advert from "./Advert";
import { categoryPills, menuItemsData } from "../data/restaurantData";

export default function IsClosedProducts() {
  const [activeTab, setActiveTab] = useState("Menu");
  const [activePill, setActivePill] = useState("Popular");
  const [showAllMenu, setShowAllMenu] = useState(false);

  // Filter items based on active category pill
  const categoryFiltered = menuItemsData.filter(item => item.category === activePill);

  // Filter hidden items unless "View All Menu" is toggled open
  const filteredItems = categoryFiltered.filter(item => {
    if (!showAllMenu && item.isHiddenByDefault) {
      return false;
    }
    return true;
  });

  return (
    <section className="py-12 w-full bg-[#F8F9FA]">
      <div className="w-full px-6 sm:px-12">
        
        {/* Top Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8 space-x-8 font-heading">
          <button
            onClick={() => setActiveTab("Menu")}
            className={`pb-3 font-bold text-base transition-colors relative ${
              activeTab === "Menu" ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Menu
            {activeTab === "Menu" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff7800]" />}
          </button>
          
          <button
            onClick={() => setActiveTab("About")}
            className={`pb-3 font-bold text-base transition-colors relative ${
              activeTab === "About" ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            About
            {activeTab === "About" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff7800]" />}
          </button>
        </div>

        {activeTab === "About" ? (
          <div className="max-w-2xl mx-auto text-center py-12">
            <h3 className="text-xl sm:text-2xl font-bold text-[#374151] font-heading mb-4">
              About Chicken Republic
            </h3>
            <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
              Chicken Republic is Nigeria's most beloved fast-food fried chicken brand, famous for serving our mouth-watering, freshly prepared, crave-able meals at unbeatable value.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            
            {/* LEFT COLUMN: Menu Feed */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              
              <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
                {categoryPills.map((pill, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActivePill(pill);
                      setShowAllMenu(false); // Reset toggle when switching tabs
                    }}
                    className={`rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap shrink-0 px-5 py-2 ${
                      activePill === pill 
                        ? "bg-[#ff7800] text-white shadow-sm border border-[#ff7800]" 
                        : "bg-[#F8F9FA] text-[#374151] border border-[#D1D5DB]"
                    }`}
                  >
                    {pill}
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-bold text-[#374151] font-heading pt-2">
                {activePill} Items
              </h3>

              <div className="flex flex-col space-y-4">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-[#F8F9FA] rounded-2xl p-4 sm:p-5 border border-gray-200/60 shadow-sm flex items-center justify-between gap-4 opacity-90"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-transparent flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="grow">
                      <h4 className="text-base sm:text-lg font-bold text-[#374151] font-heading mb-1">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6B7280] font-sans mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <span className="text-base font-bold text-[#374151] font-heading">
                        {item.price}
                      </span>
                    </div>

                    {/* GREY & UNRESPONSIVE ADD BUTTON */}
                    <button 
                      disabled
                      className="bg-gray-200 text-gray-400 font-medium text-xs sm:text-sm px-5 py-2.5 rounded-lg whitespace-nowrap shrink-0 cursor-not-allowed"
                    >
                      + Add
                    </button>
                  </div>
                ))}

                {filteredItems.length === 0 && (
                  <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
                    <p className="text-gray-400 font-sans text-sm">No items found in this category.</p>
                  </div>
                )}
              </div>

              {/* RESTORED VIEW ALL MENU / SHOW LESS BUTTON */}
              <div className="pt-4 text-center">
                <button 
                  onClick={() => setShowAllMenu(!showAllMenu)}
                  className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#ff7800] font-semibold text-sm transition-colors py-2.5 px-6 rounded-full bg-white border border-gray-200 shadow-sm"
                >
                  <span>{showAllMenu ? "Show Less" : "View All Menu"}</span>
                  {showAllMenu ? <FiChevronUp /> : <FiChevronDown />}
                </button>
              </div>

              <Advert />

            </div>

            {/* RIGHT COLUMN: Closed Order Sidebar State */}
            <div className="lg:col-span-6 sticky top-24">
              <div className="bg-white rounded-2xl py-12 px-6 border border-gray-100 shadow-sm flex flex-col items-center text-center justify-center min-h-[350px]">
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#374151] font-heading mb-2">
                  Order Close
                </h3>
                <p className="text-sm sm:text-base text-[#6B7280] font-sans">
                  Restaurant is now closed
                </p>

              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}