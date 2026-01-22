export default function KYCStep3_PhotoUpload() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 bg-[url('/bg-pattern.png')] bg-cover"
    style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="bg-[#1a1a1a] w-full max-w-5xl rounded-lg overflow-hidden shadow-lg flex">

        {/* Left Sidebar */}
        <div className="w-1/3 bg-[#2a2a2a] p-6 relative">
          <h2 className="text-orange-500 font-bold text-lg mb-1">KYC Verification</h2>
          <p className="mb-6 text-sm">Verify your identity</p>

          <p className="mb-4 font-bold">Step 3</p>
          <p className="mb-6">Image/Photo Upload</p>

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
              <div className="h-6 w-6 rounded-full bg-green-600 text-black flex items-center justify-center text-xs font-bold">3</div>
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
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-2/3 bg-[#1a1a1a] p-8 relative">
          <p className="text-right mb-4">3/4</p>
          <h3 className="font-bold mb-6">Fill in your personal information.</h3>

          {/* Upload Box */}
          <div className="border border-gray-600 rounded bg-gray-800 flex flex-col items-center justify-center p-6 mb-6">
            <div className="w-40 h-24 bg-gray-700 rounded flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM4 16a8 8 0 1112 0H4z" />
              </svg>
            </div>
            <div className="mt-3 flex space-x-4">
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1 rounded text-sm">Browse Photo</button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1 rounded text-sm">Take Photo</button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mb-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded font-bold">Back</button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-bold">Next</button>
          </div>

          {/* Photo Instructions and Sample */}
          <div className="flex justify-between items-start">
            <div className="bg-gray-800 text-sm p-4 rounded border border-gray-600 w-1/2 mr-4">
              <p className="mb-2 font-bold">Photo Instruction</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Ensure your eyes and face are clearly shown</li>
                <li>Ensure your ears are clearly shown</li>
                <li>Ensure you use a white background</li>
              </ul>
            </div>

            <div className="w-24 h-28 border border-white">
              <img src="/kyc-photo-sample.jpg" alt="Photo Sample" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
