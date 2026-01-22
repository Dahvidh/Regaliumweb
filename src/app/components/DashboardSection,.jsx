import React from "react";
import { CreditCard, Plus, Apple } from "lucide-react";

const DashboardSection = () => {
  return (
    <section className="bg-[#1a1a1a] text-white p-8 space-y-6 md:space-y-0 md:flex md:gap-6 rounded-xl"
    style={{ backgroundImage: "url('/bg.png')" }} 
    >
      {/* Card Limit Box */}
      <div className="bg-[#2a2a2a] rounded-xl p-6 w-full max-w-sm">
        <h4 className="text-sm font-semibold text-gray-300">Card Limit</h4>
        <div className="flex justify-between text-lg font-bold mt-1">
          <span>$4,450.32</span>
          <span className="text-white">$10,000</span>
        </div>
        <div className="mt-2 h-3 w-full bg-gray-500 rounded-full">
          <div className="h-3 bg-orange-500 rounded-full w-[44.5%]"></div>
        </div>
        <div className="text-xs text-gray-400 mt-4 space-y-1">
          <div>Minimum Payment <span className="float-right text-white">$500</span></div>
          <div>Debit for the Period <span className="float-right text-white">$1,500</span></div>
          <div>Recommended Payment <span className="float-right text-white">$500</span></div>
        </div>
      </div>

      {/* e-Card Box */}
      <div className="bg-[#3a3a3a] rounded-xl p-6 w-full max-w-sm flex flex-col justify-between">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">e-Card</h4>
        <div className="relative bg-black rounded-lg p-6 h-40 flex flex-col justify-between">
          <div className="text-white font-semibold text-lg">$ 5,000</div>
          <div className="text-white text-xl tracking-widest">0000 - 0000 - 0000 - 0000</div>
          <div className="text-sm text-gray-400">Virtual Card</div>
          <CreditCard className="absolute top-6 left-6 text-yellow-400" size={24} />
        </div>
        <button className="mt-4 bg-white text-black w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-gray-200">
          <Plus size={20} />
        </button>
      </div>

      {/* Transaction & Promo Box */}
      <div className="w-full max-w-sm space-y-4">
        <div className="bg-[#4a4a4a] rounded-xl p-4">
          <h4 className="text-sm font-semibold text-white mb-2">Recent Transaction</h4>
          <div className="bg-[#ff6622] rounded-lg p-3 flex items-center justify-between text-sm text-white mb-2">
            <div className="flex items-center gap-2">
              <img src="/avatar.png" alt="user" className="w-6 h-6 rounded-full" />
              <div>
                <div className="font-semibold">Adam Smith</div>
                <div className="text-xs">Money Transfer</div>
              </div>
            </div>
            <div className="text-right">
              <div>26/03</div>
              <div>$200.00</div>
            </div>
          </div>

          <div className="bg-green-600 rounded-lg p-3 flex items-center justify-between text-sm text-white">
            <div className="flex items-center gap-2">
              <Apple size={20} />
              <div>
                <div className="font-semibold">Apple Store</div>
              </div>
            </div>
            <div className="text-right">
              <div>26/03</div>
              <div>$1,200</div>
            </div>
          </div>
        </div>

        <div className="bg-green-500 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-black text-lg font-bold">Get a Yomcoin for Free</div>
            <button className="bg-orange-600 text-white px-3 py-1 text-sm rounded mt-2">Learn more</button>
          </div>
          <img src="/coin.png" alt="coin" className="w-12 h-12" />
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
