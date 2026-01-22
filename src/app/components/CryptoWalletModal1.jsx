import React from "react";

const CryptoWalletModalOne = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="relative bg-gray-200 rounded-lg p-6 w-full max-w-2xl flex">
        {/* Left Section */}
        <div className="bg-green-400 text-black font-bold rounded-l-lg py-4 px-6 flex items-center gap-3">
          <img src="/crypto-icon.svg" alt="Crypto Icon" className="w-8 h-8" />
          CRYPTO WALLET
          <span className="text-xl ml-2">◀</span>
        </div>

        {/* Right Section */}
        <div className="ml-[-20px] bg-gray-200 rounded-r-lg p-6 w-full space-y-4 shadow-md">
          <div>
            <label className="block font-semibold mb-1">Select Coin</label>
            <input
              type="text"
              placeholder="Search coin"
              className="w-full rounded-md p-3 text-gray-700 bg-gray-500 placeholder:text-gray-300 shadow-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Search Network</label>
            <input
              type="text"
              placeholder="USDT"
              className="w-full rounded-md p-3 text-gray-700 bg-gray-500 placeholder:text-gray-300 shadow-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Deposit Address</label>
            <input
              type="text"
              placeholder="Enter address"
              className="w-full rounded-md p-3 text-gray-700 bg-gray-500 placeholder:text-gray-300 shadow-md"
            />
          </div>

          <button className="w-full mt-4 bg-gray-400 text-black font-bold py-3 rounded-md shadow-md">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoWalletModalOne;
