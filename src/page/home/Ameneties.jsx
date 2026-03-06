import React from 'react';

const goldColor = '#D0AB69';
const darkCharcoal = '#1a1a1a';

export default function AmenitiesSection() {
  const amenities = [
    { name: 'Grand Drop-Off & Lobby', category: 'Architecture' },
    { name: 'Swimming Pool & Kids Pool', category: 'Recreation' },
    { name: 'Jogging Track & Gardens', category: 'Wellness' },
    { name: 'Box Cricket Arena', category: 'Sports' },
    { name: 'Lawn Tennis Court', category: 'Sports' },
    { name: 'Basketball Court', category: 'Sports' },
    { name: 'Yoga & Fitness Studio', category: 'Wellness' },
    { name: 'Gaming Lounge', category: 'Recreation' },
    { name: 'Library & Reading Lounge', category: 'Community' },
    { name: 'Banquet Lawn', category: 'Events' },
    { name: 'Kids Play Zone', category: 'Family' },
    { name: 'Pet Park', category: 'Community' },
  ];

  return (
    <section id="amenities" className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span 
              className="text-xs md:text-sm font-semibold tracking-widest text-amber-700 uppercase"
              style={{
                fontFamily: '"Lora", sans-serif',
                letterSpacing: '0.15em'
              }}
            >
              Premium Lifestyle
            </span>
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 leading-tight"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: darkCharcoal,
              letterSpacing: '-0.02em'
            }}
          >
            Lifestyle Beyond <span style={{ color: goldColor }}>Expectations</span>
          </h2>

          <p 
            className="text-base md:text-lg text-gray-700 mb-4 max-w-2xl mx-auto"
            style={{ fontFamily: '"Lora", sans-serif' }}
          >
            A curated ecosystem of world-class amenities. Luxury is not added. It is integrated.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
            <div className="w-6 h-px" style={{ backgroundColor: goldColor }} />
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: goldColor }} />
            <div className="w-6 h-px" style={{ backgroundColor: goldColor }} />
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="p-4 md:p-5 rounded-2xl shadow-md"
              style={{
                backgroundColor: 'white',
                border: `2px solid ${goldColor}30`
              }}
            >
              {/* Text */}
              <div className="text-left">
                <h3 
                  className="text-sm md:text-base font-black mb-2 md:mb-2.5 text-gray-900 line-clamp-2"
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    color: darkCharcoal
                  }}
                >
                  {amenity.name}
                </h3>

                <p 
                  className="text-xs md:text-xs font-semibold uppercase tracking-wider"
                  style={{
                    color: goldColor,
                    fontFamily: '"Lora", sans-serif'
                  }}
                >
                  {amenity.category}
                </p>
              </div>
            </div>
          ))}
        </div>

      
      </div>

      <style jsx>{`
        @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap);
      `}</style>
    </section>
  );
}