import React from "react";

const CryptoWalletSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center p-4 lg:p-6 bg-transparent">
      {/* Left Wallet Button */}
      <div className="relative z-10">
        <button className="bg-lime-400 text-black font-bold px-6 py-4 rounded-lg flex items-center gap-3 shadow-lg">
          <img
            src="/crypto-icon.png"
            alt="Crypto Wallet"
            className="w-8 h-8"
          />
          <span className="text-lg">CRYPTO WALLET</span>
          <span className="text-2xl font-extrabold">&gt;</span>
        </button>
      </div>

      {/* Arrow pointing to right box */}
      <div className="hidden lg:block w-4 h-4 bg-gray-200 rotate-45 -ml-2 mt-6 z-0 shadow-md"></div>

      {/* Right Form Section */}
      <div className="bg-gray-200 px-6 py-6 rounded-lg shadow-md w-full max-w-xl lg:ml-0 mt-6 lg:mt-0 lg:ml-4">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1">From</label>
          <div className="relative">
            <select className="w-full px-4 py-3 rounded-md shadow-sm border border-gray-300 text-gray-700 bg-gray-300 font-semibold">
              <option value="BTC">BTC</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-600">
              Available BAlance 0 <br /> 0.00001–3 <span className="underline">Max</span>
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1">To</label>
          <select className="w-full px-4 py-3 rounded-md shadow-sm border border-gray-300 text-gray-700 bg-gray-300 font-semibold">
            <option value="FIAT">FIAT</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-1">Deposit Address</label>
          <input
            type="text"
            placeholder="Enter address"
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-300 font-semibold text-gray-700 shadow-inner"
          />
        </div>

        <button className="w-full bg-gray-400 hover:bg-gray-500 text-black font-bold py-3 px-4 rounded-md shadow">
          CONFIRM
        </button>
      </div>
    </div>
  );
};

export default CryptoWalletSection;
