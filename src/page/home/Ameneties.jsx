import React from 'react';

const COLORS = {
  gold: '#D4AF37',
  darkCharcoal: '#0a0a0a',
  lightGold: 'rgba(212, 175, 55, 0.15)',
};

const FONTS = {
  display: '"Bodoni Moda", serif',
  accent: '"Montserrat", sans-serif',
  body: '"Cormorant Garamond", serif',
};

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
                fontFamily: FONTS.accent,
                letterSpacing: '0.15em'
              }}
            >
              Premium Lifestyle
            </span>
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-3 md:mb-4 leading-tight"
            style={{
              fontFamily: FONTS.display,
              color: COLORS.darkCharcoal,
              letterSpacing: '-0.02em'
            }}
          >
            Lifestyle Beyond <span style={{ color: COLORS.gold }}>Expectations</span>
          </h2>

          <p 
            className="text-base md:text-lg text-gray-700 mb-4 max-w-2xl mx-auto"
            style={{ fontFamily: FONTS.body }}
          >
            A curated ecosystem of world-class amenities. Luxury is not added. It is integrated.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
            <div className="w-6 h-px" style={{ backgroundColor: COLORS.gold }} />
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.gold }} />
            <div className="w-6 h-px" style={{ backgroundColor: COLORS.gold }} />
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="p-4 md:p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{
                backgroundColor: 'white',
                border: `2px solid ${COLORS.lightGold}`
              }}
            >
              {/* Text */}
              <div className="text-left">
                <h3 
                  className="text-sm md:text-base font-light mb-2 md:mb-2.5 text-gray-900 line-clamp-2"
                  style={{
                    fontFamily: FONTS.display,
                    color: COLORS.darkCharcoal,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {amenity.name}
                </h3>

                <p 
                  className="text-xs md:text-xs font-light uppercase tracking-wider"
                  style={{
                    color: COLORS.gold,
                    fontFamily: FONTS.accent,
                    letterSpacing: '0.1em'
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
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}