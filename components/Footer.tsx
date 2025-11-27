/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * Footer Component - Photography Portfolio Footer
 * 
 * Provides site navigation, newsletter signup, and social links
 * in a clean, organized layout. Features underwater-themed colors
 * to maintain brand consistency throughout the site.
 * 
 * Features:
 * - Newsletter subscription (simulated for demo)
 * - Quick navigation links to main sections
 * - Print collections information
 * - Photographer contact/social links
 */

import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  // Track newsletter subscription state
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  // Handle newsletter subscription (demo implementation)
  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-[#0A2540] pt-24 pb-12 px-6 text-cyan-100">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand Section */}
        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif text-cyan-50 mb-6">Underworlds</h4>
          <p className="max-w-xs font-light leading-relaxed text-cyan-200">
            Underwater photography from the deep blue. 
            Exploring the ocean through freediving and natural light.
          </p>
          <p className="mt-4 text-sm text-cyan-300">
            By Alejandro Gutierrez
          </p>
        </div>

        {/* Portfolio Links */}
        <div className="md:col-span-2">
          <h4 className="font-medium text-cyan-50 mb-6 tracking-wide text-sm uppercase">Portfolio</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-cyan-400 transition-colors underline-offset-4 hover:underline">All Prints</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-cyan-400 transition-colors underline-offset-4 hover:underline">Limited Editions</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-cyan-400 transition-colors underline-offset-4 hover:underline">Wildlife</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-cyan-400 transition-colors underline-offset-4 hover:underline">Landscapes</a></li>
          </ul>
        </div>
        
        {/* About Links */}
        <div className="md:col-span-2">
          <h4 className="font-medium text-cyan-50 mb-6 tracking-wide text-sm uppercase">Explore</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-cyan-400 transition-colors underline-offset-4 hover:underline">About Alejandro</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-cyan-400 transition-colors underline-offset-4 hover:underline">Philosophy</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-cyan-400 transition-colors underline-offset-4 hover:underline">Stories</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-cyan-400 transition-colors underline-offset-4 hover:underline">Conservation</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="md:col-span-4">
          <h4 className="font-medium text-cyan-50 mb-6 tracking-wide text-sm uppercase">Newsletter</h4>
          <p className="text-sm text-cyan-200 mb-4 font-light">
            Subscribe for new photography releases, dive stories, and expedition updates.
          </p>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              className="bg-transparent border-b border-cyan-400/50 py-2 text-lg outline-none focus:border-cyan-400 transition-colors placeholder-cyan-300/50 text-cyan-50 disabled:opacity-50" 
            />
            <button 
              onClick={handleSubscribe}
              disabled={subscribeStatus !== 'idle' || !email}
              className="self-start px-6 py-2 bg-cyan-400 text-sky-950 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-cyan-300 disabled:cursor-default disabled:opacity-50 transition-all"
            >
              {subscribeStatus === 'idle' && 'Subscribe'}
              {subscribeStatus === 'loading' && 'Subscribing...'}
              {subscribeStatus === 'success' && '✓ Subscribed'}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright and Social */}
      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-cyan-900/50 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-cyan-300/60">
        <p>© 2025 Underworlds Photography. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">Alejandro Gutierrez</p>
      </div>
    </footer>
  );
};

export default Footer;
