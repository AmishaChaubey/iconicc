import React from 'react';
import { MapPin } from 'lucide-react';

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

export default function MapSection() {
  const locationFeatures = [
    [
      'Prime location on the Noida Expressway',
      'Close to major IT parks',
      'Proximity to reputed schools',
      'Rapidly developing infrastructure'
    ],
    [
      'Seamless connectivity to Delhi',
      'Well-connected to upcoming corridor',
      'Close to leading hospitals',
    ],
    [
      'Easy access to Greater Noida',
      'Nearby metro stations',
      'Near premium shopping malls',
    ]
  ];

  return (
    <section id="location" className="relative py-10 md:py-14 px-4 md:px-6 overflow-hidden" style={{ backgroundColor: COLORS.cream }}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div 
              className="w-4 h-px"
              style={{ backgroundColor: COLORS.gold }}
            />
            <span
              className="text-xs tracking-widest uppercase"
              style={{
                fontFamily: FONTS.accent,
                color: COLORS.gold,
                letterSpacing: '0.2em',
              }}
            >
              Strategic Location
            </span>
          </div>

          <div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-2 leading-tight"
              style={{
                fontFamily: FONTS.display,
                color: COLORS.darkCharcoal,
                letterSpacing: '-0.03em',
              }}
            >
              Location & <span style={{ color: COLORS.gold }}>Connectivity</span>
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl text-gray-700 leading-relaxed font-light"
              style={{ fontFamily: FONTS.body }}
            >
              Strategically positioned for seamless connectivity and premium lifestyle access.
            </p>
          </div>
        </div>

        {/* Map Container */}
        <div 
          className="rounded-lg md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl mb-8 md:mb-10 h-72 md:h-96"
          style={{
            border: `1px solid ${COLORS.lightGold}`
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0928881486404!2d77.55309867622385!3d28.426597275789867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6a8e00e0001%3A0x1f4a0c0a0a0a0a0a!2sGreater%20Noida%20West%2C%20Noida!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Iconic Tower Location Map"
          />
        </div>

        {/* Features Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {locationFeatures.map((column, colIdx) => (
            <div key={colIdx} className="space-y-4 md:space-y-5">
              {column.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <MapPin 
                    size={20} 
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: COLORS.gold }}
                  />
                  <p 
                    className="text-sm md:text-base font-light text-gray-800"
                    style={{ fontFamily: FONTS.body }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
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