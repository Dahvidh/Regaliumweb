export default function WalletConnect() {
  return (
    <>
    <br/><br/>
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4"
     style={{ backgroundImage: "url('/bg.png')" }}
     >

      <div className="border border-gray-700 rounded-2xl p-6 w-full max-w-4xl relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">My Referral Link</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-orange-400 font-semibold">Rank Vip 1</span>
            <img src="/avatar.png" alt="User" className="h-8 w-8 rounded-full border border-gray-500" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="flex-1">
            <label className="block mb-1 font-semibold text-orange-400">Referral Code</label>
            <div className="flex items-center bg-gray-800 rounded px-2 py-2">
              <input type="text" placeholder="XXXXXX" className="flex-1 bg-transparent text-white outline-none" />
              <button className="ml-2 text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 4a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2h-1v-2h1V4H8v1H6V4z" /><path d="M4 8a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" /></svg>
              </button>
            </div>
          </div>

          <div className="flex-1">
            <label className="block mb-1 font-semibold text-orange-400">Referral Link</label>
            <div className="flex items-center bg-gray-800 rounded px-2 py-2">
              <input type="text" placeholder="https://ref.link" className="flex-1 bg-transparent text-white outline-none" />
              <button className="ml-2 text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 4a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2h-1v-2h1V4H8v1H6V4z" /><path d="M4 8a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" /></svg>
              </button>
            </div>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl">Invite Friends</button>
        </div>

        <hr className="border-gray-700 my-6" />

        <h3 className="text-xl font-bold mb-4">How it works</h3>

        <div className="flex flex-col md:flex-row md:space-x-6 text-sm">
          <div className="flex-1 mb-6 md:mb-0">
            <h4 className="text-orange-400 font-bold mb-2">REFERRAL PROGRAM →</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Earn More by Sharing Yomcoin</li>
              <li>• Invite friends, businesses, or partners to join the Yomcoin community and earn rewards every time they transact.</li>
              <li>• Simple Invite Process: Share your unique referral link with your network.</li>
              <li>• Earn Commission: Receive bonuses in Yomcoin when your referrals complete their first transaction.</li>
              <li>• No Limits: The more people you refer, the more rewards you earn — grow with us.</li>
              <li>• Track Earnings: Monitor your referrals and rewards in your user dashboard.</li>
            </ul>
          </div>

          <div className="flex-1">
            <h4 className="text-green-400 font-bold mb-2">REWARDS 🎁</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Be Rewarded for Every Transaction You Make</li>
              <li>• At Yomcoin, we believe in giving back to our users. Our reward system offers:</li>
              <li>• Yomcoin Incentives: Earn Yomcoin tokens for each successful cross-border payment.</li>
              <li>• Bonus for Volume Users: Get additional rewards as your transaction volume grows.</li>
              <li>• Seasonal Campaigns: Participate in community events and promotions to win more tokens and perks.</li>
              <li>• Use Your Rewards: Redeem Yomcoin for discounts on fees, swap for other assets, or hold as value.</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-500 text-xs mt-6 italic">The more friends you refer, the more Yomcoin you earn!</p>
      </div>
    </div>
    </>
  );
}
