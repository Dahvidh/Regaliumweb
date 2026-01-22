// components/TransactionHistory.jsx
export default function TransactionHistory() {
  const rows = [
    { date: "27/03/2025", amount: "₦20,000", method: "Crypto Transfer", details: "From 0x3923...", id: "#10932201", fee: "₦20", status: "Completed" },
    { date: "27/03/2025", amount: "₦30,000", method: "Fiat Transfer", details: "From UBA 0142...", id: "#10932203", fee: "₦30", status: "Pending" },
    { date: "27/03/2025", amount: "₦40,000", method: "Crypto to Fiat", details: "To Access 0221...", id: "#10932206", fee: "₦60", status: "Failed" },
    { date: "27/03/2025", amount: "₦10,000", method: "Fiat Deposit", details: "From Card 1234****", id: "#10932212", fee: "₦20", status: "Completed" },
  ];

  const statusColor = {
    Completed: "bg-green-500",
    Pending: "bg-yellow-500",
    Failed: "bg-red-600"
  };

  return (
    <div className="bg-[#2f2f2f] text-white rounded-md p-4 w-full">
      <div className="flex justify-between mb-4 items-center">
        <h2 className="text-lg font-semibold">Transaction History</h2>
        <div className="flex gap-2">
          <input type="text" placeholder="Search..." className="px-2 py-1 rounded bg-gray-800 border border-gray-700" />
          <button className="bg-green-500 px-4 py-1 rounded text-white">Export</button>
        </div>
      </div>
      <table className="w-full text-sm">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-2">Date/Time</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Details</th>
            <th>Trans/ID</th>
            <th>B/C</th>
            <th>Trans/Fee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((tx, index) => (
            <tr key={index} className="text-center border-b border-gray-700">
              <td className="p-2">{tx.date}</td>
              <td>{tx.amount}</td>
              <td>{tx.method}</td>
              <td>{tx.details}</td>
              <td>{tx.id}</td>
              <td>-</td>
              <td>{tx.fee}</td>
              <td>
                <span className={`text-white py-1 px-3 rounded ${statusColor[tx.status]}`}>
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4 space-x-2 text-white">
        <button className="px-2 py-1 bg-gray-600 rounded">&lt;</button>
        {[1, 2, 3, 4, 5].map((num) => (
          <button key={num} className="px-2 py-1 bg-gray-700 rounded">{num}</button>
        ))}
        <button className="px-2 py-1 bg-gray-600 rounded">&gt;</button>
      </div>
    </div>
  );
}
