'use client';

import { useState } from 'react';

export default function LocalBankModal() {
  const [form, setForm] = useState({
    recipientName: '',
    accountNumber: '',
    bank: '',
    amount: ''
  });

  const [errors, setErrors] = useState({});

  const banks = [
    'Access Bank',
    'GTBank',
    'First Bank',
    'UBA',
    'Zenith Bank'
  ];

  const validate = () => {
    const newErrors = {};
    if (!form.recipientName) newErrors.recipientName = 'Recipient name is required';
    if (!form.accountNumber) newErrors.accountNumber = 'Account number is required';
    if (!form.bank) newErrors.bank = 'Select a bank';
    if (!form.amount) newErrors.amount = 'Amount is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (!validate()) return;

    fetch('/api/local-bank-transfer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => alert('Transfer Submitted'))
      .catch(() => alert('Failed to submit transfer'));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-start space-x-4 bg-gray-100 p-6 rounded shadow-lg max-w-3xl mx-auto"
    style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Left Side Button */}
      <button className="bg-lime-400 text-black font-bold py-3 px-6 rounded-l-lg flex items-center space-x-2">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <span>LOCAL BANK</span>
        <span className="ml-2 font-bold">▶</span>
      </button>

      {/* Right Side Form */}
      <div className="bg-gray-200 p-6 rounded-r-lg w-full">
        {/* Recipient */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Recipient Name</label>
          <div className="flex">
            <input
              type="text"
              name="recipientName"
              placeholder="Enter recipient name"
              className="w-full p-3 rounded-l shadow-inner text-gray-700"
              onChange={handleChange}
              value={form.recipientName}
            />
            <button className="px-4 bg-gray-300 font-bold rounded-r shadow">Beneficiary</button>
          </div>
          {errors.recipientName && <p className="text-red-500 text-sm">{errors.recipientName}</p>}
        </div>

        {/* Account + Bank */}
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block font-bold mb-1">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              placeholder="Enter number"
              className="w-full p-3 rounded shadow-inner text-gray-700"
              onChange={handleChange}
              value={form.accountNumber}
            />
            {errors.accountNumber && <p className="text-red-500 text-sm">{errors.accountNumber}</p>}
          </div>
          <div className="w-1/2">
            <label className="block font-bold mb-1">Bank</label>
            <select
              name="bank"
              className="w-full p-3 rounded shadow-inner text-gray-700"
              onChange={handleChange}
              value={form.bank}
            >
              <option value="">Select Bank</option>
              {banks.map((bank, i) => (
                <option key={i} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
            {errors.bank && <p className="text-red-500 text-sm">{errors.bank}</p>}
          </div>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            className="w-full p-3 rounded shadow-inner text-gray-700"
            onChange={handleChange}
            value={form.amount}
          />
          {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
        </div>

        {/* Submit */}
        <button
          onClick={handleConfirm}
          className="w-full bg-gray-400 hover:bg-gray-500 text-black font-bold py-3 rounded shadow"
        >
          CONFIRM
        </button>
      </div>
    </div>
  );
}
