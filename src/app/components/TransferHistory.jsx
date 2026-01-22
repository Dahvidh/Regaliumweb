import React from "react";

const TransferHistory = () => {
  const history = [
    {
      date: "26/03/2025",
      amount: "$ 200",
      method: "Local Bank",
      status: "Completed",
      reference: "423432324454223",
    },
    {
      date: "27/03/2025",
      amount: "USDT 10",
      method: "Crypto Wallet",
      status: "Pending",
      reference: "785432324454267",
    },
    {
      date: "28/03/2025",
      amount: "Yomcoin 20",
      method: "Referral Coin",
      status: "Pending",
      reference: "903432324454567",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "Completed") return "bg-green-500 text-white";
    if (status === "Pending") return "bg-orange-500 text-white";
    return "bg-gray-300";
  };

  return (
    <div className="bg-black text-white p-6 rounded-xl w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Transfer History</h2>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-2">Date</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Method</th>
            <th className="p-2">Status</th>
            <th className="p-2">Reference Number</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="p-2">{item.date}</td>
              <td className="p-2">{item.amount}</td>
              <td className="p-2">{item.method}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </td>
              <td className="p-2">{item.reference}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center gap-2 mt-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
              num === 1 ? "bg-orange-500 text-white" : "bg-gray-800 text-white hover:bg-green-500"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransferHistory;
