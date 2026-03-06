import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { X } from 'lucide-react';

const COLORS = {
  gold: '#D0AB69',
  darkCharcoal: '#1a1a1a',
  textLight: '#666666',
  textDark: '#1a1a1a',
  borderLight: '#f5f5f5',
};

// Enquiry Popup Component
function EnquiryPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Form validation
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

  const handleFormChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  }, []);

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      setIsSubmitting(true);
      setError(null);

      // Simulate API call
      setTimeout(() => {
        try {
          console.log('Enquiry submitted:', formData);
          alert('Thank you for your enquiry! Our team will contact you soon.');
          setFormData({ name: '', email: '', phone: '', message: '' });
          onClose();
        } catch (err) {
          setError('Failed to submit enquiry. Please try again.');
          console.error('Submission error:', err);
        } finally {
          setIsSubmitting(false);
        }
      }, 1000);
    },
    [formData, validateForm, onClose]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-3 md:p-4 backdrop-blur-sm">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xs md:max-w-sm p-4 md:p-6 relative"
        style={{
          border: `2px solid ${COLORS.gold}20`,
          animation: 'fadeInZoom 0.3s ease-out',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 md:top-3 right-2 md:right-3 p-1 transition hover:bg-gray-100 rounded-full"
          aria-label="Close enquiry form"
          type="button"
        >
          <X size={18} className="text-gray-600" strokeWidth={2.5} />
        </button>

        {/* Header */}
        <div className="text-center mb-4 md:mb-5 pr-8">
          <h2
            id="popup-title"
            className="text-xl md:text-2xl font-black mb-1"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: COLORS.darkCharcoal,
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

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200">
            <p className="text-xs md:text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="space-y-2.5 md:space-y-3 mb-4 md:mb-5" noValidate>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900 placeholder-gray-400"
            style={{
              borderColor: `${COLORS.gold}40`,
              fontFamily: '"Lora", sans-serif',
            }}
            onFocus={(e) => (e.target.style.borderColor = COLORS.gold)}
            onBlur={(e) => (e.target.style.borderColor = `${COLORS.gold}40`)}
            required
            aria-label="Full Name"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900 placeholder-gray-400"
            style={{
              borderColor: `${COLORS.gold}40`,
              fontFamily: '"Lora", sans-serif',
            }}
            onFocus={(e) => (e.target.style.borderColor = COLORS.gold)}
            onBlur={(e) => (e.target.style.borderColor = `${COLORS.gold}40`)}
            required
            aria-label="Email Address"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleFormChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900 placeholder-gray-400"
            style={{
              borderColor: `${COLORS.gold}40`,
              fontFamily: '"Lora", sans-serif',
            }}
            onFocus={(e) => (e.target.style.borderColor = COLORS.gold)}
            onBlur={(e) => (e.target.style.borderColor = `${COLORS.gold}40`)}
            required
            aria-label="Phone Number"
          />

          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleFormChange}
            rows="2"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900 placeholder-gray-400 resize-none"
            style={{
              borderColor: `${COLORS.gold}40`,
              fontFamily: '"Lora", sans-serif',
            }}
            onFocus={(e) => (e.target.style.borderColor = COLORS.gold)}
            onBlur={(e) => (e.target.style.borderColor = `${COLORS.gold}40`)}
            aria-label="Message"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 md:py-3 font-black rounded-lg transition transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed text-black text-xs md:text-sm uppercase tracking-wider"
            style={{
              backgroundColor: COLORS.gold,
              fontFamily: '"Lora", sans-serif',
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

// Main AboutSection Component
export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Intersection Observer for animations
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

    const section = document.getElementById('overview');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    console.error('Failed to load image');
  }, []);

  const handleEnquiryClick = useCallback(() => {
    setShowEnquiryPopup(true);
  }, []);

  const handlePopupClose = useCallback(() => {
    setShowEnquiryPopup(false);
  }, []);

  const featureCards = useMemo(
    () => [
      { value: '45', label: 'Storeys' },
      { value: '24', label: 'Acres' },
      { value: '4BR', label: 'Largest' },
    ],
    []
  );

  return (
    <>
      <section
        id="overview"
        className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-30 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-10 md:mb-12 text-center">
            <div className="inline-block mb-3 md:mb-4">
              <span
                className="text-xs md:text-sm font-semibold tracking-widest text-amber-700 uppercase"
                style={{
                  fontFamily: '"Lora", sans-serif',
                  letterSpacing: '0.15em',
                }}
              >
                Premium Residential
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                fontFamily: '"Playfair Display", serif',
                color: COLORS.darkCharcoal,
                letterSpacing: '-0.02em',
              }}
            >
              The Address That
              <br />
              <span style={{ color: COLORS.gold }}>Redefines the Skyline</span>
            </h1>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: COLORS.gold }}
              />
              <div
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: COLORS.gold }}
              />
              <div
                className="w-6 h-px"
                style={{ backgroundColor: COLORS.gold }}
              />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4'
              }`}
              style={{ fontFamily: '"Lora", sans-serif' }}
            >
              {/* First paragraph */}
              <div className="mb-6 pb-6 border-b border-amber-100">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Rising majestically above Greater Noida West, Iconic Tower is
                  designed for those who demand{' '}
                  <span className="font-semibold text-gray-900">more</span> —
                  more space, more height, more luxury.
                </p>
              </div>

              {/* Second paragraph */}
              <div className="mb-8">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Part of a 24-acre premium development featuring one of the{' '}
                  <span className="font-semibold text-gray-900">
                    largest 4-bedroom residences
                  </span>{' '}
                  in the micro-market.
                </p>
              </div>

              {/* Key statement section */}
              <div
                className="relative pl-4 md:pl-6 border-l-2 mb-8"
                style={{ borderColor: COLORS.gold }}
              >
                <p
                  className="text-xl md:text-2xl font-black mb-2 leading-tight"
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    color: COLORS.darkCharcoal,
                  }}
                >
                  This is not just an apartment.
                </p>
                <p
                  className="text-2xl md:text-3xl font-black leading-tight"
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    color: COLORS.gold,
                  }}
                >
                  This is a vertical estate.
                </p>
              </div>

              {/* Luxury features */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {featureCards.map((card, index) => (
                  <div
                    key={card.label}
                    className={`text-center p-3 md:p-4 rounded-lg bg-white/50 backdrop-blur transition-all duration-500 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  >
                    <div
                      className="text-2xl md:text-3xl font-black"
                      style={{ color: COLORS.gold }}
                    >
                      {card.value}
                    </div>
                    <p
                      className="text-xs text-gray-600 uppercase tracking-wider mt-1"
                      style={{ fontFamily: '"Lora", sans-serif' }}
                    >
                      {card.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Section */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
            >
              <div className="relative group">
                {/* Image container */}
                <div
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl h-80 sm:h-96 md:h-full cursor-pointer bg-gray-100"
                  style={{
                    border: `2px solid ${COLORS.gold}30`,
                    minHeight: '320px',
                  }}
                >
                  {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 animate-pulse bg-gray-200" />
                  )}

                  {imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">
                          Image failed to load
                        </p>
                      </div>
                    </div>
                  )}

                  <img
                    src="/image/about3.jpg"
                    alt="Iconic Tower Residential Estate - Premium 45-storey development with luxury apartments"
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                  />

                  {/* Gold accent overlay */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.gold}20 0%, transparent 100%)`,
                    }}
                  />

                  {/* Black gradient overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)`,
                    }}
                  />

                  {/* Enquiry Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                    <button
                      className="relative px-8 md:px-10 py-3 md:py-4 font-black uppercase tracking-widest text-sm md:text-base rounded-lg overflow-hidden group/btn transform transition-all duration-300 hover:scale-110 active:scale-95"
                      style={{
                        backgroundColor: COLORS.gold,
                        color: COLORS.darkCharcoal,
                        fontFamily: '"Lora", sans-serif',
                      }}
                      onClick={handleEnquiryClick}
                      type="button"
                      aria-label="Open enquiry form"
                    >
                      {/* Button shine effect */}
                      <span className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />

                      <span className="relative flex items-center gap-2">
                        Enquire Now
                        <svg
                          className="w-4 md:w-5 h-4 md:h-5 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                {/* Floating accent label */}
                <div
                  className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg md:shadow-xl transition-transform duration-300 group-hover:scale-105"
                  style={{
                    borderTop: `3px solid ${COLORS.gold}`,
                    maxWidth: '180px',
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-widest font-semibold text-gray-600 mb-1"
                    style={{ fontFamily: '"Lora", sans-serif' }}
                  >
                    Development
                  </p>
                  <p
                    className="text-sm md:text-base font-black"
                    style={{
                      fontFamily: '"Playfair Display", serif',
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
          @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap);
        `}</style>
      </section>

      {/* Enquiry Popup */}
      <EnquiryPopup isOpen={showEnquiryPopup} onClose={handlePopupClose} />
    </>
  );
}