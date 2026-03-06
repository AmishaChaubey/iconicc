import React, { useState, useEffect } from 'react';
import './App.css'

import Navbar from './page/home/Navbar';
import HeroBanner from './page/home/Banner';
import AboutSection from './page/home/About';
import HighlightsSection from './page/home/Highlights';
import PricingSection from './page/home/Pricing';
import FloorPlanSection from './page/home/FloorPlans';
import AmenitiesSection from './page/home/Ameneties';
import GallerySection from './page/home/Gallery';
import MapSection from './page/home/Map';
import CTASection from './page/home/Cta';
import Footer from './page/home/Footer';
import DisclaimerSection from './page/home/Disclaime';
 import PopupModal from './page/home/popup';

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
       <GallerySection />
       <MapSection />
       <CTASection />
       <Footer />
       <DisclaimerSection />
       <PopupModal /> 
      

      {/* Back to Top Button*/}
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