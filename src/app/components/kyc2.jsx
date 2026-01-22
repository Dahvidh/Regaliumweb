export default function KYCStep2_IDVerification() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 bg-[url('/bg-pattern.png')] bg-cover"
    style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="bg-[#1a1a1a] w-full max-w-5xl rounded-lg overflow-hidden shadow-lg flex">

        {/* Left Sidebar */}
        <div className="w-1/3 bg-[#2a2a2a] p-6 relative">
          <h2 className="text-orange-500 font-bold text-lg mb-1">KYC Verification</h2>
          <p className="mb-6 text-sm">Verify your identity</p>

          <p className="mb-4 font-bold">Step 2</p>
          <p className="mb-6">Identity Verification</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-green-600 text-black flex items-center justify-center text-xs font-bold">1</div>
              <span>Personal Information</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-green-600 text-black flex items-center justify-center text-xs font-bold">2</div>
              <span>ID Verification</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-orange-500 text-black flex items-center justify-center text-xs font-bold">3</div>
              <span>Image/Photo Upload</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-orange-500 text-black flex items-center justify-center text-xs font-bold">4</div>
              <span>Information Review</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 flex space-x-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
          </div>

        </div>

        {/* Right Form Section */}
        <div className="w-2/3 bg-[#1a1a1a] p-8 relative">
          <p className="text-right mb-4">2/4</p>
          <h3 className="font-bold mb-6">Fill in your personal information.</h3>

          <div className="mb-4">
            <label className="block text-sm mb-1">Select Document issuer Country</label>
            <input type="text" placeholder="Enter document issuer country" className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700" />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2">Select Document Type (Choose One)</label>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded border border-gray-700">
                <input type="checkbox" className="accent-orange-500" />
                <label>National Identification Card e.g. NIN</label>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded border border-gray-700">
                <input type="checkbox" className="accent-orange-500" />
                <label>Drivers license</label>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded border border-gray-700">
                <input type="checkbox" className="accent-orange-500" />
                <label>International Passport</label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-1">Identification Number</label>
            <input type="text" placeholder="Enter your Identification number from your document" className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700" />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded font-bold">Back</button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-bold">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
}
