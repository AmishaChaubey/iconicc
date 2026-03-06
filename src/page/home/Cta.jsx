import React, { useState } from 'react';
import { Check, Phone, X } from 'lucide-react';

const goldColor = '#D0AB69';
const darkCharcoal = '#1a1a1a';

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
    <section id="contact" className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 leading-tight"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: darkCharcoal,
              letterSpacing: '-0.02em'
            }}
          >
            Book Your <span style={{ color: goldColor }}>Private Viewing</span>
          </h2>

          <p 
            className="text-base md:text-lg text-gray-700 mb-3 md:mb-4"
            style={{ fontFamily: '"Lora", sans-serif' }}
          >
            Experience scale. Experience height. Experience Iconic Living.
          </p>

          <p 
            className="text-2xl md:text-3xl font-black"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: darkCharcoal
            }}
          >
            Starting From <span style={{ color: goldColor }}>₹5.50 Cr</span> Onwards*
          </p>
        </div>

        {/* Call to Action Items */}
        <div className="bg-white/60 backdrop-blur rounded-2xl p-5 md:p-6 mb-8 md:mb-10">
          <p 
            className="text-sm md:text-base font-black text-gray-800 text-center mb-4 md:mb-5"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Call Now for:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {ctaItems.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center gap-2 p-2 md:p-3 rounded-lg"
                style={{
                  backgroundColor: `${goldColor}10`,
                  border: `1px solid ${goldColor}30`
                }}
              >
                <Check 
                  size={16} 
                  style={{ color: goldColor, flexShrink: 0 }}
                />
                <p 
                  className="text-xs md:text-sm font-semibold text-gray-800 text-center"
                  style={{ fontFamily: '"Lora", sans-serif' }}
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
            className="px-6 md:px-10 py-2.5 md:py-3 font-black rounded-lg text-xs md:text-sm uppercase tracking-widest transition transform hover:scale-105 flex items-center justify-center gap-2"
            style={{
              backgroundColor: goldColor,
              color: darkCharcoal,
              fontFamily: '"Lora", sans-serif'
            }}
          >
            <Phone size={16} /> Schedule Visit
          </a>
          
          <button 
            onClick={() => setShowPopup(true)}
            className="px-6 md:px-10 py-2.5 md:py-3 font-black rounded-lg text-xs md:text-sm uppercase tracking-widest transition transform hover:scale-105"
            style={{
              border: `2px solid ${goldColor}`,
              color: goldColor,
              fontFamily: '"Lora", sans-serif',
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
              border: `2px solid ${goldColor}20`
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
              className="text-2xl md:text-3xl font-black mb-1 md:mb-2"
              style={{
                fontFamily: '"Playfair Display", serif',
                color: darkCharcoal,
                paddingRight: '32px'
              }}
            >
              Get Best Price
            </h3>
            <p 
              className="text-xs md:text-sm text-gray-600 mb-5 md:mb-6"
              style={{ fontFamily: '"Lora", sans-serif' }}
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
                  borderColor: `${goldColor}30`,
                  fontFamily: '"Lora", sans-serif'
                }}
                onFocus={(e) => e.target.style.borderColor = goldColor}
                onBlur={(e) => e.target.style.borderColor = `${goldColor}30`}
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
                  borderColor: `${goldColor}30`,
                  fontFamily: '"Lora", sans-serif'
                }}
                onFocus={(e) => e.target.style.borderColor = goldColor}
                onBlur={(e) => e.target.style.borderColor = `${goldColor}30`}
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
                  borderColor: `${goldColor}30`,
                  fontFamily: '"Lora", sans-serif'
                }}
                onFocus={(e) => e.target.style.borderColor = goldColor}
                onBlur={(e) => e.target.style.borderColor = `${goldColor}30`}
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
                  borderColor: `${goldColor}30`,
                  fontFamily: '"Lora", sans-serif'
                }}
                onFocus={(e) => e.target.style.borderColor = goldColor}
                onBlur={(e) => e.target.style.borderColor = `${goldColor}30`}
              />
              
              <button
                type="submit"
                className="w-full py-2.5 md:py-3 font-black rounded-lg transition transform hover:scale-105 text-xs md:text-sm uppercase tracking-widest"
                style={{
                  backgroundColor: goldColor,
                  color: darkCharcoal,
                  fontFamily: '"Lora", sans-serif'
                }}
              >
                Get Price Quote
              </button>
              
              <p 
                className="text-xs text-gray-500 text-center"
                style={{ fontFamily: '"Lora", sans-serif' }}
              >
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap);
      `}</style>
    </section>
  );
}