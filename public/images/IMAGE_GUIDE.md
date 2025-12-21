# Image Guide for Trinity Natural Health Template

This folder should contain optimized images for SEO and page performance.

## Required Images

### 1. physical-therapy-session.jpg
- **Alt Text**: "Physical therapy session in Perrysburg showing therapist working with patient on exercises"
- **Recommended Size**: 800x600px
- **Location**: What is Physical Therapy section
- **SEO Keywords**: physical therapy, Perrysburg, rehabilitation, exercises

### 2. ees-energy-enhancement-system-perrysburg.jpg
- **Alt Text**: "Energy Enhancement System room at Trinity Natural Health in Perrysburg with zero-gravity chairs and light panels"
- **Recommended Size**: 1200x800px
- **Location**: What is EES section
- **SEO Keywords**: Energy Enhancement System, EES, Perrysburg, Trinity Natural Health, zero-gravity chairs, scalar wave technology

### 3. trinity-natural-health-perrysburg-location.jpg
- **Alt Text**: "Trinity Natural Health wellness center exterior in Perrysburg, Ohio"
- **Recommended Size**: 1000x667px
- **Location**: Local Relevance section
- **SEO Keywords**: Trinity Natural Health, Perrysburg, Ohio, wellness center

## Image Optimization Guidelines

### File Format
- Use **WebP** format for best compression (with JPG fallback)
- JPG for photos
- PNG for graphics with transparency

### File Size
- Target: Under 200KB per image
- Use compression tools like TinyPNG or ImageOptim
- Maintain quality at 80-85%

### Dimensions
- Desktop: 1200px wide maximum
- Mobile: Images will scale responsively
- Maintain aspect ratio 16:9 or 4:3

### SEO Optimization

#### File Naming
✅ **Good**: `energy-enhancement-system-perrysburg-ohio.jpg`
❌ **Bad**: `IMG_1234.jpg` or `photo1.jpg`

Use descriptive names with:
- Primary keywords
- Location (Perrysburg, Ohio)
- Service names
- Hyphens (not underscores)

#### Alt Text Best Practices
1. Be descriptive (10-15 words)
2. Include location keywords (Perrysburg)
3. Include service keywords (EES, physical therapy)
4. Don't start with "Image of" or "Picture of"
5. Be natural and helpful for screen readers

#### Title Attributes (Optional)
Add title attributes for additional context:
```html
<img src="ees-room.jpg"
     alt="Energy Enhancement System room at Trinity Natural Health"
     title="Relax in zero-gravity chairs during your EES session">
```

### Image Compression Tools

- **TinyPNG**: https://tinypng.com/
- **ImageOptim**: https://imageoptim.com/
- **Squoosh**: https://squoosh.app/
- **Photoshop**: Save for Web (80-85% quality)

### WebP Conversion

Convert images to WebP for better performance:

```bash
# Using cwebp (install from Google)
cwebp -q 85 input.jpg -o output.webp
```

Then use picture element for fallback:
```html
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

## Loading Strategy

All images use `loading="lazy"` attribute for:
- Faster initial page load
- Reduced bandwidth usage
- Better performance scores

## Additional Recommended Images

### Hero Background (Optional)
- `hero-background.jpg` - 1920x1080px
- Subtle wellness/healing themed background

### Testimonial Photos (Optional)
- `testimonial-sarah.jpg` - 300x300px
- `testimonial-james.jpg` - 300x300px
- `testimonial-lk.jpg` - 300x300px

### Comparison Graphics (Optional)
- `ees-vs-physical-therapy-comparison.jpg` - 1200x800px
- Visual comparison chart

### Process Images (Optional)
- `ees-session-process.jpg` - Show the EES room setup
- `zero-gravity-chairs.jpg` - Close-up of chairs
- `light-panels.jpg` - EES technology panels

## Responsive Images

For critical images, use srcset for different screen sizes:

```html
<img src="image-800w.jpg"
     srcset="image-400w.jpg 400w,
             image-800w.jpg 800w,
             image-1200w.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1000px) 800px,
            1200px"
     alt="Description"
     loading="lazy">
```

## Schema Markup for Images

Images are automatically included in schema.org markup. Ensure:
- High-quality images (min 1200px wide)
- Descriptive file names
- Proper alt text
- Licensed images (own photos or stock)

## Stock Photo Resources

If using stock photos:
- Unsplash: https://unsplash.com/
- Pexels: https://pexels.com/
- Pixabay: https://pixabay.com/

Search terms:
- "physical therapy"
- "wellness center"
- "meditation room"
- "healing space"
- "zero gravity chair"

## Checklist Before Publishing

- [ ] All images under 200KB
- [ ] Descriptive file names with keywords
- [ ] Alt text for all images
- [ ] Images compressed and optimized
- [ ] Proper dimensions (not oversized)
- [ ] loading="lazy" attribute added
- [ ] Images licensed/owned
- [ ] WebP format with fallback (optional)
- [ ] Responsive srcset for key images (optional)

---

**Note**: Replace these placeholder images with actual photos of Trinity Natural Health's facility, EES equipment, and services for best results.
