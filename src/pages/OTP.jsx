import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiSmartphone, FiArrowLeft } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function OTP({ setIsLoggedIn }) {
  const [channel, setChannel] = useState(null);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [success, setSuccess] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleInputChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  const handleVerify = (e) => {
    e.preventDefault();
    if (!isComplete) return;

    setIsLoggedIn(true);
    setSuccess(true);
    setTimeout(() => {
      // Takes them back exactly to where they registered from
      navigate(-1);
    }, 2000);
  };

  // SUCCESS STATE: Blank page with only logo top-left and "Account created" in center
  if (success) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center font-sans relative">
        <div className="absolute top-6 left-6 sm:left-12">
          <Link to="/home" className="inline-flex items-center space-x-2.5">
            <span className="text-2xl">🍔</span>
            <span className="text-xl sm:text-[20px] font-bold tracking-tight font-heading">
              <span style={{ color: "#ff7800" }}>Quick</span>
              <span className="text-[#2B2D42]">Bite</span>
            </span>
          </Link>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2B2D42] font-heading tracking-tight">
          Account created
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-center py-12 px-6 sm:px-8 font-sans relative">
      
      {/* Top Left Back Arrow Button (Outside modal, bg #ffcc9e) */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 sm:left-12 w-10 h-10 rounded-full flex items-center justify-center text-gray-800 shadow-sm transition-transform active:scale-95"
        style={{ backgroundColor: "#ffcc9e" }}
        aria-label="Go back"
      >
        <FiArrowLeft size={18} />
      </button>

      {/* Top Right X Close Button (Outside modal, bg #ffcc9e) */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 sm:right-12 w-10 h-10 rounded-full flex items-center justify-center text-gray-800 shadow-sm transition-transform active:scale-95"
        style={{ backgroundColor: "#ffcc9e" }}
        aria-label="Close"
      >
        <IoClose size={20} />
      </button>

      {/* CENTERED OTP MODAL CONTAINER */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
        <div className="bg-white py-10 px-6 sm:px-10 shadow-sm rounded-[16px] border border-gray-100 text-center">
          
          {!channel ? (
            /* STEP 1: Choose delivery channel (SMS vs Email) */
            <div className="space-y-6">
              <div>
                <h2 className="text-[22px] font-bold text-[#2B2D42] font-heading mb-2">
                  Verify Your Account
                </h2>
                <p className="text-[13px] sm:text-[14px] text-[#6B7280] font-sans">
                  How would you like to receive your verification code?
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setChannel("sms")}
                  className="flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-gray-200 hover:border-[#ff7800] hover:bg-orange-50/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-[#ff7800] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <FiSmartphone size={22} />
                  </div>
                  <span className="font-bold text-sm text-[#2B2D42] font-heading">Via SMS</span>
                  <span className="text-[11px] text-gray-400">To your phone number</span>
                </button>

                <button
                  type="button"
                  onClick={() => setChannel("email")}
                  className="flex flex-col items-center justify-center p-5 rounded-2xl border-2 border-gray-200 hover:border-[#ff7800] hover:bg-orange-50/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-[#ff7800] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <FiMail size={22} />
                  </div>
                  <span className="font-bold text-sm text-[#2B2D42] font-heading">Via Email</span>
                  <span className="text-[11px] text-gray-400">To your email address</span>
                </button>
              </div>
            </div>
          ) : (
            /* STEP 2: Enter 4-Digit Code Card */
            <form onSubmit={handleVerify} className="space-y-6">
              
              <div>
                <h2 className="text-[22px] font-bold text-[#2B2D42] font-heading mb-1">
                  Enter your OTP
                </h2>
                <p className="text-[13px] sm:text-[14px] text-[#6B7280] font-sans">
                  We've sent a verification code to your {channel === "sms" ? "phone number" : "email address"}.
                </p>
              </div>

              {/* 4-Digit Code Input Fields */}
              <div className="flex justify-center space-x-3 sm:space-x-4 py-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-14 h-14 sm:w-16 sm:h-16 text-center text-xl sm:text-2xl font-bold text-[#2B2D42] bg-[#F8F9FA] border border-[#D1D5DB] rounded-[8px] outline-none focus:border-[#ff7800] focus:ring-2 focus:ring-[#ff7800]/20 transition-all shadow-sm"
                  />
                ))}
              </div>

              {/* Primary Action Button (Inactive / #ffcc9e until 4 digits are complete) */}
              <div>
                <button
                  type="submit"
                  disabled={!isComplete}
                  className={`w-full font-bold py-3.5 rounded-full transition-all shadow-sm font-heading text-sm ${
                    isComplete 
                      ? "bg-[#ff7800] hover:bg-[#e06a00] text-white cursor-pointer shadow-md" 
                      : "bg-[#ffcc9e] text-gray-700 cursor-not-allowed"
                  }`}
                >
                  Verify
                </button>
              </div>

              {/* Resend Option */}
              <div>
                <button
                  type="button"
                  onClick={() => alert("A new verification code has been sent.")}
                  className="text-[13px] sm:text-[14px] font-medium text-[#6B7280] hover:text-[#ff7800] transition-colors focus:outline-none"
                >
                  Resend OTP
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}