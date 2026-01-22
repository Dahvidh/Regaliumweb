"use client";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { CreditCard, Plus, Apple } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  { month: "Mar", income: 3000, expenses: -5000 },
  { month: "Apr", income: 7000, expenses: -5000 },
  { month: "May", income: 3000, expenses: -6000 },
  { month: "Jun", income: 6000, expenses: -3000 },
  { month: "Jul", income: 5000, expenses: -5000 },
  { month: "Aug", income: 5500, expenses: -4500 }
];

export default function Dashboard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="min-h-screen bg-black text-white flex"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
     {/*  Sidebar */}
      <aside
        className={`${expanded ? "w-64" : "w-16"} bg-gray-900 flex flex-col transition-all duration-300 min-h-screen relative`}
      >
       <div className="flex justify-center mb-6 mt-4">
       
         {/*  <img
            src="/ogo.png"
            className="h-10 w-10"
            alt="Profile"
          />*/}
        </div>
      
        <nav className="flex flex-col space-y-3 px-2 flex-1">
             <br/><br/>   <br/><br/>
          {[
            { icon: "fa-home", label: "Home" },
            { icon: "fa-envelope", label: "Notification" },
            { icon: "fa-file-alt", label: "Files" },
            { icon: "fa-external-link-alt", label: "Refferal" },
            { icon: "fa-cog", label: "Profile Settings" }
          ].map((item, i) => (
            <button
              key={i}
              className="flex items-center space-x-3 bg-green-600 p-2 rounded hover:bg-green-700"
            >
              <i className={`fas ${item.icon}`}></i>
              {expanded && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        {/* Arrow Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-green-600 p-1 rounded-full shadow-lg hover:bg-green-700"
        >
          {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <br/><br/>
        <div className="flex justify-between items-center mb-6 flex-wrap">
          
          <div>
            <h2 className="text-xl font-semibold">Welcome Samuel</h2>
            <h1 className="text-3xl font-bold">Your Dashboard</h1>
          </div>
          <input
            type="text"
            placeholder="Quick search"
            className="bg-gray-800 text-sm rounded-full px-4 py-2 focus:outline-none mt-2 sm:mt-0"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-6">
          {["Swap", "Deposit", "Send", "Withdraw", "Reward", "Transaction"].map(
            (label, idx) => (
              <button
                key={idx}
                className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded shadow text-sm"
              >
                {label}
              </button>
            )
          )}
        </div>

        {/* Chart Panel */}
        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-md mb-6 w-full">
          <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
          <p className="text-2xl font-bold mb-4">$25,000.00</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {["12 month", "30 Days", "7 Days", "24 hours"].map((t, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded text-sm ${
                  t === "12 month" ? "bg-green-600" : "bg-yellow-700"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">
              Current Income
            </span>
            <span className="bg-amber-900 text-white px-3 py-1 rounded text-sm">
              Current Expenses
            </span>
          </div>

          <div className="w-full h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="income" fill="#4ade80" />
                <Bar dataKey="expenses" fill="#15803d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dashboard Section */}
        <section
          className="text-white p-8 space-y-6 md:space-y-0 md:flex md:gap-6 rounded-xl"
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
      </main>
    </div>
  );
}
