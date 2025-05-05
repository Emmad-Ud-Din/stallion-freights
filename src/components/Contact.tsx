import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to start shipping? Get in touch with our team for personalized freight solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Request a Quote</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-300 mb-2">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="Ground Freight">Ground Freight</option>
                    <option value="Warehousing">Warehousing</option>
                    <option value="Cross-Docking">Cross-Docking</option>
                    <option value="Intermodal">Intermodal</option>
                    <option value="Expedited">Expedited</option>
                    <option value="Supply Chain">Supply Chain Solutions</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
                  placeholder="Tell us about your shipping requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={submitStatus === 'loading'}
                className={`w-full px-6 py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300 ${
                  submitStatus === 'loading' 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gray-700 hover:bg-gray-600 hover:scale-105'
                }`}
              >
                {submitStatus === 'loading' ? (
                  'Submitting...'
                ) : (
                  <>Submit Request <Send size={18} className="ml-2" /></>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-800/20 border border-green-800 rounded-md text-green-400">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-800/20 border border-red-800 rounded-md text-red-400">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              {[
                { icon: <MapPin size={24} className="text-gray-300" />, title: "Head Office", content: "1309 Coffeen Ave Ste 1200 Sheridan, WY 82801" },
                { icon: <Phone size={24} className="text-gray-300" />, title: "Phone", content: "+1 (737) 201-3141" },
                { icon: <Mail size={24} className="text-gray-300" />, title: "Email", content: "stallionfreights@gmail.com" },
                { icon: <Clock size={24} className="text-gray-300" />, title: "Working Hours", content: "24/7 Operations" }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-gray-800 text-white rounded-lg border border-gray-700">
              <h4 className="font-semibold text-xl mb-4">Need Urgent Assistance?</h4>
              <p className="mb-4 text-gray-300">Our dispatch team is available 24/7 for urgent shipping inquiries.</p>
              <a 
                href="tel:+1(737) 201-3141"
                className="bg-gray-700 text-white px-4 py-2 rounded-md font-medium inline-block transition-colors duration-200 hover:bg-gray-600"
              >
                Call Emergency Dispatch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;