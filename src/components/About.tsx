import React from 'react';
import { services } from '../assets/serviceImage';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Excellence in American Freight for 5+ Years</h2>
            <p className="text-gray-300 mb-6">
              StallionFreights is a leading provider of freight and logistics solutions across the United States. For more than 5 years, we've built our reputation on reliability, efficiency, and customer satisfaction.
            </p>
            <p className="text-gray-300 mb-8">
              Our team of experienced professionals is committed to delivering seamless freight services across the nation, ensuring your cargo reaches its destination safely and on time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "48 States Coverage",
                "24/7 Customer Support",
                "Real-time Tracking",
                "Custom Solutions",
                "Quality Management",
                "Modern Fleet"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-gray-300 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact">
            <button className="bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-gray-600 hover:scale-105">
              Learn More About Us
            </button>
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={services.hero2} 
                alt="StallionFreights Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gray-700 rounded-lg -z-10 transform translate-x-6 translate-y-6"></div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5+", label: "Years of Experience" },
            { value: "50+", label: "Team Members" },
            { value: "100K+", label: "Deliveries Annually" },
            { value: "99%", label: "On-time Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;