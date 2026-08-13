import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

export default function Order({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [note, setNote] = useState("");

  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = parseInt(item.price.replace(/[^\d]/g, ''), 10);
    return acc + (numericPrice * item.quantity);
  }, 0);

  const deliveryFee = 1000;
  const serviceCharge = 300;
  const grandTotal = subtotal + deliveryFee + serviceCharge;
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="w-full bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col font-sans">
      
      {/* 1. HEADER ROW */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
        <h3 className="text-base font-bold text-[#374151] font-heading">
          Your Order ({totalQuantity})
        </h3>
        <button 
          onClick={onClearCart}
          className="text-gray-400 hover:text-red-500 font-medium text-xs transition-colors"
        >
          Clear all
        </button>
      </div>

      {/* 2. ITEMIZED ORDER LIST (Scrollable if items grow) */}
      <div className="flex flex-col space-y-3 mb-4 max-h-48 overflow-y-auto pr-1">
        {cartItems.map((item) => {
          const itemTotal = parseInt(item.price.replace(/[^\d]/g, ''), 10) * item.quantity;
          
          return (
            <div key={item.id} className="flex items-start justify-between pb-3 border-b border-[#E5E7EB] gap-3">
              <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-1 border border-gray-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
              </div>

              <div className="grow">
                <div className="flex justify-between items-start mb-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-[#374151] font-heading leading-tight">
                    {item.name}
                  </h4>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    title="Remove item"
                  >
                    <FaTrashAlt size={11} />
                  </button>
                </div>

                <div className="inline-flex items-center bg-[#F3E8DF] rounded-lg px-2 py-0.5 space-x-2.5 text-[#ff7800] font-bold text-xs">
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                    <FaMinus size={8} />
                  </button>
                  <span className="text-[#374151]">{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                    <FaPlus size={8} />
                  </button>
                </div>
              </div>

              <div className="text-right self-end">
                <span className="text-xs sm:text-sm font-bold text-[#374151] font-heading">
                  ₦{itemTotal.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. SPECIAL INSTRUCTIONS INPUT */}
      <div className="mb-4">
        <label className="block text-xs font-bold text-[#374151] mb-1 font-heading">
          Add a note for restaurant
        </label>
        <input 
          type="text" 
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="E.g. No onions, please" 
          className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800]"
        />
      </div>

      {/* 4. FINANCIAL BREAKDOWN */}
      <div className="flex flex-col space-y-1.5 mb-4 text-xs text-gray-600 border-t border-gray-100 pt-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium text-gray-800">₦{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery fee</span>
          <span className="font-medium text-gray-800">₦{deliveryFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Service charge</span>
          <span className="font-medium text-gray-800">₦{serviceCharge.toLocaleString()}</span>
        </div>

        <div className="flex justify-between items-center text-sm font-bold text-[#374151] pt-2 border-t border-gray-100 font-heading">
          <span>Total</span>
          <span className="text-base text-[#ff7800]">₦{grandTotal.toLocaleString()}</span>
        </div>
      </div>

      {/* 5. PRIMARY CALL TO ACTION BUTTONS */}
      <div className="flex flex-col space-y-2">
        
        {/* View Cart Button linking to /cart */}
        <Link 
          to="/cart" 
          className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-semibold py-2.5 rounded-lg transition-transform transform-gpu hover:-translate-y-0.5 shadow-sm text-xs sm:text-sm font-heading text-center block"
        >
          View Cart ({totalQuantity})
        </Link>

        {/* Order Now Button linking to /checkout */}
        <Link 
          to="/checkout" 
          className="w-full bg-orange-50 hover:bg-orange-100 text-[#ff7800] border border-[#ff7800]/30 font-semibold py-2.5 rounded-lg transition-transform transform-gpu hover:-translate-y-0.5 text-xs sm:text-sm font-heading text-center block"
        >
          Order Now
        </Link>

      </div>

    </div>
  );
}