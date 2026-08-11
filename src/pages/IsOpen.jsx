import Navbar from "../components/Navbar";
import UserNavbar from "../components/UserNavbar";
import HeroIsOpen from "../components/HeroIsOpen";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function IsOpen({ isLoggedIn, cartItems, onAddToCart, onUpdateQuantity, onRemoveItem, onClearCart, totalCartCount, onLogout }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* Dynamically render UserNavbar if logged in, else public Navbar */}
      {isLoggedIn ? (
        <UserNavbar cartCount={totalCartCount} onLogout={onLogout} />
      ) : (
        <Navbar />
      )}

      {/* Main Content Area */}
      <main className="grow">

        {/* Profile Header Hero Component */}
        <HeroIsOpen />

        {/* Menu Categories & Products Section */}
        <div className="mx-auto px-6 sm:px-12 pb-16">
          {/* Pass cart items and handler to Products */}
          <Products
            cartItems={cartItems}
            onAddToCart={onAddToCart}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
            onClearCart={onClearCart} />
        </div>

      </main>

      <Footer />
    </div>
  );
}