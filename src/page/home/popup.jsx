import React, { useState, useEffect, useCallback } from 'react';
import { Download, X, CheckCircle2 } from 'lucide-react';

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

export default function PopupModal() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [screenSize, setScreenSize] = useState('mobile');

  // Track screen size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('mobile');
      else if (width < 1024) setScreenSize('tablet');
      else setScreenSize('desktop');
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  }, []);

  const isValidEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const isValidPhone = useCallback((phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }, []);

  const validateForm = useCallback(() => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!isValidPhone(formData.phone)) {
      setError('Please enter a valid phone number');
      return false;
    }
    return true;
  }, [formData, isValidEmail, isValidPhone]);

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError(null);
    
    setTimeout(() => {
      try {
        console.log('Form submitted:', formData);
        setIsSuccess(true);
        setTimeout(() => {
          alert('Thank you! We will contact you soon with exclusive offers.');
          setShowPopup(false);
          setFormData({ name: '', email: '', phone: '' });
          setIsSuccess(false);
          setIsSubmitting(false);
        }, 1500);
      } catch (err) {
        setError('Failed to submit form. Please try again.');
        setIsSubmitting(false);
        console.error('Submission error:', err);
      }
    }, 1000);
  }, [formData, validateForm]);

  const downloadBrochure = useCallback(() => {
    alert('Brochure download initiated!');
  }, []);

  const handleClosePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  if (!showPopup) return null;

  const isMobile = screenSize === 'mobile';
  const isTablet = screenSize === 'tablet';

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-3 md:p-4 lg:p-6 backdrop-blur-sm overflow-y-auto" 
      onClick={(e) => e.target === e.currentTarget && handleClosePopup()}
      role="presentation"
    >
      <div 
        className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl w-full max-w-full sm:max-w-sm md:max-w-2xl lg:max-w-4xl relative my-auto"
        style={{
          border: `1px solid ${COLORS.lightGold}`,
          animation: 'fadeInZoom 0.3s ease-out'
        }}
      >
        
        {/* Close Button - Fixed inside top-right, won't cut off */}
        <button
          onClick={handleClosePopup}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 p-1.5 sm:p-2 transition-all duration-200 hover:scale-110 active:scale-95 z-30 bg-white rounded-full shadow-md hover:shadow-lg"
          style={{
            border: `2.5px solid ${COLORS.gold}`,
          }}
          aria-label="Close popup"
          type="button"
        >
          <X size={isMobile ? 18 : 20} className="text-gray-700" strokeWidth={2.5} />
        </button>

        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* Left Side - Image (Hidden on mobile, visible on tablet+) */}
          <div 
            className="hidden sm:block relative h-full min-h-60 sm:min-h-80 md:min-h-96 lg:min-h-full overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.darkCharcoal} 100%)`
            }}
          >
            <img
              src="https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg"
              alt="Iconic Tower - Luxury Residential Development"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)`
              }}
            />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8 text-white">
              <h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 leading-tight"
                style={{ fontFamily: FONTS.display, letterSpacing: '-0.01em' }}
              >
                Limited Pre-Launch Offer
              </h3>
              <p
                className="text-xs sm:text-sm md:text-base text-gray-200 mb-3 md:mb-4 font-light"
                style={{ fontFamily: FONTS.body }}
              >
                Secure your dream home at the best price
              </p>
              
              {/* Offer Points */}
              <div className="space-y-1.5 md:space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-light">
                  <span className="text-lg md:text-xl" style={{ color: COLORS.gold }}>✓</span>
                  <span>Lowest Pre-Launch Prices</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-light">
                  <span className="text-lg md:text-xl" style={{ color: COLORS.gold }}>✓</span>
                  <span>Flexible Payment Plans</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-light">
                  <span className="text-lg md:text-xl" style={{ color: COLORS.gold }}>✓</span>
                  <span>Exclusive Buyer Benefits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center">
            {!isSuccess ? (
              <>
                {/* Header */}
                <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  <h2 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-1 sm:mb-2"
                    style={{
                      fontFamily: FONTS.display,
                      color: COLORS.darkCharcoal,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    Exclusive Offer!
                  </h2>
                  <p 
                    className="text-xs sm:text-sm md:text-base text-gray-600 font-light"
                    style={{ fontFamily: FONTS.body }}
                  >
                    Claim your offer before it expires
                  </p>
                </div>

                {/* Offer Box - Mobile/Tablet Only */}
                <div 
                  className="rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6 lg:hidden"
                  style={{
                    backgroundColor: COLORS.lightGold,
                    border: `1px solid ${COLORS.lightGold}`
                  }}
                >
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-1.5">
                    <li className="flex items-center gap-2 font-light">
                      <span style={{ color: COLORS.gold, fontSize: '16px' }}>✓</span> 
                      <span>Lowest Pre-Launch Prices</span>
                    </li>
                    <li className="flex items-center gap-2 font-light">
                      <span style={{ color: COLORS.gold, fontSize: '16px' }}>✓</span> 
                      <span>Flexible Payment Plans</span>
                    </li>
                    <li className="flex items-center gap-2 font-light">
                      <span style={{ color: COLORS.gold, fontSize: '16px' }}>✓</span> 
                      <span>Exclusive Benefits</span>
                    </li>
                  </ul>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-2 sm:p-3 rounded-lg bg-red-50 border border-red-200 animate-shake">
                    <p className="text-xs sm:text-sm text-red-700 font-light" style={{ fontFamily: FONTS.body }}>{error}</p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleFormSubmit} className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-3 sm:mb-4 md:mb-6" noValidate>
                  {/* Name */}
                  <div>
                    <label
                      className="block text-xs sm:text-sm font-light mb-1.5 text-gray-700"
                      style={{ fontFamily: FONTS.body }}
                      htmlFor="name"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none transition text-xs sm:text-sm text-gray-900 placeholder-gray-400"
                      style={{
                        borderColor: `${COLORS.gold}30`,
                        fontFamily: FONTS.body
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = COLORS.gold;
                        e.target.style.boxShadow = `0 0 0 3px ${COLORS.lightGold}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = `${COLORS.gold}30`;
                        e.target.style.boxShadow = 'none';
                      }}
                      required
                      aria-label="Full Name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block text-xs sm:text-sm font-light mb-1.5 text-gray-700"
                      style={{ fontFamily: FONTS.body }}
                      htmlFor="email"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none transition text-xs sm:text-sm text-gray-900 placeholder-gray-400"
                      style={{
                        borderColor: `${COLORS.gold}30`,
                        fontFamily: FONTS.body
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = COLORS.gold;
                        e.target.style.boxShadow = `0 0 0 3px ${COLORS.lightGold}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = `${COLORS.gold}30`;
                        e.target.style.boxShadow = 'none';
                      }}
                      required
                      aria-label="Email Address"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      className="block text-xs sm:text-sm font-light mb-1.5 text-gray-700"
                      style={{ fontFamily: FONTS.body }}
                      htmlFor="phone"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none transition text-xs sm:text-sm text-gray-900 placeholder-gray-400"
                      style={{
                        borderColor: `${COLORS.gold}30`,
                        fontFamily: FONTS.body
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = COLORS.gold;
                        e.target.style.boxShadow = `0 0 0 3px ${COLORS.lightGold}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = `${COLORS.gold}30`;
                        e.target.style.boxShadow = 'none';
                      }}
                      required
                      aria-label="Phone Number"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 sm:py-3 md:py-3.5 font-light rounded-lg transition transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-black text-xs sm:text-sm md:text-base uppercase tracking-widest relative group/btn overflow-hidden mt-4 sm:mt-5 md:mt-6"
                    style={{
                      backgroundColor: COLORS.gold,
                      fontFamily: FONTS.accent
                    }}
                  >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <span className="inline-block animate-spin">⏳</span>
                          <span className="hidden xs:inline">Processing...</span>
                          <span className="inline xs:hidden">...</span>
                        </>
                      ) : (
                        <>
                          <span className="hidden sm:inline">Get Exclusive Offer</span>
                          <span className="sm:hidden">Get Offer</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>

                {/* Brochure Button */}
                <button
                  onClick={downloadBrochure}
                  type="button"
                  className="w-full py-2 sm:py-2.5 md:py-3 font-light rounded-lg transition transform hover:scale-105 active:scale-95 text-xs sm:text-sm md:text-base uppercase tracking-widest flex items-center justify-center gap-2 border-2 mb-3 sm:mb-4"
                  style={{
                    borderColor: COLORS.gold,
                    color: COLORS.gold,
                    fontFamily: FONTS.accent
                  }}
                  aria-label="Download brochure"
                >
                  <Download size={isMobile ? 14 : 16} /> 
                  <span className="hidden sm:inline">Download Brochure</span>
                  <span className="sm:hidden">Download</span>
                </button>

                {/* Footer */}
                <p 
                  className="text-xs text-gray-500 text-center font-light"
                  style={{ fontFamily: FONTS.accent }}
                >
                  ✓ Zero spam guarantee • Privacy protected
                </p>
              </>
            ) : (
              /* Success State */
              <div className="flex flex-col items-center justify-center py-8 sm:py-12 md:py-16">
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <CheckCircle2 
                    size={isMobile ? 60 : 80}
                    style={{ color: COLORS.gold }}
                    className="animate-bounce"
                  />
                </div>
                <h3
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-center mb-2"
                  style={{
                    fontFamily: FONTS.display,
                    color: COLORS.darkCharcoal,
                    letterSpacing: '-0.01em'
                  }}
                >
                  Thank You!
                </h3>
                <p
                  className="text-xs sm:text-sm md:text-base text-gray-600 text-center px-2 font-light"
                  style={{ fontFamily: FONTS.body }}
                >
                  Your exclusive offer is confirmed. <br/>Our team will contact you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

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

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Mobile-first responsive adjustments */
        @media (max-width: 380px) {
          /* Extra small devices */
          .text-xs { font-size: 0.65rem; }
          .px-3 { padding-left: 0.5rem; padding-right: 0.5rem; }
        }

        /* Tablet optimizations */
        @media (min-width: 640px) and (max-width: 768px) {
          /* Adjust layout for landscape tablets */
          @media (orientation: landscape) {
            .lg\:grid-cols-2 {
              grid-template-columns: 0.8fr 1fr;
            }
          }
        }

        /* Large screens */
        @media (min-width: 1024px) {
          /* Ensure proper spacing on desktop */
          input, button {
            font-size: inherit;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          button:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}