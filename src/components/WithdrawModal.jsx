import { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FiSearch, FiPlus, FiArrowRight, FiArrowLeft, FiCheck, FiChevronDown } from "react-icons/fi";

const popularBanks = [
  "Opay (PAYCOM)",
  "Access Bank",
  "Guaranty Trust Bank (GTB)",
  "Zenith Bank",
  "United Bank for Africa (UBA)",
  "First Bank of Nigeria",
  "Fidelity Bank",
  "Kuda Bank"
];

export default function WithdrawModal({ isOpen, onClose, availableBalance = 0, onSuccessfulTransfer }) {
  const [step, setStep] = useState("list");

  // Transfer Step State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [amount, setAmount] = useState("");

  // Add Recipient Step State
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [resolvedName, setResolvedName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccessState, setIsSuccessState] = useState(false);
  const [toastMessage, setToastMessage] = useState(false);

  // Security PIN State
  const [pin, setPin] = useState(["", "", "", ""]);
  const pinRefs = useRef([]);

  const [recentAccounts, setRecentAccounts] = useState([
    { id: 1, name: "Godfrey Chibuenyim Silas", bank: "Moniepoint Microfinance", accountNumber: "9012345678", logoBg: "bg-blue-600", short: "M" },
    { id: 2, name: "Chibuenyim", bank: "Fidelity Bank", accountNumber: "5123456789", logoBg: "bg-blue-800", short: "F" },
  ]);

  if (!isOpen) return null;

  const filteredAccounts = recentAccounts.filter(acc => 
    acc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    acc.bank.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAccountChange = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setAccountNumber(val);
    setResolvedName("");
    setErrorMessage("");

    if (val.length === 10) {
      // Check if recipient account number already exists in recent list
      const isDuplicate = recentAccounts.some(acc => acc.accountNumber === val);
      if (isDuplicate) {
        setErrorMessage("Recipient already exists");
        return;
      }

      // Mock bank resolution check
      if (val === "1234567891" || val === "0123456789") {
        setResolvedName("GODFREY CHIBUENYIM SILAS");
        setErrorMessage("");
      } else {
        setErrorMessage("Account number not found");
      }
    }
  };

  const handleAddOrDone = () => {
    if (isSuccessState) {
      const newRec = {
        id: Date.now(),
        name: resolvedName.split(" ")[0] || "Recipient",
        bank: selectedBank,
        accountNumber: accountNumber,
        logoBg: "bg-[#ff7800]",
        short: resolvedName.charAt(0) || "R"
      };
      setRecentAccounts(prev => [...prev, newRec]);
      
      setIsSuccessState(false);
      setAccountNumber("");
      setSelectedBank("");
      setResolvedName("");
      setStep("list");
      return;
    }

    if (resolvedName && accountNumber.length === 10 && selectedBank) {
      setIsSuccessState(true);
      setToastMessage(true);
      setTimeout(() => setToastMessage(false), 3000);
    }
  };

  const handlePinChange = (value, index) => {
    if (isNaN(value)) return;
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      pinRefs.current[index + 1].focus();
    }

    if (newPin.every(digit => digit !== "")) {
      setTimeout(() => {
        setStep("loading");
        setTimeout(() => {
          setStep("success");
          if (onSuccessfulTransfer) {
            onSuccessfulTransfer(parseFloat(amount), selectedRecipient);
          }
        }, 2000);
      }, 300);
    }
  };

  const handlePinKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      pinRefs.current[index - 1].focus();
    }
  };

  const isFormValid = selectedBank && accountNumber.length === 10 && resolvedName !== "";
  const numericAmount = parseFloat(amount);
  const isAmountValid = !isNaN(numericAmount) && numericAmount > 100;

  // Universal Back button handler for every stage
  const handleBackNavigation = () => {
    if (step === "transfer-amount") {
      setSelectedRecipient(null);
      setStep("list");
    } else if (step === "add-recipient") {
      setStep("list");
    } else if (step === "pin-entry") {
      setStep("transfer-amount");
    } else if (step === "success") {
      setStep("pin-entry");
    } else {
      onClose();
    }
  };

  return (
    <>
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center space-x-2 animate-bounce font-sans text-sm font-bold">
          <div className="w-5 h-5 bg-white text-green-600 rounded-full flex items-center justify-center">
            <FiCheck size={12} />
          </div>
          <span>Recipient added successfully</span>
        </div>
      )}

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-fadeIn font-sans">
        
        {/* Top-Left Screen Back Button (Present at every single stage) */}
        {step !== "loading" && (
          <button
            onClick={handleBackNavigation}
            className="absolute top-6 left-6 sm:left-12 inline-flex items-center space-x-2 bg-white/90 hover:bg-white text-gray-800 font-semibold px-4 py-2 rounded-full shadow-md transition-all text-sm font-sans z-50 focus:outline-none"
          >
            <FiArrowLeft size={16} />
            <span>Back</span>
          </button>
        )}

        <div className="bg-white rounded-[24px] p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
          
          {/* Top-Right X Close Button (#ffcc9e background) */}
          {step !== "loading" && (
            <button
              onClick={() => {
                setStep("list");
                setSelectedRecipient(null);
                setPin(["", "", "", ""]);
                onClose();
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-800 transition-all focus:outline-none shadow-xs"
              style={{ backgroundColor: "#ffcc9e" }}
              aria-label="Close modal"
            >
              <IoClose size={18} />
            </button>
          )}

          {/* SCREEN 1: TRANSFER INITIAL VIEW */}
          {step === "list" && (
            <div>
              <div className="text-center mb-6 px-8">
                <h3 className="text-xl font-bold text-[#2B2D42] font-heading mb-1">
                  Transfer
                </h3>
                <p className="text-xs text-gray-500 font-sans">
                  You can only add three (3) account
                </p>
              </div>

              {/* Search & Add Action Bar */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative grow">
                  <FiSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name, number"
                    className={`w-full bg-[#F8F9FA] border rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors ${
                      searchQuery.trim() && filteredAccounts.length === 0 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 focus:border-[#ff7800]"
                    }`}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep("add-recipient")}
                  disabled={recentAccounts.length >= 3}
                  className="bg-[#ff7800] hover:bg-[#e06a00] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md flex items-center space-x-1 shrink-0 font-heading"
                >
                  <FiPlus size={16} />
                  <span>Add new</span>
                </button>
              </div>

              {/* Inline Error / Empty State Notice if search has no match */}
              {searchQuery.trim() && filteredAccounts.length === 0 && (
                <div className="text-center py-6 space-y-4 animate-fadeIn">
                  <p className="text-sm font-bold text-gray-500 font-sans">
                    No result found
                  </p>
                  <button
                    type="button"
                    onClick={() => setStep("add-recipient")}
                    disabled={recentAccounts.length >= 3}
                    className="inline-flex items-center space-x-2 bg-[#ff7800] hover:bg-[#e06a00] disabled:bg-gray-300 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm font-heading"
                  >
                    <FiPlus size={14} />
                    <span>+ Add Recipient</span>
                  </button>
                </div>
              )}

              {/* Recent Accounts Section (Hidden if search empty state is active) */}
              {(!searchQuery.trim() || filteredAccounts.length > 0) && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-heading mb-3">
                    Recent
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {filteredAccounts.map((acc) => (
                      <div 
                        key={acc.id}
                        onClick={() => {
                          setSelectedRecipient(acc);
                          setStep("transfer-amount");
                        }}
                        className="bg-[#F8F9FA] hover:bg-orange-50/50 border border-gray-200/80 hover:border-[#ff7800]/50 rounded-2xl p-3.5 flex flex-col items-center text-center cursor-pointer transition-all shadow-xs"
                      >
                        <div className={`w-10 h-10 rounded-full ${acc.logoBg} text-white font-bold flex items-center justify-center mb-2 shadow-xs text-sm font-heading`}>
                          {acc.short}
                        </div>
                        <p className="text-xs font-bold text-[#374151] font-heading truncate w-full">{acc.name}</p>
                        <p className="text-[10px] text-gray-400 font-sans truncate w-full">{acc.bank}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SCREEN 2: ADD RECIPIENT WORKFLOW */}
          {step === "add-recipient" && (
            <div>
              <div className="text-center mb-6 px-8">
                <h3 className="text-xl font-bold text-[#2B2D42] font-heading mb-1">
                  Add Recipient
                </h3>
                <p className="text-xs text-gray-500 font-sans">
                  Add your details and save
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleAddOrDone(); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Country</label>
                  <div className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 flex items-center space-x-2 select-none opacity-80">
                    <span className="text-lg">🇳🇬</span>
                    <span className="font-semibold">Nigeria</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Bank</label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    required
                    className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#ff7800] transition-colors cursor-pointer"
                  >
                    <option value="" disabled>Select bank</option>
                    {popularBanks.map((bank, index) => (
                      <option key={index} value={bank}>{bank}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Account Number</label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={handleAccountChange}
                    placeholder="Enter account Number"
                    maxLength="10"
                    required
                    className={`w-full bg-[#F8F9FA] border rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors ${
                      errorMessage ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#ff7800]"
                    }`}
                  />

                  {resolvedName && (
                    <div className="mt-2 bg-gray-100 border border-gray-200 text-gray-800 text-xs font-bold px-3 py-2 rounded-xl flex items-center space-x-1.5 animate-fadeIn">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span className="truncate">{resolvedName}</span>
                    </div>
                  )}

                  {errorMessage && (
                    <p className="text-red-500 text-xs mt-1.5 font-sans font-medium">{errorMessage}</p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={!isFormValid && !isSuccessState}
                    className={`w-full font-bold py-3.5 rounded-xl transition-all shadow-md font-heading text-sm ${
                      isFormValid || isSuccessState
                        ? "bg-[#ff7800] hover:bg-[#e06a00] text-white cursor-pointer shadow-md"
                        : "bg-[#ffcc9e]/70 text-gray-500 cursor-not-allowed shadow-none"
                    }`}
                  >
                    {isSuccessState ? "Done" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* SCREEN 3: TRANSFER AMOUNT (Active Input & Insufficient Balance State) */}
          {step === "transfer-amount" && (
            <form onSubmit={(e) => { e.preventDefault(); if (isAmountValid && numericAmount < 1000000) setStep("pin-entry"); }} className="space-y-6">
              
              <div className="text-center mb-2 px-8">
                <h3 className="text-xl font-bold text-[#2B2D42] font-heading mb-1">
                  Transfer
                </h3>
                <p className="text-xs text-gray-500 font-sans">
                  Enter an amount above ₦100
                </p>
              </div>

              {/* Recipient Selection Row */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold text-[#374151] font-heading">Recent</span>
                  <button
                    type="button"
                    onClick={() => setStep("list")}
                    className="text-xs font-semibold text-[#ff7800] hover:underline focus:outline-none"
                  >
                    Add new
                  </button>
                </div>
                
                <div 
                  onClick={() => setStep("list")}
                  className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 flex items-center justify-between cursor-pointer hover:border-[#ff7800] transition-colors"
                >
                  <span className="font-semibold truncate">
                    {selectedRecipient ? `${selectedRecipient.name} - ${selectedRecipient.bank}` : "Select recipient"}
                  </span>
                  <FiChevronDown className="text-gray-500 shrink-0 ml-2" />
                </div>
              </div>

              {/* Amount Entry Field & Insufficient Balance Error */}
              <div>
                <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">
                  Enter amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 font-bold text-gray-500">₦</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    min="101"
                    required
                    className={`w-full bg-[#F8F9FA] border rounded-xl pl-9 pr-4 py-3 text-base font-bold text-gray-800 placeholder-gray-400 outline-none transition-colors ${
                      numericAmount >= 1000000 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-200 focus:border-[#ff7800]"
                    }`}
                  />
                </div>
                <p className="text-[11px] text-gray-400 mt-1">Available balance: ₦{availableBalance.toLocaleString()}.00</p>
                
                {/* Red Validation Error Message for 6 figures (1,000,000+) */}
                {numericAmount >= 1000000 && (
                  <p className="text-red-500 text-xs mt-1.5 font-sans font-medium animate-fadeIn">
                    Insufficient account balance
                  </p>
                )}
              </div>

              {/* Primary Action Button (Locked if amount >= 1,000,000) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!isAmountValid || numericAmount >= 1000000}
                  className={`w-full font-bold py-3.5 px-4 rounded-xl transition-all shadow-md text-sm font-heading ${
                    isAmountValid && numericAmount < 1000000
                      ? "bg-[#ff7800] hover:bg-[#e06a00] text-white cursor-pointer"
                      : "bg-[#ffcc9e]/80 text-gray-500 cursor-not-allowed shadow-none"
                  }`}
                >
                  Continue
                </button>
              </div>

            </form>
          )}

          {/* SCREEN 4: SECURITY PIN ENTRY */}
          {step === "pin-entry" && (
            <div className="text-center space-y-6 py-2">
              <div>
                <h3 className="text-xl font-bold text-[#2B2D42] font-heading mb-1">
                  Pin
                </h3>
                <p className="text-xs text-gray-500 font-sans">
                  Input pin to confirm
                </p>
              </div>

              <div className="flex justify-center space-x-3 py-2">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (pinRefs.current[index] = el)}
                    type="password"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handlePinChange(e.target.value, index)}
                    onKeyDown={(e) => handlePinKeyDown(e, index)}
                    className="w-14 h-14 text-center text-2xl font-bold text-[#2B2D42] bg-[#F8F9FA] border border-[#D1D5DB] rounded-[12px] outline-none focus:border-[#ff7800] focus:ring-2 focus:ring-[#ff7800]/20 transition-all shadow-sm"
                  />
                ))}
              </div>
            </div>
          )}

          {/* SCREEN 5: LOADING STATE */}
          {step === "loading" && (
            <div className="py-12 flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 border-4 border-[#ff7800] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-gray-500 font-sans font-medium">Processing transaction...</p>
            </div>
          )}

          {/* SCREEN 6: SUCCESS STATE */}
          {step === "success" && (
            <div className="text-center space-y-6 py-4">
              <div>
                <h3 className="text-2xl font-bold text-[#2B2D42] font-heading mb-3">
                  Transfer Successful
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-sans leading-relaxed max-w-xs mx-auto">
                  Beneficiary should get the money with 5 mins, depending on their bank
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => alert("Support chat opens here.")}
                  className="text-xs font-bold text-[#ff7800] hover:underline focus:outline-none"
                >
                  Need Help?
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setStep("list");
                    setSelectedRecipient(null);
                    setPin(["", "", "", ""]);
                    onClose();
                  }}
                  className="w-full bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md font-heading text-sm"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}