export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 space-y-8"
     style={{ backgroundImage: "url('/bg.png')" }}
     >
      <br/><br/>
      <h3 className="text-green-400 text-2xl font-bold">Privacy Policy</h3>

      {/* Section 1 */}
      <div className="space-y-4">
        <h3 className="underline text-lg font-semibold">1. Introduction</h3>
        <div className="bg-[#5B3626] text-white p-4 rounded-md max-w-xl">
          At Yomcoin, we are committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, and protect your personal information when
          you use our website and services.
        </div>
      </div>

      {/* Section 2 */}
      <div className="space-y-4">
        <h3 className="underline text-lg font-semibold">2. Information We Collect</h3>
        <div className="bg-[#203126] text-white p-4 rounded-md max-w-xl">
          <p>We collect personal information when you:</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Create an account on the Yomcoin platform</li>
            <li>Use our service to send or receive funds</li>
            <li>Interact with our website or customer support</li>
          </ul>
          <p className="mt-2">This may include:</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>Personal identification details (e.g., name, email address, date of birth)</li>
            <li>Financial information (e.g., transaction history, wallet addresses)</li>
            <li>Technical information (e.g., IP address, browser type, device details)</li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
            <div className="space-y-4">
        <h3 className="underline text-lg font-semibold">3. How We Use Your Information</h3>
        <div className="bg-[#5B3626] text-white p-4 rounded-md max-w-xl">
        We use yourt information for the following purposes:
        <p>To provide and manage services</p>
        <p>To verify your identity and secure your transactions</p>
        <p>To communicate wityh you effectively regaarding updatres,  promotions and customer support</p>
        <p>To comply with legal and regulatory requirements</p>
                </div>
      </div>

      {/* Section 4 */}

      <div className="space-y-4">
        <h3 className="underline text-lg font-semibold">4. Data Security</h3>
        <div className="bg-[#203126] text-white p-4 rounded-md max-w-xl">
          <p>We use industry-standard encryption and security practices to protect your personal information. However, No data transmission over over the internet is completely secure amd we cannot guartantee the security of your data if exposed </p>
         
        </div>
      </div>

      {/* Section 5 */}
      <div className="space-y-4">
        <h3 className="underline text-lg font-semibold">5. Sharing Your Information</h3>
        <div className="bg-[#5B3626] text-white p-4 rounded-md max-w-xl">
          We do not sell or rent your information to third parties. We may share your information with trusted partners or  service providers who assist in delivering our services, under strict donfidentiality agreements
          
        </div>
      </div>


      {/* Section 6 */}

      <div className="space-y-4">
        <h3 className="underline text-lg font-semibold">6. Cookies</h3>
        <div className="bg-[#203126] text-white p-4 rounded-md max-w-xl">
          <p>Our website may use cookiesto enhance usert experience, analyze website traffic and personalize content. You can disable cookies through your browser settings,
            but this may affect your ability to use some features on our platform
          </p>
         
        </div>
      </div>


      {/* Section 7 */}
            <div className="space-y-4">
        <h3 className="underline text-lg font-semibold">7. Your Rights</h3>
        <div className="bg-[#5B3626] text-white p-4 rounded-md max-w-xl">
       You have the right to:
        <p>Access, Update or delete personal information</p>
        <p>Opt-out of promotional communications</p>
        <p>Withdraw consent to processing your data (where applicable)</p>
       
                </div>
      </div>
      {/* Section 8*/}

      <div className="space-y-4">
        <h3 className="underline text-lg font-semibold">8 Retention of Data </h3>
        <div className="bg-[#203126] text-white p-4 rounded-md max-w-xl">
          <p>You retain your personal information for as long as necessary to provide services,
            comply with legal obligations or resolve disputes..
          </p>
         
        </div>
      </div>

      {/* Section 9*/}
      <div className="space-y-4">
        <h3 className="underline text-lg font-semibold">9 Changes to Privacy Policy </h3>
        <div className="bg-[#5B3626] text-white p-4 rounded-md max-w-xl">
          We may Update this Privacy Policy from time to time.
         <p> Any changes will be posted on this page, and the updated effective date will be clearly stated. </p>
        </div>
      </div>

      {/* Section 10*/}

      <div className="space-y-4">
        <h3 className="underline text-lg font-semibold">10. Contact Us </h3>
        <div className="bg-[#203126] text-white p-4 rounded-md max-w-xl">
          <p>If you have any questions  or concerns about our Privacy Policy, please contact us at info@yomcoin.com
          </p>
         
        </div>
      </div>
    </div>
  );
}
