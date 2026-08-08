import { Link } from "react-router-dom";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { HiOutlineWallet } from "react-icons/hi2";
import { TbRadar } from "react-icons/tb";

export default function FilledCart({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {

  // Calculations including service charge
  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = parseInt(item.price.replace(/[^\d]/g, ''), 10);
    return acc + (numericPrice * item.quantity);
  }, 0);

  const deliveryFee = 1000;
  const serviceCharge = 300;
  const grandTotal = subtotal + deliveryFee + serviceCharge;
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const walletBalance = 0;
  const neededBalance = Math.max(0, grandTotal - walletBalance);

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-8 px-6 sm:px-12 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* TOP NAVIGATION & SCREEN HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-1">

          <div>
            {/* Top-Left Navigation */}
            <Link
              to="/restaurants"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#ff7800] font-semibold text-sm transition-colors mb-3"
            >
              <FiArrowLeft size={16} />
              <span>Back</span>
            </Link>

            {/* Header Row */}
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-extrabold text-[#2B2D42] font-heading">
                Your Cart
              </h1>
              <span className="bg-[#F3E8DF] text-[#ff7800] text-xs font-bold px-3 py-1 rounded-full">
                {totalQuantity} Items
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              Review your items and proceed to checkout
            </p>
          </div>

          {/* Top-Right Header Widget (Wallet Balance Pill) */}
          <div className="bg-white border border-gray-200/80 rounded-full px-5 py-2.5 flex items-center space-x-2.5 shadow-sm self-start sm:self-auto">
            <HiOutlineWallet className="text-[#ff7800] text-lg" />
            <span className="text-xs font-medium text-gray-600">Wallet</span>
            <span className="font-bold text-gray-900 text-sm">₦{walletBalance.toLocaleString()}.00</span>
          </div>

        </div>

        {/* ASYMMETRIC 2-COLUMN PAGE LAYOUT (65% Left, 35% Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: Itemized Cart Table (7 Cols / ~65%) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">

            {/* Header Action: Clear Cart */}
            <div className="flex justify-end">
              <button
                onClick={onClearCart}
                className="inline-flex items-center space-x-1.5 text-orange-400 hover:text-red-500 font-semibold text-xs transition-colors px-4 py-2 "
              >
                <FaTrashAlt size={19} />
                <span>Clear Cart</span>
              </button>
            </div>

            {/* Cart Rows Stack (Each item on its own separate card) */}
            <div className="flex flex-col space-y-4">
              {cartItems.map((item) => {
                const itemTotal = parseInt(item.price.replace(/[^\d]/g, ''), 10) * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center justify-between gap-4"
                  >

                    {/* 1. Thumbnail */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center p-2 border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>

                    {/* 2. Name & Description */}
                    <div className="grow max-w-[150px] sm:max-w-xs">
                      <h4 className="text-sm sm:text-base font-bold text-[#374151] font-heading mb-1">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#6B7280] font-sans line-clamp-1">
                        {item.description}
                      </p>
                    </div>

                    {/* 3. Stepper Control (- Qty +) */}
                    <div className="inline-flex items-center bg-[#F3E8DF] rounded-xl px-3 py-1.5 space-x-3 text-[#ff7800] font-bold text-xs shrink-0">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                        <FaMinus size={9} />
                      </button>
                      <span className="text-[#374151]">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                        <FaPlus size={9} />
                      </button>
                    </div>

                    {/* 4. Price & Trash Delete Icon */}
                    <div className="flex items-center space-x-4 shrink-0">
                      <span className="text-sm sm:text-base font-bold text-[#374151] font-heading">
                        ₦{itemTotal.toLocaleString()}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors p-1"
                        title="Remove item"
                      >
                        <FaTrashAlt size={14} />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN: Price Details & Payment Panel (5 Cols / ~35%) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col">

              <h3 className="text-lg font-bold text-[#374151] font-heading mb-6 pb-3 border-b border-gray-100">
                Price details
              </h3>

              {/* Fee Breakdown Lines (Includes ₦300 Service Charge) */}
              <div className="flex flex-col space-y-3 mb-6 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-800">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-medium text-gray-800">₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Charge</span>
                  <span className="font-medium text-gray-800">₦{serviceCharge.toLocaleString()}</span>
                </div>

                {/* Total Row */}
                <div className="flex justify-between items-center text-lg font-extrabold text-[#2B2D42] pt-4 border-t border-gray-100 font-heading">
                  <span>Total</span>
                  <span className="text-[#ff7800]">₦{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Payment Method Notice Card */}
              <div className="bg-[#F8F9FA] border border-gray-200/70 rounded-2xl p-4 mb-6 text-xs space-y-2">
                <div className="flex items-center space-x-2 font-bold text-gray-800 font-heading">
                  <HiOutlineWallet className="text-[#ff7800]" size={16} />
                  <span>Wallet balance (₦{walletBalance.toLocaleString()}.00)</span>
                </div>
                <p className="text-gray-500">
                  Add ₦{neededBalance.toLocaleString()} to pay with wallet.{" "}
                  <Link to="/wallet" className="text-[#ff7800] font-semibold hover:underline">
                    Top up wallet
                  </Link>
                </p>
              </div>

              {/* Action Buttons (Stacked) */}
              <div className="flex flex-col space-y-3">
                <Link
                  to="/checkout"
                  className="w-full block text-center bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 rounded-xl transition-all shadow-md font-heading text-sm"
                >
                  Checkout
                </Link>
                <Link
                  to="/restaurants"
                  className="text-center text-gray-500 hover:text-gray-800 font-semibold text-xs transition-colors py-1"
                >
                  Continue shopping
                </Link>
              </div>

            </div>

            {/* Bottom Value Proposition Indicators (Each in its own separate container card) */}
            <div className="grid grid-cols-2 gap-4 pt-2">

              <div className="p-4 flex items-center space-x-3">
                <div className="text-[#ff7800] bg-orange-50 p-2.5 rounded-xl">
                  <FiClock size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800 font-heading">25 mins Delivery</p>
                  <p className="text-[10px] text-gray-400 font-sans">Fast and reliable</p>
                </div>
              </div>

              <div className="p-4 flex items-center space-x-3">
                <div className="text-[#ff7800] bg-orange-50 p-2.5 rounded-xl">
                  <TbRadar size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800 font-heading">Live Tracking</p>
                  <p className="text-[10px] text-gray-400 font-sans">Track your order live</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}