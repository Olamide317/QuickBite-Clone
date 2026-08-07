import RestaurantHero from "../components/RestaurantHero";
import AllRestaurants from "../components/AllRestaurants";

export default function Restaurants() {
  return (
    <div className="bg-[#fafafa] min-h-screen pb-16">
      
      {/* Modular Hero Component */}
      <RestaurantHero />

      {/* Modular Restaurant Listing Grid Component */}
      <AllRestaurants />

    </div>
  );
}