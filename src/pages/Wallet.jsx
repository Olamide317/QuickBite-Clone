import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FiArrowLeft, FiPlus, FiEye, FiEyeOff, FiCopy, FiCheck, 
  FiArrowUpRight, FiArrowDownLeft, FiShoppingBag, FiRefreshCw, FiCreditCard 
} from "react-icons/fi";
import { HiOutlineWallet } from "react-icons/hi2";
import UserNavbar from "../components/UserNavbar";
import AddMoneyModal from "../components/AddMoneyModal";
import WithdrawModal from "../components/WithdrawModal";

export default function Wallet({ totalCartCount, onLogout }) {
    const navigate = useNavigate();
    const [showBalance, setShowBalance] = useState(true);
    const [copied, setCopied] = useState(false);
    const [showAllTransactions, setShowAllTransactions] = useState(false);
    const accountNumber = "1234567891";
    const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

    const [transactions] = useState([
        {
            id: 1,
            title: "Order Payment",
            date: "May 20, 2026, 3:07:46 PM",
            amount: "+ ₦6,300",
            type: "credit",
            badge: "Order",
            icon: <FiShoppingBag className="text-[#ff7800]" />
        },
        {
            id: 2,
            title: "from DINAH TAMUNOIBIYEMEAR",
            date: "Jun 4, 2026, 4:50:46 AM",
            amount: "+ ₦3,500",
            type: "credit",
            badge: "Credit",
            icon: <FiArrowDownLeft className="text-green-600" />
        },
        {
            id: 3,
            title: "to ELITE",
            date: "Feb 20, 2026, 8:37:46 PM",
            amount: "- ₦1,000",
            type: "debit",
            badge: "Transfer",
            icon: <FiArrowUpRight className="text-red-500" />
        },
        {
            id: 4,
            title: "Order Payment",
            date: "Feb 14, 2026, 2:23:46 PM",
            amount: "- ₦10,360",
            type: "debit",
            badge: "Debit",
            icon: <FiRefreshCw className="text-gray-600" />
        },
        {
            id: 5,
            title: "Cancle order",
            date: "Jan 10, 2026, 1:12:30 PM",
            amount: "+ ₦4,200",
            type: "credit",
            badge: "Refund",
            icon: <FiRefreshCw className="text-green-600" />
        },
        {
            id: 6,
            title: "Order Payment",
            date: "Jan 10, 2026, 1:12:19 PM",
            amount: "- ₦4,200",
            type: "debit",
            badge: "Order",
            icon: <FiShoppingBag className="text-[#ff7800]" />
        }
    ]);

    const [isAddMoneyOpen, setIsAddMoneyOpen] = useState(false);

    const handleCopyAccount = () => {
        navigator.clipboard.writeText(accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans">

            <UserNavbar cartCount={totalCartCount} onLogout={onLogout} />

            <div className="my-6 ml-6 sm:ml-12">
                <button
                    onClick={() => {
                        if (showAllTransactions) {
                            setShowAllTransactions(false);
                        } else {
                            navigate(-1);
                        }
                    }}
                    className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#ff7800] font-semibold text-sm transition-colors"
                >
                    <FiArrowLeft size={16} />
                    <span>Back</span>
                </button>
            </div>

            <main className="grow py-4 px-6 sm:px-12 mb-20">
                <div className="max-w-4xl mx-auto">

                    {!showAllTransactions ? (
                        <>
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#ff7800] flex items-center justify-center">
                                    <HiOutlineWallet size={22} />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-[#2B2D42] font-heading">
                                        Digital Wallet
                                    </h1>
                                    <p className="text-xs sm:text-sm text-gray-500 font-sans">
                                        Manage your balance, transactions and payment options.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl mb-10 flex flex-col sm:flex-row justify-between items-start gap-6"
                                style={{ backgroundColor: "#ff7800" }}
                            >
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs sm:text-sm text-white/80 font-medium font-sans mb-1">
                                            Available balance
                                        </p>

                                        <div className="flex items-center space-x-3">
                                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
                                                {showBalance ? "₦ 0.00" : "₦ ••••••"}
                                            </h2>
                                            <button
                                                onClick={() => setShowBalance(!showBalance)}
                                                className="text-white/80 hover:text-white transition-colors focus:outline-none"
                                            >
                                                {showBalance ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                                            </button>
                                        </div>

                                        <p className="text-xs text-white/90 font-medium font-sans mt-1">
                                            Quickbite Wallet
                                        </p>
                                    </div>

                                    <div className="flex items-center space-x-3 pt-2">
                                        <button
                                            onClick={() => setIsAddMoneyOpen(true)}
                                            className="bg-white text-[#ff7800] hover:bg-orange-50 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-sm flex items-center space-x-1.5"
                                        >
                                            <FiPlus size={16} />
                                            <span>Add money</span>
                                        </button>

                                        <button
                                            onClick={() => setIsWithdrawOpen(true)}
                                            className="bg-transparent border border-white text-white hover:bg-white/10 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all backdrop-blur-sm"
                                        >
                                            Withdraw
                                        </button>
                                    </div>
                                </div>

                                <div className="text-right self-start w-full sm:w-auto">
                                    <p className="text-xs text-white/80 font-medium font-sans mb-1">
                                        Account number
                                    </p>
                                    <div className="flex items-center justify-end space-x-2">
                                        <span className="font-mono font-bold text-base sm:text-lg tracking-wider text-white">
                                            {accountNumber}
                                        </span>
                                        <button
                                            onClick={handleCopyAccount}
                                            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-xl transition-all"
                                        >
                                            {copied ? <FiCheck size={14} className="text-green-300" /> : <FiCopy size={14} />}
                                        </button>
                                    </div>
                                    {copied && <p className="text-[10px] text-green-200 mt-1 font-sans">Copied to clipboard!</p>}
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <h3 className="text-lg font-bold text-[#374151] font-heading">
                                        Recent activity
                                    </h3>
                                    <button
                                        onClick={() => setShowAllTransactions(true)}
                                        className="text-[#ff7800] hover:text-[#e06a00] font-semibold text-xs sm:text-sm flex items-center space-x-1 transition-colors bg-transparent border-none cursor-pointer"
                                    >
                                        <span>See more</span>
                                        <span>→</span>
                                    </button>
                                </div>

                                <div className="divide-y divide-gray-100">
                                    {transactions.slice(0, 4).map((tx) => (
                                        <div key={tx.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                                            <div className="flex items-center space-x-3.5">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 shadow-xs">
                                                    {tx.icon}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[#374151] font-heading">{tx.title}</p>
                                                    <p className="text-xs text-gray-400 font-sans mt-0.5">{tx.date}</p>
                                                </div>
                                            </div>

                                            <div className="text-right flex flex-col items-end space-y-1">
                                                <span className={`text-sm sm:text-base font-extrabold font-heading ${tx.type === "credit" ? "text-green-600" : "text-red-500"
                                                    }`}>
                                                    {tx.amount}
                                                </span>
                                                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${tx.badge === "Order" ? "bg-orange-100 text-orange-700" :
                                                    tx.badge === "Credit" ? "bg-green-100 text-green-700" :
                                                        tx.badge === "Transfer" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                                                    }`}>
                                                    {tx.badge}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm space-y-6 animate-fadeIn">
                            <div className="pb-4 border-b border-gray-100 flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#ff7800] flex items-center justify-center">
                                    <FiCreditCard size={20} />
                                </div>
                                <div>
                                    <h1 className="text-xl sm:text-2xl font-bold text-[#2B2D42] font-heading">
                                        Transaction
                                    </h1>
                                    <p className="text-xs sm:text-sm text-[#6B7280] font-sans">
                                        Transaction history
                                    </p>
                                </div>
                            </div>

                            <div className="divide-y divide-gray-100">
                                {transactions.map((tx) => (
                                    <div key={tx.id} className="flex items-center justify-between py-4 sm:py-5 first:pt-0 last:pb-0">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 rounded-full bg-[#F8F9FA] border border-gray-200/60 flex items-center justify-center shrink-0 shadow-sm">
                                                {tx.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm sm:text-base font-bold text-[#374151] font-heading">{tx.title}</p>
                                                <p className="text-xs text-[#6B7280] font-sans mt-0.5">{tx.date}</p>
                                            </div>
                                        </div>

                                        <div className="text-right flex flex-col items-end space-y-1.5">
                                            <span className={`text-sm sm:text-base font-extrabold font-heading ${tx.type === "credit" ? "text-green-600" : "text-gray-900"
                                                }`}>
                                                {tx.amount}
                                            </span>
                                            <span className={`text-[11px] font-bold px-3 py-0.5 rounded-full ${tx.badge === "Order" ? "bg-orange-100 text-orange-700" :
                                                tx.badge === "Credit" ? "bg-green-100 text-green-700" :
                                                    tx.badge === "Transfer" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                                                }`}>
                                                {tx.badge}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </main>

            <AddMoneyModal
                isOpen={isAddMoneyOpen}
                onClose={() => setIsAddMoneyOpen(false)}
                accountNumber={accountNumber}
            />

            <WithdrawModal
                isOpen={isWithdrawOpen}
                onClose={() => setIsWithdrawOpen(false)}
                availableBalance={0}
            />

        </div>
    );
}