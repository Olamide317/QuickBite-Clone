import { Link } from "react-router-dom";

export default function IsCloseFooter() {
    return (
        <footer className="bg-[#f7f7f7] text-gray-600 pt-16 pb-8 mt-auto w-full mb-14">

            {/* Top Full-Width Divider Line */}
            <div className="w-full border-t border-[#E5E7EB] mb-12" />

            {/* Content wrapper with horizontal padding */}
            <div className="mx-auto px-6 sm:px-12">

                {/* MAIN FOOTER NAVIGATION (4 COLUMNS) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-18 mb-12">

                    {/* Column 1: Brand Info & Mobile App CTA */}
                    <div className="space-y-4 mr-10">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold tracking-tight font-heading">
                                <span className="text-[#ff7800]">Quick</span>
                                <span className="text-[#2B2D42]">Bite</span>
                            </span>
                        </div>
                        <p className="text-[#6B7280] text-[13px] sm:text-[14px] font-sans">
                            Hot meals from your favorite local spots, delivered fast.
                        </p>

                        {/* App CTA Badge Container (Added whitespace-nowrap) */}
                        <div className="bg-[#ff7800] text-white rounded-[12px] p-2 shadow-sm max-w-[400px] inline-block">
                            <h4 className="font-bold text-[14px] font-heading mb-1">
                                Download the QuickBite App
                            </h4>
                            <p className="text-[12px] font-sans text-white/90 whitespace-nowrap">
                                Get the best experience on our mobile app
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Company Navigation Links */}
                    <div className="space-y-3">
                        <h4 className="font-bold text-[#2B2D42] text-[14px] sm:text-[15px] font-heading">
                            Company
                        </h4>
                        <ul className="space-y-2 text-[13px] font-medium text-[#6B7280] font-sans">
                            <li><Link to="/about" className="hover:text-[#E06342] transition-colors">About</Link></li>
                            <li><Link to="/careers" className="hover:text-[#E06342] transition-colors">Careers</Link></li>
                            <li><Link to="/press" className="hover:text-[#E06342] transition-colors">Press</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Help & Support Links */}
                    <div className="space-y-3">
                        <h4 className="font-bold text-[#2B2D42] text-[14px] sm:text-[15px] font-heading">
                            Help
                        </h4>
                        <ul className="space-y-2 text-[13px] font-medium text-[#6B7280] font-sans">
                            <li><Link to="/support" className="hover:text-[#E06342] transition-colors">Support</Link></li>
                            <li><Link to="/faq" className="hover:text-[#E06342] transition-colors">FAQ</Link></li>
                            <li><Link to="/contact" className="hover:text-[#E06342] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Physical Address Info */}
                    <div className="space-y-3">
                        <h4 className="font-bold text-[#2B2D42] text-[14px] sm:text-[15px] font-heading">
                            Address
                        </h4>
                        <p className="text-[13px] text-[#6B7280] font-sans leading-relaxed">
                            1 Market Street, San Francisco
                        </p>
                    </div>

                </div>

            </div>

            {/* Bottom Full-Width Divider Line */}
            <div className="w-full border-t border-[#E5E7EB] pt-6 text-center">
                <p className="text-[12px] sm:text-[13px] text-[#6B7280] font-sans px-6">
                    © 2026 Fooday. All rights reserved.
                </p>
            </div>

        </footer>
    );
}