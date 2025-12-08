# Image & Video URL Guide for KeNaAI Website

## Overview
The website has been updated to support easy image and video URL integration. Simply add your URLs to the designated fields in the component files.

---

## 1. MVP Features Images

**File**: `src/components/MVPFeatures/MVPFeatures.jsx`

### How to Add Images:
Locate the `features` array and add your image URLs:

```javascript
const features = [
  {
    id: 1,
    title: 'Real-Time Inventory Tracking',
    // ... other properties
    imageUrl: 'https://your-image-url.com/inventory-tracking.jpg', // Add URL here
  },
  {
    id: 2,
    title: 'Customer Dwell Time Analytics',
    imageUrl: 'https://your-image-url.com/heatmap.jpg', // Add URL here
  },
  // ... repeat for all 5 features
];
```

### Image Requirements:
- **Recommended Size**: 800x600px minimum
- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: 4:3 or 16:9 works best
- Images will automatically display with proper styling
- On mobile, images stack above text with rounded corners

---

## 2. How It Works Section Images

**File**: `src/components/HowItWorks/HowItWorks.jsx`

### How to Add Images:
```javascript
const steps = [
  {
    id: 1,
    title: 'Simple Camera Integration',
    // ... other properties
    imageUrl: 'https://your-image-url.com/camera-setup.jpg', // Add URL here
  },
  // ... repeat for all 4 steps
];
```

### Image Requirements:
- **Recommended Size**: 400x400px minimum
- **Format**: JPG, PNG, or WebP
- **Style**: Icons or illustrations work well for this section

---

## 3. Future Add-Ons Images

**File**: `src/components/FutureAddOns/FutureAddOns.jsx`

### How to Add Images:
```javascript
const addOns = [
  {
    id: 1,
    title: 'Autonomous Billing & Checkout-Free Experience',
    // ... other properties
    imageUrl: 'https://your-image-url.com/autonomous-billing.jpg', // Add URL here
  },
  // ... repeat for all 5 add-ons
];
```

---

## 4. Demo Video

**File**: `src/components/DemoVideo/DemoVideo.jsx`

### How to Add Video:
Set the `videoUrl` constant at the top of the component:

```javascript
const DemoVideo = () => {
  // Add your video URL here
  const videoUrl = 'https://www.youtube.com/embed/YOUR_VIDEO_ID';
  // OR
  // const videoUrl = 'https://player.vimeo.com/video/YOUR_VIDEO_ID';
  // OR
  // const videoUrl = 'https://your-server.com/demo-video.mp4';
```

### Supported Video Types:
1. **YouTube**: Use embed URL format
   - Example: `https://www.youtube.com/embed/dQw4w9WgXcQ`

2. **Vimeo**: Use player URL format
   - Example: `https://player.vimeo.com/video/123456789`

3. **Direct Video**: Use direct MP4 link
   - Example: `https://your-cdn.com/videos/demo.mp4`

### Video Requirements:
- **Duration**: 2-5 minutes recommended
- **Format**: MP4 (H.264) for direct videos
- **Aspect Ratio**: 16:9
- Video automatically scales to container with proper aspect ratio

---

## 5. Hero Section Visuals

**File**: `src/components/Hero/Hero.jsx`

The hero section currently uses placeholders. To add images/animations:

1. Locate the `visual-placeholder` div
2. Replace with `<img>` tag or custom content:

```jsx
<div className="hero-visual">
  <img 
    src="https://your-image-url.com/hero-visual.jpg" 
    alt="KeNaAI Platform" 
    className="hero-image"
  />
</div>
```

---

## Key Changes Made

### 1. Content Updates
✅ **Target Market Broadened**: 
   - Removed references to "small" or "mid-sized" retailers
   - Removed emphasis on grocery stores
   - Now targets "retailers of all sizes" and "all kinds of retail"

✅ **Location Updated**:
   - Updated from US market references to Melbourne/Australia
   - Changed market statistics to focus on Australian and Asia-Pacific regions
   - Contact form mentions Melbourne-based company

✅ **MVP Benefits Redesigned**:
   - Removed bullet-point (ul-li) format
   - Implemented compact badge design
   - Reduced vertical space by ~60%
   - Benefits now display as colored tags in a row

✅ **Charts Removed**:
   - Removed "Projected ROI Impact per Store (Annual)" bar chart
   - Removed "Market Opportunity Distribution" doughnut chart
   - Investment Value section now focuses on key statistics cards

### 2. Design Improvements
- Badge-style benefits with coral accent color
- Automatic image sizing and cropping (object-fit: cover)
- Responsive image borders that adjust based on layout
- Proper aspect ratio maintenance for videos (16:9)

---

## Testing Your Images/Videos

### After Adding URLs:
1. Save the file
2. The dev server will auto-reload
3. Check the website at `http://localhost:3000`
4. Verify images load and display correctly
5. Test responsive behavior on mobile view

### Image Hosting Options:
- **Cloudinary**: Free tier, great for images
- **AWS S3**: Scalable, professional option
- **Imgur**: Quick and easy for testing
- **Your own CDN**: Best for production

### Video Hosting Options:
- **YouTube**: Best for public videos, free
- **Vimeo**: Professional, good privacy controls
- **AWS S3 + CloudFront**: Full control, scalable
- **Wistia**: Analytics and marketing features

---

## Quick Reference

| Section | File | Field Name | Count |
|---------|------|------------|-------|
| MVP Features | MVPFeatures.jsx | `imageUrl` | 5 images |
| How It Works | HowItWorks.jsx | `imageUrl` | 4 images |
| Future Add-Ons | FutureAddOns.jsx | `imageUrl` | 5 images |
| Demo Video | DemoVideo.jsx | `videoUrl` | 1 video |

**Total Assets Needed**: 14 images + 1 video

---

## Need Help?

If images aren't displaying:
1. Check browser console for errors (F12)
2. Verify URL is accessible (paste in browser)
3. Check for CORS issues (images must allow cross-origin)
4. Ensure URL starts with `https://` or `http://`

For videos:
- YouTube/Vimeo must use embed URLs, not watch URLs
- Direct video files need proper CORS headers
- Test video URL in a new browser tab first
