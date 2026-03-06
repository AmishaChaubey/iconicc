import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const goldColor = '#D0AB69';
const darkCharcoal = '#1a1a1a';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#overview' },

    { label: 'Pricing', href: '#pricing' },
    { label: 'Floor Plans', href: '#floor-plan' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+91 9205974843', href: 'tel:+919205974843' },
    { icon: Mail, text: 'info@iconictower.com', href: 'mailto:info@iconictower.com' },
    { icon: MapPin, text: 'Noida Extension, Greater Noida West', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
          
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img
                src="/image/logo.png"
                alt="Iconic Tower Logo"
                className="h-16 w-16 md:h-20 md:w-20 rounded-lg object-cover"
                
              />
            </div>
            <p 
              className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3"
              style={{ fontFamily: '"Lora", sans-serif' }}
            >
              Premium luxury residences redefining the skyline of Greater Noida West
            </p>
            <p 
              className="text-gray-500 text-xs"
              style={{ fontFamily: '"Lora", sans-serif' }}
            >
              45 Storeys of Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="font-black text-base md:text-lg mb-4 md:mb-5"
              style={{ color: goldColor, fontFamily: '"Playfair Display", serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-xs md:text-sm font-semibold flex items-center gap-1 group"
                    style={{ fontFamily: '"Lora", sans-serif' }}
                  >
                  
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="font-black text-base md:text-lg mb-4 md:mb-5"
              style={{ color: goldColor, fontFamily: '"Playfair Display", serif' }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-xs md:text-sm flex items-start gap-3 group"
                    style={{ fontFamily: '"Lora", sans-serif' }}
                  >
                    <Icon 
                      size={16} 
                      className="flex-shrink-0 mt-0.5 transition-colors group-hover:text-yellow-500"
                      style={{ color: goldColor }}
                    />
                    <span className="leading-snug">{item.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 
              className="font-black text-base md:text-lg mb-4 md:mb-5"
              style={{ color: goldColor, fontFamily: '"Playfair Display", serif' }}
            >
              Follow Us
            </h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2.5 md:p-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-110"
                    style={{
                      backgroundColor: `${goldColor}20`,
                      border: `1px solid ${goldColor}40`,
                      color: goldColor
                    }}
                    title={social.name}
                    aria-label={social.name}
                  >
                    <Icon size={18} md:size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px mb-8 md:mb-10"
          style={{ backgroundColor: `${goldColor}30` }}
        />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
          {/* Copyright */}
          <p 
            className="text-gray-500 text-xs md:text-sm text-center md:text-left"
            style={{ fontFamily: '"Lora", sans-serif' }}
          >
            © {currentYear} Iconic Tower. All rights reserved.
          </p>


     
        </div>

        {/* Mobile Bottom Divider */}
        <div 
          className="h-px mt-6 md:hidden"
          style={{ backgroundColor: `${goldColor}30` }}
        />

        {/* Mobile Social Links Notice */}
        <p 
          className="text-gray-600 text-xs text-center mt-6 md:hidden"
          style={{ fontFamily: '"Lora", sans-serif' }}
        >
          Follow us on social media for updates and offers
        </p>
      </div>

      <style jsx>{`
        @import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600;700&display=swap);
      `}</style>
    </footer>
  );
}