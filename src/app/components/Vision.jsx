"use client";

import { Eye, Target } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="bg-[#0D0D0D] text-white py-16 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* First Vision */}
        <div className="flex flex-col items-center text-center space-y-5">
          <Eye className="text-green-400 w-24 h-24" />
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="text-gray-300 max-w-md">
            To create a world where sending and receiving money across borders
            is instant, affordable, and accessible to all, breaking down
            financial barriers and connecting people globally.
          </p>
        </div>

        {/* Second Vision */}
        <div className="flex flex-col items-center text-center space-y-5">
          <Target className="text-green-400 w-24 h-24" />
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="text-gray-300 max-w-md">
            To simplify global payments by using blockchain technology to
            deliver fast, secure, and low-cost transactions, empowering
            individuals, entrepreneurs, and businesses to fully participate in
            the future of finance.
          </p>
        </div>
      </div>

      {/* Optional faint background lines (for continuity with About Us section) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('/network-bg.png')] bg-cover bg-center"></div>
      </div>
    </section>
  );
}
