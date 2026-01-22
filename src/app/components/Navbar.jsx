"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ethers } from "ethers";
import dynamic from "next/dynamic";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

let Web3Modal; // ✅ declare here, load later to prevent SSR errors

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState(null);
  const [networkName, setNetworkName] = useState(null);
  const [web3Modal, setWeb3Modal] = useState(null);
  const pathname = usePathname();

  // ✅ Load Web3Modal only in the browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      Web3Modal = require("web3modal").default;
      const modal = new Web3Modal({
        cacheProvider: true,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: { infuraId: "Y5a54e7d824b244d2b9a0ceff0b6faf07" },
          },
          coinbasewallet: {
            package: CoinbaseWalletSDK,
            options: { appName: "YourAppName", infuraId: "5a54e7d824b244d2b9a0ceff0b6faf07" },
          },
        },
      });
      setWeb3Modal(modal);
    }
  }, []);

  // ✅ Connect Wallet & Detect Network
  const connectWallet = async () => {
    try {
      if (!web3Modal) return;
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();
      setAddress(userAddress);

      const network = await provider.getNetwork();
      setNetworkName(network.name);

      instance.on("accountsChanged", (accounts) => {
        setAddress(accounts.length ? accounts[0] : null);
      });

      instance.on("chainChanged", async () => {
        const net = await provider.getNetwork();
        setNetworkName(net.name);
      });
    } catch (err) {
      console.error("Wallet Connection Error:", err);
    }
  };

  // ✅ Disconnect Wallet
  const disconnectWallet = async () => {
    if (web3Modal) await web3Modal.clearCachedProvider();
    setAddress(null);
    setNetworkName(null);
  };

  const handleWalletAction = () => {
    address ? disconnectWallet() : connectWallet();
  };

  // ✅ Auto-connect if cached
  useEffect(() => {
    if (web3Modal?.cachedProvider) connectWallet();
  }, [web3Modal]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Referral", href: "/referral" },
    { name: "KYC Verification", href: "/kyc" },
  ];

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-md relative z-50">
        <div className="flex items-center space-x-2">
          <img
            src="/wallet-icon.png"
            alt="Wallet Icon"
            className={`w-6 h-6 ${address ? "filter brightness-150" : "opacity-50"}`}
          />
          <img src="/yomcoin-logo.png" alt="Yomcoin Logo" className="w-20" />
        </div>

        {/* ✅ Desktop Nav */}
        <div className="hidden md:flex space-x-4 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={handleWalletAction}
            className="bg-green-400 text-black font-bold px-4 py-2 rounded hover:bg-green-500"
          >
            {address ? "Disconnect Wallet" : "Connect Wallet"}
          </button>
        </div>

        {/* ✅ Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ✅ Mobile Nav */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black flex flex-col items-start px-6 py-4 md:hidden space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleWalletAction}
              className="bg-green-400 text-black font-bold px-4 py-2 rounded hover:bg-green-500 w-full"
            >
              {address ? "Disconnect Wallet" : "Connect Wallet"}
            </button>
          </div>
        )}
      </nav>

      {address && (
        <div className="text-center mt-2 text-sm text-green-400">
          ✅ Connected: {address.slice(0, 6)}...{address.slice(-4)}
          <span className="ml-2 text-yellow-400">(Network: {networkName})</span>
        </div>
      )}
      <br /><br />
    </>
  );
};

export default Navbar;
