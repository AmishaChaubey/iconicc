import React from 'react';
import { MapPin } from 'lucide-react';

const goldColor = '#D0AB69';
const darkCharcoal = '#1a1a1a';

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
    <section id="location" className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h2 
            className="text-3xl md:text-4xl font-black mb-2"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: goldColor
            }}
          >
            Iconic Tower Location
          </h2>
          <h3 
            className="text-xl md:text-2xl font-black"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: darkCharcoal
            }}
          >
            Track On Map
          </h3>
        </div>

        {/* Map Container */}
        <div 
          className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl mb-8 md:mb-10 h-72 md:h-96"
          style={{
            border: `2px solid ${goldColor}20`
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
            <div key={colIdx} className="space-y-3 md:space-y-4">
              {column.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <MapPin 
                    size={20} 
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: goldColor }}
                  />
                  <p 
                    className="text-sm md:text-base font-semibold text-gray-800"
                    style={{ fontFamily: '"Lora", sans-serif' }}
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
        @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap);
      `}</style>
    </section>
  );
}