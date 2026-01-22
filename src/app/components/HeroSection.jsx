import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative  text-white min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlay for subtle darkening */}
      <div className="absolute inset-0 z-0"></div>

      {/* Left Content */}
      <div className="max-w-xl z-10">
        <h4 className="text-lg font-medium mb-2"></h4>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Regalium
          <br />
          {/*<br />
          stake and trade digital value through games.*/}
        </h1>
        <p className="text-lg font-medium text-gray-300 mb-6">
          A mobile-first GameFi ecosystem enabling players in emerging markets
          <br />
          to earn, stake and trade digital value through games.
        </p>

        <Link href="/signin">
          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition-all">
            Connect Wallet
          </button>
        </Link>
      </div>

      {/* Right Card */}
      <div className="relative mt-12 lg:mt-0 z-10">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/e.jpg"
            alt="YomCoin Card"
            width={500}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
