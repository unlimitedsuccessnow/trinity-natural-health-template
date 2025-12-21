# Trinity Natural Health - Programmatic Alternatives Page Template

A modern, SEO-optimized, reusable website template for creating "alternative to" service comparison pages. Built for Trinity Natural Health to showcase Energy Enhancement System (EES) as an alternative to various wellness services.

## Overview

This template creates professional, reader-friendly landing pages that compare EES technology with other wellness services (Physical Therapy, Acupuncture, Massage Therapy, etc.). The template is designed to be easily customized for hundreds of different service alternatives.

**Current Implementation:** Physical Therapy Alternative in Perrysburg, OH

## Features

### Design & User Experience
- ✅ Modern, professional wellness-focused design
- ✅ Mobile-first responsive layout (320px to 4K displays)
- ✅ Reader-friendly typography with optimal line heights
- ✅ Smooth scrolling and animations
- ✅ Interactive FAQ accordion
- ✅ Clear call-to-action buttons throughout
- ✅ Trust indicators and social proof

### SEO Optimization
- ✅ SEO-optimized meta tags (title, description, keywords)
- ✅ Semantic HTML5 structure
- ✅ Schema.org markup (LocalBusiness, MedicalBusiness, FAQPage, BreadcrumbList)
- ✅ Open Graph and Twitter Card tags
- ✅ Proper heading hierarchy (H1-H6)
- ✅ Alt text ready for images
- ✅ Fast loading performance (<2s FCP target)

### Accessibility
- ✅ WCAG 2.1 Level AA compliant
- ✅ Keyboard navigation support
- ✅ Screen reader compatible
- ✅ ARIA labels and roles
- ✅ High contrast mode support
- ✅ Focus indicators
- ✅ Reduced motion support

### Template Features
- ✅ 12 content blocks as per PRD
- ✅ Reusable configuration system
- ✅ Easy content customization via JSON
- ✅ Print-friendly styles
- ✅ Cross-browser compatible

## File Structure

```
trinity-natural-health-template/
│
├── index.html              # Main HTML template
├── styles.css              # Comprehensive stylesheet
├── script.js               # Interactive features JavaScript
├── template-config.json    # Configuration for easy customization
├── README.md               # This file
└── favicon.png             # (Add your favicon here)
```

## Template Sections

The template includes all 12 content blocks specified in the PRD:

1. **Hero Section** - Primary value proposition with CTA
2. **Introduction** - Local relevance hook
3. **What is [Service]?** - Service overview and explanation
4. **What is EES?** - EES technology explanation
5. **Comparison Table** - Side-by-side feature comparison
6. **When to Choose EES** - Specific use cases for EES
7. **When [Service] Might Be Better** - Honest assessment
8. **Cost Comparison** - Pricing and value proposition
9. **Testimonials** - Real client stories
10. **FAQ** - Common questions with answers
11. **Local Relevance** - Perrysburg location details
12. **Call to Action** - Final conversion opportunity

## Quick Start

### Option 1: Direct HTML Customization

1. Open `index.html` in your code editor
2. Find and replace service-specific content:
   - Search for "Physical Therapy" and replace with your target service
   - Update costs, benefits, and limitations
   - Customize testimonials
3. Update meta tags in `<head>` section
4. Upload to your web server

### Option 2: Using the Configuration File

1. Edit `template-config.json` with your service details
2. Use a template engine (like Handlebars, Mustache, or server-side rendering) to populate the HTML
3. Deploy the generated pages

## Customization Guide

### Changing the Target Service

To create a new "alternative to" page for a different service:

1. **Update Service Information** (`template-config.json`):
   ```json
   "service": {
     "name": "Acupuncture",
     "slug": "acupuncture",
     "type": "alternative medicine treatment",
     ...
   }
   ```

2. **Update Keywords**:
   ```json
   "keywords": {
     "primaryKeyword": "alternative to acupuncture perrysburg",
     ...
   }
   ```

3. **Update Content Blocks** in HTML:
   - Hero headline
   - Service description
   - Comparison table
   - FAQs
   - Testimonials

### Customizing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2D5F5D;      /* Your primary brand color */
    --secondary-color: #8B7355;    /* Your secondary color */
    --accent-color: #D4A574;       /* Accent/CTA color */
}
```

### Updating Contact Information

Update all instances in `index.html`:
- Phone: 419-654-6609
- Email: anna@healwithtrinity.com
- Address: 842 W South Boundary, Perrysburg, OH 43551

Also update in `template-config.json` and Schema markup.

## SEO Best Practices

### Meta Tags

Each page should have unique:
- **Title Tag**: 50-60 characters
- **Meta Description**: 150-160 characters
- **H1 Tag**: Include primary keyword and location
- **URL**: `/alternative-to-{service-slug}-perrysburg`

### Keyword Optimization

- Primary keyword density: 1-2%
- Natural keyword placement in:
  - Title tag
  - H1 tag
  - First paragraph
  - H2 headings
  - Image alt text
  - Meta description

### Internal Linking

Link to:
- Main EES service page
- Booking page
- Other alternative pages
- About page
- Contact page

## Performance Optimization

### Current Performance Targets
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

### Optimization Tips
1. Compress images (use WebP format)
2. Minify CSS and JavaScript for production
3. Enable gzip compression on server
4. Use CDN for static assets
5. Implement lazy loading for images

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation (Tab, Enter, Space)
- Focus indicators
- Screen reader announcements
- Alt text for images
- Color contrast ratios: 4.5:1 minimum

## Analytics Integration

To add Google Analytics or other tracking:

1. Add tracking code before closing `</head>` tag
2. Update event tracking in `script.js`:
   - Phone clicks
   - Email clicks
   - CTA button clicks
   - Form submissions

Example:
```javascript
gtag('event', 'phone_click', {
    'event_category': 'contact',
    'event_label': 'header_phone'
});
```

## Schema Markup

The template includes structured data for:

- **LocalBusiness**: Business information
- **MedicalBusiness**: Medical specialty
- **FAQPage**: FAQ schema for rich snippets
- **BreadcrumbList**: Navigation breadcrumbs

Validate schema at: https://validator.schema.org/

## Testing Checklist

Before deploying:

- [ ] Test on mobile devices (iOS and Android)
- [ ] Test on different browsers
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Validate CSS
- [ ] Test all links (internal and external)
- [ ] Test phone and email links
- [ ] Verify schema markup
- [ ] Check meta tags
- [ ] Test page speed (PageSpeed Insights)
- [ ] Verify responsive design
- [ ] Test keyboard navigation
- [ ] Check accessibility (WAVE, Lighthouse)
- [ ] Proofread all content
- [ ] Test FAQ accordions
- [ ] Verify mobile menu functionality

## Deployment

### Production Checklist

1. **Minify Assets**:
   ```bash
   # CSS minification
   csso styles.css -o styles.min.css

   # JavaScript minification
   terser script.js -o script.min.js
   ```

2. **Update File References**:
   Change `index.html` to use minified versions

3. **Add Favicon**:
   Place `favicon.png` in root directory

4. **Configure Server**:
   - Enable gzip compression
   - Set cache headers
   - Configure SSL/HTTPS
   - Set up 301 redirects if needed

5. **Submit to Google**:
   - Add to Google Search Console
   - Submit sitemap
   - Request indexing

## Creating Multiple Pages

To scale to hundreds of pages:

### Manual Method
1. Duplicate `index.html`
2. Rename to service-specific name (e.g., `acupuncture-alternative.html`)
3. Update all service-specific content
4. Update meta tags and schema

### Automated Method (Recommended)
1. Use template engine (Node.js, Python, PHP)
2. Create data file for each service
3. Generate HTML from template + data
4. Deploy generated files

### Example with Node.js:
```javascript
const fs = require('fs');
const Handlebars = require('handlebars');

// Load template
const template = Handlebars.compile(fs.readFileSync('template.hbs', 'utf8'));

// Load service data
const services = require('./services.json');

// Generate pages
services.forEach(service => {
    const html = template(service);
    fs.writeFileSync(`${service.slug}.html`, html);
});
```

## Service Priority List

Based on PRD, create pages in this order:

1. ✅ Physical Therapy (completed)
2. Acupuncture
3. Massage Therapy
4. Chiropractic
5. Pain Management
6. Spa Services
7. Wellness Centers
8. Reiki
9. Naturopath
10. Cryotherapy

## Maintenance

### Regular Updates
- Update testimonials quarterly
- Refresh pricing annually
- Add new FAQs based on customer questions
- Update meta descriptions based on performance
- Review and update keywords

### Monitoring
- Check Google Search Console weekly
- Monitor page speed monthly
- Review analytics monthly
- Test on new devices/browsers quarterly

## Support & Resources

### Useful Links
- [PRD Document](PRD_Programmatic_Alternatives_Page_Template.md)
- [Trinity Natural Health Summary](naturalhealthtrinity_summary.md)
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Schema Validator: https://validator.schema.org/
- WAVE Accessibility: https://wave.webaim.org/

### Common Issues

**Mobile menu not working?**
- Check that `script.js` is loaded
- Verify mobile-menu-toggle class exists
- Check browser console for errors

**FAQ not expanding?**
- Verify faq-item class exists
- Check JavaScript is loaded
- Ensure no CSS conflicts

**Schema errors?**
- Validate at schema.org
- Check JSON-LD format
- Verify all required properties

## Version History

- **v1.0** (December 2025)
  - Initial template creation
  - Physical Therapy alternative page
  - All 12 content blocks implemented
  - Full responsive design
  - SEO optimization complete
  - Accessibility compliance

## License

This template is proprietary to Trinity Natural Health. All rights reserved.

## Contact

For questions or support:
- **Email**: anna@healwithtrinity.com
- **Phone**: 419-654-6609
- **Website**: HealWithTrinity.com

---

**Built with care for Trinity Natural Health** | Modern • SEO-Optimized • Accessible • Scalable
