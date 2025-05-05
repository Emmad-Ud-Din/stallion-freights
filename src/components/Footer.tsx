import React from 'react';
import { Truck, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Truck size={32} className="text-gray-300 mr-2" />
              <span className="text-xl font-bold">StallionFreights</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in nationwide freight and logistics, delivering excellence across America.
            </p>
            
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Ground Freight",
                "Warehousing",
                "Cross-Docking",
                "Intermodal",
                "Supply Chain Solutions",
                "Expedited Shipping"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "#home" },
                { name: "About Us", link: "#about" },
                { name: "Our Network", link: "#network" },
                { name: "Contact Us", link: "#contact" },
                { name: "Request a Quote", link: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact Info</h3>
            <ul className="space-y-4">
              {[
                { icon: <Mail size={16} className="text-gray-300" />, text: "stallionfreights@gmail.com" },
                { icon: <Phone size={16} className="text-gray-300" />, text: "+1 (737) 201-3141" }
              ].map((contact, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-3">{contact.icon}</span>
                  <span className="text-gray-400">{contact.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to Our Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
                />
                <button 
                  type="submit"
                  className="bg-gray-700 text-white px-4 py-2 rounded-r-md hover:bg-gray-600 transition-colors duration-200"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2019 StallionFreights. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-gray-400 transition-colors duration-200 mx-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-gray-400 transition-colors duration-200 mx-2">Terms of Service</a> | 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;