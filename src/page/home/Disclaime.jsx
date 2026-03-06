import React from 'react';

const goldColor = '#D0AB69';
const darkCharcoal = '#1a1a1a';

export default function DisclaimerSection() {
  return (
    <section className="relative py-12 md:py-16 px-4 md:px-6 overflow-hidden bg-black text-white ">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96  rounded-full blur-3xl opacity-15" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Main Disclaimer Paragraph */}
        <div className="mb-8 md:mb-10">
          <p 
            className="text-xs md:text-sm leading-relaxed text-gray-100"
            style={{ fontFamily: '"Lora", sans-serif' }}
          >
            <span className='text-white'>Disclaimer:</span>
            {' '}
            The information provided on the Iconic Tower website is for general informational purposes only. While we strive to ensure accuracy, completeness, and reliability, we make no express or implied warranties regarding the availability, suitability, or accuracy of the properties, services, or content displayed on this website. Please note: Prices, availability, and specifications are subject to change without prior notice. All content, including images, videos, floor plans, and descriptions, is for illustrative purposes only and should not be considered legally binding. Prospective buyers and investors are encouraged to independently verify all details, including property specifications, legal requirements, and financial obligations, before making any decisions. Iconic Tower and its affiliates shall not be responsible for any loss, damage, or inconvenience resulting from reliance on the provided information. Additionally, any third-party links included on the website are for reference only, and we do not endorse or assume responsibility for their content. By accessing this website, you acknowledge and agree to this disclaimer. For further clarification or official property details, please contact our team or refer to the respective property developers or authorized representatives.
          </p>
        </div>

    
      </div>

      <style jsx>{`
        @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap);
      `}</style>
    </section>
  );
}