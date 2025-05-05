import React, { useState, useEffect, useRef } from 'react';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4.jpg';
import client5 from '../assets/client5.jpg';
import client6 from '../assets/client6.jpg';

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleItems, setVisibleItems] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const partners = [
    { id: 1, name: 'Partner 1', logo: client1 },
    { id: 2, name: 'Partner 2', logo: client2 },
    { id: 3, name: 'Partner 3', logo: client3 },
    { id: 4, name: 'Partner 4', logo: client4 },
    { id: 5, name: 'Partner 5', logo: client5 },
    { id: 6, name: 'Partner 6', logo: client6 }
  ];

  const extendedPartners = [...partners, ...partners];

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 3000);
    return () => resetTimeout();
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex >= partners.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, partners.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    if (carouselRef.current) {
      scrollStart.current = carouselRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    const dx = e.clientX - startX.current;
    carouselRef.current.scrollLeft = scrollStart.current - dx;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    if (carouselRef.current) {
      scrollStart.current = carouselRef.current.scrollLeft;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    const dx = e.touches[0].clientX - startX.current;
    carouselRef.current.scrollLeft = scrollStart.current - dx;
  };

  const handleTouchEnd = () => {
   
  };

  const itemWidth = Math.min(window.innerWidth - 32, 200);

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Our Direct Broker Contacts
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Partnered with QP Solutions Factoring Company
        </p>

        <div
          className="relative mx-auto overflow-hidden rounded-xl cursor-grab"
          style={{ 
            width: `${visibleItems * itemWidth}px`,
            maxWidth: '100%',
            margin: '0 auto'
          }}
        >
          <div
            ref={carouselRef}
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              width: `${extendedPartners.length * itemWidth}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {extendedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                style={{ width: `${itemWidth}px`, height: '60px' }}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-2"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;