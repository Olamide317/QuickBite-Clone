import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import TrackOrder from "./pages/TrackOrder";
import RestaurantPage from "./pages/RestaurantPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#fafafa]">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
            <Route path="/restaurants" element={<><Navbar /><Restaurants /><Footer /></>} />
            <Route path="/track-order" element={<><Navbar /><TrackOrder /><Footer /></>} />
            <Route path="/restaurant/chicken-republic" element={<RestaurantPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;