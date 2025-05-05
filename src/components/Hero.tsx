import React from 'react';
import { images } from '../assets/images';
import { ArrowRight, Shield, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-24">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fadeInUp">
            Premium Freight Solutions Across America
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 animate-fadeInUp animation-delay-300">
            Your trusted partner in nationwide freight and logistics services. Experience reliability and excellence in every mile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-500 justify-center">
            <a 
              href="#contact" 
              className="bg-gray-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-all duration-200 hover:bg-gray-600 hover:scale-105"
            >
              Request a Quote <ArrowRight size={18} className="ml-2" />
            </a>
            <button className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium transition-colors duration-200 hover:bg-white/10">
              Explore Services
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {[
              { icon: <Shield className="text-gray-300" size={24} />, title: "Secure Transport", description: "End-to-end cargo protection" },
              { icon: <Clock className="text-gray-300" size={24} />, title: "On-Time Delivery", description: "Punctuality guaranteed" },
              { icon: <MapPin className="text-gray-300" size={24} />, title: "Nationwide Coverage", description: "Service across all 48 states" }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  {feature.icon}
                  <h3 className="text-white font-semibold ml-2">{feature.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;