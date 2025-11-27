/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * ProductCard Component - Individual Photography Print Card
 * 
 * Displays a single underwater photograph with title, collection type,
 * and pricing. Features elegant hover effects and click interaction.
 * 
 * Design:
 * - Large image in portrait orientation (4:5 aspect ratio)
 * - Subtle zoom effect on hover
 * - Overlay call-to-action button
 * - Clean typography with print details
 */

import React from 'react';
import { Product } from '../types';
import { getImageUrl, IMAGE_PRESETS } from '../config/images';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="group flex flex-col gap-4 cursor-pointer" onClick={() => onClick(product)}>
      {/* Photography Image Container - maximized for portfolio view */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-sky-900 shadow-xl">
        {/* Optimized image: 600px width, quality 80, auto format (WebP/AVIF) for grid display */}
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
          decoding="async"
        />
        
        {/* Hover Overlay with Simple Call-to-Action */}
        <div className="absolute inset-0 bg-sky-950/0 group-hover:bg-sky-950/40 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="bg-white backdrop-blur text-sky-950 px-8 py-3 rounded-full text-sm uppercase tracking-[0.3em] font-semibold shadow-2xl">
                    View
                </span>
            </div>
        </div>
      </div>
      
      {/* Photograph Title Only - Clean and Minimal */}
      <div className="text-center">
        <h3 className="text-2xl font-serif font-light text-sky-950 group-hover:text-cyan-600 transition-colors leading-tight">{product.name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
