import React from 'react';
import { Check } from 'lucide-react';

const COLORS = {
  gold: '#D4AF37',
  darkCharcoal: '#0a0a0a',
  lightGold: 'rgba(212, 175, 55, 0.15)',
  cream: '#faf7f2',
};

const FONTS = {
  display: '"Bodoni Moda", serif',
  accent: '"Montserrat", sans-serif',
  body: '"Cormorant Garamond", serif',
};

export default function HighlightsSection() {
  const features = [
    'Two-Side Open Living & Dining',
    '270° Open Views',
    '12 Ft Floor-to-Ceiling Height',
    'Expansive Balconies',
    'Dedicated Study Room',
    'Private Corner Balcony in Master Bedroom',
    'Premium Italian Marble Flooring',
    'Laminated Wooden Bedrooms',
    'Modular Kitchen with Quartz Counter',
    'UPVC Windows & Premium Finishes',
    'Natural Light & Cross Ventilation',
    'Unmatched Openness'
  ];

  return (
    <section id="highlights" className="relative py-10 md:py-14 px-4 md:px-6 overflow-hidden" style={{ backgroundColor: COLORS.cream }}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div 
              className="w-4 h-px"
              style={{ backgroundColor: COLORS.gold }}
            />
            <span 
              className="text-xs tracking-widest uppercase font-light"
              style={{
                fontFamily: FONTS.accent,
                color: COLORS.gold,
                letterSpacing: '0.2em'
              }}
            >
              Premium Features
            </span>
            <div 
              className="w-4 h-px"
              style={{ backgroundColor: COLORS.gold }}
            />
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-3 md:mb-4 leading-tight"
            style={{
              fontFamily: FONTS.display,
              color: COLORS.darkCharcoal,
              letterSpacing: '-0.03em'
            }}
          >
            Residences Designed for <span style={{ color: COLORS.gold }}>Grandeur</span>
          </h2>

          <p 
            className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-4 font-light"
            style={{ fontFamily: FONTS.body }}
          >
            Natural light. Cross ventilation. Unmatched openness.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
            <div className="w-6 h-px" style={{ backgroundColor: COLORS.gold }} />
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.gold }} />
            <div className="w-6 h-px" style={{ backgroundColor: COLORS.gold }} />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-3 p-3 md:p-4 rounded-lg transition-all duration-300 hover:shadow-md group"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${COLORS.lightGold}`,
              }}
            >
              <Check 
                size={18} 
                className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" 
                style={{ color: COLORS.gold }}
              />
              <p 
                className="text-xs md:text-sm font-light text-gray-800 leading-snug"
                style={{ fontFamily: FONTS.body }}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div 
          className="mt-8 md:mt-10 p-5 md:p-6 rounded-lg text-center transition-all duration-300 hover:shadow-lg"
          style={{
            backgroundColor: 'white',
            border: `1px solid ${COLORS.lightGold}`
          }}
        >
          <p 
            className="text-base md:text-lg font-light text-gray-900"
            style={{
              fontFamily: FONTS.display,
              color: COLORS.darkCharcoal,
              letterSpacing: '-0.01em'
            }}
          >
            Every Detail Crafted for Excellence
          </p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}