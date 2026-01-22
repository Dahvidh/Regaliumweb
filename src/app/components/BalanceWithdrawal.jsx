export default function BalanceWithdrawal() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 bg-[url('/bg-pattern.png')] bg-cover">

      {/* Withdrawal Section */}
      <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 w-full max-w-md relative mb-12">

        <h2 className="text-xl font-bold mb-4">Balance and Withdrawal</h2>

        <div className="flex space-x-2 mb-4">
          <button className="bg-green-700 text-white px-3 py-1 rounded text-xs">Crypto Balance</button>
          <button className="bg-green-700 text-white px-3 py-1 rounded text-xs">Fiat Balance</button>
        </div>

        <div className="mb-4">
          <input 
            type="password" 
            value="*****" 
            readOnly 
            className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700" 
          />
        </div>

        <hr className="border-gray-700 mb-4" />

        <p className="mb-2">Select Withdrawal Method</p>
        <div className="space-y-3 mb-6">
          <button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 w-full py-2 rounded text-left px-4">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M5 6h14M4 14h16v6H4v-6z" />
              </svg>
            </span>
            <span className="font-semibold">LOCAL BANK</span>
          </button>

          <button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 w-full py-2 rounded text-left px-4">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l1.414-1.414M6.05 6.05L4.636 4.636" />
              </svg>
            </span>
            <span className="font-semibold">CRYPTO WALLET</span>
          </button>
        </div>

        <button className="bg-green-600 hover:bg-green-700 w-full py-3 rounded text-white font-bold flex items-center justify-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.105.672-2 1.5-2S15 9.895 15 11c0 .558-.213 1.06-.563 1.438a2.987 2.987 0 01-.563.438v2h-2v-2a2.987 2.987 0 01-.563-.438A1.99 1.99 0 0112 11z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c4.418 0 8-4.03 8-9s-3.582-9-8-9-8 4.03-8 9 3.582 9 8 9z" />
          </svg>
          <span>Withdraw Funds</span>
        </button>

        <div className="absolute top-4 right-4">
          <img 
            src="/profile.jpg" 
            alt="Profile" 
            className="h-10 w-10 rounded-full border-2 border-white object-cover" 
          />
        </div>
      </div>

      {/* Payout History Section */}
      <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Payout History</h2>

        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-700 text-green-500">
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Amount</th>
              <th className="py-2 px-3">Method</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Reference Number</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2 px-3">26/03/2025</td>
              <td className="py-2 px-3">$ 200</td>
              <td className="py-2 px-3">Local Bank</td>
              <td className="py-2 px-3">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Completed</span>
              </td>
              <td className="py-2 px-3">423432324454223</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 px-3">27/03/2025</td>
              <td className="py-2 px-3">USDT 10</td>
              <td className="py-2 px-3">Crypto Wallet</td>
              <td className="py-2 px-3">
                <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">Pending</span>
              </td>
              <td className="py-2 px-3">785432324454267</td>
            </tr>
            <tr>
              <td className="py-2 px-3">28/03/2025</td>
              <td className="py-2 px-3">Yomcoin 20</td>
              <td className="py-2 px-3">Referral Coin</td>
              <td className="py-2 px-3">
                <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">Pending</span>
              </td>
              <td className="py-2 px-3">903432324454567</td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <button className="bg-orange-500 text-black px-2 py-1 rounded">&lt;</button>
          <button className="bg-green-700 text-white px-3 py-1 rounded">1</button>
          <button className="bg-gray-700 text-white px-3 py-1 rounded">2</button>
          <button className="bg-gray-700 text-white px-3 py-1 rounded">3</button>
          <button className="bg-gray-700 text-white px-3 py-1 rounded">4</button>
          <button className="bg-gray-700 text-white px-3 py-1 rounded">5</button>
          <button className="bg-orange-500 text-black px-2 py-1 rounded">&gt;</button>
        </div>
      </div>
    </div>
  );
}
