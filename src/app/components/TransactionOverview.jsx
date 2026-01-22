// components/TransactionOverview.jsx
export default function TransactionOverview() {
  return (
    <div className="bg-[#2f2f2f] text-white rounded-md p-4 w-full">
      <h2 className="text-lg font-semibold mb-4">Transaction Overview</h2>
      <div className="grid grid-cols-4 gap-4">
        {/* Row 1 */}
        <div className="bg-green-600 rounded p-2 text-center font-semibold">14,350 USDT</div>
        <div className="bg-green-600 rounded p-2 text-center font-semibold">6,567 USDT</div>
        <div className="bg-green-600 rounded p-2 text-center font-semibold">8,567 USDT</div>
        <div className="bg-green-600 rounded p-2 text-center font-semibold">70</div>

        {/* Row 2 */}
        <div className="bg-[#784421] rounded p-2 text-center">USDT Balance<br/><span className="font-semibold">14,350 USDT</span></div>
        <div className="bg-[#784421] rounded p-2 text-center">Total Debit (USDT)<br/><span className="font-semibold">6,567 USDT</span></div>
        <div className="bg-[#784421] rounded p-2 text-center">Total Credit (USDT)<br/><span className="font-semibold">8,567 USDT</span></div>
        <div className="bg-[#784421] rounded p-2 text-center">Total Transaction<br/><span className="font-semibold">70</span></div>

        {/* Row 3 */}
        <div className="bg-gray-700 rounded p-2 text-center">USDT Balance<br/><span className="font-semibold">14,350 USDT</span></div>
        <div className="bg-gray-700 rounded p-2 text-center">Total Debit (USDT)<br/><span className="font-semibold">6,567 USDT</span></div>
        <div className="bg-gray-700 rounded p-2 text-center">Total Credit (USDT)<br/><span className="font-semibold">8,567 USDT</span></div>
        <div className="bg-gray-700 rounded p-2 text-center">Total Transaction<br/><span className="font-semibold">70</span></div>

        {/* Row 4 */}
        <div className="bg-green-800 rounded p-2 text-center text-sm">
          Fiat Balance (NGN)<br/><span className="font-bold">₦25,350</span>
        </div>
        <div className="bg-green-800 rounded p-2 text-center text-sm">
          Total Debit (NGN)<br/><span className="font-bold">₦6,567</span>
        </div>
        <div className="bg-green-800 rounded p-2 text-center text-sm">
          Total Credit (NGN)<br/><span className="font-bold">₦8,567</span>
        </div>
        <div className="bg-green-800 rounded p-2 text-center text-sm">
          Total Transaction (NGN)<br/><span className="font-bold">₦8,567</span>
        </div>
      </div>
    </div>
  );
}
