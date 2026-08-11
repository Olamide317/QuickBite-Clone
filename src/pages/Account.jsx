import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FiUser, FiMapPin, FiCreditCard, FiBell, FiShield, 
  FiPlus, FiTrash2, FiCheck 
} from "react-icons/fi";
import UserNavbar from "../components/UserNavbar";
import IsCloseFooter from "../components/IsCloseFooter";

export default function Account({ totalCartCount, onLogout }) {
  // Active Tab state: "account", "addresses", "payment", "alerts", "security"
  const [activeTab, setActiveTab] = useState("account");

  // --- 1. Account Tab State ---
  const [fullName, setFullName] = useState("Godfrey Chibuenyim");
  const [email, setEmail] = useState("jane@example.com");
  const [phone, setPhone] = useState("+234 555 1263 4567");
  const [dob, setDob] = useState("1998-05-14");
  const [language, setLanguage] = useState("English (US)");
  const [currency, setCurrency] = useState("NGN (₦)");
  const [dietary, setDietary] = useState("No restrictions");

  // --- 2. Addresses Tab State ---
  const [addresses, setAddresses] = useState([
    { id: 1, type: "Home", address: "123 Market St, San Francisco, CA" },
    { id: 2, type: "Work", address: "456 Orogbum Crescent, Port Harcourt, NG" }
  ]);

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  // --- 3. Payment Tab State ---
  const [cards, setCards] = useState([
    { id: 1, brand: "Visa", last4: "2344", expiry: "08/27" },
    { id: 2, brand: "Mastercard", last4: "8910", expiry: "12/28" }
  ]);

  const handleDeleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  // --- 4. Alerts Tab State ---
  const [alerts, setAlerts] = useState({
    orderUpdates: true,
    promotions: true,
    productNews: false,
  });

  const toggleAlert = (key) => {
    setAlerts(prev => ({ ...prev, [key]: !prev.key }));
  };

  // --- 5. Security Tab State ---
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const tabs = [
    { id: "account", label: "Account", icon: <FiUser size={16} /> },
    { id: "addresses", label: "Addresses", icon: <FiMapPin size={16} /> },
    { id: "payment", label: "Payment", icon: <FiCreditCard size={16} /> },
    { id: "alerts", label: "Alerts", icon: <FiBell size={16} /> },
    { id: "security", label: "Security", icon: <FiShield size={16} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans">
      
      {/* Global User Navbar */}
      <UserNavbar cartCount={totalCartCount} onLogout={onLogout} />

      <main className="flex-grow py-10 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto">
          
          {/* USER PROFILE HEADER BANNER */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" 
                alt="Godfrey Chibuenyim" 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#ff7800] shadow-sm"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#2B2D42] font-heading">
                  {fullName}
                </h1>
                <p className="text-sm text-gray-500 font-sans">{email}</p>
                <p className="text-xs text-gray-400 font-sans mt-0.5">{phone}</p>
              </div>
            </div>

            {/* Become a Vendor Promotion Button */}
            <div className="bg-orange-50 border border-orange-200/60 rounded-2xl p-4 flex items-center justify-between gap-4 w-full md:w-auto">
              <div>
                <p className="text-xs font-bold text-[#ff7800] font-heading">Partner with QuickBite</p>
                <p className="text-[11px] text-gray-600 font-sans">Grow your restaurant sales today</p>
              </div>
              <Link 
                to="/vendors" 
                className="bg-[#ff7800] hover:bg-[#e06a00] text-white font-semibold text-xs px-4 py-2 rounded-xl transition-all shadow-sm whitespace-nowrap"
              >
                Become a vendor
              </Link>
            </div>
          </div>

          {/* TABBED NAVIGATION BAR */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-gray-200">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-[#ff7800] text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB CONTENT CONTAINER */}
          <div className="space-y-6">
            
            {/* 1. ACCOUNT TAB */}
            {activeTab === "account" && (
              <div className="space-y-6 animate-fadeIn">
                
                {/* Top Card: Profile Editing Fields */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                  <h3 className="text-lg font-bold text-[#374151] font-heading pb-3 border-b border-gray-100">
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Full Name</label>
                      <input 
                        type="text" 
                        value={fullName} 
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#ff7800]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Email Address</label>
                      <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#ff7800]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Phone Number</label>
                      <input 
                        type="text" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#ff7800]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Date of Birth</label>
                      <input 
                        type="date" 
                        value={dob} 
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#ff7800]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={() => alert("Changes saved successfully!")}
                      className="bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md text-sm font-heading"
                    >
                      Save change
                    </button>
                  </div>
                </div>

                {/* Second Card: System Preferences */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                  <h3 className="text-lg font-bold text-[#374151] font-heading pb-3 border-b border-gray-100">
                    Preferences & Region
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Language</label>
                      <select 
                        value={language} 
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#ff7800]"
                      >
                        <option>English (US)</option>
                        <option>French</option>
                        <option>Spanish</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Currency</label>
                      <select 
                        value={currency} 
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#ff7800]"
                      >
                        <option>NGN (₦)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Dietary Preference</label>
                      <select 
                        value={dietary} 
                        onChange={(e) => setDietary(e.target.value)}
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#ff7800]"
                      >
                        <option>No restrictions</option>
                        <option>Halal</option>
                        <option>Vegetarian</option>
                        <option>Vegan</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <button 
                      onClick={onLogout}
                      className="text-red-600 hover:text-red-700 font-semibold text-sm transition-colors focus:outline-none"
                    >
                      Sign out
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* 2. ADDRESSES TAB */}
            {activeTab === "addresses" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6 animate-fadeIn">
                
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-[#374151] font-heading">
                    Saved Addresses
                  </h3>
                  <button 
                    onClick={() => {
                      const newAddr = prompt("Enter new address (e.g., 789 Admiralty Way, Lekki):");
                      if (newAddr) setAddresses([...addresses, { id: Date.now(), type: "Other", address: newAddr }]);
                    }}
                    className="inline-flex items-center space-x-1.5 bg-[#ff7800] hover:bg-[#e06a00] text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm"
                  >
                    <FiPlus size={14} />
                    <span>Add Address</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {addresses.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200/60 shadow-sm">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ff7800] flex items-center justify-center shrink-0">
                          <FiMapPin size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#374151] font-heading">{item.type}</p>
                          <p className="text-xs text-gray-500 font-sans">{item.address}</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleDeleteAddress(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                        title="Delete address"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  ))}

                  {addresses.length === 0 && (
                    <p className="text-sm text-gray-400 text-center py-8">No saved addresses found.</p>
                  )}
                </div>

              </div>
            )}

            {/* 3. PAYMENT TAB */}
            {activeTab === "payment" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6 animate-fadeIn">
                
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-[#374151] font-heading">
                    Payment Methods
                  </h3>
                  <button 
                    onClick={() => alert("Card addition gateway opens here.")}
                    className="inline-flex items-center space-x-1.5 bg-[#ff7800] hover:bg-[#e06a00] text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm"
                  >
                    <FiPlus size={14} />
                    <span>Add Payment Method</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {cards.map((card) => (
                    <div key={card.id} className="flex items-center justify-between p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200/60 shadow-sm">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-12 h-10 rounded-xl bg-white border border-gray-200 text-gray-800 font-bold flex items-center justify-center shrink-0 text-xs shadow-xs">
                          {card.brand}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#374151] font-heading">•••• {card.last4}</p>
                          <p className="text-xs text-gray-400 font-sans">Expires {card.expiry}</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleDeleteCard(card.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                        title="Delete card"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  ))}

                  {cards.length === 0 && (
                    <p className="text-sm text-gray-400 text-center py-8">No saved payment methods.</p>
                  )}
                </div>

              </div>
            )}

            {/* 4. ALERTS TAB */}
            {activeTab === "alerts" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6 animate-fadeIn">
                
                <h3 className="text-lg font-bold text-[#374151] font-heading pb-3 border-b border-gray-100">
                  Notification Preferences
                </h3>

                <div className="space-y-6 divide-y divide-gray-100">
                  
                  {/* Alert 1 */}
                  <div className="flex items-center justify-between pt-4 first:pt-0">
                    <div>
                      <p className="text-sm font-bold text-[#374151] font-heading">Order updates</p>
                      <p className="text-xs text-gray-500 font-sans">Status changes for active orders</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={alerts.orderUpdates}
                        onChange={() => toggleAlert("orderUpdates")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff7800]"></div>
                    </label>
                  </div>

                  {/* Alert 2 */}
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="text-sm font-bold text-[#374151] font-heading">Promotions & offers</p>
                      <p className="text-xs text-gray-500 font-sans">Discounts from favorite restaurants</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={alerts.promotions}
                        onChange={() => toggleAlert("promotions")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff7800]"></div>
                    </label>
                  </div>

                  {/* Alert 3 */}
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="text-sm font-bold text-[#374151] font-heading">Product news</p>
                      <p className="text-xs text-gray-500 font-sans">Tips and updates on QuickBite</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={alerts.productNews}
                        onChange={() => toggleAlert("productNews")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff7800]"></div>
                    </label>
                  </div>

                </div>

              </div>
            )}

            {/* 5. SECURITY TAB */}
            {activeTab === "security" && (
              <div className="space-y-6 animate-fadeIn">
                
                {/* Module 1: Change Password */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                  <h3 className="text-lg font-bold text-[#374151] font-heading pb-3 border-b border-gray-100">
                    Change Password
                  </h3>

                  <form onSubmit={handleUpdatePassword} className="space-y-4 max-w-lg">
                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Current Password</label>
                      <input 
                        type="password" 
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#ff7800]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">New Password</label>
                      <input 
                        type="password" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#ff7800]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5 font-heading">Confirm New Password</label>
                      <input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#ff7800]"
                      />
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="bg-[#ff7800] hover:bg-[#e06a00] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md text-sm font-heading"
                      >
                        Update password
                      </button>
                    </div>
                  </form>
                </div>

                {/* Module 2: Two-Factor Authentication */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#374151] font-heading mb-1">
                      Two-factor Authentication (2FA)
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-sans max-w-md">
                      Protect your QuickBite account with an extra layer of security by requiring a verification code during sensitive logins.
                    </p>
                  </div>

                  <button 
                    onClick={() => {
                      setTwoFactorEnabled(!twoFactorEnabled);
                      alert(twoFactorEnabled ? "2FA disabled." : "2FA enabled successfully!");
                    }}
                    className={`font-bold px-6 py-3 rounded-xl transition-all shadow-sm text-sm font-heading whitespace-nowrap ${
                      twoFactorEnabled 
                        ? "bg-green-100 text-green-700 border border-green-300" 
                        : "bg-[#ff7800] hover:bg-[#e06a00] text-white"
                    }`}
                  >
                    {twoFactorEnabled ? "2FA Enabled ✓" : "Enable 2FA"}
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>
      </main>

      <IsCloseFooter />
    </div>
  );
}