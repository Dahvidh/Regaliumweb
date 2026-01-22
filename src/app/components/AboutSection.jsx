const AboutSection = () => {
  return (
    <section
      className=" text-white px-6 py-16 text-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }} 
    >
      <div className="max-w-4xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          <span className="border-b-4 border-orange-500 pb-1">About Yomcoin</span>
        </h2>
        <p className="text-lg md:text-xl font-medium leading-relaxed mt-4 mb-6">
          Redefining Cross-Border Payments Through Blockchain Innovation<br />
          <span className="block mt-2">
            Yomcoin is a forward-thinking blockchain-based payment platform<br />
            created to simplify and modernize global money movement.
          </span>
        </p>
        <button className="bg-green-400 hover:bg-green-500 text-black font-bold px-6 py-3 rounded-md transition-all">
          Learn More
        </button>
      </div>

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 z-0"></div>
    </section>
  );
};

export default AboutSection;
