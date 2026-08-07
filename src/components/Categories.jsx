import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  GiChickenLeg, 
  GiBowlOfRice, 
  GiNoodles, 
  GiHotMeal, 
  GiKebabSpit, 
  GiIceCreamCone, 
  GiPizzaSlice, 
  GiCroissant, 
  GiShrimp, 
  GiHamburger, 
  GiDonut, 
  GiCakeSlice 
} from "react-icons/gi";
import { FiArrowRight } from "react-icons/fi";

const categoriesData = [
  { name: "Chicken", icon: <GiChickenLeg className="text-amber-600 text-2xl sm:text-3xl" />, path: "/categories/chicken" },
  { name: "Jollof", icon: <GiBowlOfRice className="text-orange-500 text-2xl sm:text-3xl" />, path: "/categories/jollof" },
  { name: "Pasta", icon: <GiNoodles className="text-yellow-600 text-2xl sm:text-3xl" />, path: "/categories/pasta" },
  { name: "Local food", icon: <GiHotMeal className="text-red-600 text-2xl sm:text-3xl" />, path: "/categories/local-food" },
  { name: "Shawarma", icon: <GiKebabSpit className="text-amber-700 text-2xl sm:text-3xl" />, path: "/categories/shawarma" },
  { name: "Ice cream", icon: <GiIceCreamCone className="text-pink-500 text-2xl sm:text-3xl" />, path: "/categories/ice-cream" },
  { name: "Pizza", icon: <GiPizzaSlice className="text-orange-600 text-2xl sm:text-3xl" />, path: "/categories/pizza" },
  { name: "Breakfast", icon: <GiCroissant className="text-yellow-700 text-2xl sm:text-3xl" />, path: "/categories/breakfast" },
  { name: "Sea Food", icon: <GiShrimp className="text-rose-500 text-3xl" />, path: "/categories/sea-food" },
  { name: "Burgers", icon: <GiHamburger className="text-amber-800 text-2xl sm:text-3xl" />, path: "/categories/burgers" },
  { name: "Snacks", icon: <GiDonut className="text-purple-500 text-2xl sm:text-3xl" />, path: "/categories/snacks" },
  { name: "Bakery", icon: <GiCakeSlice className="text-orange-400 text-2xl sm:text-3xl" />, path: "/categories/bakery" },
];

export default function Categories() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId;
    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (container) {
          // If it reaches the end, loop back to the start smoothly
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: 180, behavior: 'smooth' });
          }
        }
      }, 3500); 
    };

    startAutoScroll();

    // Pause auto-scroll on mouse enter or touch start so manual user navigation is never interrupted
    const stopScroll = () => clearInterval(intervalId);
    const resumeScroll = () => startAutoScroll();

    container.addEventListener("mouseenter", stopScroll);
    container.addEventListener("mouseleave", resumeScroll);
    container.addEventListener("touchstart", stopScroll, { passive: true });
    container.addEventListener("touchend", resumeScroll);

    return () => {
      clearInterval(intervalId);
      if (container) {
        container.removeEventListener("mouseenter", stopScroll);
        container.removeEventListener("mouseleave", resumeScroll);
        container.removeEventListener("touchstart", stopScroll);
        container.removeEventListener("touchend", resumeScroll);
      }
    };
  }, []);

  return (
    <section className="bg-[#F8F9FA] py-10 sm:py-12 px-4 sm:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER ROW */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-2xl font-bold text-[#2B2D42] font-heading">
            Shop by Categories
          </h2>

          <Link
            to="/categories"
            className="text-[#ff7800] hover:text-[#e06a00] font-semibold text-xs sm:text-base flex items-center space-x-1 group transition-colors"
          >
            <span>View all categories</span>
            <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* MANUALLY & TOUCH SCROLLABLE CONTAINER */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-3 sm:space-x-5 pb-4 pt-2 scrollbar-none scroll-smooth select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categoriesData.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="flex flex-col items-center justify-center min-w-22.5 sm:min-w-28.75 p-3 sm:p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#ff7800]/40 transition-all duration-200 group shrink-0"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center mb-2.5 sm:mb-3 transition-all duration-200 group-hover:scale-110">
                {category.icon}
              </div>
              <span className="text-[11px] sm:text-sm font-medium text-[#6C757D] group-hover:text-[#2B2D42] transition-colors whitespace-nowrap font-sans">
                {category.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}