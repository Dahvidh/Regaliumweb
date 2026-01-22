"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export default function Header() {
  const [address, setAddress] = useState(null);
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [networkName, setNetworkName] = useState("");
  const router = useRouter();

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

  const connectWallet = async () => {
    try {
      setLoading(true);
      setError("");

      const instance = await web3Modal.connect();
      const web3Provider = new ethers.BrowserProvider(instance);
      const signer = await web3Provider.getSigner();
      const userAddress = await signer.getAddress();
      const network = await web3Provider.getNetwork();

      setProvider(web3Provider);
      setAddress(userAddress);
      setNetworkName(network.name);
      setLoading(false);

      // Redirect first to signin page, then to dashboard after successful login
      router.push("");
    } catch (err) {
      console.error("Wallet connection failed:", err);
      setLoading(false);
      setError("Failed to connect wallet. Please try again.");
    }
  };

  const disconnectWallet = () => {
    setProvider(null);
    setAddress(null);
    setNetworkName("");
    localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
  };

  const handleWalletAction = () => {
    if (address) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };

  useEffect(() => {
    if (web3Modal?.cachedProvider) {
      connectWallet();
    }
  }, []);

  return (
    <header
      className="absolute top-0 left-0 w-full z-50 px-6 lg:px-24 py-6 flex items-center justify-between bg-transparent"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="flex items-center space-x-2">
        <img
          src="Regalium-removebg-preview.png"
          alt="Regalium Logo"
          className={`h-8 w-auto ${address ? "filter brightness-150" : "opacity-60"}`}
        />
      </div>

      <nav className="hidden md:flex items-center space-x-8 bg-white rounded-full px-6 py-2 text-black font-semibold shadow">
        <Link href="/">Home</Link>
        <Link href="/buy">Buy</Link>
        <Link href="/swap">Swap</Link>
        <Link href="/team">Our Team</Link>
        <Link href="/roadmap">Roadmap</Link>
        <Link href="/whitepaper">Whitepaper</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>

      <button
        onClick={handleWalletAction}
        disabled={loading}
        className={`px-5 py-2 rounded-md font-semibold ${
          address
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-green-600 hover:bg-green-700 text-white"
        }`}
      >
        {loading
          ? "Connecting..."
          : address
            ? `${address.slice(0, 6)}...${address.slice(-4)}`
            : "Connect Wallet"}
      </button>

      {address && (
        <div className="absolute right-6 top-full mt-2 text-xs text-green-300 bg-black px-3 py-1 rounded-md shadow">
          ✅ {address.slice(0, 6)}...{address.slice(-4)}
          <span className="ml-2 text-yellow-400">(Network: {networkName})</span>
        </div>
      )}

      {error && (
        <div className="absolute right-6 top-full mt-12 text-xs text-red-400 bg-black px-3 py-1 rounded-md shadow">
          {error}
        </div>
      )}
    </header>
  );
}
