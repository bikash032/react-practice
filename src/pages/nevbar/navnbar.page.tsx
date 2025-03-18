import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

const MeroJholaFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-8 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Experience Section */}
          <div>
            <h3 className="text-gray-700 font-medium text-lg mb-4">
              Experience Hassle-Free Online Shopping in Nepal with MeroJhola
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              E-commerce has worked over the last decade to create a seamless
              and more convenient. It is evident that customers are actually
              switching to the online shopping platform. MeroJhola, the Nepal
              shopping store, brings a whole new concept by showcasing a variety
              of products, all under one roof. Not only does it fulfill clothing
              necessities of both men and women, but it also has separate
              sections for appliances like air conditioners, LED TVs and so much
              more. Simply users save hundreds by shopping at MeroJhola. Why go
              to Hamro, Deli, Carebit, Nitish, etc. and give yourself the best
              electronic deals.
            </p>
          </div>

          {/* Convenient Shopping Section */}
          <div>
            <h3 className="text-gray-700 font-medium text-lg mb-4">
              Convenient Online Shopping in Nepal
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              MeroJhola is the ultimate Nepali ecommerce website offering a
              solution for all needs of the customers. It has variety and
              assorted range of products in categories like fashion,
              electronics, mobile phones, home and more.
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-gray-700 font-medium text-lg mb-4">
              Top Categories & Brands
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <h4 className="text-gray-700 font-medium mb-2">
                  NEW MOBILE PHONES IN NEPAL
                </h4>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>Xiaomi Mobile, Realme, Xiaomi Mobile</li>
                  <li>Nokia Mobile, Oppo Mobile</li>
                  <li>Samsung Mobile, OnePlus Mobile</li>
                  <li>iPhone Nepal, Poco Nepal, Vivo Mobile</li>
                  <li>Colors Mobile, Gionee Mobile</li>
                  <li>Micromax Mobile, Huawei Mobile</li>
                  <li>Lenovo Mobile, Motorola Mobile</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-700 font-medium mb-2">
                  LATEST LAPTOPS
                </h4>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>Dell Laptop, Samsung Laptop</li>
                  <li>Asus Laptop, Acer Laptop, HP Laptop</li>
                  <li>i3 Laptop</li>
                </ul>
                <h4 className="text-gray-700 font-medium mt-4 mb-2">
                  LED TVS NEPAL
                </h4>
                <ul className="text-gray-600 text-xs space-y-1">
                  <li>Samsung LED TV, Sony LED TV</li>
                  <li>LG LED TV</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company Info Section */}
          <div>
            <h3 className="text-gray-700 font-medium text-lg mb-4">
              Verified by
            </h3>
            <img
              src="/path-to-pci-dss-logo.png"
              alt="PCI DSS"
              className="h-8 mb-6"
            />

            <h3 className="text-gray-700 font-medium text-lg mb-2">
              Payment Methods
            </h3>
            <div className="flex space-x-2 mb-6">
              <img src="/path-to-esewa-logo.png" alt="eSewa" className="h-6" />
              <img src="/path-to-visa-logo.png" alt="Visa" className="h-6" />
              <img
                src="/path-to-mastercard-logo.png"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="/path-to-ime-pay-logo.png"
                alt="IME Pay"
                className="h-6"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-gray-700 font-medium text-lg mb-2">
                MeroJhola International
              </h3>
              <div className="flex space-x-2">
                <img
                  src="data:image/png;base64,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"
                  alt="Pakistan"
                  className="h-6 w-6 rounded-full"
                />
                <img
                  src="/path-to-bangladesh-flag.png"
                  alt="Bangladesh"
                  className="h-6 w-6 rounded-full"
                />
                <img
                  src="/path-to-sri-lanka-flag.png"
                  alt="Sri Lanka"
                  className="h-6 w-6 rounded-full"
                />
                <img
                  src="/path-to-myanmar-flag.png"
                  alt="Myanmar"
                  className="h-6 w-6 rounded-full"
                />
                <img
                  src="/path-to-nepal-flag.png"
                  alt="Nepal"
                  className="h-6 w-6 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <h4 className="text-gray-700 font-medium">Follow Us</h4>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaGlobe size={20} />
            </a>
          </div>
          <div className="text-gray-600 text-sm">© MeroJhola 2025</div>
        </div>
      </div>
    </footer>
  );
};

export default MeroJholaFooter;
