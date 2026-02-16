# SEO_AND_PERFORMANCE.md — SEO, Accessibility & Performance Guidelines

---

## 1. SEO Requirements

### 1.1 Page-Level Meta Tags

Every page **must** implement the following via a `useDocumentTitle` hook or a shared `<PageMeta>` component that updates `<head>`:

```html
<title>{Page Title} | Sports Panorama</title>
<meta name="description" content="{Unique 150-160 char description}" />
<meta name="keywords" content="{Relevant comma-separated keywords}" />
<link rel="canonical" href="https://yourdomain.com{pathname}" />
```

### 1.2 Open Graph & Social Tags

```html
<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="{Page Title}" />
<meta property="og:description" content="{Description}" />
<meta property="og:image" content="{og-image URL}" />
<meta property="og:url" content="{Canonical URL}" />
<meta property="og:site_name" content="Sports Panorama" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{Page Title}" />
<meta name="twitter:description" content="{Description}" />
<meta name="twitter:image" content="{og-image URL}" />
```

### 1.3 Page-Specific Meta

| Page                     | Title                                           | Description (max 160 chars)                                               |
|--------------------------|------------------------------------------------|---------------------------------------------------------------------------|
| Home                     | Sports Panorama — Elevating Brands Through Sport | Premium sports marketing & branding solutions. 3D advertising, instadia branding, and brand strategy for cricket, football, rugby & motorsport. |
| About                    | About Us — Sports Panorama                      | Discover our story, mission, and the team behind Sports Panorama's innovative sports marketing solutions. |
| 3D Sports Advertising    | 3D Sports Advertising — Sports Panorama         | Place your brand in stunning 3D perspective on the field of play. Maximum exposure during live broadcasts. |
| Instadia Branding        | Instadia Branding — Sports Panorama              | Modern instadia banners and perimeter boards to boost brand visibility at sports events globally. |
| Brand Strategy Consulting| Brand Strategy Consulting — Sports Panorama      | Expert brand strategy consulting to enhance your brand value at sporting events worldwide. |
| Portfolio                | Our Work — Sports Panorama                       | Explore our portfolio of successful sports marketing campaigns across cricket, football, rugby, and motorsport. |
| Contact                  | Contact Us — Sports Panorama                     | Get in touch with Sports Panorama. Let's discuss your sports branding and marketing goals. |

### 1.4 Structured Data (JSON-LD)

**Home page** — Organization schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sports Panorama",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "description": "Premium sports marketing and branding solutions",
  "sameAs": [
    "https://linkedin.com/company/sportspanorama",
    "https://twitter.com/sportspanorama"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service",
    "email": "info@sportspanorama.com"
  },
  "areaServed": "Worldwide",
  "knowsAbout": [
    "Sports Marketing",
    "3D Sports Advertising",
    "Instadia Branding",
    "Brand Strategy"
  ]
}
```

**Service pages** — Service schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{Service Name}",
  "provider": {
    "@type": "Organization",
    "name": "Sports Panorama"
  },
  "description": "{Service description}",
  "areaServed": "Worldwide",
  "serviceType": "Sports Marketing"
}
```

### 1.5 Semantic HTML Rules

| Element                | Usage                                                            |
|------------------------|------------------------------------------------------------------|
| `<header>`             | Wraps `<Navbar />`                                               |
| `<main>`               | Wraps page content (one per page)                                |
| `<footer>`             | Wraps `<Footer />`                                               |
| `<section>`            | Each page section (with descriptive `aria-label`)                |
| `<article>`            | Case study detail pages                                          |
| `<nav>`                | Primary nav, footer nav, breadcrumbs                             |
| `<h1>`                 | **Exactly one per page** — page title or hero headline           |
| `<h2>` – `<h6>`        | Used in descending order, never skip levels                      |
| `<figure>` + `<figcaption>` | Images with captions                                       |
| `<address>`            | Contact information in footer                                    |
| `<time>`               | Date/time values with `datetime` attribute                       |

### 1.6 Technical SEO

- **`robots.txt`** in `public/`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://yourdomain.com/sitemap.xml
  ```

- **`sitemap.xml`** in `public/` — list all routes with `<lastmod>` dates
- **Canonical URLs** — every page must have a `<link rel="canonical">` tag
- **Image `alt` text** — descriptive for content images, empty for decorative
- **Internal linking** — CTAs link to relevant service/contact pages

---

## 2. Accessibility (a11y) Requirements

### 2.1 WCAG 2.1 AA Compliance Checklist

| Category           | Requirement                                                             |
|--------------------|-------------------------------------------------------------------------|
| **Perceivable**    | All images have meaningful `alt` text                                   |
|                    | Color is never the *only* indicator of meaning                          |
|                    | Text contrast ≥ 4.5:1 (body), ≥ 3:1 (large text / UI elements)        |
|                    | Content reflows at 320px without horizontal scrolling                   |
| **Operable**       | All interactive elements reachable via keyboard                         |
|                    | Visible focus indicator on all focusable elements                       |
|                    | No content traps — keyboard users can navigate freely                   |
|                    | Skip-to-main-content link as first focusable element                    |
|                    | Animations respect `prefers-reduced-motion`                             |
| **Understandable** | `lang="en"` on `<html>` element                                        |
|                    | Form inputs have associated `<label>` elements                          |
|                    | Error messages are descriptive and adjacent to the field                |
|                    | Consistent navigation across pages                                      |
| **Robust**         | Valid HTML — no duplicate IDs                                           |
|                    | ARIA roles used correctly and only when native HTML is insufficient     |
|                    | All custom widgets follow WAI-ARIA Authoring Practices                  |

### 2.2 Focus Management Rules

```css
/* Global focus style */
:focus-visible {
  outline: 2px solid var(--sp-color-primary);
  outline-offset: 3px;
  border-radius: var(--sp-radius-sm);
}

:focus:not(:focus-visible) {
  outline: none;
}
```

### 2.3 ARIA Patterns

| Component        | ARIA Implementation                                                          |
|------------------|-----------------------------------------------------------------------------|
| Navbar           | `<nav aria-label="Main navigation">`                                        |
| Mobile Drawer    | `role="dialog"`, `aria-modal="true"`, `aria-label="Navigation menu"`        |
| Mega Menu        | `aria-expanded` on trigger, `aria-haspopup="true"`                          |
| Carousel         | `role="region"`, `aria-roledescription="carousel"`, `aria-label`            |
| Tabs             | `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`          |
| Accordion        | `aria-expanded`, `aria-controls`, button as trigger                          |
| Scroll-to-Top    | `aria-label="Scroll to top"`                                                |
| Loading states   | `aria-live="polite"`, `aria-busy="true"`                                    |
| Form validation  | `aria-invalid`, `aria-describedby` linked to error message                  |

### 2.4 Skip Link

First element in `<body>`:
```html
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

## 3. Performance Budget

### 3.1 Core Web Vitals Targets

| Metric         | Target   | Measurement Tool         |
|----------------|----------|--------------------------|
| **LCP**        | < 2.5s   | Lighthouse, WebPageTest  |
| **FID / INP**  | < 100ms  | Lighthouse               |
| **CLS**        | < 0.1    | Lighthouse               |
| **FCP**        | < 1.8s   | Lighthouse               |
| **TTI**        | < 3.8s   | Lighthouse               |
| **TBT**        | < 200ms  | Lighthouse               |

### 3.2 Bundle Size Budget

| Chunk              | Max Size (gzipped) |
|--------------------|--------------------|
| Initial JS         | 150 KB             |
| Vendor (React)     | 50 KB              |
| Framer Motion      | 40 KB              |
| Per-page chunk     | 30 KB each         |
| Total CSS          | 30 KB              |

### 3.3 Image Optimization Rules

| Rule                              | Implementation                                            |
|-----------------------------------|-----------------------------------------------------------|
| Format                            | WebP primary, AVIF where supported, JPEG/PNG fallback     |
| Hero images                       | Max 400 KB, preloaded via `<link rel="preload">`          |
| Card thumbnails                   | Max 80 KB, lazy loaded                                    |
| Partner logos                     | SVG preferred, or 10 KB max PNG                           |
| Responsive images                 | Use `srcSet` and `sizes` attributes                       |
| Lazy loading                      | `loading="lazy"` on all below-fold images                 |
| Explicit dimensions               | Always set `width` and `height` to prevent CLS            |

### 3.4 Font Loading Strategy

```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Load fonts with display=swap for fast rendering -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

- Use `font-display: swap` to prevent FOIT (Flash of Invisible Text)
- Subset fonts if possible (latin only for v1)

### 3.5 Code Splitting Strategy

- **Route-level splitting:** All page components lazy-loaded (see `ARCHITECTURE.md`)
- **Component-level splitting:** Heavy components (Map embed, carousels) lazy-loaded
- **Vendor splitting:** React + React DOM in separate chunk, Framer Motion in separate chunk
- **Dynamic imports:** Use `import()` for below-fold heavy sections

### 3.6 Rendering Performance

- **Debounce scroll handlers** — Max 60fps via `requestAnimationFrame`
- **Virtualize long lists** — If portfolio grid exceeds 50 items
- **Memoize expensive computations** — Use `useMemo` for filtered/sorted data
- **Avoid layout thrashing** — Never read and write DOM in the same frame
- **Use `content-visibility: auto`** — On below-fold sections for paint optimization
