"use client";
import React from "react";
import dynamic from "next/dynamic";

const Bank = dynamic(() => import("lucide-react").then(mod => mod.Bank), { ssr: false });
const ChevronRight = dynamic(() => import("lucide-react").then(mod => mod.ChevronRight), { ssr: false });

const BankModal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="relative bg-gray-200 rounded-lg p-6 w-full max-w-2xl flex">
        {/* Left Section (Bank Icon and Label) */}
        <div className="bg-green-400 text-black font-bold rounded-l-lg py-4 px-6 flex items-center gap-3">
          <Bank size={32} />
          LOCAL BANK
          <ChevronRight className="ml-4" />
        </div>

        {/* Right Section (Form) */}
        <div className="ml-[-20px] bg-gray-200 rounded-r-lg p-6 w-full space-y-4 shadow-md">
          <div>
            <label className="block font-semibold mb-1">Account Name</label>
            <input
              type="text"
              placeholder="Enter your bank name"
              className="w-full rounded-md p-3 text-gray-700 bg-gray-500 placeholder:text-gray-300 shadow-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Account Number</label>
            <input
              type="text"
              placeholder="Enter your account number"
              className="w-full rounded-md p-3 text-gray-700 bg-gray-500 placeholder:text-gray-300 shadow-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Amount</label>
            <input
              type="number"
              placeholder="Enter amount to withdraw"
              className="w-full rounded-md p-3 text-gray-700 bg-gray-500 placeholder:text-gray-300 shadow-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Enter 2FA Code</label>
            <input
              type="text"
              placeholder="Enter your 2FA Code"
              className="w-full rounded-md p-3 text-gray-700 bg-gray-500 placeholder:text-gray-300 shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankModal;
