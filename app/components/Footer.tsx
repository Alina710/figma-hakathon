import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E1E3E5] text-gray-500 py-10 px-6 md:px-16 mt-32">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/Logo icon.png" alt="Logo" width={40} height={40} />
            <h1 className="text-xl md:text-2xl font-semibold text-black">Comforty</h1>
          </div>
          <p className="text-sm md:text-base">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Facebook" className="text-gray-600 hover:text-[#007580]">
              <FaFacebook size={18} />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-600 hover:text-teal-500">
              <FaInstagram size={18} />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-600 hover:text-teal-500">
              <FaTwitter size={18} />
            </Link>
            <Link href="#" aria-label="Pinterest" className="text-gray-600 hover:text-teal-500">
              <FaPinterest size={18} />
            </Link>
            <Link href="#" aria-label="YouTube" className="text-gray-600 hover:text-teal-500">
              <FaYoutube size={18} />
            </Link>
          </div>
        </div>

        {/* Category Section */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">Category</h2>
          <nav>
            <ul className="space-y-2">
              {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-teal-500 text-sm md:text-base">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">Support</h2>
          <nav>
            <ul className="space-y-2">
              {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-teal-500 text-sm md:text-base">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">Newsletter</h2>
          <form className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
            />
            <button
              type="submit"
              className="text-white px-4 py-2 rounded bg-[#029FAE] transition hover:bg-[#007580]"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm mt-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">
          © 2021 - Blogy - Designed & Developed by <span className="text-black">Zakirsoft</span>
        </p>
        <div className="flex justify-center space-x-4 ">
        <Image src="/Group 11.png" alt="MasterCard" width={40} height={25} />
          <Image src="/vector 2.png" alt="american-express" width={40} height={25} />
          <Image src="/Union 2.png" alt="Visa" width={40} height={25} />
          <Image src="/Group 12.png" alt="PayPal" width={40} height={25} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
