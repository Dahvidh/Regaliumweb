"use client";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Yomcoin?",
      answer: "Yomcoin is a digital currency designed to simplify cross-border payments with minimal fees and fast transaction speeds."
    },
    {
      question: "How does Yomcoin enable cross-border payments?",
      answer: "Yomcoin leverages blockchain technology to allow seamless transactions between users in different countries without traditional banking delays."
    },
    {
      question: "How does Yomcoin work with fiat-to-fiat and fiat-to-crypto transactions?",
      answer: "Yomcoin acts as an intermediary token for converting between fiat currencies and crypto, facilitating both types of transactions."
    },
    {
      question: "What role does Yomcoin play in cross-border transactions?",
      answer: "It serves as a stable, fast, and cost-effective medium for international payments, bypassing expensive remittance systems."
    },
    {
      question: "How does the value of Yomcoin stay stable?",
      answer: "Yomcoin's stability is supported by liquidity pools, market mechanisms, and partnerships with regulated exchanges."
    },
    {
      question: "How do I start using Yomcoin for cross-border transactions?",
      answer: "You can start by creating a wallet, purchasing Yomcoin from supported platforms, and sending funds globally within minutes."
    },
    {
      question: "Are there transaction fees when using Yomcoin?",
      answer: "Yes, but Yomcoin's transaction fees are significantly lower compared to traditional financial systems."
    }
  ];

  return (
   <section
      className="bg-black text-white min-h-screen  items-center justify-between px-6 lg:px-24 py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="text-center mb-12">
        <p className="text-green-500 font-semibold">FREQUENTLY ASKED QUESTIONS</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          <span className="underline decoration-orange-500">Questions And Answers</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl p-6 text-white">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 py-4">
            <button
              className="flex justify-between items-center w-full text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-green-500 text-xl">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
