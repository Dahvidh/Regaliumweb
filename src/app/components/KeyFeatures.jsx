"use client";
import Image from "next/image";

export default function KeyFeaturesSection() {
  return (
    <section className="bg-[#0b0b0b] text-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-200">
            <li>
              <span className="font-semibold">
                Cross-border transactions
              </span>{" "}
              with instant currency conversion
            </li>
            <li>
              <span className="font-semibold">Yomcoin reward system</span> for
              users and referrals
            </li>
            <li>
              Secure bank settlement and withdrawal process
            </li>
            <li>
              Transparent blockchain transactions for enhanced security
            </li>
          </ul>
        </div>

        {/* Right Image Cards */}
        <div className="md:w-1/2 flex items-center justify-center gap-5">
          <div className="grid grid-cols-3 gap-4">
            <Image
              src="/question-card.png"
              alt="Question card"
              width={150}
              height={200}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/question-card.png"
              alt="Question card"
              width={150}
              height={200}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/question-card.png"
              alt="Question card"
              width={150}
              height={200}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-[url('/mesh-bg.png')] bg-cover bg-center opacity-20"></div>
    </section>
  );
}
