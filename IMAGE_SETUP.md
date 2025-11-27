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

### Step 4: Configure Custom Domain (Optional but Recommended)

1. In R2 bucket settings, go to **Custom Domains**
2. Add a custom domain (e.g., `images.yourdomain.com`)
3. Follow Cloudflare's DNS setup instructions
4. This gives you cleaner URLs and better performance

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

The app uses `config/images.ts` to manage image URLs:

- **Local Development:** If `VITE_IMAGE_CDN_URL` is not set, images load from `/public/attachments/`
- **Production:** If `VITE_IMAGE_CDN_URL` is set, images load from your CDN

This means:
- ✅ Local dev works without external setup
- ✅ Production uses cheap external hosting
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

### Before (Vercel CDN):
- 6 images × ~6MB average = 36MB per page load
- 1,000 visitors = 36GB bandwidth
- **Cost:** ~$3-5 per 1,000 visitors (Vercel bandwidth pricing)

### After (Cloudflare R2):
- Same 36MB per page load
- 1,000 visitors = 36GB bandwidth
- **Cost:** $0 (unlimited egress on free tier)

**Savings:** ~$3-5 per 1,000 visitors 🎉

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

### Want to optimize images further?
- Use Cloudflare's image resizing: `?width=1200&quality=80`
- Or pre-optimize with tools like `sharp` before uploading

---

## Next Steps

1. ✅ Set up Cloudflare R2 bucket
2. ✅ Upload all images
3. ✅ Get public URL
4. ✅ Add `VITE_IMAGE_CDN_URL` to Vercel
5. ✅ Redeploy
6. ✅ Verify images load correctly

**Note:** Images in `public/attachments/` can stay for local dev, but they won't be deployed to Vercel (which is good - saves build time and bandwidth).

