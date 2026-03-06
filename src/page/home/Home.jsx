import React, { useState, useEffect } from 'react';

// Import all components
import Navbar from './01-Navbar';
import HeroBanner from './02-HeroBanner';
import AboutSection from './03-About';
import HighlightsSection from './04-Highlights';
import PricingSection from './05-Pricing';
import FloorPlanSection from './06-FloorPlans';
import AmenitiesSection from './07-Amenities';
import MarqueeSection from './08-Marquee';
import GallerySection from './09-Gallery';
import MapSection from './10-Map';
import WhyInvestSection from './11-WhyInvest';
import CTASection from './12-CTA';
import Footer from './13-Footer';
import DisclaimerSection from './14-Disclaimer';
import PopupModal from './15-PopupModal';

export default function IconicTowerLanding() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-yellow-500 z-50 transition-all"
        style={{ width: `${scrollProgress}%` }}
      />

      
      <Navbar />
      <HeroBanner />
      <AboutSection />
      <HighlightsSection />
      <PricingSection />
      <FloorPlanSection />
      <AmenitiesSection />
      <MarqueeSection />
      <GallerySection />
      <MapSection />
      <WhyInvestSection />
      <CTASection />
      <Footer />
      <DisclaimerSection />
      <PopupModal />

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold w-12 h-12 rounded-full flex items-center justify-center z-40 transition transform hover:scale-110"
        style={{ opacity: scrollProgress > 20 ? 1 : 0, pointerEvents: scrollProgress > 20 ? 'auto' : 'none' }}
      >
        ↑
      </button>
    </div>
  );
}