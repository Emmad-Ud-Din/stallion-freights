import React from 'react';
import { Ship, Truck, Package, BarChart3, Building, Plane } from 'lucide-react';
import { services } from '../assets/serviceImage';

const Services = () => {
  const servicesList = [
    {
      icon: <Truck size={36} className="text-gray-300" />,
      title: "Ground Freight",
      description: "Full truckload (FTL) and less than truckload (LTL) shipping solutions across the United States.",
      image: services.groundF
    },
    {
      icon: <Package size={36} className="text-gray-300" />,
      title: "Warehousing",
      description: "Secure storage facilities with inventory management and distribution services.",
      image: services.warehouse
    },
    {
      icon: <BarChart3 size={36} className="text-gray-300" />,
      title: "Supply Chain",
      description: "End-to-end supply chain solutions with real-time tracking and optimization.",
      image: services.supply
    },
    {
      icon: <Building size={36} className="text-gray-300" />,
      title: "Cross-Docking",
      description: "Efficient transfer of products between trucks to minimize storage time.",
      image: services.cDock
    },
    {
      icon: <Ship size={36} className="text-gray-300" />,
      title: "Intermodal",
      description: "Combined transportation solutions for cost-effective shipping.",
      image: services.intermodal
    },
    {
      icon: <Plane size={36} className="text-gray-300" />,
      title: "Expedited",
      description: "Fast and reliable delivery for time-sensitive shipments.",
      image: services.expedited
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive logistics solutions tailored to your business needs, ensuring efficient movement of goods across the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-900 p-6 rounded-lg border border-gray-700 overflow-hidden group hover:bg-gray-700 transition-all duration-300"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
              />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
        <a href="#contact">
  <button className="bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-gray-600 hover:scale-105">
    Learn More About Our Services
  </button>
</a>

        </div>
      </div>
    </section>
  );
};

export default Services;
