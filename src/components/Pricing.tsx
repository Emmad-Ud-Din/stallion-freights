import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    title: "STANDARD (SEMI-TRUCKS)",
    price: "$250",
    period: "per week",
    percentage: "5% PER LOAD",
    features: [
      "Dispatching with in Business Hours",
      "Finding & Assigning Loads",
      "Dedicated Personal Dispatcher",
      "Detention & Lumper Fee",
      "Negotiating Best Pay Rates",
      "Negotiating Quick Pay Rates",
      "Quick Pay Assistance",
      "Carrier Packets",
      "24/7 Dispatch",
      "Factoring Invoices",
      "The Credit Score Of The Broker",
      "Driver Assistance",
      "Owner Operator Assistance",
      "BOX TRUCK & HOTSHOT"
    ]
  },
  {
    title: "PREMIUM (SEMI-TRUCKS)",
    price: "$300",
    period: "per week",
    percentage: "6% PER LOAD",
    features: [
      "24/7 Dispatch",
      "Finding & Assigning Loads",
      "Dedicated Personal Dispatcher",
      "Detention & Lumper Fee",
      "Dispatching with in Business Hours",
      "Negotiating Best Pay Rates",
      "Negotiating Quick Pay Rates",
      "Quick Pay Assistance",
      "Carrier Packets",
      "Factoring Invoices",
      "The Credit Score Of The Broker",
      "Driver Assistance",
      "Owner Operator Assistance",
      "BOX TRUCK & HOTSHOT"
    ]
  },
  {
    title: "BOX TRUCK & HOTSHOT",
    price: "$400",
    period: "per week",
    percentage: "10% PER LOAD",
    features: [
      "24/7 Dispatch",
      "Box Truck",
      "Hotshot",
      "Finding & Assigning Loads",
      "Dedicated Personal Dispatcher",
      "Detention & Lumper Fee",
      "Negotiating Best Pay Rates",
      "Negotiating Quick Pay Rates",
      "Quick Pay Assistance",
      "Carrier Packets",
      "Factoring Invoices",
      "The Credit Score Of The Broker",
      "Driver Assistance"
    ],
    featured: true
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">DISPATCH FEE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={'rounded-lg p-8 bg-gray-700'}
            >
              <h3 className={'text-2xl font-bold mb-4 text-white'}>{plan.title}</h3>
              
              <div className="mb-6">
                <span className={'text-4xl font-bold text-white'}>{plan.price}</span>
                <span className={'text-lg text-white'}> {plan.period}</span>
                <p className={`mt-2 text-white`}>{plan.percentage}</p>
              </div>
              
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-2 text-gray-900`} />
                    <span className={'text-white'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;