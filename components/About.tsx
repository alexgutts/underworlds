/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * About Component - Photographer Biography
 * 
 * This section tells Alejandro Gutierrez's story as an underwater photographer
 * and freediver. It establishes credibility, shares his philosophy, and creates
 * an emotional connection with visitors through personal narrative.
 * 
 * Structure:
 * - Main bio section with photographer portrait
 * - Two-column philosophy blocks with supporting imagery
 * - Responsive grid layout that adapts to mobile/tablet/desktop
 */

import React from 'react';
import { getImageUrl, IMAGE_FILES, IMAGE_PRESETS } from '../config/images';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#E0F2FE]">
      
      {/* Main Biography Section */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        
        {/* Section Title */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-[#0C4A6E] leading-tight">
            Between breaths, <br/> between worlds.
          </h2>
        </div>
        
        {/* Biography Content */}
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#075985] font-light leading-relaxed mb-8">
            Alejandro Gutierrez is an underwater photographer and certified freediver based between Mexico and the Mediterranean. His work explores the intersection of human presence and marine environments, capturing moments of stillness and wonder in the deep.
          </p>
          <p className="text-lg md:text-xl text-[#075985] font-light leading-relaxed mb-8">
            What began as a personal challenge—learning to hold his breath and dive deeper—evolved into a profound artistic practice. Through freediving, Alejandro discovered a way to move silently through underwater spaces, becoming part of the environment rather than an intrusion. This approach allows him to capture intimate, undisturbed moments.
          </p>
          <p className="text-lg md:text-xl text-[#075985] font-light leading-relaxed mb-8">
            His photographs have been featured in marine conservation campaigns and diving publications worldwide. Each image is shot on a single breath, using only natural light, honoring the authenticity of the underwater world.
          </p>
          
          {/* Featured underwater image */}
          {/* Optimized about page image: 800px width, quality 80, auto format */}
          <img 
            src={getImageUrl(IMAGE_FILES.SAASILMONICA3, IMAGE_PRESETS.about)} 
            alt="Freedivers ascending toward light" 
            className="w-full h-[500px] object-cover mt-12 shadow-2xl"
            loading="lazy"
            decoding="async"
          />
          <p className="text-sm font-medium uppercase tracking-widest text-[#0891B2] mt-4">
          Cenote in Yucatan, México
          </p>
        </div>
      </div>

      {/* Philosophy Block 1: Freediving Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image on left */}
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           {/* Optimized about page image with lazy loading */}
           <img 
             src={getImageUrl(IMAGE_FILES.DSC09894, IMAGE_PRESETS.about)} 
             alt="Lone diver in the abyss with bioluminescent plankton" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
             loading="lazy"
             decoding="async"
           />
        </div>
        
        {/* Text content on right */}
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#0C4A6E]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#67E8F9] mb-6">The Approach</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#E0F2FE] leading-tight">
             One breath, <br/> no boundaries.
           </h3>
           <p className="text-lg text-[#BAE6FD] font-light leading-relaxed mb-12 max-w-md">
             Freediving allows me to move silently and stay longer in the presence of marine life. Without the noise of scuba gear, I become part of the water—observing without disturbing, witnessing without imposing.
           </p>
        </div>
      </div>

      {/* Philosophy Block 2: Natural Light Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Text content on left */}
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#082F49] text-[#F0F9FF]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7DD3FC] mb-6">The Light</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#E0F2FE] leading-tight">
             Natural light, <br/> honest moments.
           </h3>
           <p className="text-lg text-[#BAE6FD] font-light leading-relaxed mb-12 max-w-md">
             I shoot only with available light—no strobes, no artificial illumination. The deep blue hue, the sun rays, the shadows—these are the ocean's true colors. My goal is authenticity, not manipulation.
           </p>
        </div>
        
        {/* Image on right */}
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           {/* Optimized about page image with lazy loading */}
           <img 
             src={getImageUrl(IMAGE_FILES.IMG_1823, IMAGE_PRESETS.about)} 
             alt="Cathedral-like light rays in underwater cave" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
             loading="lazy"
             decoding="async"
           />
        </div>
      </div>
    </section>
  );
};

export default About;