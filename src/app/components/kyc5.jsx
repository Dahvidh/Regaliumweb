export default function KYCSuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 bg-[url('/bg-pattern.png')] bg-cover relative"
    style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute top-4 left-4">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="text-left w-full max-w-4xl mb-8">
        <h2 className="text-orange-500 font-bold text-xl mb-1">KYC Verification</h2>
        <p className="text-sm">Verify your identity</p>
      </div>

      <div className="bg-[#2a2a2a] border border-gray-600 p-8 rounded shadow-lg max-w-xl w-full text-center">
        <h3 className="text-lg font-bold mb-2">KYC Verification</h3>
        <p className="mb-2">Submitted Successfully</p>
        <p className="text-xl font-bold mb-6">Thank You</p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-bold">Continue</button>
      </div>

      <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded font-bold">Back</button>
    </div>
  );
}
