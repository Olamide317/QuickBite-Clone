import UserNavbar from "../components/UserNavbar";
import HeroIsOpen from "../components/HeroIsOpen";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function IsOpen({ cartItems, onAddToCart, onUpdateQuantity, onRemoveItem, onClearCart, totalCartCount }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">

      {/* Logged-In User Header */}
      <UserNavbar cartCount={totalCartCount} />

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

      {/* Footer */}
      <Footer />

    </div>
  );
}