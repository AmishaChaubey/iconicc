import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

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
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
              style={{
                fontFamily: '"Playfair Display", serif',
                color: darkCharcoal,
                letterSpacing: '-0.02em'
              }}
            >
              Price <span style={{ color: goldColor }}>List</span>
            </h2>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
              <div className="w-6 h-px" style={{ backgroundColor: goldColor }} />
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: goldColor }} />
              <div className="w-6 h-px" style={{ backgroundColor: goldColor }} />
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Table Section - Left */}
            <div className="lg:col-span-2">
              <div 
                className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl"
                style={{
                  border: `2px solid ${goldColor}40`,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                }}
              >
                {/* Table Header */}
                <div 
                  className="p-4 md:p-6"
                  style={{ backgroundColor: `${goldColor}15`, borderBottom: `2px solid ${goldColor}40` }}
                >
                  <h3 
                    className="text-xl md:text-2xl font-black"
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      color: darkCharcoal
                    }}
                  >
                    Configuration & Pricing
                  </h3>
                </div>

                {/* Table Rows */}
                <div className="divide-y" style={{ borderColor: `${goldColor}20` }}>
                  {priceData.map((item, idx) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedType(idx)}
                      className={`p-4 md:p-5 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        selectedType === idx ? 'bg-opacity-100' : 'bg-opacity-0 hover:bg-opacity-5'
                      }`}
                      style={{
                        backgroundColor: selectedType === idx ? `${goldColor}20` : 'transparent'
                      }}
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-center">
                        {/* Type */}
                        <div>
                          <p 
                            className="text-xs md:text-xs uppercase font-semibold text-gray-600 mb-1"
                            style={{ fontFamily: '"Lora", sans-serif' }}
                          >
                            Type
                          </p>
                          <p 
                            className="text-sm md:text-base font-black"
                            style={{
                              fontFamily: '"Playfair Display", serif',
                              color: darkCharcoal
                            }}
                          >
                            {item.type}
                          </p>
                        </div>

                        {/* Area */}
                        <div>
                          <p 
                            className="text-xs md:text-xs uppercase font-semibold text-gray-600 mb-1"
                            style={{ fontFamily: '"Lora", sans-serif' }}
                          >
                            Area
                          </p>
                          <p 
                            className="text-xs md:text-sm font-semibold text-gray-700"
                            style={{ fontFamily: '"Lora", sans-serif' }}
                          >
                            {item.area}
                          </p>
                        </div>

                        {/* Price */}
                        <div className="hidden md:block">
                          <p 
                            className="text-xs md:text-xs uppercase font-semibold text-gray-600 mb-1"
                            style={{ fontFamily: '"Lora", sans-serif' }}
                          >
                            Price
                          </p>
                          <p 
                            className="text-sm md:text-base font-black"
                            style={{ color: goldColor, fontFamily: '"Lora", sans-serif' }}
                          >
                            {item.price}
                          </p>
                        </div>

                        {/* Button */}
                        <div className="md:text-right">
                          <button
                            className="w-full md:w-auto px-3 md:px-4 py-2 rounded-lg font-black uppercase tracking-wider text-xs md:text-xs transition-all duration-300 hover:shadow-lg"
                            style={{
                              backgroundColor: goldColor,
                              color: darkCharcoal,
                              fontFamily: '"Lora", sans-serif'
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
                      <div className="md:hidden mt-2 pt-2 border-t" style={{ borderColor: `${goldColor}30` }}>
                        <p 
                          className="text-xs font-semibold text-gray-600 mb-1"
                          style={{ fontFamily: '"Lora", sans-serif' }}
                        >
                          Price: <span style={{ color: goldColor, fontWeight: 'bold' }}>{item.price}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div 
                  className="p-4 md:p-5 border-t"
                  style={{ borderColor: `${goldColor}30`, backgroundColor: `${goldColor}08` }}
                >
                  <button
                    className="w-full px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105 overflow-hidden group/btn flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: `linear-gradient(135deg, #2c3e50 0%, ${goldColor} 100%)`,
                      color: 'white',
                      fontFamily: '"Lora", sans-serif'
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
                    className="px-6 md:px-10 py-2.5 md:py-3 rounded-lg font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-1 overflow-hidden group/btn"
                    style={{
                      backgroundColor: goldColor,
                      color: darkCharcoal,
                      fontFamily: '"Lora", sans-serif',
                      boxShadow: `0 10px 30px rgba(${parseInt(goldColor.slice(1,3), 16)}, ${parseInt(goldColor.slice(3,5), 16)}, ${parseInt(goldColor.slice(5,7), 16)}, 0.3)`
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
                    border: `2px solid ${goldColor}`
                  }}
                >
                  <p 
                    className="text-xs md:text-sm font-black text-white"
                    style={{ fontFamily: '"Lora", sans-serif' }}
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
              style={{ fontFamily: '"Lora", sans-serif' }}
            >
              Want personalized pricing for your preferred configuration?
            </p>
            <button
              className="px-6 md:px-10 py-2.5 md:py-3 rounded-lg font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:shadow-lg transform hover:scale-105 overflow-hidden group/btn"
              style={{
                backgroundColor: goldColor,
                color: darkCharcoal,
                fontFamily: '"Lora", sans-serif'
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