import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { X, ArrowRight } from 'lucide-react';

const COLORS = {
  gold: '#D4AF37',
  darkCharcoal: '#0a0a0a',
  lightGold: 'rgba(212, 175, 55, 0.15)',
  cream: '#faf7f2',
  silver: '#c0c0c0',
};

const FONTS = {
  display: '"Bodoni Moda", serif',
  accent: '"Montserrat", sans-serif',
  body: '"Cormorant Garamond", serif',
};

// Enhanced Enquiry Popup Component
function EnquiryPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitStatus(null);
  }, []);

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      console.log('Enquiry submitted:', formData);
      setSubmitStatus({ type: 'success', message: 'Thank you! We\'ll contact you soon.' });
      
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
        setTimeout(onClose, 400);
      }, 1500);
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to submit. Please try again.' });
      setIsSubmitting(false);
    }
  }, [formData, onClose]);

  const handleClose = useCallback(() => {
    if (!isSubmitting) {
      onClose();
    }
  }, [isSubmitting, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-sm p-8 relative animate-in fade-in zoom-in duration-300"
        style={{
          border: `1px solid ${COLORS.lightGold}`,
          background: COLORS.cream,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50"
          aria-label="Close dialog"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="text-center mb-6">
          <h2
            id="enquiry-title"
            className="text-4xl font-light mb-2"
            style={{
              fontFamily: FONTS.display,
              color: COLORS.darkCharcoal,
              letterSpacing: '-0.02em',
            }}
          >
            Enquire Now
          </h2>
          <div className="w-12 h-px mx-auto mb-3" style={{ backgroundColor: COLORS.gold }} />
          <p
            className="text-sm text-gray-600 tracking-widest uppercase"
            style={{ fontFamily: FONTS.accent, fontSize: '0.7rem' }}
          >
            Connect with our team
          </p>
        </div>

        {submitStatus && (
          <div
            className={`mb-5 p-3 rounded-lg flex items-start gap-2 text-sm ${
              submitStatus.type === 'success'
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}
          >
            <p className={submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'}>
              {submitStatus.message}
            </p>
          </div>
        )}

        <form onSubmit={handleFormSubmit} className="space-y-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleFormChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 border-b border-gray-300 bg-transparent focus:outline-none focus:border-b-2 transition-all text-sm text-gray-900 disabled:opacity-50"
            style={{
              fontFamily: FONTS.body,
              focusBorderColor: COLORS.gold,
            }}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleFormChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 border-b border-gray-300 bg-transparent focus:outline-none focus:border-b-2 transition-all text-sm text-gray-900 disabled:opacity-50"
            style={{
              fontFamily: FONTS.body,
              focusBorderColor: COLORS.gold,
            }}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleFormChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 border-b border-gray-300 bg-transparent focus:outline-none focus:border-b-2 transition-all text-sm text-gray-900 disabled:opacity-50"
            style={{
              fontFamily: FONTS.body,
              focusBorderColor: COLORS.gold,
            }}
            required
          />

          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleFormChange}
            disabled={isSubmitting}
            rows="3"
            className="w-full px-4 py-2.5 border-b border-gray-300 bg-transparent focus:outline-none focus:border-b-2 transition-all text-sm text-gray-900 resize-none disabled:opacity-50"
            style={{
              fontFamily: FONTS.body,
              focusBorderColor: COLORS.gold,
            }}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 font-light rounded-none transition-all duration-300 text-white text-sm uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed mt-6"
            style={{
              backgroundColor: COLORS.darkCharcoal,
              fontFamily: FONTS.accent,
            }}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
          </button>
        </form>

        <p
          className="text-xs text-gray-500 text-center tracking-widest"
          style={{ fontFamily: FONTS.accent }}
        >
          ✓ Your privacy is respected
        </p>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-in {
          animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        .zoom-in {
          animation: zoomIn 0.3s ease-in-out;
        }

        input:focus,
        textarea:focus {
          border-color: ${COLORS.gold} !important;
        }
      `}</style>
    </div>
  );
}

// Main AboutSection Component
export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const featureCards = useMemo(
    () => [
      {  value: '45', label: 'Storeys' },
      {  value: '24', label: 'Acres' },
      {  value: '4BR', label: 'Largest' },
    ],
    []
  );

  return (
    <>
      <section
        id="about"
        className="relative py-10 md:py-14 px-4 md:px-6 overflow-hidden"
        style={{ backgroundColor: COLORS.cream }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div 
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-5"
            style={{ backgroundColor: COLORS.gold }}
          />
          <div 
            className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-5"
            style={{ backgroundColor: COLORS.gold }}
          />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div 
                className="w-6 h-px"
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
                About Development
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-3 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                fontFamily: FONTS.display,
                color: COLORS.darkCharcoal,
                letterSpacing: '-0.03em',
              }}
            >
              The Address That<br />
              <span style={{ color: COLORS.gold }}>Redefines the Skyline</span>
            </h2>

            <p
              className="text-base md:text-lg max-w-2xl text-gray-700 leading-relaxed font-light"
              style={{ fontFamily: FONTS.body }}
            >
              A premier residential destination rising majestically above Greater Noida West.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-stretch">
            {/* Left Content - Takes 2 columns */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ fontFamily: FONTS.body }}
            >
              {/* Main Description */}
              <div className="mb-6 pb-6 border-b" style={{ borderColor: COLORS.lightGold }}>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  Rising majestically above Greater Noida West, Iconic Tower is designed for those who demand
                  <span className="font-semibold text-gray-900"> more</span> — more space, more height, more luxury.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Part of a 24-acre premium development featuring one of the
                  <span className="font-semibold text-gray-900"> largest 4-bedroom residences</span> in the micro-market.
                </p>
              </div>

              {/* Signature Statement */}
              <div
                className="relative pl-4 md:pl-6 border-l-2 mb-8"
                style={{ borderColor: COLORS.gold }}
              >
                <p
                  className="text-lg md:text-xl font-light mb-2"
                  style={{
                    fontFamily: FONTS.display,
                    color: COLORS.darkCharcoal,
                    letterSpacing: '-0.01em',
                  }}
                >
                  This is not just an apartment.
                </p>
                <p
                  className="text-2xl md:text-3xl font-light"
                  style={{
                    fontFamily: FONTS.display,
                    color: COLORS.gold,
                    letterSpacing: '-0.01em',
                  }}
                >
                  This is a vertical estate.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-3">
                {featureCards.map((card, index) => (
                  <div
                    key={card.label}
                    className={`p-3 md:p-4 rounded-lg text-center transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      backgroundColor: COLORS.cream,
                      border: `1px solid ${COLORS.lightGold}`,
                      transitionDelay: `${index * 100 + 600}ms`,
                    }}
                  >
                    <div className="text-2xl mb-2">{card.icon}</div>
                    <div
                      className="text-xl md:text-2xl font-light"
                      style={{
                        fontFamily: FONTS.display,
                        color: COLORS.gold,
                      }}
                    >
                      {card.value}
                    </div>
                    <p
                      className="text-xs text-gray-600 uppercase tracking-widest mt-1"
                      style={{ fontFamily: FONTS.accent }}
                    >
                      {card.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Section - Takes 3 columns */}
            <div
              className={`lg:col-span-3 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
            >
              <div className="relative group h-full">
                {/* Image container */}
                <div
                  className="relative rounded-lg overflow-hidden shadow-lg md:shadow-xl h-64 sm:h-72 md:h-96 cursor-pointer bg-gray-100"
                  style={{
                    border: `1px solid ${COLORS.lightGold}`,
                  }}
                >
                  {!imageLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-gray-200" />
                  )}

                  <img
                    src="/image/about3.jpg"
                    alt="Iconic Tower - Premium Residential Estate"
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />

                  {/* Overlay on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)`,
                    }}
                  >
                    <button
                      className="relative px-6 md:px-8 py-2 md:py-3 font-light rounded-none transition-all duration-300 text-white text-sm uppercase tracking-widest group/btn"
                      style={{
                        backgroundColor: COLORS.gold,
                        color: COLORS.darkCharcoal,
                        fontFamily: FONTS.accent,
                      }}
                      onClick={() => setShowEnquiryPopup(true)}
                      type="button"
                      aria-label="Open enquiry form"
                    >
                      <span className="flex items-center gap-2">
                        Enquire Now
                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Info Badge */}
                <div
                  className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-white rounded-lg p-3 md:p-4 shadow-lg transition-transform duration-300 group-hover:scale-105"
                  style={{
                    borderTop: `3px solid ${COLORS.gold}`,
                    fontFamily: FONTS.body,
                  }}
                >
                  <p className="text-xs text-gray-600 uppercase tracking-widest font-light mb-1">
                    Development
                  </p>
                  <p
                    className="text-lg md:text-xl font-light"
                    style={{
                      fontFamily: FONTS.display,
                      color: COLORS.darkCharcoal,
                    }}
                  >
                    45 Storeys
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-in {
            animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
        `}</style>
      </section>

      {/* Enquiry Popup */}
      <EnquiryPopup isOpen={showEnquiryPopup} onClose={() => setShowEnquiryPopup(false)} />
    </>
  );
}