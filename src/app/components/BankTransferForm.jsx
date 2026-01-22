"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function BankTransferForm() {
  const [form, setForm] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    amount: "",
    currency: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.accountName || !form.accountNumber || !form.bankName || !form.amount || !form.currency) {
      return setError("Please fill in all fields.");
    }

    try {
      setLoading(true);
      const res = await fetch("https://your-backend.com/api/transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Transfer failed.");

      setForm({ accountName: "", accountNumber: "", bankName: "", amount: "", currency: "" });
      alert("Transfer successful!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      
    >
      <h2 className="text-xl font-bold">Bank Transfer</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        type="text"
        name="accountName"
        placeholder="Account Name"
        value={form.accountName}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="text"
        name="accountNumber"
        placeholder="Account Number"
        value={form.accountNumber}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="text"
        name="bankName"
        placeholder="Bank Name"
        value={form.bankName}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <select
        name="currency"
        value={form.currency}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      >
        <option value="">Select Currency</option>
        <option value="USD">USD</option>
        <option value="NGN">NGN</option>
        <option value="EUR">EUR</option>
      </select>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Processing..." : "Transfer"}
      </Button>
    </form>
  );
}
