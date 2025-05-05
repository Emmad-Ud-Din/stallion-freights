import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Network from './components/Network';
import Specialization from './components/Specialization';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import PartnersCarousel from './components/PartnersCarousel';

function App() {
  useEffect(() => {
    document.title = 'StallionFreights - Premium US Freight Services';
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e)=> {
        e.preventDefault();
        const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (target) {
          document.querySelector(target)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Network />
      <Specialization />
      <Pricing />
      <PartnersCarousel/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;