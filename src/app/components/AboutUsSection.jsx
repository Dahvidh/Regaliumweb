"use client";

import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="bg-[#0D0D0D] text-white py-16 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Us</h2>
          <p className="text-green-400 text-lg md:text-xl font-semibold">
            Making GameFi fun and accessible to everyone globally.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Image */}
          <div className="flex-1 w-full md:w-1/2">
            <Image
              src="/about-image.png"
              alt="Cross-border payments illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 w-full md:w-1/2 text-gray-300 space-y-6">
            <p>
              At <span className="text-green-400 font-semibold">Regalium</span>,
              we are working on making gaming truly rewarding by making players
              earn as they play. Our focus is on making rewards withdrawable,
              swappable, and more accessible for everyone—whether it’s gamers or
              just people who'd like to hodl.
            </p>

            <p className="text-white font-semibold">
              Traditional games reward players with coins that can only be used
              in-game making it unprofitable and boring in the long run. Gamers
              only earn from games when they sell their assets or their
              accounts.
            </p>

            <p>
              <span className="text-green-400 font-semibold">Regalium</span>{" "}
              eliminates these barriers by leveraging blockchain technology to
              provide a withdrable reward token that can be swapped with other
              tokens under the ethereum ecosystem, could be used to purchase
              in-game assets, and it provides low-cost transactions outside the
              game worldwide.
            </p>

            <p className="text-white font-semibold">
              We are committed to building a GameFI ecosystem that is not only
              reliable but also includes—unlocking opportunities and connecting
              communities in emerging markets across the globe.
            </p>
          </div>
        </div>
      </div>

      {/* Background effect (optional subtle lines/patterns) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('/network-bg.png')] bg-cover bg-center"></div>
      </div>
    </section>
  );
}
