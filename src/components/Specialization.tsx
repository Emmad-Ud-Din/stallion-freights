import React from 'react';
import { Star } from 'lucide-react';
import reefer from '../assets/reefer.jpg';
import box_truck from '../assets/box_truck.png';
import conestoga from '../assets/conestoga.jpg';
import dryvan from '../assets/dryvan-red-truck.jpg';
import flatbed from '../assets/flatbed-truck-guide.jpg';
import hotshot from '../assets/hotshot.jpg';
import power from '../assets/poweronly.jpg';
import rgn from '../assets/rgn.jpeg';
import stepdeck from '../assets/stepdeck.jpg'

const trucks = [
  {
    title: "FLATBED/CONESTOGA",
    description: "48 & 53 FEET TRAILERS ONLY",
    image: flatbed
  },
  {
    title: "POWER ONLY",
    description: "48 & 53 FEET TRAILERS ONLY",
    image: power
  },
  {
    title: "REEFER",
    description: "53 FEET TRAILERS ONLY",
    image: reefer
  },
  {
    title: "DRY VAN",
    description: "53 FEET TRAILERS ONLY",
    image: dryvan
  },
  {
    title: "HOTSHOT",
    description: "ANY SIZE ANY TYPE",
    image: hotshot
  },
  {
    title: "BOX TRUCK",
    description: "ANY SIZE ANY TYPE",
    image: box_truck
  },
  {
    title: "STEP DECK",
    description: "53 FEET TRAILERS ONLY",
    image: stepdeck
  },
  {
    title: "RGN TRAILER",
    description: "ANY SIZE ANY TYPE",
    image: rgn
  },
  {
    title: "CONESTOGA",
    description: "ANY SIZE ANY TYPE",
    image: conestoga
  }
];

const Specialization = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Our Specialization</h2>
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
          OUR TRUCK DISPATCHERS SPECIALIZE IN ALL SORTS OF TRUCKS & TRAILERS
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trucks.map((truck, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={truck.image} 
                  alt={truck.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <h4 className="text-2xl font-bold text-white">{truck.title}</h4>
                  <div>
                    <p className="text-gray-300 mb-2">{truck.description}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact">
          <button className="bg-gray-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-gray-600 hover:scale-105">
            DISCOVER MORE →
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specialization;