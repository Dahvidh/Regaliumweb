"use client";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "David O. Freelancer",
      text: "I've been using this platform for international payments, and it's been a game-changer! Transactions are completed within minutes, and the fees are way lower than traditional banks. Highly recommended!",
      image: "/Ellipse 9.png",
      color: "bg-green-700"
    },
    {
      name: "Sophia M. Entrepreneur",
      text: "Yomcoin has simplified my cross-border transactions. The speed and low fees are unmatched.",
      image: "/Ellipse 9-1.png",
      color: "bg-purple-700"
    },
    {
      name: "John D. Business Owner",
      text: "Excellent platform for sending money globally. Transparent fees and fast service.",
      image: "Ellipse 9-2.png",
      color: "bg-blue-700"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
 <section
      className="bg-black text-white min-h-screen  items-center justify-between px-6 lg:px-24 py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }} 
    >
      <div className="text-center mb-12">
        <p className="text-green-500 font-semibold">TESTIMONIALS</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          <span className="underline decoration-orange-500"> What our customers say</span>
        </h2>
      </div>

      <div className="flex justify-center">
        <div className={`max-w-xl text-white rounded-xl p-6 flex items-center space-x-4 transition-colors duration-500 ${testimonials[index].color}`}>
          <img src={testimonials[index].image} alt={testimonials[index].name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <p className="mb-4">"{testimonials[index].text}"</p>
            <div className="flex items-center mb-2">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="italic text-orange-300">- {testimonials[index].name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
