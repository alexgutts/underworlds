# Image Hosting Setup Guide

## Why External Image Hosting?

Your images are **2.9MB - 9.2MB each**, which is way over Vercel's recommended 4KB limit for `/public` assets. Hosting large images in `/public` will result in expensive Vercel CDN bandwidth charges.

**Solution:** Host images on Cloudflare R2 (free tier: 10GB storage, unlimited egress) or similar service.

---

## Quick Setup: Cloudflare R2 (Recommended)

### Step 1: Create Cloudflare Account & R2 Bucket

1. Sign up at [cloudflare.com](https://www.cloudflare.com) (free)
2. Go to **R2** in the dashboard
3. Click **Create bucket**
4. Name it (e.g., `underworlds-images`)
5. Choose a location close to your users

### Step 2: Upload Images

1. In your R2 bucket, click **Upload**
2. Upload all images from `public/attachments/`:
   - `DSC00670.JPG` (8.4MB)
   - `DSC01709.JPEG` (3.1MB)
   - `DSC09894 2.jpeg` (3.5MB)
   - `DSC0E5024.JPG` (5.8MB)
   - `IMG_1823 2.JPG` (2.9MB)
   - `saasilmonica3.JPG` (9.2MB)

### Step 3: Make Bucket Public

1. Go to **R2** → Your bucket → **Settings**
2. Under **Public Access**, enable **Public Bucket**
3. Note your **Public URL** (e.g., `https://pub-xxxxx.r2.dev`)

### Step 4: Configure Custom Domain (REQUIRED for Image Resizing)

⚠️ **Important:** Cloudflare Image Resizing only works with a custom domain, not the default `pub-xxxxx.r2.dev` URL.

1. In R2 bucket settings, go to **Custom Domains**
2. Add a custom domain (e.g., `images.yourdomain.com`)
3. Follow Cloudflare's DNS setup instructions
4. Wait for DNS propagation (usually 1-5 minutes)

**Benefits:**
- ✅ Automatic WebP/AVIF conversion
- ✅ On-the-fly image resizing
- ✅ Edge caching worldwide
- ✅ 100,000 free transformations/month

### Step 5: Set Environment Variable

Add to your `.env.local` (for local dev) and **Vercel Environment Variables** (for production):

```bash
VITE_IMAGE_CDN_URL=https://pub-xxxxx.r2.dev
# OR if using custom domain:
VITE_IMAGE_CDN_URL=https://images.yourdomain.com
```

**Important:** In Vercel:
1. Go to your project → **Settings** → **Environment Variables**
2. Add `VITE_IMAGE_CDN_URL` with your R2 public URL
3. Redeploy your site

---

## Alternative: Other Storage Options

### AWS S3 + CloudFront
- **Pros:** Industry standard, reliable
- **Cons:** Bandwidth costs money
- **Setup:** Create S3 bucket → Enable static hosting → Set up CloudFront CDN

### UploadThing
- **Pros:** Built for Next.js, easy integration
- **Cons:** This is a Vite app (not Next.js), so integration is more manual
- **Setup:** Sign up → Upload images → Get URLs → Update code

### Cloudflare R2 (Best for Cost)
- **Pros:** Free tier (10GB storage, unlimited egress), S3-compatible API
- **Cons:** Requires Cloudflare account
- **Setup:** See steps above ⬆️

---

## How It Works

The app uses `config/images.ts` to manage image URLs with automatic optimization:

- **Local Development:** If `VITE_IMAGE_CDN_URL` is not set, images load from `/public/attachments/`
- **Production:** If `VITE_IMAGE_CDN_URL` is set, images load from your CDN with Cloudflare optimizations

### Automatic Image Optimizations

When you set `VITE_IMAGE_CDN_URL` to a Cloudflare custom domain, images are automatically:
- ✅ Converted to WebP/AVIF (60-80% smaller than JPEG)
- ✅ Resized to appropriate sizes for each use case
- ✅ Cached at Cloudflare's edge locations worldwide
- ✅ Lazy loaded (except hero images)
- ✅ Decoded asynchronously for smoother page rendering

### Image Presets

The app uses smart presets for different contexts:
- **Hero images:** 1920px width, quality 85 (full viewport)
- **Product detail:** 1200px width, quality 85 (large views)
- **Product cards:** 600px width, quality 80 (grid display)
- **Journal headers:** 1400px width, quality 85 (article heroes)
- **About page:** 800px width, quality 80 (medium images)
- **Thumbnails:** 200px width, quality 75 (cart/checkout)

This means:
- ✅ Local dev works without external setup
- ✅ Production uses cheap external hosting
- ✅ Images load 5-10x faster with optimization
- ✅ Bandwidth reduced by 60-80%
- ✅ Easy to switch CDN providers

---

## File Structure

```
public/attachments/     # Keep for local development
├── DSC00670.JPG       # These are ignored in production
├── DSC01709.JPEG      # when VITE_IMAGE_CDN_URL is set
└── ...

config/images.ts       # Image URL configuration
constants.ts           # Uses getImageUrl() helper
components/            # All use getImageUrl() helper
```

---

## Cost Comparison

### Before (Vercel CDN, No Optimization):
- 6 images × ~6MB average = 36MB per page load
- 1,000 visitors = 36GB bandwidth
- **Cost:** ~$3-5 per 1,000 visitors (Vercel bandwidth pricing)

### After (Cloudflare R2 + Image Resizing):
- 6 images optimized to WebP/AVIF
- Hero image: 1920px = ~500KB (was 8.4MB) - **94% smaller**
- Product cards: 600px = ~80KB each (was 3-9MB) - **97% smaller**
- Average page load: ~2MB (was 36MB)
- 1,000 visitors = 2GB bandwidth (was 36GB)
- **Cost:** $0 (unlimited egress + 100k transformations free)

**Savings:**
- 💰 ~$3-5 per 1,000 visitors in bandwidth costs
- ⚡ **18x faster** page loads (2MB vs 36MB)
- 📱 Better mobile experience (less data usage)
- 🚀 Improved SEO (Google loves fast sites)

---

## Troubleshooting

### Images not showing in production?
1. Check `VITE_IMAGE_CDN_URL` is set in Vercel environment variables
2. Verify R2 bucket is public
3. Test the CDN URL directly in browser
4. Check browser console for 404 errors

### Images not showing locally?
- Make sure images exist in `public/attachments/`
- Don't set `VITE_IMAGE_CDN_URL` in `.env.local` if testing local images

### Want to customize image optimization?

The app already uses smart presets, but you can customize them in `config/images.ts`:

```typescript
export const IMAGE_PRESETS = {
  hero: { width: 1920, quality: 85, format: 'auto' as const },
  productCard: { width: 600, quality: 80, format: 'auto' as const },
  // ... customize these as needed
};
```

Available Cloudflare parameters:
- `width` - resize width (e.g., 1200)
- `quality` - 1-100 (85 is sweet spot)
- `format` - 'auto', 'webp', 'avif', 'jpeg' ('auto' recommended)
- `fit` - 'scale-down', 'contain', 'cover', 'crop', 'pad'

### Pre-optimize images before upload (optional)

For even better performance, compress images before uploading:

```bash
# Using sharp (Node.js)
npm install -g sharp-cli
sharp -i input.jpg -o output.jpg --quality 85 --resize 1920
```

---

## Next Steps

### Setup Checklist

1. ✅ **Create Cloudflare R2 bucket** (free account at cloudflare.com)
2. ✅ **Upload all 6 images** from `public/attachments/` to R2
3. ✅ **Enable public access** on the bucket
4. ⚠️ **Add custom domain** (REQUIRED for image resizing)
   - Go to R2 bucket → Custom Domains
   - Add `images.yourdomain.com` (or similar)
   - Wait for DNS propagation
5. ✅ **Set environment variable** in Vercel:
   - Go to Vercel project → Settings → Environment Variables
   - Add: `VITE_IMAGE_CDN_URL` = `https://images.yourdomain.com`
   - Apply to Production, Preview, and Development
6. ✅ **Redeploy** your Vercel project
7. ✅ **Test** - visit your site and check:
   - Images load correctly
   - Open DevTools Network tab
   - Verify images show as `webp` or `avif` format
   - Check file sizes are much smaller

### Verification

After deploying, test an image URL directly:
```
https://images.yourdomain.com/attachments/DSC00670.JPG?width=600&format=auto
```

You should see:
- ✅ Image loads quickly
- ✅ Content-Type shows `image/webp` or `image/avif`
- ✅ File size is ~80-500KB (not 3-9MB)

### Local Development

**Note:** Images in `public/attachments/` can stay for local dev, but they won't be deployed to Vercel (which is good - saves build time and bandwidth).

To test with CDN locally:
1. Add `VITE_IMAGE_CDN_URL` to `.env.local`
2. Restart dev server
3. Images will load from CDN instead of local files

