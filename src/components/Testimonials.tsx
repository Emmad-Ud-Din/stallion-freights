import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "GlobalFreight has transformed our supply chain with their reliable and efficient logistics solutions. Their attention to detail and proactive approach has made a significant difference to our business.",
      author: "Sarah Johnson",
      position: "Supply Chain Director",
      company: "TechGlobal Inc."
    },
    {
      quote: "We've partnered with GlobalFreight for over 5 years, and they consistently exceed our expectations. Their global network and customs expertise have been invaluable for our international expansion.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "Innovex Systems"
    },
    {
      quote: "The level of customer service provided by GlobalFreight is exceptional. They're always available to answer questions and provide real-time updates on our shipments.",
      author: "Elena Rodriguez",
      position: "Logistics Coordinator",
      company: "Meridian Exports"
    },
    {
      quote: "GlobalFreight's ability to handle complex logistics requirements with ease has made them our go-to partner for all shipping needs. Their team truly understands our business.",
      author: "David Wilson",
      position: "CEO",
      company: "Atlantic Trading Co."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center italic mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="text-center">
              <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
              <p className="text-gray-600">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={prev}
              className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;