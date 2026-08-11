import Navbar from "../components/Navbar";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import RestaurantHero from "../components/RestaurantHero";
import AllRestaurants from "../components/AllRestaurants";

export default function Restaurants({ isLoggedIn, totalCartCount, onLogout }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* Dynamically swap navbar
      {isLoggedIn ? (
        <UserNavbar cartCount={totalCartCount} onLogout={onLogout} />
      ) : (
        <Navbar />
      )} */}

      <main className="flex-grow pb-16">
        <RestaurantHero />
        <AllRestaurants />
      </main>

      {/* <Footer /> */}
    </div>
  );
}