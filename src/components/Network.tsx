import React from 'react';
import { imagesC } from '../assets/imagesC';
import { MapPin } from 'lucide-react';

const Network = () => {
  const locations = [
    { region: "West Coast", cities: ["Los Angeles", "Seattle", "Portland", "San Francisco", "San Diego"], image:imagesC.westcoast },
    { region: "Central", cities: ["Chicago", "Dallas", "Houston", "Denver", "Kansas City"],image:imagesC.central },
    { region: "East Coast", cities: ["New York", "Boston", "Miami", "Atlanta", "Philadelphia"], image:imagesC.eastcoast },
    { region: "Midwest", cities: ["Detroit", "Minneapolis", "Cleveland", "Indianapolis", "St. Louis"], image:imagesC.midwest  }
  ];

  return (
    <section id="network" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our National Network</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            With strategic locations across the United States, we ensure efficient logistics operations and optimal routing for your cargo.
          </p>
        </div>
        
        <div className="relative mb-16 overflow-hidden rounded-lg shadow-2xl">
         
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent">
            <h3 className="text-2xl font-semibold mb-2">Coast-to-Coast Coverage</h3>
            <p className="text-gray-300">
              Our extensive network covers all 48 contiguous states, providing seamless logistics solutions nationwide.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {locations.map((location, index) => (
  <div
    key={index}
    className="relative p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 overflow-hidden"
  >
    {/* Background Image */}
    <img
      src={location.image}
      alt={location.region}
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
    />
    
    {/* Overlay content */}
    <div className="relative z-10">
      <h3 className="text-xl font-semibold mb-4 text-gray-300">{location.region}</h3>
      <ul className="space-y-2">
        {location.cities.map((city, cityIndex) => (
          <li key={cityIndex} className="flex items-center">
            <MapPin size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-300">{city}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
))}


        </div>
      </div>
    </section>
  );
};

export default Network;