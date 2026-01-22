"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export default function WalletConnect() {
  const [address, setAddress] = useState(null);
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // ✅ Error state
  const router = useRouter();

  // ✅ Configure Providers
  const providerOptions = {
    injected: {
      display: { name: "MetaMask", description: "Connect with MetaMask" },
      package: null,
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: { infuraId: "5a54e7d824b244d2b9a0ceff0b6faf07" },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK,
      options: {
        appName: "My DApp",
        infuraId: "5a54e7d824b244d2b9a0ceff0b6faf07",
        rpc: "",
        chainId: 1,
        darkMode: true,
      },
    },
  };

  const web3Modal =
    typeof window !== "undefined"
      ? new Web3Modal({ cacheProvider: true, providerOptions })
      : null;

  // ✅ Connect Wallet
  const connectWallet = async () => {
    try {
      setLoading(true);
      setError(""); // clear old errors

      const instance = await web3Modal.connect();
      const web3Provider = new ethers.BrowserProvider(instance);
      const signer = await web3Provider.getSigner();
      const userAddress = await signer.getAddress();

      setProvider(web3Provider);
      setAddress(userAddress);
      setLoading(false);

      // ✅ Redirect after successful connection
      router.push("dashboard");
    } catch (err) {
      console.error("Wallet connection failed:", err);
      setLoading(false);
      setError("Failed to connect wallet. Please try again.");
    }
  };

  // ✅ Disconnect Wallet
  const disconnectWallet = () => {
    setProvider(null);
    setAddress(null);
    localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
  };

  // ✅ Auto-connect if wallet is cached
  useEffect(() => {
    if (web3Modal?.cachedProvider) {
      connectWallet();
    }
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black text-white"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="border border-gray-700 rounded-2xl p-6 w-full max-w-sm text-center">
        {loading ? (
          // ✅ Spinner while connecting
          <div className="flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-gray-400">Connecting to wallet...</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-2">Connect your web3 wallet</h2>
            <p className="text-gray-400 mb-4">
              Get started by connecting your preferred wallet below
            </p>
                    <div className="flex justify-center space-x-4 mb-6">
          <img src="data:image/png;base64,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" alt="Metamask" className="h-10 w-10" />
          <img src="data:image/png;base64,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" alt="Phanthom" className="h-10 w-10" />
          <img src="data:image/png;base64,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" alt="Coinbase" className="h-10 w-10" />
        </div>

            {/* ✅ Show error if connection fails */}
            {error && (
              <div className="bg-red-600 text-white text-sm p-2 rounded-lg mb-3">
                {error}
              </div>
            )}

            {address ? (
              <>
                <p className="text-green-400 mb-2">
                  Connected: {address.slice(0, 6)}...{address.slice(-4)}
                </p>
                <button
                  onClick={disconnectWallet}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-xl mb-4"
                >
                  Disconnect Wallet
                </button>
              </>
            ) : (
              <button
                onClick={connectWallet}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl mb-4"
              >
                Connect Wallet
              </button>
            )}

            <div className="flex items-center justify-center mb-4">
              <span className="border-t border-gray-600 w-1/3"></span>
              <span className="mx-2 text-gray-400">or</span>
              <span className="border-t border-gray-600 w-1/3"></span>
            </div>

            <p className="text-gray-400 mb-2">Continue with your email</p>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 rounded-xl bg-black border border-gray-600 text-white placeholder-gray-400"
            />
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl mb-4">
              Sign up or Log in
            </button>
          </>
        )}
      </div>
    </div>
  );
}
