
"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import lucide-react icons to avoid initialization issues
const EyeOff = dynamic(() => import("lucide-react").then(mod => mod.EyeOff), { ssr: false });
const Banknote = dynamic(() => import("lucide-react").then(mod => mod.Banknote), { ssr: false });
const ShieldCheck = dynamic(() => import("lucide-react").then(mod => mod.ShieldCheck), { ssr: false });
const Wallet = dynamic(() => import("lucide-react").then(mod => mod.Wallet), { ssr: false });

const TransferSection = () => {
  return (
    <section className="bg-[#1a1a1a] min-h-screen text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-[#2a2a2a] rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Transfer</h2>

        {/* Balance Buttons and Masked Input */}
        <div className="flex items-center gap-2 mb-4">
          <button className="bg-orange-500 text-xs text-white px-3 py-1 rounded-full">Fiat Balance</button>
          <button className="bg-orange-500 text-xs text-white px-3 py-1 rounded-full">Crypto Balance</button>
          <EyeOff className="text-gray-400 ml-auto" />
        </div>

        <input
          type="password"
          className="w-full bg-gray-400 rounded p-2 text-black font-bold text-center mb-4"
          value="****"
          disabled
        />

        <hr className="border-gray-600 mb-4" />

        <h3 className="text-sm font-semibold mb-3">Select Transfer Method</h3>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-between bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600">
            <div className="flex items-center gap-2">
              <Banknote />
              <span className="font-semibold">Bank Details</span>
            </div>
            <span className="text-lg">◀</span>
          </button>

          <button className="w-full flex items-center justify-between bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600">
            <div className="flex items-center gap-2">
              <Wallet />
              <span className="font-semibold">Crypto Wallet</span>
            </div>
            <span className="text-lg">◀</span>
          </button>
        </div>
      </div>

      {/* Transfer Button */}
      <button className="mt-6 bg-green-600 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-700">
        <ShieldCheck size={18} /> Transfer Funds
      </button>
    </section>
  );
};

export default TransferSection;
