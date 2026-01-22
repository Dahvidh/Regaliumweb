import { useState } from "react";

export default function BankDetailsForm() {
  const [form, setForm] = useState({
    name: "",
    account: "",
    bank: "",
    amount: ""
  });

  const banks = ["GTBank", "Access Bank", "UBA", "Zenith", "First Bank"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bank details submitted successfully!");
    // Here, link this to the backend
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md relative">
      <div className="absolute -left-40 top-10 bg-lime-400 text-black py-3 px-6 rounded-r-full font-bold flex items-center gap-2">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2L2 7h16L10 2zM2 8v2h16V8H2zm0 3v2h16v-2H2zm0 3v2h16v-2H2z" />
        </svg>
        BANK DETAILS
        <span className="ml-2">▶</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mt-10">
        <div>
          <label className="block font-bold">Recipient Name</label>
          <div className="flex">
            <input
              type="text"
              name="name"
              placeholder="Enter recipient name"
              className="flex-1 p-3 bg-gray-400 placeholder-white rounded-md shadow-md focus:outline-none"
              value={form.name}
              onChange={handleChange}
              required
            />
            <span className="ml-2 bg-orange-500 text-white py-3 px-4 rounded-md shadow-md">Beneficiary</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-bold">Account Number</label>
            <input
              type="text"
              name="account"
              placeholder="Enter number"
              className="w-full p-3 bg-gray-400 placeholder-white rounded-md shadow-md focus:outline-none"
              value={form.account}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex-1">
            <label className="block font-bold">Bank</label>
            <select
              name="bank"
              value={form.bank}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-400 text-white rounded-md shadow-md focus:outline-none"
            >
              <option value="">Select Bank</option>
              {banks.map((b, i) => (
                <option key={i} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block font-bold">Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            className="w-full p-3 bg-gray-400 placeholder-white rounded-md shadow-md focus:outline-none"
            value={form.amount}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white font-bold bg-green-600 rounded-md shadow-md hover:bg-green-700"
        >
          CONFIRM
        </button>
      </form>
    </div>
  );
}
