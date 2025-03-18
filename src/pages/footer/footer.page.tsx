import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search } from 'lucide-react';

const StickyNavbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Handle scroll event to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full bg-teal-900 ${isScrolled ? 'fixed top-0 shadow-md z-50' : ''}`}>
      {/* Top navigation links */}
      <div className="flex justify-end px-4 py-1 text-white text-sm space-x-4 bg-teal-900">
        <a href="#" className="hover:underline">SAVE MORE ON APP</a>
        <a href="#" className="hover:underline">BECOME A SELLER</a>
        <a href="#" className="hover:underline">HELP & SUPPORT</a>
        <a href="#" className="hover:underline">LOGIN</a>
        <a href="#" className="hover:underline">SIGN UP</a>
        <a href="#" className="hover:underline">भाषा परिवर्तन</a>
      </div>

      {/* Main navigation bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-2xl">
            <span className="flex items-center">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0zm0 28c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" fill="white"/>
              </svg>
              <span className="ml-2">Mero Jhola</span>
            </span>
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-6">
          <div className="relative bg-white">
            <input
              type="text"
              placeholder="Search in Mero Jhola"
              className="w-full py-2 px-4 rounded-lg focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-0 top-0 h-full bg-teal-400 hover:bg-teal-500 text-white px-4 rounded-r-lg">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center">
          <a href="/cart" className="text-white">
            <ShoppingCart size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;