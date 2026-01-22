'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cryptoOptions = [
  { code: 'usdt', name: 'USDT (Tether)', icon: '🟩' },
  { code: 'btc', name: 'BTC (Bitcoin)', icon: '🟠' },
  { code: 'eth', name: 'ETH (Ethereum)', icon: '🟣' },
];

const fiatOptions = [
  { code: 'ngn', name: 'Nigeria (NGN)', flag: '🇳🇬' },
  { code: 'usd', name: 'United States (USD)', flag: '🇺🇸' },
  { code: 'eur', name: 'Euro (EUR)', flag: '🇪🇺' },
  { code: 'gbp', name: 'British Pound (GBP)', flag: '🇬🇧' },
];

export default function CryptoExchangeCalculator() {
  const [crypto, setCrypto] = useState('usdt');
  const [fiat, setFiat] = useState('ngn');
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState('');
  const [rate, setRate] = useState(null);

  const fetchRate = async () => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${fiat}`
      );
      const price = res.data[crypto][fiat];
      setRate(price);
      setConverted((amount * price).toLocaleString());
    } catch (err) {
      console.error('Rate fetch error:', err);
      setRate(null);
      setConverted('—');
    }
  };

  useEffect(() => {
    fetchRate();
  }, [crypto, fiat]);

  useEffect(() => {
    if (rate) {
      setConverted((amount * rate).toLocaleString());
    }
  }, [amount]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-3xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4 underline text-white">
          Crypto Exchange Rate Calculator
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex items-center w-full">
            <label className="text-green-400 font-semibold mr-2 whitespace-nowrap">
              Exchange Rate Crypto to Fiat
            </label>
            <select
              value={crypto}
              onChange={(e) => setCrypto(e.target.value)}
              className="w-full bg-gray-700 text-white p-2 rounded ml-2"
            >
              {cryptoOptions.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.icon} {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center w-full">
            <select
              value={fiat}
              onChange={(e) => setFiat(e.target.value)}
              className="w-full bg-gray-700 text-white p-2 rounded"
            >
              {fiatOptions.map((f) => (
                <option key={f.code} value={f.code}>
                  {f.flag} {f.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-white">You send ({crypto.toUpperCase()})</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-gray-700 text-white p-3 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm text-white">They receive ({fiat.toUpperCase()})</label>
          <input
            type="text"
            readOnly
            value={converted}
            className="w-full bg-gray-600 text-white p-3 rounded"
          />
        </div>

        <div className="text-green-400 text-sm">
          Today's rate: {crypto.toUpperCase()}1 = {rate?.toLocaleString()} {fiat.toUpperCase()} <br />
          <span className="text-xs text-green-300">No transfer fee</span>
        </div>
      </div>
    </div>
  );
}
