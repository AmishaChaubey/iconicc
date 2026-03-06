import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

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
          border: `2px solid ${COLORS.lightGold}`,
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
            className="text-xl md:text-2xl font-light mb-1"
            style={{
              fontFamily: FONTS.display,
              color: COLORS.darkCharcoal,
              letterSpacing: '-0.01em'
            }}
          >
            Enquire Now
          </h2>
          <p 
            className="text-xs md:text-sm text-gray-600 font-light"
            style={{ fontFamily: FONTS.body }}
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
            className="w-full px-3 py-2 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900"
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
            className="w-full px-3 py-2 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900"
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
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleFormChange}
            rows="2"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none transition text-xs md:text-sm text-gray-900 resize-none"
            style={{
              borderColor: `${COLORS.gold}40`,
              fontFamily: FONTS.body
            }}
            onFocus={(e) => e.target.style.borderColor = COLORS.gold}
            onBlur={(e) => e.target.style.borderColor = `${COLORS.gold}40`}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 md:py-3 font-light rounded-lg transition transform hover:scale-105 disabled:opacity-70 text-black text-xs md:text-sm uppercase tracking-wider"
            style={{
              backgroundColor: COLORS.gold,
              fontFamily: FONTS.accent
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
          </button>
        </form>

        {/* Footer */}
        <p 
          className="text-xs text-gray-500 text-center"
          style={{ fontFamily: FONTS.accent }}
        >
          ✓ We respect your privacy
        </p>
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
      `}</style>
    </div>
  );
}

// Main PriceListSection Component
export default function PriceListSection() {
  const [selectedType, setSelectedType] = useState(null);
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  const priceData = [
    {
      id: 1,
      type: '3 BHK',
      area: '2,500 sq.ft',
      price: '₹On Request',
      category: 'Premium'
    },
    {
      id: 2,
      type: '4 BHK',
      area: '4,400 - 4,535 sq.ft',
      price: '₹On Request',
      category: 'Luxury'
    },
    {
      id: 3,
      type: '5 BHK',
      area: '6,395 - 6,400 sq.ft',
      price: '₹On Request',
      category: 'Ultra Luxury'
    }
  ];

  return (
    <>
    <section id="floor-plan" className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-amber-50 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight"
              style={{
                fontFamily: FONTS.display,
                color: COLORS.darkCharcoal,
                letterSpacing: '-0.02em'
              }}
            >
              Price <span style={{ color: COLORS.gold }}>List</span>
            </h2>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
              <div className="w-6 h-px" style={{ backgroundColor: COLORS.gold }} />
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.gold }} />
              <div className="w-6 h-px" style={{ backgroundColor: COLORS.gold }} />
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Table Section - Left */}
            <div className="lg:col-span-2">
              <div 
                className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl"
                style={{
                  border: `2px solid ${COLORS.lightGold}`,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                }}
              >
                {/* Table Header */}
                <div 
                  className="p-4 md:p-6"
                  style={{ backgroundColor: `${COLORS.lightGold}`, borderBottom: `2px solid ${COLORS.lightGold}` }}
                >
                  <h3 
                    className="text-xl md:text-2xl font-light"
                    style={{
                      fontFamily: FONTS.display,
                      color: COLORS.darkCharcoal,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    Configuration & Pricing
                  </h3>
                </div>

                {/* Table Rows */}
                <div className="divide-y" style={{ borderColor: `${COLORS.lightGold}` }}>
                  {priceData.map((item, idx) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedType(idx)}
                      className={`p-4 md:p-5 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        selectedType === idx ? 'bg-opacity-100' : 'bg-opacity-0 hover:bg-opacity-5'
                      }`}
                      style={{
                        backgroundColor: selectedType === idx ? `${COLORS.lightGold}` : 'transparent'
                      }}
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-center">
                        {/* Type */}
                        <div>
                          <p 
                            className="text-xs md:text-xs uppercase font-light text-gray-600 mb-1"
                            style={{ fontFamily: FONTS.accent, letterSpacing: '0.1em' }}
                          >
                            Type
                          </p>
                          <p 
                            className="text-sm md:text-base font-light"
                            style={{
                              fontFamily: FONTS.display,
                              color: COLORS.darkCharcoal,
                              letterSpacing: '-0.01em'
                            }}
                          >
                            {item.type}
                          </p>
                        </div>

                        {/* Area */}
                        <div>
                          <p 
                            className="text-xs md:text-xs uppercase font-light text-gray-600 mb-1"
                            style={{ fontFamily: FONTS.accent, letterSpacing: '0.1em' }}
                          >
                            Area
                          </p>
                          <p 
                            className="text-xs md:text-sm font-light text-gray-700"
                            // style={{ fontFamily: FONTS.body }}
                          >
                            {item.area}
                          </p>
                        </div>

                        {/* Price */}
                        <div className="hidden md:block">
                          <p 
                            className="text-xs md:text-xs uppercase font-light text-gray-600 mb-1"
                            style={{  letterSpacing: '0.1em' }}
                          >
                            Price
                          </p>
                          <p 
                            className="text-sm md:text-base font-light"
                            style={{ color: COLORS.gold, fontFamily: FONTS.body }}
                          >
                            {item.price}
                          </p>
                        </div>

                        {/* Button */}
                        <div className="md:text-right">
                          <button
                            className="w-full md:w-auto px-3 md:px-4 py-2 rounded-lg font-light uppercase tracking-wider text-xs md:text-xs transition-all duration-300 hover:shadow-lg"
                            style={{
                              backgroundColor: COLORS.gold,
                              color: COLORS.darkCharcoal,
                              fontFamily: FONTS.accent
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowEnquiryPopup(true);
                            }}
                          >
                            Details
                          </button>
                        </div>
                      </div>

                      {/* Mobile Price Display */}
                      <div className="md:hidden mt-2 pt-2 border-t" style={{ borderColor: `${COLORS.lightGold}` }}>
                        <p 
                          className="text-xs font-light text-gray-600 mb-1"
                          style={{ fontFamily: FONTS.body }}
                        >
                          Price: <span style={{ color: COLORS.gold, fontWeight: 'normal' }}>{item.price}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div 
                  className="p-4 md:p-5 border-t"
                  style={{ borderColor: `${COLORS.lightGold}`, backgroundColor: `${COLORS.lightGold}` }}
                >
                  <button
                    className="w-full px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-light uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105 overflow-hidden group/btn flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: COLORS.darkCharcoal,
                      color: 'white',
                      fontFamily: FONTS.accent
                    }}
                    onClick={() => setShowEnquiryPopup(true)}
                  >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      Complete Costing Details
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Document Image - Right */}
            <div className="lg:col-span-1">
              <div 
                className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl h-80 md:h-96 lg:h-full lg:min-h-96 group cursor-pointer"
              >
                {/* Image */}
                <img 
                  src="/image/price3.jpg"
                  alt="Price List Document"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Black Gradient Overlay on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center"
                  style={{
                    background: `linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%)`
                  }}
                >
                  <button
                    onClick={() => setShowEnquiryPopup(true)}
                    className="px-6 md:px-10 py-2.5 md:py-3 rounded-lg font-light uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-1 overflow-hidden group/btn"
                    style={{
                      backgroundColor: COLORS.gold,
                      color: COLORS.darkCharcoal,
                      fontFamily: FONTS.accent,
                      boxShadow: `0 10px 30px rgba(${parseInt(COLORS.gold.slice(1,3), 16)}, ${parseInt(COLORS.gold.slice(3,5), 16)}, ${parseInt(COLORS.gold.slice(5,7), 16)}, 0.3)`
                    }}
                  >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      Enquire Now
                      <ChevronRight size={16} />
                    </span>
                  </button>
                </div>

                {/* Badge */}
                <div 
                  className="absolute top-4 md:top-6 right-4 md:right-6 px-3 md:px-4 py-1.5 md:py-2 rounded-lg backdrop-blur transition-all duration-500 group-hover:opacity-0"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    border: `2px solid ${COLORS.gold}`
                  }}
                >
                  <p 
                    className="text-xs md:text-sm font-light text-white"
                    style={{ fontFamily: FONTS.accent }}
                  >
                    Price List
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-10 md:mt-12 text-center">
            <p 
              className="text-sm md:text-base text-gray-600 mb-4"
              style={{ fontFamily: FONTS.body }}
            >
              Want personalized pricing for your preferred configuration?
            </p>
            <button
              className="px-6 md:px-10 py-2.5 md:py-3 rounded-lg font-light uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105 overflow-hidden group/btn"
              style={{
                backgroundColor: COLORS.gold,
                color: COLORS.darkCharcoal,
                fontFamily: FONTS.accent
              }}
              onClick={() => setShowEnquiryPopup(true)}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                Request Custom Quote
                <ChevronRight size={16} />
              </span>
            </button>
          </div>
        </div>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
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