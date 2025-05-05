import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo2.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-3">
          <img 
  src={logo}
  alt="StallionFreights Logo" 
  className="h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 object-contain"
/>



            <span className="font-bold text-2xl text-white ">
              StallionFreights
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About', 'Network', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-100 font-medium transition-colors duration-200 hover:text-white text-lg"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-200 hover:bg-gray-600 hover:scale-105 text-lg"
            >
              Get Quote
            </a>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-gray-900 shadow-lg">
            <div className="px-4 py-3 space-y-3">
              {['Home', 'Services', 'About', 'Network', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-100 font-medium transition-colors duration-200 hover:text-white py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact"
                className="block w-full bg-gray-700 text-white px-4 py-3 rounded-md font-medium text-center transition-all duration-200 hover:bg-gray-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;