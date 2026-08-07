import { FiGlobe, FiPackage, FiTruck } from "react-icons/fi";

const stepsData = [
    {
        step: "1. Browse",
        description: "Find restaurants and dishes you love.",
        icon: <FiGlobe className="text-[#ff7800] text-2xl" />, // Increased icon size
    },
    {
        step: "2. Order",
        description: "Add items to your cart and check out.",
        icon: <FiPackage className="text-[#ff7800] text-2xl" />, // Increased icon size
    },
    {
        step: "3. Enjoy",
        description: "Track your order and eat fresh.",
        icon: <FiTruck className="text-[#ff7800] text-2xl" />, // Increased icon size
    },
];

export default function How() {
    return (
        <section className="bg-[#fafafa] py-14 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADER */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#2B2D42] font-heading mb-8">
                    How it works
                </h2>

                {/* 3-COLUMN STEP CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stepsData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 px-12 border border-gray-200/70 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between min-h-60"
                        >
                            <div>
                                {/* Icon Badge (Enlarged wrapper size) */}
                                <div className="w-14 h-14 rounded-full bg-[#ff7800]/10 flex items-center justify-center mb-5">
                                    {item.icon}
                                </div>
                            </div>

                            <div>
                                {/* Step Title (Increased font size to text-lg, kept bold) */}
                                <h3 className="text-lg font-bold text-[#2B2D42] font-heading">
                                    {item.step}
                                </h3>
                                {/* Description (Kept at text-sm) */}
                                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}