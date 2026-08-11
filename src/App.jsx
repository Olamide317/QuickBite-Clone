import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserNavbar from "./components/UserNavbar";
import Footer from "./components/Footer";
import IsCloseFooter from "./components/IsCloseFooter";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import TrackOrder from "./pages/TrackOrder";
import RestaurantPage from "./pages/RestaurantPage";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Account from "./pages/Account";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // Auth state tracker
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // GLOBAL CART STATE
  const [cartItems, setCartItems] = useState([]);

  // Store the last successfully checked-out order for tracking view
  const [completedOrder, setCompletedOrder] = useState([]);
  const [completedOrderId, setCompletedOrderId] = useState("");

  // Handles Users Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    window.location.href = "/"; // Force clean reload back to home as a guest
  };

  // Called when payment/checkout is successfully submitted
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    setCompletedOrder(cartItems.map(item => ({ ...item })));
    setCompletedOrderId(`QB-${Date.now().toString().slice(-6)}`);
    setCartItems([]);
  };

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

  // Dynamic Navigation wrapper component
  const ActiveNavbar = () => isLoggedIn ? (
    <UserNavbar cartCount={totalCartCount} onLogout={handleLogout} />
  ) : <Navbar />;

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#fafafa]">
        <main className="flex-grow">
          <Routes>
            {/* Home Page with Dynamic Navbar */}
            <Route path="/" element={<><ActiveNavbar /><Home /><Footer /></>} />

            {/* Restaurants Page with Dynamic Navbar */}
            <Route
              path="/restaurants"
              element={
                <>
                  <ActiveNavbar />
                  <Restaurants
                    isLoggedIn={isLoggedIn}
                    totalCartCount={totalCartCount}
                    onLogout={handleLogout}
                  />
                  <Footer />
                </>
              }
            />

            {/* Restaurant Page (IsOpen / IsClose handles its own internal navbar check) */}
            <Route
              path="/restaurant/chicken-republic"
              element={
                <RestaurantPage
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  cartItems={cartItems}
                  onAddToCart={handleAddToCart}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                  onClearCart={handleClearCart}
                  totalCartCount={totalCartCount}
                  onLogout={handleLogout}
                />
              }
            />

            {/* Cart Page */}
            <Route
              path="/cart"
              element={
                <Cart
                  isLoggedIn={isLoggedIn}
                  cartItems={cartItems}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                  onClearCart={handleClearCart}
                  totalCartCount={totalCartCount}
                  onLogout={handleLogout}
                />
              }
            />

            {/* Check out route (Guarded: redirects to /login if not signed in) */}
            <Route
              path="/checkout"
              element={
                isLoggedIn ? (
                  <CheckOut
                    cartItems={cartItems}
                    totalCartCount={totalCartCount}
                    onPlaceOrder={handlePlaceOrder}
                    onLogout={handleLogout}
                  />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* Track Order Page (Guarded: redirects to /login if not signed in) */}
            <Route
              path="/track-order"
              element={
                isLoggedIn ? (
                  <>
                    <UserNavbar cartCount={totalCartCount} onLogout={handleLogout} />
                    <TrackOrder cartItems={completedOrder} orderId={completedOrderId} />
                    <Footer />
                  </>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* Account Settings Dashboard */}
            <Route
              path="/profile"
              element={
                isLoggedIn ? (
                  <Account totalCartCount={totalCartCount} onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* Auth Routes */}
            <Route path="/signup" element={<Auth setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/otp" element={<OTP setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

App.displayName = "App";
export default App;