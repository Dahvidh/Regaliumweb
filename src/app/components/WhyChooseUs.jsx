"use client";

import Image from "next/image";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#0D0D0D] text-white py-16 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
          <p className="text-gray-300 leading-relaxed">
            We leverage the latest financial technologies to provide a smooth
            and user-friendly experience. Our services are designed for
            individuals and businesses looking for reliable payment solutions.
          </p>

          {/* Progress Bars */}
          <div className="space-y-6 mt-8">
            {[
              { label: "Transparency", value: "99.9%" },
              { label: "Empathy", value: "99.9%" },
              { label: "Integrity", value: "99.9%" },
              { label: "Support", value: "99.9%" },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full w-[99%]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/why-choose.png" // place your question-mark image here
              alt="Why Choose Us Illustration"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Optional background overlay for visual consistency */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('/network-bg.png')] bg-cover bg-center"></div>
      </div>
    </section>
  );
}
