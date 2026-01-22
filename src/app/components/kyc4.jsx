export default function KYCStep4_ReviewSubmit() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 bg-cover"
    style={{ backgroundImage: "url('/bg.png')" }}
    >
     
      <div className="bg-[#1a1a1a] w-full max-w-5xl rounded-lg overflow-hidden shadow-lg flex">

        {/* Left Sidebar */}
        <div className="w-1/3 bg-[#2a2a2a] p-6 relative">
          <h2 className="text-orange-500 font-bold text-lg mb-1">KYC Verification</h2>
          <p className="mb-6 text-sm">Verify your identity</p>

          <p className="mb-4 font-bold">Step 4</p>
          <p className="mb-6">Information Review</p>

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
              <div className="h-6 w-6 rounded-full bg-green-600 text-black flex items-center justify-center text-xs font-bold">4</div>
              <span>Information Review</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 flex space-x-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 bg-[#1a1a1a] p-8 relative">
          <p className="text-right mb-4">4/4</p>
          <h3 className="font-bold mb-6">Fill in your personal information.</h3>

          <div className="bg-gray-800 border border-gray-600 p-6 rounded mb-4 space-y-2">
            <p><strong>First Name</strong>: Billy</p>
            <p><strong>Last Name</strong>: Sulaiman</p>
            <p><strong>Email Address</strong>: billysule@gmail.com</p>
            <p><strong>Mean of Identification</strong>: International Passport</p>
            <p><strong>Identification Number</strong>: A098745609837</p>
            <p><strong>Date of Birth</strong>: 09/06/1948</p>
            <p><strong>Country</strong>: Ghana</p>
            <p><strong>City</strong>: Accra</p>
            <p><strong>Address</strong>: No 34 Ashsnti Kotanga road, Wuse</p>
          </div>

          <p className="text-sm text-gray-400 mb-6">Please verify your email through, before you submit.</p>

          <div className="flex justify-end space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded font-bold">Back</button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-bold">Submit</button>
          </div>
        </div>

      </div>
    </div>
  );
}
