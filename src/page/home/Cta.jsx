import React, { useState } from 'react';
import { Check, Phone, X } from 'lucide-react';

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

export default function CTASection() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setShowPopup(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const ctaItems = [
    'Latest Price Sheet',
    'Floor Plan',
    'Exclusive Offers',
    'Site Visit Appointment'
  ];

  return (
    <section id="contact" className="relative py-10 md:py-14 px-4 md:px-6 overflow-hidden" style={{ backgroundColor: COLORS.cream }}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-3 md:mb-4 leading-tight"
            style={{
              fontFamily: FONTS.display,
              color: COLORS.darkCharcoal,
              letterSpacing: '-0.03em'
            }}
          >
            Book Your <span style={{ color: COLORS.gold }}>Private Viewing</span>
          </h2>

          <p 
            className="text-base md:text-lg text-gray-700 mb-3 md:mb-4 font-light"
            style={{ fontFamily: FONTS.body }}
          >
            Experience scale. Experience height. Experience Iconic Living.
          </p>

          <p 
            className="text-2xl md:text-3xl font-light"
            style={{
              fontFamily: FONTS.display,
              color: COLORS.darkCharcoal,
              letterSpacing: '-0.01em'
            }}
          >
            Starting From <span style={{ color: COLORS.gold }}>₹5.50 Cr</span> Onwards*
          </p>
        </div>

        {/* Call to Action Items */}
        <div className="bg-white/60 backdrop-blur rounded-2xl p-5 md:p-6 mb-8 md:mb-10" style={{ border: `1px solid ${COLORS.lightGold}` }}>
          <p 
            className="text-sm md:text-base font-light text-gray-800 text-center mb-4 md:mb-5"
            style={{ fontFamily: FONTS.display }}
          >
            Call Now for:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {ctaItems.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center gap-2 p-2 md:p-3 rounded-lg"
                style={{
                  backgroundColor: COLORS.lightGold,
                  border: `1px solid ${COLORS.lightGold}`
                }}
              >
                <Check 
                  size={16} 
                  style={{ color: COLORS.gold, flexShrink: 0 }}
                />
                <p 
                  className="text-xs md:text-sm font-light text-gray-800 text-center"
                  style={{ fontFamily: FONTS.body }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <a 
            href="tel:+919205974843"
            className="px-6 md:px-10 py-2.5 md:py-3 font-light rounded-lg text-xs md:text-sm uppercase tracking-widest transition transform hover:scale-105 flex items-center justify-center gap-2"
            style={{
              backgroundColor: COLORS.gold,
              color: COLORS.darkCharcoal,
              fontFamily: FONTS.accent
            }}
          >
            <Phone size={16} /> Schedule Visit
          </a>
          
          <button 
            onClick={() => setShowPopup(true)}
            className="px-6 md:px-10 py-2.5 md:py-3 font-light rounded-lg text-xs md:text-sm uppercase tracking-widest transition transform hover:scale-105"
            style={{
              border: `2px solid ${COLORS.gold}`,
              color: COLORS.gold,
              fontFamily: FONTS.accent,
              backgroundColor: 'transparent'
            }}
          >
            Get Best Price
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div 
            className="bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-md w-full p-5 md:p-6 relative"
            style={{
              border: `1px solid ${COLORS.lightGold}`
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 md:top-5 right-4 md:right-5 text-gray-600 hover:text-gray-900 transition"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <h3 
              className="text-2xl md:text-3xl font-light mb-1 md:mb-2"
              style={{
                fontFamily: FONTS.display,
                color: COLORS.darkCharcoal,
                paddingRight: '32px',
                letterSpacing: '-0.01em'
              }}
            >
              Get Best Price
            </h3>
            <p 
              className="text-xs md:text-sm text-gray-600 mb-5 md:mb-6 font-light"
              style={{ fontFamily: FONTS.body }}
            >
              Join our exclusive pre-launch offer list
            </p>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-3 md:space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full px-3 md:px-4 py-2 md:py-2.5 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900"
                style={{
                  borderColor: `${COLORS.gold}40`,
                  fontFamily: FONTS.body
                }}
                onFocus={(e) => e.target.style.borderColor = COLORS.gold}
                onBlur={(e) => e.target.style.borderColor = `${COLORS.gold}40`}
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full px-3 md:px-4 py-2 md:py-2.5 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900"
                style={{
                  borderColor: `${COLORS.gold}40`,
                  fontFamily: FONTS.body
                }}
                onFocus={(e) => e.target.style.borderColor = COLORS.gold}
                onBlur={(e) => e.target.style.borderColor = `${COLORS.gold}40`}
                required
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full px-3 md:px-4 py-2 md:py-2.5 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900"
                style={{
                  borderColor: `${COLORS.gold}40`,
                  fontFamily: FONTS.body
                }}
                onFocus={(e) => e.target.style.borderColor = COLORS.gold}
                onBlur={(e) => e.target.style.borderColor = `${COLORS.gold}40`}
                required
              />
              
              <textarea
                name="message"
                placeholder="Tell us more about your interest"
                value={formData.message}
                onChange={handleFormChange}
                rows="3"
                className="w-full px-3 md:px-4 py-2 md:py-2.5 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900 resize-none"
                style={{
                  borderColor: `${COLORS.gold}40`,
                  fontFamily: FONTS.body
                }}
                onFocus={(e) => e.target.style.borderColor = COLORS.gold}
                onBlur={(e) => e.target.style.borderColor = `${COLORS.gold}40`}
              />
              
              <button
                type="submit"
                className="w-full py-2.5 md:py-3 font-light rounded-lg transition transform hover:scale-105 text-xs md:text-sm uppercase tracking-widest"
                style={{
                  backgroundColor: COLORS.gold,
                  color: COLORS.darkCharcoal,
                  fontFamily: FONTS.accent
                }}
              >
                Get Price Quote
              </button>
              
              <p 
                className="text-xs text-gray-500 text-center font-light"
                style={{ fontFamily: FONTS.accent }}
              >
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}