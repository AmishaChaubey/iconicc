import React, { useState, useEffect, useCallback } from 'react';
import { Download, Menu, X } from 'lucide-react';

const goldColor = '#D0AB69';
const darkBg = '#0a0a0a';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const handleDownload = useCallback(() => {
    alert('Downloading Brochure...');
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] border-b border-transparent ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-white/5 py-3 md:py-2 shadow-2xl'
          : 'bg-transparent py-4 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-auto">
        
        {/* Logo */}
        <a 
          href="/" 
          className="relative z-10 flex items-center flex-shrink-0 transition-opacity duration-300 hover:opacity-80"
          aria-label="Iconic Tower Home"
        >
          <img 
            src="/image/logo.png" 
            alt="Iconic Tower Logo" 
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            loading="eager"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative group py-2 transition-colors duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 group-hover:text-white duration-300">
                {link.label}
              </span>
              
              {/* Underline Animation */}
              <span 
                className="absolute bottom-0 left-0 w-full h-[1.5px] rounded-full transition-all duration-300 origin-center scale-x-0 group-hover:scale-x-100"
                style={{ backgroundColor: goldColor }}
              />
            </a>
          ))}
        </div>

        {/* Desktop Brochure Button */}
        <div className="hidden lg:block">
          <button
            onClick={handleDownload}
            className="group relative flex items-center gap-2 px-6 py-3 rounded-full overflow-hidden transition-all duration-500"
            style={{
              backgroundColor: scrolled ? goldColor : 'rgba(255, 255, 255, 0.1)',
              color: scrolled ? '#000' : '#fff',
              border: scrolled ? 'none' : `1px solid rgba(255, 255, 255, 0.2)`
            }}
            aria-label="Download brochure"
          >
            <span className="relative z-10 text-xs font-bold uppercase tracking-wider">
              Brochure
            </span>
            <Download 
              size={16} 
              className="relative z-10 transition-transform duration-500 group-hover:translate-y-[2px]"
            />
            
            {/* Hover Background */}
            {!scrolled && (
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            )}
          </button>
        </div>

        {/* Mobile Brochure Button */}
        <button
          onClick={handleDownload}
          className="lg:hidden flex items-center justify-center p-2.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            color: goldColor,
            backgroundColor: 'transparent'
          }}
          aria-label="Download brochure"
        >
          <Download size={20} />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 p-2 transition-all duration-300 active:scale-95"
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={28} className="text-white" strokeWidth={2.5} />
          ) : (
            <Menu size={28} className="text-white" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-[#050505] z-40 lg:hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Decorative Blur */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#D0AB69]/15 to-transparent rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-tr from-[#D0AB69]/10 to-transparent rounded-full blur-[80px] pointer-events-none" />

        {/* Mobile Menu Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 pt-20 pb-8">
          
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-6 sm:gap-8 text-center mb-12 w-full">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-2xl sm:text-3xl md:text-4xl font-black text-white hover:text-[#D0AB69] transition-colors duration-300 transform"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: mobileOpen ? `${index * 80 + 100}ms` : '0ms',
                  transitionDuration: '500ms'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Brochure Download Button */}
          <button
            onClick={() => {
              handleDownload();
              closeMobileMenu();
            }}
            className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 text-[#D0AB69] hover:bg-[#D0AB69] hover:text-black transition-all duration-300 transform active:scale-95 w-full sm:w-auto"
            style={{
              borderColor: goldColor,
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: mobileOpen ? '500ms' : '0ms',
              transitionDuration: '500ms'
            }}
            aria-label="Download brochure from mobile menu"
          >
            <Download size={18} />
            <span className="uppercase tracking-widest text-xs sm:text-sm font-bold">Download Brochure</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap);

        /* Smooth scrolling when mobile menu is open */
        body.mobile-menu-open {
          overflow: hidden;
        }
      `}</style>
    </nav>
  );
}