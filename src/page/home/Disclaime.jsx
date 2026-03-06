import React from 'react';

const goldColor = '#D0AB69';

export default function DisclaimerSection() {
  return (
    <section className="relative py-12 md:py-16 px-4 md:px-6 bg-black text-white">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-5" style={{ background: goldColor }} />
      </div>

      <div className="">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-1 h-8" style={{ background: goldColor }}></div>
          <h3 
            className="text-lg md:text-xl font-light tracking-wide"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Disclaimer
          </h3>
        </div>

        {/* Disclaimer Text */}
        <p 
          className="text-sm md:text-base leading-relaxed text-gray-300 font-light"
          style={{ fontFamily: '"Lora", serif' }}
        >
          The information on this website is provided for general purposes only. While we strive for accuracy, we make no warranties regarding property details, availability, or pricing—all subject to change without notice. Content is illustrative and not legally binding. Please independently verify all specifications and legal requirements before making any decision. We are not responsible for losses resulting from reliance on this information or third-party links. By accessing this site, you agree to these terms. For official details, contact our team or authorized representatives.
        </p>

        {/* Footer accent line */}
        <div className="mt-8 h-px" style={{ background: `linear-gradient(to right, ${goldColor}, transparent)` }}></div>
      </div>

      <style jsx>{`
        @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400&display=swap);
      `}</style>
    </section>
  );
}