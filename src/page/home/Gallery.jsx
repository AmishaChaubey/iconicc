import React, { useState, useCallback, useMemo } from 'react';
import { X, AlertCircle, ArrowRight } from 'lucide-react';

const COLORS = {
  gold: '#D4AF37',
  darkCharcoal: '#0a0a0a',
  lightGold: 'rgba(212, 175, 55, 0.15)',
  darkOverlay: 'rgba(0, 0, 0, 0.85)',
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
            Connect with our design team
          </p>
        </div>

        {submitStatus && (
          <div
            className={`mb-5 p-3 rounded text-sm flex items-start gap-2 ${
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

        <form onSubmit={handleFormSubmit} className="space-y-4 mb-6">
          <div>
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
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <div>
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
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 font-light rounded-none transition-all duration-300 text-white text-sm uppercase tracking-widest hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-6"
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
        subtitle: 'Contemporary Elegance',
        image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
        span: 'lg:col-span-2 lg:row-span-2',
      },
      {
        id: 2,
        title: 'Master Bedroom',
        subtitle: 'Luxe Comfort',
        image: 'https://images.pexels.com/photos/5178074/pexels-photo-5178074.jpeg?auto=compress&cs=tinysrgb&w=600',
        span: 'lg:col-span-1 lg:row-span-1',
      },
      {
        id: 3,
        title: 'Modular Kitchen',
        subtitle: 'Smart Design',
        image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600',
        span: 'lg:col-span-1 lg:row-span-1',
      },
      {
        id: 4,
        title: 'Study Room',
        subtitle: 'Productive Space',
        image: 'https://images.pexels.com/photos/265004/pexels-photo-265004.jpeg?auto=compress&cs=tinysrgb&w=600',
        span: 'lg:col-span-1 lg:row-span-1',
      },
      {
        id: 5,
        title: 'Balcony View',
        subtitle: 'Open Air Living',
        image: 'https://images.pexels.com/photos/8142972/pexels-photo-8142972.jpeg?auto=compress&cs=tinysrgb&w=600',
        span: 'lg:col-span-1 lg:row-span-1',
      },
      {
        id: 6,
        title: 'Dining Area',
        subtitle: 'Social Hub',
        image: 'https://images.pexels.com/photos/35380759/pexels-photo-35380759.jpeg',
        span: 'lg:col-span-1',
      },
      {
        id: 7,
        title: 'Guest Bedroom',
        subtitle: 'Refined Retreat',
        image: 'https://images.pexels.com/photos/260553/pexels-photo-260553.jpeg?auto=compress&cs=tinysrgb&w=600',
        span: 'lg:col-span-1',
      },
      {
        id: 8,
        title: 'Premium Bathroom',
        subtitle: 'Spa Sanctuary',
        image: 'https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=600',
        span: 'lg:col-span-1',
      },

   {
  id:9,
  title:'Pool Deck',
  subtitle:'Luxury poolside experience',
  image:'https://images.pexels.com/photos/32509619/pexels-photo-32509619.jpeg',
  span:'lg:col-span-1'
}
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

  return (
    <>
      <section
        id="gallery"
        className="relative py-10 md:py-14 px-4 md:px-6 overflow-hidden"
        style={{ backgroundColor: COLORS.cream }}
        aria-label="Gallery and Interiors Section"
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
          <div className="mb-8 md:mb-10">
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
                Our Collection
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-3"
              style={{
                fontFamily: FONTS.display,
                color: COLORS.darkCharcoal,
                letterSpacing: '-0.03em',
              }}
            >
              Gallery &<br />
              <span style={{ color: COLORS.gold }}>Interiors</span>
            </h2>

            <p
              className="text-base md:text-lg max-w-xl text-gray-700 leading-relaxed font-light"
              style={{ fontFamily: FONTS.body }}
            >
              Curated interior designs showcasing elegance, functionality, and timeless beauty.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[240px] gap-3 md:gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all duration-500 ${item.span}`}
                style={{
                  border: `1px solid ${COLORS.lightGold}`,
                }}
                onClick={handleEnquireClick}
                role="button"
                tabIndex={0}
                aria-label={`${item.title} - Press to enquire`}
              >
                {/* Image */}
                <div className="w-full h-full bg-gray-200 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    onLoad={() => handleImageLoad(item.id)}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                  />
                </div>

                {/* Dark Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)`,
                  }}
                />

                {/* Content Badge - Bottom Left */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 transition-all duration-500 ${
                  hoveredId === item.id ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.8) 100%)`,
                  }}
                >
                  <h3
                    className="text-base md:text-lg font-light text-white"
                    style={{ fontFamily: FONTS.display }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs text-amber-200 mt-0.5"
                    style={{ fontFamily: FONTS.accent, letterSpacing: '0.1em', fontSize: '0.65rem' }}
                  >
                    {item.subtitle}
                  </p>
                </div>

                {/* Hover Content */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 pointer-events-none ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-center">
                    <p
                      className="text-sm text-amber-300 mb-3 tracking-widest uppercase"
                      style={{ fontFamily: FONTS.accent, fontSize: '0.65rem' }}
                    >
                      View Details
                    </p>
                    <ArrowRight 
                      size={24} 
                      className="text-white mx-auto animate-pulse"
                      style={{
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-8 md:mt-10 text-center">
            <p
              className="text-sm text-gray-600 mb-3"
              style={{ fontFamily: FONTS.body }}
            >
              Interested in transforming your space?
            </p>
            <button
              onClick={handleEnquireClick}
              className="inline-flex items-center gap-2 px-6 py-3 transition-all duration-300 hover:gap-3 text-sm"
              style={{
                backgroundColor: COLORS.darkCharcoal,
                color: 'white',
                fontFamily: FONTS.accent,
                letterSpacing: '0.1em',
                fontSize: '0.8rem',
              }}
            >
              Start a Project
              <ArrowRight size={16} />
            </button>
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

          @keyframes pulse-subtle {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.6;
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

          .animate-pulse {
            animation: pulse-subtle 2s ease-in-out infinite;
          }
        `}</style>
      </section>

      <EnquiryPopup isOpen={showEnquiryPopup} onClose={() => setShowEnquiryPopup(false)} />
    </>
  );
}