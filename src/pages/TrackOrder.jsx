import { useState } from "react";
import { Link } from "react-router-dom";
import { FiClock, FiCheckCircle, FiPackage, FiHome, FiSearch } from "react-icons/fi";
import { TbMotorbike } from "react-icons/tb";

export default function TrackOrder({ cartItems = [], orderId: initialOrderId = "" }) {
  const [orderIdInput, setOrderIdInput] = useState("");
  const [orderId, setOrderId] = useState(initialOrderId);

  const handleSearchOrder = (e) => {
    e.preventDefault();
    if (!orderIdInput.trim()) return;
    setOrderId(orderIdInput.toUpperCase());
  };

  const hasOrder = cartItems.length > 0 && Boolean(orderId);
  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = parseInt(item.price.replace(/[^\d]/g, ''), 10);
    return acc + (numericPrice * item.quantity);
  }, 0);

  const deliveryFee = 500;
  const serviceCharge = 300;
  const grandTotal = subtotal + deliveryFee + serviceCharge;

  return (
    <div className="py-10 px-6 sm:px-12 font-sans w-full">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2B2D42] font-heading mb-2">
            Track Your Order 🛵
          </h1>
          <p className="text-gray-500 text-sm">
            Real-time updates on your delicious meal delivery.
          </p>

          {/* Order ID Lookup Form */}
          {hasOrder && <form onSubmit={handleSearchOrder} className="mt-6 max-w-md mx-auto flex gap-2">
            <div className="relative grow">
              <FiSearch className="absolute left-4 top-3.5 text-gray-400" />
              <input 
                type="text" 
                value={orderIdInput}
                onChange={(e) => setOrderIdInput(e.target.value)}
                placeholder="Enter Order ID (e.g. QB-84920)" 
                className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800] shadow-sm"
              />
            </div>
            <button 
              type="submit"
              className="bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md text-sm font-heading shrink-0"
            >
              Track
            </button>
          </form>}
        </div>

        {hasOrder ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-8">
          
          {/* Top Order Meta Summary */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-gray-100 gap-4">
            <div>
              <span className="text-xs font-bold text-[#ff7800] uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full">
                Active Order
              </span>
              <h2 className="text-xl font-bold text-[#2B2D42] font-heading mt-2">
                Chicken Republic
              </h2>
              <p className="text-xs text-gray-400">Order ID: <span className="font-semibold text-gray-700">{orderId}</span></p>
            </div>

            <div className="bg-orange-50/80 border border-orange-100 px-5 py-3 rounded-2xl text-right flex items-center space-x-3">
              <div className="text-[#ff7800]">
                <FiClock size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">Estimated Arrival</p>
                <p className="text-base font-extrabold text-[#2B2D42] font-heading">25-35 mins</p>
              </div>
            </div>
          </div>

          {/* Visual Progress Timeline Tracker */}
          <div className="py-4">
            <h3 className="text-sm font-bold text-[#374151] font-heading mb-6">Delivery Status</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
              
              {/* Step 1: Confirmed */}
              <div className="flex sm:flex-col items-center sm:text-center space-x-4 sm:space-x-0 sm:space-y-3">
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md z-10 shrink-0">
                  <FiCheckCircle size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800 font-heading">Order Confirmed</p>
                  <p className="text-[11px] text-gray-400">Restaurant accepted</p>
                </div>
              </div>

              {/* Step 2: Preparing */}
              <div className="flex sm:flex-col items-center sm:text-center space-x-4 sm:space-x-0 sm:space-y-3">
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md z-10 shrink-0">
                  <FiPackage size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800 font-heading">Preparing Food</p>
                  <p className="text-[11px] text-gray-400">Kitchen is cooking</p>
                </div>
              </div>

              {/* Step 3: On the way */}
              <div className="flex sm:flex-col items-center sm:text-center space-x-4 sm:space-x-0 sm:space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#ff7800] text-white flex items-center justify-center shadow-md z-10 shrink-0 animate-pulse">
                  <TbMotorbike size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#ff7800] font-heading">On the Way</p>
                  <p className="text-[11px] text-gray-400">Rider is heading to you</p>
                </div>
              </div>

              {/* Step 4: Delivered */}
              <div className="flex sm:flex-col items-center sm:text-center space-x-4 sm:space-x-0 sm:space-y-3 opacity-50">
                <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center z-10 shrink-0">
                  <FiHome size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800 font-heading">Delivered</p>
                  <p className="text-[11px] text-gray-400">Enjoy your meal!</p>
                </div>
              </div>

            </div>
          </div>

          {/* Dynamic Order Breakdown */}
          <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-100 space-y-4">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider font-heading">Order Breakdown</h4>
            
            <div className="space-y-2.5 text-sm text-gray-700 max-h-48 overflow-y-auto pr-1">
              {cartItems.length > 0 ? (
                cartItems.map((item, idx) => {
                  const itemTotal = parseInt(item.price.replace(/[^\d]/g, ''), 10) * item.quantity;
                  return (
                    <div key={idx} className="flex justify-between items-center pb-2 border-b border-gray-200/60">
                      <span>{item.quantity}x {item.name}</span>
                      <span className="font-semibold text-gray-800">₦{itemTotal.toLocaleString()}</span>
                    </div>
                  );
                })
              ) : (
                <p className="text-xs text-gray-400 italic">No recent order checked out yet. Place an order to track it live!</p>
              )}
            </div>

            {/* Financial Totals */}
            <div className="pt-3 border-t border-gray-200 space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery & Service Fee</span>
                <span>₦{(deliveryFee + serviceCharge).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center font-bold text-base text-[#2B2D42] pt-2 border-t border-gray-200 font-heading">
                <span>Total Paid</span>
                <span className="text-[#ff7800]">₦{grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="text-xs text-gray-500 pt-1">
              <span className="font-semibold">Delivery Address:</span> Orogbum, Lagos
            </div>
          </div>

          {/* Action Support Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
            <p className="text-xs text-gray-400">Need help with your delivery? Contact QuickBite support.</p>
            <Link 
              to="/restaurants" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-2.5 rounded-xl transition-all text-xs font-heading"
            >
              Back to Restaurants
            </Link>
          </div>

        </div>
        ) : (
          <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm text-center">
            <h2 className="text-xl font-bold text-[#2B2D42] font-heading">No recent order</h2>
            <p className="text-sm text-gray-500 mt-2">Your order breakdown will appear here after payment is completed.</p>
            <Link to="/restaurants" className="inline-block mt-6 bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold px-6 py-3 rounded-xl text-sm font-heading">
              Browse restaurants
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}