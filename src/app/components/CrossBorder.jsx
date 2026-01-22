export default function CrossBorderSection() {
  return (
    <section
      style={{ backgroundImage: "url('/bg.png')" }}
      className="relative py-16 bg-cover bg-center overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="underline decoration-orange-500">
            Empower Your gaming Experience
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {/* Card 1 */}
        <div className="bg-gray-800 bg-opacity-90 shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-3 mb-4">
            <img
              src="/Vector.png"
              alt="Cross Border Payment"
              className="w-8 h-8"
            />
          </div>
          <h3 className="text-green-400 text-xl font-semibold mb-4">P2E</h3>
          <p className="text-white text-sm mb-4">
            "Play games for fun, earn with confidence."
          </p>
          <img
            src="/intersect.png"
            alt="Payment Illustration"
            className="w-90 h-50"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 bg-opacity-90 shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-3 mb-4">
            <img
              src="/Vector(2).png"
              alt="Reward and Referral"
              className="w-8 h-8"
            />
          </div>
          <h3 className="text-green-400  text-xl font-semibold mb-4">
            Reward And Referral
          </h3>
          <p className="text-white text-sm mb-4">
            "Join Our Referral Program And Earn Rewards For Every New Customer
            You Bring On Board - It's Simple And Rewarding!"
          </p>
          <img
            src="/Intersect1.png"
            alt="Reward Illustration"
            className="w-90 h-50"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 bg-opacity-90 shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-3 mb-4">
            <img
              src="/Vector(1).png"
              alt="Fiat to Crypto"
              className="w-8 h-8"
            />
          </div>
          <h3 className="text-green-400  text-xl font-semibold mb-4">
            Fiat to Fiat And Fiat to Crypto
          </h3>
          <p className="text-white text-sm mb-4">
            "Experience The Power Of Borderless Transactions With Our
            Fiat-To-Fiat And Fiat-To-Crypto Solutions, Designed For Speed,
            Security, And Convenience."
          </p>
          <img
            src="/Intersect2.png"
            alt="Fiat to Crypto"
            className="w-90 h-50"
          />
        </div>
      </div>
    </section>
  );
}
