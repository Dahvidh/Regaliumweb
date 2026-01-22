"use client";
import { useState } from "react";

export default function ContactUsSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message })
      });
      setStatus("Message sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
     <section
      className="bg-black text-white min-h-screen  items-center justify-between px-6 lg:px-24 py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }} // 🔁 replace with your actual background image
    >
      <div className="text-center mb-8">
        <p className="text-green-500 font-semibold">HAVE A QUESTION?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
           <span className="underline decoration-orange-500">Contact Us</span>
        </h2>
      </div>

      <div className="max-w-xl mx-auto bg-gray-900 rounded-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md focus:outline-none bg-[#2b2a2a] " 
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md focus:outline-none bg-[#2b2a2a] "
          ></textarea>

          <div className="flex justify-between items-center">
            <p className="text-gray-300">Have a question? Send us a message!</p>
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
              Send
            </button>
          </div>

          {status && <p className="text-green-500 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
