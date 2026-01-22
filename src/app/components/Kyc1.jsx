export default function KYCVerification() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 bg-[url('/bg-pattern.png')] bg-cover"
    style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="bg-[#1a1a1a] w-full max-w-5xl rounded-lg overflow-hidden shadow-lg flex">

        {/* Left Sidebar */}
        <div className="w-1/3 bg-[#2a2a2a] p-6 relative">
          <h2 className="text-orange-500 font-bold text-lg mb-1">KYC Verification</h2>
          <p className="mb-6 text-sm">Verify your identity</p>

          <p className="mb-4 font-bold">Step 1</p>
          <p className="mb-6">Personal Information</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-green-600 text-black flex items-center justify-center text-xs font-bold">1</div>
              <span>Personal Information</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-orange-500 text-black flex items-center justify-center text-xs font-bold">2</div>
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
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
          </div>

        </div>

        {/* Right Form Section */}
        <div className="w-2/3 bg-[#1a1a1a] p-8 relative">
          <p className="text-right mb-4">1/4</p>
          <h3 className="font-bold mb-6">Fill in your personal information.</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Enter your first name" className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-700" />
            <input type="text" placeholder="Enter your last name" className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-700" />

            <input type="text" placeholder="Enter your phone number" className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-700" />
            <input type="email" placeholder="Enter your Email" className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-700" />

            <input type="text" placeholder="Enter your phone number" className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-700" />
            <input type="text" placeholder="Enter your Address" className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-700" />

            <input type="text" placeholder="Enter your Address" className="col-span-2 bg-gray-800 text-white px-3 py-2 rounded border border-gray-700" />
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
