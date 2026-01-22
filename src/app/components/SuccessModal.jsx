import React, { useState } from "react";
import { useModal } from "@/hooks/use-modal-store";

const mockBanks = ["Access Bank", "GTBank", "Zenith Bank"];
const mockCurrencies = ["NGN", "USD", "EUR"];

const BankTransfer = () => {
  const { onClose, onOpen } = useModal();
  const [form, setForm] = useState({
    amount: "",
    currency: "NGN",
    bank: "Access Bank",
    accountNumber: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.amount || isNaN(form.amount) || parseFloat(form.amount) <= 0) {
      setError("Enter a valid amount");
      return false;
    }
    if (!form.accountNumber || form.accountNumber.length < 10) {
      setError("Enter a valid account number");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      onClose();
      setTimeout(() => onOpen("success"), 300);
    } catch (err) {
      setError("Transfer failed, try again later");
    }
  };

  return (
    <div className="bg-[#1a1a1a] p-6 text-white w-full max-w-md mx-auto rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Bank Transfer</h2>

      <div className="mb-4">
        <label className="block text-sm mb-1">Amount</label>
        <input
          name="amount"
          value={form.amount}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
          type="number"
          placeholder="Enter amount"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Currency</label>
        <select
          name="currency"
          value={form.currency}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        >
          {mockCurrencies.map((cur) => (
            <option key={cur} value={cur}>{cur}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Bank</label>
        <select
          name="bank"
          value={form.bank}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        >
          {mockBanks.map((bank) => (
            <option key={bank} value={bank}>{bank}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">Account Number</label>
        <input
          name="accountNumber"
          value={form.accountNumber}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
          type="text"
          placeholder="Enter 10-digit account number"
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
      >
        Transfer Now
      </button>
    </div>
  );
};

export default BankTransfer;
