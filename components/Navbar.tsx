/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * Navbar Component - Photography Portfolio Navigation
 * 
 * Sticky header navigation that adapts based on scroll position and viewport size.
 * Features the "Underworlds" brand name and provides access to main sections.
 * 
 * Behavior:
 * - Transparent background on hero section
 * - Solid background with blur effect after scrolling
 * - Responsive mobile menu with overlay
 * - Dynamic text colors for optimal contrast
 * - Shopping cart indicator for print purchases
 */

import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart }) => {
  // Track scroll position to change navbar appearance
  const [scrolled, setScrolled] = useState(false);
  // Track mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Listen for scroll events to update navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation link clicks and close mobile menu
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  // Handle cart button click
  const handleCartClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      onOpenCart();
  }

  // Dynamic text color: white on transparent hero, dark on scrolled/menu states
  const textColorClass = (scrolled || mobileMenuOpen) ? 'text-[#0C4A6E]' : 'text-white';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled || mobileMenuOpen 
            ? 'bg-cyan-50/95 backdrop-blur-md py-4 shadow-lg border-b border-cyan-200/50' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">
          {/* Brand Logo - "Underworlds" */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, ''); // Return to top of homepage
            }}
            className={`text-3xl font-serif font-light tracking-tight z-50 relative transition-colors duration-500 ${textColorClass}`}
          >
            {BRAND_NAME}
          </a>
          
          {/* Desktop Navigation Links */}
          <div className={`hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase transition-colors duration-500 ${textColorClass}`}>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-cyan-400 transition-colors">Stories</a>
          </div>

          {/* Right Side Actions - Cart and Mobile Menu */}
          <div className={`flex items-center gap-6 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            {/* Cart Button (hidden on mobile to save space) */}
            <button 
              onClick={handleCartClick}
              className="text-sm font-medium uppercase tracking-widest hover:text-cyan-400 transition-colors hidden sm:block"
            >
              Cart ({cartCount})
            </button>
            
            {/* Mobile Menu Hamburger/Close Toggle */}
            <button 
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass} hover:text-cyan-400`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Full-Screen Overlay */}
      <div className={`fixed inset-0 bg-gradient-to-b from-sky-50 to-cyan-100 z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-8 text-xl font-serif font-light text-[#0C4A6E]">
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-cyan-500 transition-colors">Portfolio</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-cyan-500 transition-colors">About</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-cyan-500 transition-colors">Stories</a>
            <button 
                onClick={handleCartClick} 
                className="hover:text-cyan-500 transition-colors text-base uppercase tracking-widest font-sans mt-8"
            >
                Cart ({cartCount})
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
