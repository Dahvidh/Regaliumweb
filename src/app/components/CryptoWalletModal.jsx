'use client';

import { useState } from 'react';

export default function CryptoWalletModal() {
  const [coin, setCoin] = useState('');
  const [network, setNetwork] = useState('USDT');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!coin) newErrors.coin = 'Please enter a coin';
    if (!address) newErrors.address = 'Please enter a deposit address';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (!validateForm()) return;

    // Sample payload
    const payload = {
      coin,
      network,
      address
    };

    // Send to your API
    fetch('/api/crypto-wallet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => alert('Wallet submitted successfully'))
      .catch(err => alert('Error submitting wallet'));
  };

  return (
    <div className="flex items-start space-x-4 bg-gray-100 p-6 rounded shadow-lg max-w-3xl mx-auto"
    style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Left Button */}
      <button className="bg-lime-400 text-black font-bold py-3 px-6 rounded-l-lg flex items-center space-x-2">
        <img src="/crypto-icon.svg" alt="crypto icon" className="w-6 h-6" />
        <span>CRYPTO WALLET</span>
        <span className="ml-2 font-bold">◀</span>
      </button>

      {/* Modal Form */}
      <div className="bg-gray-200 p-6 rounded-r-lg w-full">
        <div className="mb-4">
          <label className="block font-bold mb-1">Select Coin</label>
          <input
            type="text"
            placeholder="Search coin"
            className="w-full p-3 rounded shadow-inner text-gray-700"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
          />
          {errors.coin && <p className="text-red-500 text-sm">{errors.coin}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-1">Search Network</label>
          <input
            type="text"
            value={network}
            disabled
            className="w-full p-3 rounded shadow-inner text-gray-700 bg-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-1">Deposit Address</label>
          <input
            type="text"
            placeholder="Enter address"
            className="w-full p-3 rounded shadow-inner text-gray-700"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

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
