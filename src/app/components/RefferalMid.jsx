"use client"
import { useState } from "react";

export default function ReferralListSection() {
  const [page, setPage] = useState(1);

  const referrals = [
    { date: "26/03/2025", wallet: "tw12356789hjkk...", email: "ba**eabi9**.com", country: "Nigeria", reward: "10 Yomcoin" },
    { date: "27/03/2025", wallet: "mw12356789hjkk...", email: "sa**cim9**.com", country: "Ghana", reward: "10 Yomcoin" },
    { date: "28/03/2025", wallet: "tm98766789hjkk...", email: "nia**ada9**.com", country: "Ghana", reward: "10 Yomcoin" },
  ];

  const totalPages = 5;

  return (
    <section className="bg-black py-16"  style={{ backgroundImage: "url('/bg.png')" }}>
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl p-6 text-white">
        <h2 className="text-lg font-bold mb-4">My Referral List</h2>

        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">Date</th>
              <th>Wallet Address</th>
              <th>Email Address</th>
              <th>Country</th>
              <th>My Reward</th>
            </tr>
          </thead>
          <tbody>
            {referrals.map((ref, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-2">{ref.date}</td>
                <td>{ref.wallet}</td>
                <td>{ref.email}</td>
                <td>{ref.country}</td>
                <td>{ref.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-6 h-6 flex items-center justify-center rounded-full ${p === page ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">Total Coins 30</button>
           <br/><br/><br/>

          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">Withdraw earnings</button>
        </div>
      </div>
    </section>
  );
}
