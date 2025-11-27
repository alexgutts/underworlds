/**
 * Image Configuration - External CDN Setup
 * 
 * This file manages image URLs to avoid expensive Vercel CDN costs.
 * Large images (>4KB) should be hosted externally (Cloudflare R2, S3, etc.)
 * 
 * For local development: Images are served from /public/attachments/
 * For production: Images are served from external CDN (configured via env var)
 */

// Base URL for images - defaults to local for development
// In production, set VITE_IMAGE_CDN_URL to your Cloudflare R2 or S3 bucket URL
const IMAGE_CDN_BASE_URL = import.meta.env.VITE_IMAGE_CDN_URL || '';

/**
 * Get the full URL for an image
 * If CDN URL is set, uses external hosting; otherwise uses local path
 * 
 * @param imagePath - The relative path to the image (e.g., 'DSC00670.JPG')
 * @returns Full URL to the image
 */
export const getImageUrl = (imagePath: string): string => {
  // If CDN base URL is configured, use external hosting
  if (IMAGE_CDN_BASE_URL) {
    // Remove leading slash if present and construct full URL
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `${IMAGE_CDN_BASE_URL}/${cleanPath}`;
  }
  
  // Fallback to local path for development
  // This allows local dev to work without external setup
  return `/attachments/${imagePath}`;
};

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

