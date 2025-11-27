/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * Hero Component - Underwater Photography Portfolio
 * 
 * This is the main landing section featuring a dramatic underwater photograph
 * as the hero background. The component displays the "Underworlds" brand name
 * and tagline over an immersive ocean scene, creating an immediate emotional 
 * connection with visitors.
 * 
 * Features:
 * - Full-screen hero image with overlay for text readability
 * - Smooth scroll navigation to portfolio section
 * - Responsive typography that adapts to screen size
 * - Animated elements for a polished, professional feel
 */

import React from 'react';
import { getImageUrl, IMAGE_FILES } from '../config/images';

const Hero: React.FC = () => {
  // Handle smooth scrolling to different sections of the page
  // This prevents the default anchor jump and adds smooth animation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Account for fixed header height when calculating scroll position
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash for bookmarking/sharing without triggering jump
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Silently fail in restricted environments (e.g., some embedded contexts)
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#0A2540]">
      
      {/* Hero Background - Stunning Underwater Photography */}
      <div className="absolute inset-0 w-full h-full">
        {/* Main hero image: Freediver silhouetted against light rays - positioned 3% left for better centering */}
        <img 
            src={getImageUrl(IMAGE_FILES.DSC00670)} 
            alt="Freediver descending into deep blue water with dramatic light rays" 
            className="w-full h-full object-cover animate-[subtleZoom_20s_ease-in-out_infinite_alternate]"
            style={{ objectPosition: '47% center' }}
        />
        {/* Dark gradient overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C4A6E]/60 via-[#0C4A6E]/40 to-[#0A2540]/80"></div>
        {/* Additional vignette effect to draw focus to center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,37,64,0.5)_100%)]"></div>
      </div>

      {/* Main Content - Brand Name and Tagline */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6">
        <div className="animate-fade-in-up w-full md:w-auto">
          {/* Small badge showcasing photographer name */}
          <span className="block text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/90 mb-6 backdrop-blur-md bg-cyan-950/30 px-6 py-3 rounded-full mx-0 md:mx-auto w-fit border border-cyan-400/20">
            Alejandro Gutierrez
          </span>
          
          {/* Main brand name - "Underworlds" */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-white tracking-tight mb-8 drop-shadow-2xl">
            Under<span className="italic font-normal text-cyan-300">worlds</span>
          </h1>
          
          {/* Tagline describing the photography style */}
          <p className="max-w-2xl mx-0 md:mx-auto text-lg md:text-xl text-cyan-50/90 font-light leading-relaxed mb-12 drop-shadow-lg">
            Exploring the depths through freediving and photography. <br className="hidden md:block"/>
            Where light meets water, stories emerge from the deep.
          </p>
          
          {/* Call-to-action button to view photography portfolio */}
          <a 
            href="#products" 
            onClick={(e) => handleNavClick(e, 'products')}
            className="group relative px-10 py-4 bg-cyan-400 text-sky-950 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-cyan-300 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-400/50 inline-block"
          >
            <span className="relative z-10">View Portfolio</span>
            {/* Animated shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
        </div>
      </div>

      {/* Animated Scroll Indicator - Invites users to explore more */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-cyan-300/60">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
