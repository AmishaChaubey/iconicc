import React from 'react';
import { Check } from 'lucide-react';

const goldColor = '#D0AB69';
const darkCharcoal = '#1a1a1a';

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
    <section id="highlights" className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-30" />
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
              Premium Features
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
            Residences Designed for <span style={{ color: goldColor }}>Grandeur</span>
          </h2>

          <p 
            className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-4"
            style={{ fontFamily: '"Lora", sans-serif' }}
          >
            Natural light. Cross ventilation. Unmatched openness.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
            <div className="w-6 h-px" style={{ backgroundColor: goldColor }} />
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: goldColor }} />
            <div className="w-6 h-px" style={{ backgroundColor: goldColor }} />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-3 p-3 md:p-4 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: `${goldColor}08`,
                border: `1px solid ${goldColor}30`,
              }}
            >
              <Check 
                size={18} 
                className="flex-shrink-0 mt-0.5" 
                style={{ color: goldColor }}
              />
              <p 
                className="text-xs md:text-sm font-semibold text-gray-800 leading-snug"
                style={{ fontFamily: '"Lora", sans-serif' }}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div 
          className="mt-8 md:mt-10 p-5 md:p-6 rounded-2xl text-center"
          style={{
            backgroundColor: `${goldColor}15`,
            border: `2px solid ${goldColor}40`
          }}
        >
          <p 
            className="text-base md:text-lg font-black text-gray-900"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: darkCharcoal
            }}
          >
            Every Detail Crafted for Excellence
          </p>
        </div>
      </div>

      <style jsx>{`
        @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap);
      `}</style>
    </section>
  );
}