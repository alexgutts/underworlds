/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * ProductGrid Component - Photography Portfolio Gallery
 * 
 * Displays all underwater photographs in a clean grid layout.
 * Portfolio showcase - users can click individual images to view details.
 * No filtering needed - all photos are displayed.
 * 
 * Features:
 * - Responsive grid that adapts to screen size
 * - Smooth hover interactions on each photograph
 * - Click to view full photograph details
 * - Clean, gallery-style presentation
 */

import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {

  return (
    <section id="products" className="py-32 px-6 md:px-12 bg-sky-50">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header - Simple, no filters */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-serif text-sky-950 mb-6">Portfolio</h2>
          <p className="text-lg text-sky-800 font-light max-w-2xl">
            Underwater photography captured through freediving. Each moment frozen on a single breath, using only natural light.
          </p>
        </div>

        {/* Photography Grid - 3 columns on desktop, responsive on smaller screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
