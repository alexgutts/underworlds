/**
 * Image Configuration - External CDN Setup with Optimization
 * 
 * This file manages image URLs to avoid expensive Vercel CDN costs.
 * Large images (>4KB) should be hosted externally (Cloudflare R2, S3, etc.)
 * 
 * For local development: Images are served from /public/attachments/
 * For production: Images are served from external CDN (configured via env var)
 * 
 * Cloudflare Image Resizing is automatically applied when CDN URL is set
 * and uses a custom domain (required for resizing to work)
 */

// Base URL for images - defaults to local for development
// In production, set VITE_IMAGE_CDN_URL to your Cloudflare R2 custom domain
// Example: https://images.yourdomain.com
const IMAGE_CDN_BASE_URL = import.meta.env.VITE_IMAGE_CDN_URL || '';

/**
 * Image optimization options for Cloudflare Image Resizing
 */
export interface ImageOptions {
  width?: number;        // Resize width in pixels
  height?: number;       // Resize height in pixels
  quality?: number;      // Quality 1-100 (default: 85)
  format?: 'auto' | 'webp' | 'avif' | 'jpeg' | 'png'; // Output format (auto = best for browser)
  fit?: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad'; // How to fit the image
}

/**
 * Get the full URL for an image with optional Cloudflare optimizations
 * 
 * When IMAGE_CDN_BASE_URL is set with a custom domain, Cloudflare will automatically:
 * - Convert to WebP/AVIF for supported browsers (when format='auto')
 * - Resize images to save bandwidth
 * - Cache transformed images at the edge
 * - Deliver images from nearest CDN location
 * 
 * @param imagePath - The relative path to the image (e.g., 'DSC00670.JPG')
 * @param options - Optional image transformation parameters
 * @returns Full URL to the image with optimization parameters
 * 
 * @example
 * // Hero image - large, high quality
 * getImageUrl('DSC00670.JPG', { width: 1920, quality: 85, format: 'auto' })
 * 
 * @example
 * // Thumbnail - small, optimized
 * getImageUrl('DSC00670.JPG', { width: 400, quality: 75, format: 'auto' })
 */
export const getImageUrl = (imagePath: string, options?: ImageOptions): string => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // If CDN base URL is configured, use external hosting with optimizations
  if (IMAGE_CDN_BASE_URL) {
    const baseUrl = `${IMAGE_CDN_BASE_URL}/attachments/${cleanPath}`;
    
    // Add Cloudflare Image Resizing parameters if options provided
    // These only work with a custom domain, not the default pub-xxxxx.r2.dev URL
    if (options && Object.keys(options).length > 0) {
      const params = new URLSearchParams();
      
      // Set width for responsive sizing (most important for bandwidth savings)
      if (options.width) params.set('width', options.width.toString());
      
      // Set height if specified
      if (options.height) params.set('height', options.height.toString());
      
      // Set quality (default 85 is good balance of size vs visual quality)
      if (options.quality) params.set('quality', options.quality.toString());
      
      // Format 'auto' lets Cloudflare choose best format (WebP/AVIF) based on browser
      // This can reduce file size by 60-80% compared to JPEG
      if (options.format) params.set('format', options.format);
      
      // Fit determines how image is resized (scale-down is safest default)
      if (options.fit) params.set('fit', options.fit);
      
      return `${baseUrl}?${params.toString()}`;
    }
    
    return baseUrl;
  }
  
  // Fallback to local path for development
  // This allows local dev to work without external CDN setup
  return `/attachments/${imagePath}`;
};

/**
 * Preset image sizes for consistent optimization across the app
 * These presets help maintain performance and reduce bandwidth costs
 */
export const IMAGE_PRESETS = {
  // Hero images - full viewport width, high quality
  hero: { width: 1920, quality: 85, format: 'auto' as const },
  
  // Product detail images - large but optimized
  productDetail: { width: 1200, quality: 85, format: 'auto' as const },
  
  // Product cards in grid - medium size
  productCard: { width: 600, quality: 80, format: 'auto' as const },
  
  // Journal article headers - wide format
  journalHeader: { width: 1400, quality: 85, format: 'auto' as const },
  
  // Journal list thumbnails - smaller
  journalThumb: { width: 500, quality: 80, format: 'auto' as const },
  
  // Cart/checkout thumbnails - tiny, lower quality is fine
  thumbnail: { width: 200, quality: 75, format: 'auto' as const },
  
  // About page images - medium size
  about: { width: 800, quality: 80, format: 'auto' as const },
} as const;

/**
 * Image file names - centralized list for easy management
 * Update these URLs after uploading to your CDN
 */
export const IMAGE_FILES = {
  DSC00670: 'DSC00670.JPG',           // Hero image - Into The Light
  DSC01709: 'DSC01709.JPEG',          // Surface Dreams
  DSC09894: 'DSC09894 2.jpeg',        // The Abyss Calls
  DSC0E5024: 'DSC0E5024.JPG',         // Grace in Blue
  IMG_1823: 'IMG_1823 2.JPG',         // Cathedral of Water
  SAASILMONICA3: 'saasilmonica3.JPG', // Ascending
} as const;

