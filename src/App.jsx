import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import TrackOrder from "./pages/TrackOrder";
import RestaurantPage from "./pages/RestaurantPage";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // GLOBAL CART STATE
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prevCart =>
      prevCart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#fafafa]">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/restaurants" element={<><Navbar /><Restaurants /><Footer /></>} />
            <Route path="/track-order" element={<><Navbar /><TrackOrder /><Footer /></>} />

            {/* Restaurant Page gets cart props */}
            <Route
              path="/restaurant/chicken-republic"
              element={
                <RestaurantPage
                  cartItems={cartItems}
                  onAddToCart={handleAddToCart}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                  onClearCart={handleClearCart}
                  totalCartCount={totalCartCount}
                />
              }
            />

            {/* Cart Page gets cart props */}
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                  onClearCart={handleClearCart}
                  totalCartCount={totalCartCount}
                />
              }
            />

            {/* Check out route placed properly inside <Routes> */}
            <Route
              path="/checkout"
              element={
                <CheckOut
                  cartItems={cartItems}
                  totalCartCount={totalCartCount}
                />
              }
            />

            <Route path="/signup" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;