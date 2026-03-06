import React, { useState } from 'react';
import { Download, X } from 'lucide-react';

const goldColor = '#D0AB69';
const darkCharcoal = '#1a1a1a';

// Enquiry Popup Component (inline)
function EnquiryPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Enquiry submitted:', formData);
      alert('Thank you for your enquiry! Our team will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-3 md:p-4 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xs md:max-w-sm p-4 md:p-6 relative"
        style={{
          border: `2px solid ${goldColor}20`,
          animation: 'fadeInZoom 0.3s ease-in-out'
        }}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 md:top-3 right-2 md:right-3 p-1 transition hover:bg-gray-100 rounded-full"
        >
          <X size={18} className="text-gray-600" />
        </button>

        {/* Header */}
        <div className="text-center mb-4 md:mb-5 pr-8">
          <h2 
            className="text-xl md:text-2xl font-black mb-1"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: darkCharcoal
            }}
          >
            Enquire Now
          </h2>
          <p 
            className="text-xs md:text-sm text-gray-600 font-semibold"
            style={{ fontFamily: '"Lora", sans-serif' }}
          >
            Get in touch with our team
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="space-y-2.5 md:space-y-3 mb-4 md:mb-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900"
            style={{
              borderColor: `${goldColor}40`,
              fontFamily: '"Lora", sans-serif'
            }}
            onFocus={(e) => e.target.style.borderColor = goldColor}
            onBlur={(e) => e.target.style.borderColor = `${goldColor}40`}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900"
            style={{
              borderColor: `${goldColor}40`,
              fontFamily: '"Lora", sans-serif'
            }}
            onFocus={(e) => e.target.style.borderColor = goldColor}
            onBlur={(e) => e.target.style.borderColor = `${goldColor}40`}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900"
            style={{
              borderColor: `${goldColor}40`,
              fontFamily: '"Lora", sans-serif'
            }}
            onFocus={(e) => e.target.style.borderColor = goldColor}
            onBlur={(e) => e.target.style.borderColor = `${goldColor}40`}
            required
          />

          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleFormChange}
            rows="2"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900 resize-none"
            style={{
              borderColor: `${goldColor}40`,
              fontFamily: '"Lora", sans-serif'
            }}
            onFocus={(e) => e.target.style.borderColor = goldColor}
            onBlur={(e) => e.target.style.borderColor = `${goldColor}40`}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 md:py-3 font-black rounded-lg transition transform hover:scale-105 disabled:opacity-70 text-black text-xs md:text-sm uppercase tracking-wider"
            style={{
              backgroundColor: goldColor,
              fontFamily: '"Lora", sans-serif'
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
          </button>
        </form>

        {/* Footer */}
        <p 
          className="text-xs text-gray-500 text-center"
          style={{ fontFamily: '"Lora", sans-serif' }}
        >
          ✓ We respect your privacy
        </p>
      </div>

      <style jsx>{`
        @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap);

        @keyframes fadeInZoom {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

// Main HeroBanner Component
export default function HeroBanner() {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      alert('Thank you! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setFormSubmitted(false);
    }, 500);
  };

  const downloadBrochure = () => {
    alert('Brochure download initiated!');
  };

  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/image/banner1.png')",
              backgroundAttachment: 'fixed'
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.6) 100%)"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-start lg:items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-2 mt-8 sm:mt-10 md:mt-12 lg:mt-0">
            

              {/* Main Heading */}
              <h1 
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 md:mb-4 text-white leading-tight animate-fadeInDown"
                style={{ fontFamily: '"Playfair Display", serif', animationDelay: '0.1s' }}
              >
                ICONIC<br />
                <span style={{ color: goldColor }}>TOWER</span>
              </h1>

              {/* Location */}
              <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-2 sm:mb-3 animate-fadeInDown" style={{ animationDelay: '0.2s' }}>
                Noida Extension | Greater Noida West
              </p>

              {/* Tagline */}
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6 md:mb-8 animate-fadeInDown" style={{ animationDelay: '0.3s' }}>
                Where Scale Meets Sophistication
              </p>

              {/* Details */}
              <div className="mb-4 sm:mb-6 md:mb-8 space-y-2 sm:space-y-3 text-white animate-fadeInDown" style={{ animationDelay: '0.4s' }}>
                <p className="text-sm sm:text-base md:text-lg font-semibold" style={{ fontFamily: '"Lora", sans-serif' }}>
                  Luxury 4 BHK + Study Residences
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 sm:gap-3 md:gap-4 animate-fadeInDown w-fit" style={{ animationDelay: '0.5s' }}>
                <button 
                  onClick={() => setShowEnquiryPopup(true)}
                  className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 font-black text-xs sm:text-sm uppercase tracking-widest rounded-lg transition transform hover:scale-105 active:scale-95 text-black shadow-lg whitespace-nowrap"
                  style={{ backgroundColor: goldColor, fontFamily: '"Lora", sans-serif' }}
                >
                  Enquire Now
                </button>
                <button 
                  onClick={downloadBrochure}
                  className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 font-black text-xs sm:text-sm uppercase tracking-widest rounded-lg transition transform hover:scale-105 active:scale-95 text-white border-2 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
                  style={{ borderColor: goldColor, fontFamily: '"Lora", sans-serif' }}
                >
                  <Download size={16} /> Brochure
                </button>
              </div>
            </div>

            {/* Right Glassmorphism Form - COMPACT & VISIBLE */}
            <div 
              className="w-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl animate-fadeInRight"
              style={{
                border: `2px solid ${goldColor}`,
                background: `linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 100%)`,
                boxShadow: `0 8px 32px 0 rgba(208, 171, 105, 0.15), inset 0 0 20px rgba(208, 171, 105, 0.05)`,
              }}
            >
              {/* Form Header */}
              <div className="mb-4 sm:mb-5">
                <h3 
                  className="text-2xl sm:text-3xl font-black text-white"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Quick Quote
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 mt-1" style={{ fontFamily: '"Lora", sans-serif' }}>
                  Get in touch instantly
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-2.5 sm:space-y-3">
                {/* Name Input */}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 sm:py-2.5 rounded-lg focus:outline-none transition-all duration-300 text-sm text-white placeholder-gray-300 bg-white/10 hover:bg-white/15 focus:bg-white/20 border"
                  style={{
                    borderColor: goldColor,
                    fontFamily: '"Lora", sans-serif',
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = `0 0 15px rgba(208, 171, 105, 0.3)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = 'none';
                  }}
                  required
                />

                {/* Email Input */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 sm:py-2.5 rounded-lg focus:outline-none transition-all duration-300 text-sm text-white placeholder-gray-300 bg-white/10 hover:bg-white/15 focus:bg-white/20 border"
                  style={{
                    borderColor: goldColor,
                    fontFamily: '"Lora", sans-serif',
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = `0 0 15px rgba(208, 171, 105, 0.3)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = 'none';
                  }}
                  required
                />

                {/* Phone Input */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 sm:py-2.5 rounded-lg focus:outline-none transition-all duration-300 text-sm text-white placeholder-gray-300 bg-white/10 hover:bg-white/15 focus:bg-white/20 border"
                  style={{
                    borderColor: goldColor,
                    fontFamily: '"Lora", sans-serif',
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = `0 0 15px rgba(208, 171, 105, 0.3)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = 'none';
                  }}
                  required
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formSubmitted}
                  className="w-full py-2.5 sm:py-3 font-black rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-70 text-black text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl mt-3"
                  style={{ 
                    backgroundColor: goldColor, 
                    fontFamily: '"Lora", sans-serif'
                  }}
                >
                  {formSubmitted ? 'Submitting...' : 'Get Quote'}
                </button>

                {/* Privacy Text */}
                <p className="text-xs text-gray-200 text-center mt-2" style={{ fontFamily: '"Lora", sans-serif' }}>
                  ✓ We respect your privacy
                </p>
              </form>
            </div>
          </div>
        </div>

        <style jsx>{`
          @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap);

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fadeInDown {
            animation: fadeInDown 0.6s ease-out forwards;
            opacity: 0;
          }

          .animate-fadeInRight {
            animation: fadeInRight 0.8s ease-out forwards;
            opacity: 0;
          }

          /* Custom scrollbar for inputs */
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input[type=number] {
            -moz-appearance: textfield;
          }

          /* Smooth focus glow effect */
          @supports ((-webkit-backdrop-filter: blur(12px)) or (backdrop-filter: blur(12px))) {
            input:focus,
            textarea:focus {
              --tw-shadow: 0 0 20px rgba(208, 171, 105, 0.2);
              box-shadow: var(--tw-shadow);
            }
          }
        `}</style>
      </section>

      {/* Enquiry Popup */}
      <EnquiryPopup 
        isOpen={showEnquiryPopup} 
        onClose={() => setShowEnquiryPopup(false)} 
      />
    </>
  );
}