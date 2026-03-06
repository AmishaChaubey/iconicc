import React, { useState, useCallback, useMemo } from 'react';
import { Eye, X, AlertCircle } from 'lucide-react';

const COLORS = {
  gold: '#D0AB69',
  darkCharcoal: '#1a1a1a',
  lightGold: 'rgba(208, 171, 105, 0.25)',
  darkOverlay: 'rgba(0, 0, 0, 0.85)',
};

const FONTS = {
  display: '"Playfair Display", serif',
  body: '"Lora", sans-serif',
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
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      console.log('Enquiry submitted:', formData);
      setSubmitStatus({ type: 'success', message: 'Thank you! We\'ll contact you soon.' });
      
      // Reset form after success
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
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xs md:max-w-sm p-6 md:p-8 relative animate-in fade-in zoom-in duration-300"
        style={{
          border: `2px solid ${COLORS.lightGold}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
          aria-label="Close dialog"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 pr-8">
          <h2
            id="enquiry-title"
            className="text-2xl md:text-3xl font-black mb-2"
            style={{
              fontFamily: FONTS.display,
              color: COLORS.darkCharcoal,
            }}
          >
            Enquire Now
          </h2>
          <p
            className="text-sm text-gray-600 font-medium"
            style={{ fontFamily: FONTS.body }}
          >
            Get in touch with our team
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus && (
          <div
            className={`mb-4 p-3 rounded-lg flex items-start gap-2 text-sm ${
              submitStatus.type === 'success'
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}
          >
            <AlertCircle
              size={18}
              className={submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}
              style={{ flexShrink: 0, marginTop: '2px' }}
            />
            <p className={submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'}>
              {submitStatus.message}
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="space-y-3 mb-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleFormChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 border rounded-lg focus:outline-none transition-colors text-sm text-gray-900 disabled:bg-gray-50"
            style={{
              borderColor: COLORS.lightGold,
              fontFamily: FONTS.body,
            }}
            required
            aria-label="Full Name"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleFormChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 border rounded-lg focus:outline-none transition-colors text-sm text-gray-900 disabled:bg-gray-50"
            style={{
              borderColor: COLORS.lightGold,
              fontFamily: FONTS.body,
            }}
            required
            aria-label="Email Address"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleFormChange}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 border rounded-lg focus:outline-none transition-colors text-sm text-gray-900 disabled:bg-gray-50"
            style={{
              borderColor: COLORS.lightGold,
              fontFamily: FONTS.body,
            }}
            required
            aria-label="Phone Number"
          />

          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleFormChange}
            disabled={isSubmitting}
            rows="3"
            className="w-full px-4 py-2.5 border rounded-lg focus:outline-none transition-colors text-sm text-gray-900 resize-none disabled:bg-gray-50"
            style={{
              borderColor: COLORS.lightGold,
              fontFamily: FONTS.body,
            }}
            aria-label="Message"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 font-black rounded-lg transition-all duration-300 text-black text-sm uppercase tracking-wider hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: COLORS.gold,
              fontFamily: FONTS.body,
            }}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
          </button>
        </form>

        {/* Footer */}
        <p
          className="text-xs text-gray-500 text-center"
          style={{ fontFamily: FONTS.body }}
        >
          ✓ We respect your privacy
        </p>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap');

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
          box-shadow: 0 0 0 3px ${COLORS.lightGold};
        }
      `}</style>
    </div>
  );
}

// Main Gallery Component
export default function GallerySection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const galleryItems = useMemo(
    () => [
      {
        id: 1,
        title: 'Living Room',
        image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 2,
        title: 'Master Bedroom',
        image: 'https://images.pexels.com/photos/5178074/pexels-photo-5178074.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 3,
        title: 'Modular Kitchen',
        image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 4,
        title: 'Study Room',
        image: 'https://images.pexels.com/photos/265004/pexels-photo-265004.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 5,
        title: 'Balcony View',
        image: 'https://images.pexels.com/photos/8142972/pexels-photo-8142972.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 6,
        title: 'Dining Area',
        image: 'https://images.pexels.com/photos/265884/pexels-photo-265884.jpeg',
      },
      {
        id: 7,
        title: 'Guest Bedroom',
        image: 'https://images.pexels.com/photos/260553/pexels-photo-260553.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      {
        id: 8,
        title: 'Premium Bathroom',
        image: 'https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
    ],
    []
  );

  const handleImageLoad = useCallback((id) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  }, []);

  const handleEnquireClick = useCallback((e) => {
    e.stopPropagation();
    setShowEnquiryPopup(true);
  }, []);

  const handleHoverEnter = useCallback((id) => {
    setHoveredId(id);
  }, []);

  const handleHoverLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  return (
    <>
      <section
        id="gallery"
        className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden"
        aria-label="Gallery and Interiors Section"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute bottom-0 right-0 w-80 md:w-96 h-80 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-1/2 left-0 w-64 md:w-80 h-64 md:h-80 bg-amber-100 rounded-full blur-3xl opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span
                className="text-xs md:text-sm font-semibold tracking-widest text-amber-700 uppercase"
                style={{
                  fontFamily: FONTS.body,
                  letterSpacing: '0.15em',
                }}
              >
                Visual Experience
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              style={{
                fontFamily: FONTS.display,
                color: COLORS.darkCharcoal,
                letterSpacing: '-0.02em',
              }}
            >
              Gallery &{' '}
              <span style={{ color: COLORS.gold }}>
                Interiors
              </span>
            </h2>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div
                className="w-8 h-px"
                style={{ backgroundColor: COLORS.gold }}
              />
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: COLORS.gold }}
              />
              <div
                className="w-8 h-px"
                style={{ backgroundColor: COLORS.gold }}
              />
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => handleHoverEnter(item.id)}
                onMouseLeave={handleHoverLeave}
                className="group relative h-72 md:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03]"
                style={{
                  border: `2px solid ${COLORS.lightGold}`,
                }}
                role="button"
                tabIndex={0}
                aria-label={`${item.title} - Press to enquire`}
              >
                {/* Image Container */}
                <div className="w-full h-full bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    onLoad={() => handleImageLoad(item.id)}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                  />
                </div>

                {/* Interactive Overlay */}
                <div
                  className={`absolute inset-0 transition-all duration-500 flex flex-col items-center justify-center pointer-events-none ${
                    hoveredId === item.id ? 'opacity-100 pointer-events-auto' : 'opacity-0'
                  }`}
                  style={{
                    background: `linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.95) 100%)`,
                  }}
                >
                  <div className="text-center mb-6">
                    <h3
                      className="text-2xl md:text-3xl font-black text-white mb-2"
                      style={{ fontFamily: FONTS.display }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-amber-300 font-semibold"
                      style={{ fontFamily: FONTS.body }}
                    >
                      Premium Space
                    </p>
                  </div>

                </div>

                {/* Title Badge - Visible when not hovering */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 md:p-5 transition-all duration-500 ${
                    hoveredId === item.id ? 'opacity-0.9 translate-y-2' : 'opacity-100'
                  }`}
                  style={{
                    background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)`,
                  }}
                >
                  <h3
                    className="text-lg md:text-xl font-black text-white"
                    style={{ fontFamily: FONTS.display }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap');
        `}</style>
      </section>

    </>
  );
}