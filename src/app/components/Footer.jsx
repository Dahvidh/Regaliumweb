import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa'; // TikTok icon

const Footer = () => {
  return (
    <footer
      className="bg-[#2b2a2a] text-white py-10"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo and description */}
        <div className="col-span-2 md:col-span-1">
          <img src="/ogo.png" alt="YomCoin Logo" className="h-18 w-auto" />
          <p className="text-sm mt-2">
            A secure and fast cross-border <br /> payments with blockchain
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-green-400 font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2 hover:text-green-400 transition"><a href="/">About</a></li>
            <li className="flex items-center gap-2 hover:text-green-400 transition"><a href="/mission">Mission</a></li>
            <li className="flex items-center gap-2 hover:text-green-400 transition"><a href="/vision">Vision</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-green-400 font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2 hover:text-green-400 transition"><a href="/whitepaper">Whitepaper</a></li>
            <li className="flex items-center gap-2 hover:text-green-400 transition"><a href="/pitch-deck">Pitch Deck</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-green-400 font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2 hover:text-green-400 transition"><a href="/terms">Terms and Condition</a></li>
            <li className="flex items-center gap-2 hover:text-green-400 transition"><a href="/privacy">Privacy policies</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-green-400 font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition"
              >
                <Facebook size={16} /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition"
              >
                <Twitter size={16} /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition"
              >
                <Instagram size={16} /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition"
              >
                <Linkedin size={16} /> Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition"
              >
                <FaTiktok size={16} /> TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
