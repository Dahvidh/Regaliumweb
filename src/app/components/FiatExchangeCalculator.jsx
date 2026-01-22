
"use client";
import { useEffect, useState } from "react";
import Select from "react-select";

// A list of currencies with emoji flags (partial example, expand as needed)
const currencyOptions = [
  { value: "USD", label: "United States (USD)", flag: "🇺🇸" },
  { value: "NGN", label: "Nigeria (NGN)", flag: "🇳🇬" },
  { value: "EUR", label: "Euro (EUR)", flag: "🇪🇺" },
  { value: "GBP", label: "United Kingdom (GBP)", flag: "🇬🇧" },
  // ... add more currencies here
];

// Custom renderer for options (emoji + label)
const formatOption = (option) => (
  <div className="flex items-center space-x-2">
    <span>{option.flag}</span>
    <span>{option.label}</span>
  </div>
);

export default function CurrencyConverter() {
  const [base, setBase] = useState(currencyOptions[0]);
  const [target, setTarget] = useState(currencyOptions[1]);
  const [rate, setRate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [direction, setDirection] = useState("forward"); // forward: base→target, reverse otherwise

  // Fetch exchange rate dynamically
  useEffect(() => {
    async function fetchRate() {
      const res = await fetch(
        `https://api.exchangerate.host/latest?base=${base.value}&symbols=${target.value}`
      );
      const data = await res.json();
      setRate(data.rates[target.value]);
    }
    fetchRate();
  }, [base, target]);

  // Compute values
  const baseAmount = direction === "forward" ? amount : amount / rate;
  const targetAmount = direction === "forward" ? amount * rate : amount;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="bg-[#2b2b2b] rounded-lg p-6 max-w-xl w-full text-white">
        <h2 className="text-xl font-bold text-center mb-4 underline decoration-white">
          Fiat Exchange Rate Calculator
        </h2>

        {/* Dropdown selectors */}
        <div className="flex space-x-4 mb-6">
          <Select
            value={base}
            onChange={(opt) => { setBase(opt); setDirection("forward"); setAmount(1); }}
            options={currencyOptions}
            formatOptionLabel={formatOption}
            className="flex-1 text-black"
          />
          <div className="flex items-center text-xl">→</div>
          <Select
            value={target}
            onChange={(opt) => { setTarget(opt); setDirection("forward"); setAmount(1); }}
            options={currencyOptions}
            formatOptionLabel={formatOption}
            className="flex-1 text-black"
          />
        </div>

        {/* Input/Output */}
        <div className="flex space-x-4 mb-6">
          <div className="flex-1">
            <label className="text-sm text-gray-300 mb-1 block">
              You send ({base.value})
            </label>
            <input
              type="number"
              value={direction === "forward" ? baseAmount : targetAmount}
              onChange={(e) => {
                setAmount(parseFloat(e.target.value) || 0);
                setDirection("forward");
              }}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>
          <div className="flex-1">
            <label className="text-sm text-gray-300 mb-1 block">
              They receive ({target.value})
            </label>
            <input
              type="number"
              value={direction === "forward" ? targetAmount.toFixed(2) : baseAmount.toFixed(2)}
              onChange={(e) => {
                setAmount(parseFloat(e.target.value) || 0);
                setDirection("reverse");
              }}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>
        </div>

        {/* Rate Info */}
        <div className="text-sm text-green-400 border-t border-gray-700 pt-4">
          {rate
            ? `1 ${base.value} = ${rate.toFixed(4)} ${target.value}`
            : "Fetching latest rate..."}
          <br />
          <span className="text-green-300">No transfer fee</span>
        </div>
      </div>
    </div>
  );
}
