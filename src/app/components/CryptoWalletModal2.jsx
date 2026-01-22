"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const coins = ["BTC", "ETH", "USDT"];
const fiats = ["USD", "NGN", "YEN"];

const CryptoWalletModalTwo = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulated validations
      if (data.address.length < 10) throw new Error("Invalid address");

      await axios.post("https://your-backend.com/api/transfer", {
        from: data.from,
        to: data.to,
        address: data.address,
        type: "fiat",
      });

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        document.getElementById("modal-two").style.display = "none";
      }, 1500);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="modal-two"
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-gray-200 rounded-lg p-6 w-full max-w-2xl flex"
      >
        {/* Left Section */}
        <div className="bg-green-400 text-black font-bold rounded-l-lg py-4 px-6 flex items-center gap-3">
          <img src="/crypto-icon.svg" alt="Crypto Icon" className="w-8 h-8" />
          CRYPTO WALLET
          <span className="text-xl ml-2">▶</span>
        </div>

        {/* Right Section */}
        <div className="ml-[-20px] bg-gray-200 rounded-r-lg p-6 w-full space-y-4 shadow-md">
          <div>
            <label className="block font-semibold mb-1">From</label>
            <select
              {...register("from", { required: true })}
              className="w-full rounded-md p-3 text-gray-700 bg-gray-500 shadow-md"
            >
              <option value="">Select</option>
              {coins.map((coin) => (
                <option key={coin} value={coin}>{coin}</option>
              ))}
            </select>
            {errors.from && <p className="text-red-500 text-sm">Crypto is required</p>}
            <p className="text-xs text-gray-600 mt-1">Available Balance 0 | 0.00001–3 Max</p>
          </div>

          <div>
            <label className="block font-semibold mb-1">To</label>
            <select
              {...register("to", { required: true })}
              className="w-full rounded-md p-3 text-gray-700 bg-gray-500 shadow-md"
            >
              <option value="">Select</option>
              {fiats.map((fiat) => (
                <option key={fiat} value={fiat}>{fiat}</option>
              ))}
            </select>
            {errors.to && <p className="text-red-500 text-sm">Fiat is required</p>}
            <p className="text-xs text-gray-600 mt-1">Yen</p>
          </div>

          <div>
            <label className="block font-semibold mb-1">Deposit Address</label>
            <input
              {...register("address", { required: true })}
              type="text"
              placeholder="Enter address"
              className="w-full rounded-md p-3 text-gray-700 bg-gray-500 placeholder:text-gray-300 shadow-md"
            />
            {errors.address && <p className="text-red-500 text-sm">Address is required</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-gray-400 text-black font-bold py-3 rounded-md shadow-md"
          >
            {loading ? "Processing..." : success ? "Confirmed ✅" : "CONFIRM"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CryptoWalletModalTwo;
