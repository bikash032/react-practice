import { FaApple, FaGooglePlay } from "react-icons/fa";
import { SiHuawei } from "react-icons/si";

const MidFooter = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="flex justify-center mt-8 py-5">
        <button className="border-2 border-blue-600 px-6 py-2 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
          LOAD MORE
        </button>
      </div>
      <div className="container mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900">
              Customer Care
            </h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to Buy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* MeroJhola Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-900">MeroJhola</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About MeroJhola
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  MeroJhola Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Digital Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  MeroJhola Customer University
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  MeroJhola Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Review & Win
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Meet the Winners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  MeroJhola University
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sell on MeroJhola
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          {/* App Download */}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/40"
                alt="MeroJhola App"
                className="w-10 h-10"
              />
              <div>
                <p className="text-orange-500 font-semibold">Happy Shopping</p>
                <a href="#" className="text-blue-600 hover:underline">
                  Download App
                </a>
              </div>
            </div>

            {/* App Store Links */}
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="flex items-center space-x-2 border p-2 rounded-md shadow-md"
              >
                <FaApple size={20} />
                <span>App Store</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 border p-2 rounded-md shadow-md"
              >
                <FaGooglePlay size={20} />
                <span>Google Play</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 border p-2 rounded-md shadow-md"
              >
                <SiHuawei size={20} />
                <span>AppGallery</span>
              </a>
            </div>
          </div>
        </div>

        {/* Load More Button */}
      </div>
    </footer>
  );
};

export default MidFooter;
