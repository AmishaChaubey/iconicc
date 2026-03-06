import React, { useState } from 'react';
import { Check, ChevronDown, X } from 'lucide-react';

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

// Main PricingSection Component
export default function PricingSection() {
  const [expandPayment, setExpandPayment] = useState(false);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const paymentPlan = [
    { milestone: 'On Booking', percentage: '10%' },
    { milestone: 'Within 60 Days', percentage: '5%' },
    { milestone: 'Within 90 Days', percentage: '5%' },
    { milestone: 'Within 120 Days', percentage: '10%' },
    { milestone: 'On Completion of 5th Floor', percentage: '7.5%' },
    { milestone: 'On Completion of 10th Floor', percentage: '7.5%' },
    { milestone: 'On Completion of 15th Floor', percentage: '7.5%' },
    { milestone: 'On Completion of 20th Floor', percentage: '7.5%' },
    { milestone: 'On Completion of 25th Floor', percentage: '7.5%' },
    { milestone: 'On Completion of 30th Floor', percentage: '7.5%' },
    { milestone: 'On Super Structure Completion', percentage: '7.5%' },
    { milestone: 'On MEP / Flooring / Finishing', percentage: '7.5%' },
    { milestone: 'On External Paint', percentage: '5%' },
    { milestone: 'On Possession Intimation', percentage: '5%' },
  ];

  return (
    <>
      <section id="pricing" className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block mb-3 md:mb-4">
              <span 
                className="text-xs md:text-sm font-semibold tracking-widest text-amber-700 uppercase"
                style={{
                  fontFamily: '"Lora", sans-serif',
                  letterSpacing: '0.15em'
                }}
              >
                Investment Plans
              </span>
            </div>

            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
              style={{
                fontFamily: '"Playfair Display", serif',
                color: darkCharcoal,
                letterSpacing: '-0.02em'
              }}
            >
              Price & Configuration
            </h2>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
              <div className="w-6 h-px" style={{ backgroundColor: goldColor }} />
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: goldColor }} />
              <div className="w-6 h-px" style={{ backgroundColor: goldColor }} />
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Configuration Card */}
            <div 
              className="group p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur transition-all duration-500 hover:shadow-xl"
              style={{
                border: `2px solid ${goldColor}40`,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '24px'
              }}
            >
              <div className="mb-6 md:mb-8">
                <h3 
                  className="text-2xl md:text-3xl font-black mb-2"
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    color: darkCharcoal
                  }}
                >
                  4 BHK + Study + 4T
                </h3>
                <p 
                  className="text-sm md:text-base font-semibold"
                  style={{ color: goldColor, fontFamily: '"Lora", sans-serif' }}
                >
                  Super Spacious Luxury Layout
                </p>
              </div>

              {/* Spacer line */}
              <div className="mb-6 md:mb-8 h-px" style={{ backgroundColor: `${goldColor}20` }} />

              {/* Key Features */}
              <div className="space-y-3 md:space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check 
                    size={20} 
                    className="flex-shrink-0 mt-0.5" 
                    style={{ color: goldColor }} 
                  />
                  <span 
                    className="text-sm md:text-base text-gray-700"
                    style={{ fontFamily: '"Lora", sans-serif' }}
                  >
                    Flexible Construction Linked Payment Plan
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check 
                    size={20} 
                    className="flex-shrink-0 mt-0.5" 
                    style={{ color: goldColor }} 
                  />
                  <span 
                    className="text-sm md:text-base text-gray-700"
                    style={{ fontFamily: '"Lora", sans-serif' }}
                  >
                    Attractive Early Buyer Benefits
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Check 
                    size={20} 
                    className="flex-shrink-0 mt-0.5" 
                    style={{ color: goldColor }} 
                  />
                  <span 
                    className="text-sm md:text-base font-semibold text-red-600"
                    style={{ fontFamily: '"Lora", sans-serif' }}
                  >
                    Limited Inventory Available
                  </span>
                </div>
              </div>

              {/* Enquiry Button */}
              <button
                className="w-full py-3 md:py-4 px-6 font-black uppercase tracking-widest text-sm md:text-base rounded-lg overflow-hidden group/btn transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                style={{
                  backgroundColor: goldColor,
                  color: darkCharcoal,
                  fontFamily: '"Lora", sans-serif'
                }}
                onClick={() => setShowEnquiryPopup(true)}
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Get Pricing Details
                  <svg 
                    className="w-4 md:w-5 h-4 md:h-5 transition-transform group-hover/btn:translate-y-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Payment Plan Card */}
            <div 
              className="p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur transition-all duration-500"
              style={{
                border: `2px solid ${goldColor}40`,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <h3 
                className="text-2xl md:text-3xl font-black mb-6 md:mb-8"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  color: darkCharcoal
                }}
              >
                Construction Linked Payment
              </h3>

              {/* Payment Items */}
              <div className="space-y-2 mb-4">
                {paymentPlan.slice(0, 5).map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex justify-between items-center p-3 rounded-lg bg-white/50 hover:bg-white transition-colors duration-300"
                    style={{ borderLeft: `3px solid ${goldColor}` }}
                  >
                    <span 
                      className="text-xs md:text-sm font-semibold text-gray-700"
                      style={{ fontFamily: '"Lora", sans-serif' }}
                    >
                      {item.milestone}
                    </span>
                    <span 
                      className="text-sm md:text-base font-black"
                      style={{ color: goldColor }}
                    >
                      {item.percentage}
                    </span>
                  </div>
                ))}
              </div>

              {/* Expandable Section */}
              <button
                onClick={() => setExpandPayment(!expandPayment)}
                className="w-full py-3 px-4 rounded-lg border transition-all duration-300 flex items-center justify-between hover:bg-gray-50 mt-4"
                style={{ borderColor: `${goldColor}40` }}
              >
                <span 
                  className="font-semibold text-sm md:text-base"
                  style={{
                    fontFamily: '"Lora", sans-serif',
                    color: goldColor
                  }}
                >
                  {expandPayment ? 'Hide Full Schedule' : 'View Full Schedule'}
                </span>
                <ChevronDown 
                  size={20}
                  style={{ 
                    color: goldColor,
                    transform: expandPayment ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s'
                  }}
                />
              </button>

              {/* Full Payment Plan */}
              {expandPayment && (
                <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">
                  {paymentPlan.slice(5).map((item, idx) => (
                    <div 
                      key={idx + 5} 
                      className="flex justify-between items-center p-3 rounded-lg bg-white/50 hover:bg-white transition-colors duration-300"
                      style={{ borderLeft: `3px solid ${goldColor}` }}
                    >
                      <span 
                        className="text-xs md:text-sm font-semibold text-gray-700"
                        style={{ fontFamily: '"Lora", sans-serif' }}
                      >
                        {item.milestone}
                      </span>
                      <span 
                        className="text-sm md:text-base font-black"
                        style={{ color: goldColor }}
                      >
                        {item.percentage}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <p 
                className="text-center text-gray-600 font-semibold mt-6 text-xs md:text-sm"
                style={{ fontFamily: '"Lora", sans-serif' }}
              >
                Structured for convenience and confidence.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap);
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