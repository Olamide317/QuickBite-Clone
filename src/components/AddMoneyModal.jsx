import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiCopy, FiCheck, FiShare2, FiArrowLeft } from "react-icons/fi";

export default function AddMoneyModal({ isOpen, onClose, accountNumber }) {
  const [copiedField, setCopiedField] = useState(null);

  if (!isOpen) return null;

  const accountName = "Godfrey Chibuenyim";
  const bankName = "Flutterwave / QuickBite";

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleShare = () => {
    const shareText = `Bank: ${bankName}\nAccount Name: ${accountName}\nAccount Number: ${accountNumber}`;
    if (navigator.share) {
      navigator.share({
        title: "QuickBite Wallet Details",
        text: shareText,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      alert("Account details copied to clipboard!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-fadeIn font-sans">
      
      {/* Top-Left Screen Back Button (Visible when modal is up) */}
      <button
        onClick={onClose}
        className="absolute top-6 left-6 sm:left-12 inline-flex items-center space-x-2 bg-white/90 hover:bg-white text-gray-800 font-semibold px-4 py-2 rounded-full shadow-md transition-all text-sm font-sans z-50"
      >
        <FiArrowLeft size={16} />
        <span>Back</span>
      </button>

      {/* Modal Card Container */}
      <div className="bg-white rounded-[20px] p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
        
        {/* Top Right X Close Button with #ffcc9e background */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-800 transition-all focus:outline-none shadow-xs"
          style={{ backgroundColor: "#ffcc9e" }}
          aria-label="Close modal"
        >
          <IoClose size={18} />
        </button>

        {/* Header Section */}
        <div className="text-center mb-6 pr-8">
          <h3 className="text-xl font-bold text-[#2B2D42] font-heading mb-1">
            Fund your Wallet
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 font-sans">
            Fund your Quickbite wallet account below.
          </p>
        </div>

        {/* Account Details List (Stacked with dividers) */}
        <div className="divide-y divide-gray-100 border-y border-gray-100 mb-8">
          
          {/* Row 1: Account Name */}
          <div className="flex items-center justify-between py-3.5">
            <div>
              <p className="text-[11px] text-gray-400 font-medium font-sans">Account name</p>
              <p className="text-sm font-bold text-[#374151] font-heading">{accountName}</p>
            </div>
            <button
              onClick={() => handleCopy(accountName, "name")}
              className="text-gray-400 hover:text-[#ff7800] p-2 rounded-xl transition-colors"
              title="Copy account name"
            >
              {copiedField === "name" ? <FiCheck size={16} className="text-green-600" /> : <FiCopy size={16} />}
            </button>
          </div>

          {/* Row 2: Bank */}
          <div className="flex items-center justify-between py-3.5">
            <div>
              <p className="text-[11px] text-gray-400 font-medium font-sans">Bank</p>
              <p className="text-sm font-bold text-[#374151] font-heading uppercase">{bankName}</p>
            </div>
            <button
              onClick={() => handleCopy(bankName, "bank")}
              className="text-gray-400 hover:text-[#ff7800] p-2 rounded-xl transition-colors"
              title="Copy bank name"
            >
              {copiedField === "bank" ? <FiCheck size={16} className="text-green-600" /> : <FiCopy size={16} />}
            </button>
          </div>

          {/* Row 3: Account Number */}
          <div className="flex items-center justify-between py-3.5">
            <div>
              <p className="text-[11px] text-gray-400 font-medium font-sans">Account number</p>
              <p className="text-sm font-bold text-[#374151] font-heading font-mono tracking-wider">{accountNumber}</p>
            </div>
            <button
              onClick={() => handleCopy(accountNumber, "number")}
              className="text-gray-400 hover:text-[#ff7800] p-2 rounded-xl transition-colors"
              title="Copy account number"
            >
              {copiedField === "number" ? <FiCheck size={16} className="text-green-600" /> : <FiCopy size={16} />}
            </button>
          </div>

        </div>

        {/* Action Button: Share Account Details */}
        <button
          onClick={handleShare}
          className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 text-sm font-heading"
        >
          <FiShare2 size={16} />
          <span>Share Account Details</span>
        </button>

      </div>
    </div>
  );
}