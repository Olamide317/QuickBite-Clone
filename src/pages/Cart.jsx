import UserNavbar from "../components/UserNavbar";
import IsCloseFooter from "../components/IsCloseFooter";
import EmptyCart from "../components/EmptyCart";
import FilledCart from "../components/FilledCart";

export default function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart, totalCartCount }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      <UserNavbar cartCount={totalCartCount} />

      <main className="flex-grow">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <FilledCart 
            cartItems={cartItems}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
            onClearCart={onClearCart}
          />
        )}
      </main>

      <IsCloseFooter />
    </div>
  );
}