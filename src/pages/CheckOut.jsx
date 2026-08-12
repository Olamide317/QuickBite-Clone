import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiSearch, FiClock, FiCheck, FiCopy } from "react-icons/fi";
import { TbRadar } from "react-icons/tb";
import { BsCreditCard2Front } from "react-icons/bs";
import { HiOutlineWallet } from "react-icons/hi2";
import { FaMoneyBillWave } from "react-icons/fa";
import UserNavbar from "../components/UserNavbar";
import IsCloseFooter from "../components/IsCloseFooter";

export default function CheckOut({ cartItems, totalCartCount, onPlaceOrder, onLogout }) {
    const navigate = useNavigate();
    const hasItems = cartItems.length > 0;

    // Payment method tab state ("card", "wallet", "cash")
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [address, setAddress] = useState("");
    const [saveAddress, setSaveAddress] = useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [cardError, setCardError] = useState("");
    const [expiryError, setExpiryError] = useState("");
    const [cvcError, setCvcError] = useState("");

    // Modal Control States
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [orderCode, setOrderCode] = useState("");
    const [codeCopied, setCodeCopied] = useState(false);

    const subtotal = cartItems.length > 0
        ? cartItems.reduce((acc, item) => {
            const numericPrice = parseInt(item.price.replace(/[^\d]/g, ''), 10);
            return acc + (numericPrice * item.quantity);
        }, 0)
        : 10100;

    const deliveryFee = 1000;
    const serviceCharge = 300;
    const grandTotal = subtotal + deliveryFee + serviceCharge;

    // Step 1: Triggered when "Place order" or "Continue" is clicked
    const handleInitialSubmit = (e) => {
        e.preventDefault();
        if (!hasItems) return;

        if (paymentMethod === "card") {
            let isValid = true;

            const cleanCardNum = cardNumber.replace(/\s+/g, '');
            if (cleanCardNum.length !== 16 || isNaN(cleanCardNum)) {
                setCardError("Invalid card number. Must be exactly 16 digits.");
                isValid = false;
            } else {
                setCardError("");
            }

            const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
            if (!expiryRegex.test(expiry)) {
                setExpiryError("Invalid expiry date. Use MM/YY format (e.g., 08/28).");
                isValid = false;
            } else {
                setExpiryError("");
            }

            if (cvc.length < 3 || cvc.length > 4 || isNaN(cvc)) {
                setCvcError("Invalid CVC. Must be 3 or 4 digits.");
                isValid = false;
            } else {
                setCvcError("");
            }

            if (!isValid) return;
        }

        // Open Modal 1: Confirm Order Dialog
        setShowConfirmModal(true);
    };

    // Step 2: Triggered when user clicks "Confirm" in Modal 1
    const handleFinalConfirmOrder = () => {
        setShowConfirmModal(false);

        // Generate unique reference code
        const generatedCode = `QB${Math.floor(10000000 + Math.random() * 90000000)}`;
        setOrderCode(generatedCode);

        // Execute background cart clearing action
        if (onPlaceOrder) {
            onPlaceOrder();
        }

        // Open Modal 2: Order Confirmed Success Dialog
        setShowSuccessModal(true);
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(orderCode);
        setCodeCopied(true);
        setTimeout(() => setCodeCopied(false), 2000);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans relative">

            {/* Unified User Navbar */}
            <UserNavbar cartCount={totalCartCount} onLogout={onLogout} />

            <main className="flex-grow py-8 px-6 sm:px-12">
                <div className="max-w-7xl mx-auto">

                    {/* Top-Left Back Navigation */}
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#ff7800] font-semibold text-sm transition-colors mb-4"
                    >
                        <FiArrowLeft size={16} />
                        <span>Back</span>
                    </button>

                    {/* Page Title */}
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2B2D42] font-heading mb-8">
                        Checkout
                    </h1>

                    {/* ASYMMETRIC 2-COLUMN INTERFACE */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* LEFT COLUMN: Delivery Address & Payment Form */}
                        <div className="lg:col-span-7 flex flex-col space-y-6">

                            {/* Delivery Address Section */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-[#374151] font-heading">
                                    Delivery Address
                                </h3>

                                <div className="relative">
                                    <FiSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Search your address..."
                                        className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#ff7800] transition-colors shadow-sm"
                                    />
                                </div>

                                <label className="flex items-center space-x-2.5 cursor-pointer pt-1 select-none">
                                    <input
                                        type="checkbox"
                                        checked={saveAddress}
                                        onChange={(e) => setSaveAddress(e.target.checked)}
                                        className="w-4 h-4 text-[#ff7800] border-gray-300 rounded focus:ring-[#ff7800]"
                                    />
                                    <span className="text-xs text-gray-600 font-medium">Save this address for next order</span>
                                </label>
                            </div>

                            {/* Payment Method Section Card */}
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">

                                <h3 className="text-lg font-bold text-[#374151] font-heading">
                                    Payment method
                                </h3>

                                <div className="grid grid-cols-3 gap-2 bg-[#F8F9FA] p-1.5 rounded-2xl border border-gray-200/60">
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod("card")}
                                        className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${paymentMethod === "card" ? "bg-white text-gray-900 shadow-sm border border-gray-200/80" : "text-gray-500 hover:text-gray-800"}`}
                                    >
                                        <BsCreditCard2Front className={paymentMethod === "card" ? "text-[#ff7800]" : "text-gray-400"} />
                                        <span className="truncate">Credit / Debit Card</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod("wallet")}
                                        className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${paymentMethod === "wallet" ? "bg-white text-gray-900 shadow-sm border border-gray-200/80" : "text-gray-500 hover:text-gray-800"}`}
                                    >
                                        <HiOutlineWallet className={paymentMethod === "wallet" ? "text-[#ff7800]" : "text-gray-400"} />
                                        <span className="truncate">Digital Wallet</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod("cash")}
                                        className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${paymentMethod === "cash" ? "bg-white text-gray-900 shadow-sm border border-gray-200/80" : "text-gray-500 hover:text-gray-800"}`}
                                    >
                                        <FaMoneyBillWave className={paymentMethod === "cash" ? "text-[#ff7800]" : "text-gray-400"} />
                                        <span className="truncate">Cash on Delivery</span>
                                    </button>
                                </div>

                                {paymentMethod === "card" ? (
                                    <form onSubmit={handleInitialSubmit} className="space-y-4 pt-2" noValidate>
                                        <div>
                                            <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Card number</label>
                                            <input
                                                type="text"
                                                value={cardNumber}
                                                onChange={(e) => { setCardNumber(e.target.value); if (cardError) setCardError(""); }}
                                                placeholder="1234 5678 9012 3456"
                                                maxLength="19"
                                                className={`w-full bg-[#F8F9FA] border rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-colors ${cardError ? "border-red-500" : "border-gray-200 focus:border-[#ff7800]"}`}
                                            />
                                            {cardError && <p className="text-red-500 text-xs mt-1 font-sans">{cardError}</p>}
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Expiry (MM/YY)</label>
                                                <input
                                                    type="text"
                                                    value={expiry}
                                                    onChange={(e) => { setExpiry(e.target.value); if (expiryError) setExpiryError(""); }}
                                                    placeholder="MM/YY"
                                                    maxLength="5"
                                                    className={`w-full bg-[#F8F9FA] border rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-colors ${expiryError ? "border-red-500" : "border-gray-200 focus:border-[#ff7800]"}`}
                                                />
                                                {expiryError && <p className="text-red-500 text-xs mt-1 font-sans">{expiryError}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">CVC</label>
                                                <input
                                                    type="password"
                                                    value={cvc}
                                                    onChange={(e) => { setCvc(e.target.value); if (cvcError) setCvcError(""); }}
                                                    placeholder="123"
                                                    maxLength="4"
                                                    className={`w-full bg-[#F8F9FA] border rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-colors ${cvcError ? "border-red-500" : "border-gray-200 focus:border-[#ff7800]"}`}
                                                />
                                                {cvcError && <p className="text-red-500 text-xs mt-1 font-sans">{cvcError}</p>}
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 rounded-xl transition-all shadow-md font-heading text-sm"
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="py-6 text-center space-y-4">
                                        <p className="text-sm text-gray-500 font-sans">
                                            {paymentMethod === "wallet" ? "You will be charged from your digital QuickBite wallet balance." : "Pay with cash securely upon delivery at your doorstep."}
                                        </p>
                                        <button
                                            onClick={handleInitialSubmit}
                                            className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 rounded-xl transition-all shadow-md font-heading text-sm"
                                        >
                                            Continue
                                        </button>
                                    </div>
                                )}

                            </div>

                        </div>

                        {/* RIGHT COLUMN: Order Summary Sidebar */}
                        <div className="lg:col-span-5 sticky top-24 space-y-6">
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col">
                                <h3 className="text-lg font-bold text-[#374151] font-heading mb-6 pb-3 border-b border-gray-100">
                                    Order Summary
                                </h3>

                                <div className="flex flex-col space-y-3 mb-6 text-sm text-gray-600 max-h-48 overflow-y-auto pr-1">
                                    {hasItems ? (
                                        cartItems.map((item) => {
                                            const itemTotal = parseInt(item.price.replace(/[^\d]/g, ''), 10) * item.quantity;
                                            return (
                                                <div key={item.id} className="flex justify-between items-center pb-2 border-b border-gray-50">
                                                    <span>{item.quantity}x {item.name}</span>
                                                    <span className="font-semibold text-gray-800">₦{itemTotal.toLocaleString()}</span>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <>
                                            <div className="flex justify-between items-center">
                                                <span>2x Refuel Meal</span>
                                                <span className="font-semibold text-gray-800">₦9,600</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>1x ChickWhizz</span>
                                                <span className="font-semibold text-gray-800">₦500</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>1x Chief Burger</span>
                                                <span className="font-semibold text-gray-800">₦500</span>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="flex flex-col space-y-3 mb-6 text-sm text-gray-600 border-t border-gray-100 pt-4">
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

                                    <div className="flex justify-between items-center text-lg font-bold text-[#2B2D42] pt-4 border-t border-gray-100 font-heading">
                                        <span>Total</span>
                                        <span className="text-[#ff7800]">₦{grandTotal.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-3">
                                    <button
                                        onClick={handleInitialSubmit}
                                        disabled={!hasItems}
                                        className="w-full bg-[#ff7800] hover:bg-[#e06a00] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all shadow-md font-heading text-sm"
                                    >
                                        Place order
                                    </button>
                                    <Link to="/restaurants" className="text-center text-gray-500 hover:text-gray-800 font-semibold text-xs transition-colors py-1">
                                        Continue shopping
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>

            {/* MODAL 1: CONFIRM ORDER BACKDROP & DIALOG */}
            {showConfirmModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-fadeIn">
                    <div className="bg-white rounded-[16px] p-14 max-w-md w-full shadow-2xl text-center space-y-6">
                        <h3 className="text-3xl font-bold text-[#2B2D42] font-heading mt-10">
                            Confirm Order
                        </h3>
                        <div className="space-y-3">
                            <button
                                onClick={handleFinalConfirmOrder}
                                className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 rounded-xl shadow-md transition-all font-heading text-sm"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={() => setShowConfirmModal(false)}
                                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 rounded-xl border border-gray-200 transition-all text-sm font-heading"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL 2: ORDER CONFIRMED SUCCESS BACKDROP & DIALOG */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-fadeIn">
                    <div className="bg-white rounded-[24px] p-8 sm:p-10 max-w-md w-full shadow-2xl text-center space-y-6 relative overflow-hidden">
                        
                        {/* Illustration Hero Graphic & Green Checkmark Badge */}
                        <div className="relative w-28 h-28 mx-auto bg-orange-50 rounded-full flex items-center justify-center shadow-inner">
                            <span className="text-5xl">🍔🛵</span>
                            <div className="absolute top-0 right-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow-md border-2 border-white">
                                <FiCheck size={16} />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#2B2D42] font-heading mb-2">
                                Order Confirmed!
                            </h2>
                            <p className="text-xs sm:text-sm text-[#6B7280] font-sans leading-relaxed">
                                Your order has been placed successfully. We'll keep you updated on your order status.
                            </p>
                        </div>

                        {/* Order Reference Code Tag with Copy Button */}
                        <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-xs font-bold font-mono">
                            <span>{orderCode}</span>
                            <button onClick={handleCopyCode} className="text-green-600 hover:text-green-800 p-1" title="Copy code">
                                {codeCopied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                            </button>
                        </div>
                        {codeCopied && <p className="text-[10px] text-green-600 font-sans -mt-4">Copied reference code!</p>}

                        {/* Action Buttons (Vertical Stack) */}
                        <div className="space-y-3 pt-2">
                            <button
                                onClick={() => navigate("/track-order")}
                                className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 rounded-xl transition-all shadow-md font-heading text-sm"
                            >
                                Track Order
                            </button>
                            <button
                                onClick={() => navigate("/restaurants")}
                                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 rounded-xl border border-gray-200 transition-all text-sm font-heading"
                            >
                                Order again
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {/* Unified Footer */}
            <IsCloseFooter />

        </div>
    );
}