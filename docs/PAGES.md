# PAGES.md — Page-by-Page Layout Breakdown

> This document defines the **exact section order, content, and layout** for every page.
> Agents must follow this structure when building page components.

---

## 1. Home Page (`/`)

The homepage is the flagship experience — maximum visual impact, showcasing all services.

### Section Order

| #  | Section               | Component                        | Layout                                           |
|----|-----------------------|----------------------------------|--------------------------------------------------|
| 1  | **Preloader**         | `Preloader`                      | Full-screen overlay, fades out after content load |
| 2  | **Hero**              | `HeroSection`                    | Full-viewport, video/image bg, parallax          |
| 3  | **Services Overview** | `ServicesOverview`               | 3-column card grid                               |
| 4  | **About Snapshot**    | `AboutSnapshot`                  | Split 50/50 — image left, text + counters right  |
| 5  | **Sports Categories** | `SportsCategories`               | 4-item card grid or horizontal scroll            |
| 6  | **Portfolio Highlights** | `PortfolioHighlights`         | Masonry grid or carousel (3–6 items)             |
| 7  | **Testimonials**      | `Testimonials`                   | Auto-rotating carousel, centered                 |
| 8  | **CTA Banner**        | `CTABanner`                      | Full-width gradient, headline + CTA button       |
| 9  | **Partners Marquee**  | `PartnersMarquee`                | Infinite-scroll logo ribbon                      |

### Hero Section Detail

```
┌─────────────────────────────────────────────────────────┐
│  [Video/Image Background — Full Viewport — Parallax]    │
│                                                         │
│                                                         │
│           ╔═══════════════════════════════╗              │
│           ║  [Animated Badge/Tagline]     ║              │
│           ║                               ║              │
│           ║  ELEVATING BRANDS             ║              │
│           ║  THROUGH SPORT                ║              │
│           ║                               ║              │
│           ║  [Subtitle — 2 lines max]     ║              │
│           ║                               ║              │
│           ║  [CTA Primary]  [CTA Ghost]   ║              │
│           ╚═══════════════════════════════╝              │
│                                                         │
│  ──────────── [Scroll indicator arrow] ──────────────   │
└─────────────────────────────────────────────────────────┘
```

### Services Overview Detail

```
┌───────────────────────────────────────────────────┐
│  [Section Heading: "Our Services"]                │
│  [Section Subtitle]                               │
│                                                   │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│  │  Icon   │  │  Icon   │  │  Icon   │           │
│  │  Title  │  │  Title  │  │  Title  │           │
│  │  Desc   │  │  Desc   │  │  Desc   │           │
│  │  [→]    │  │  [→]    │  │  [→]    │           │
│  └─────────┘  └─────────┘  └─────────┘           │
│  3D Advertising  Instadia    Brand Strategy       │
└───────────────────────────────────────────────────┘
```

---

## 2. About Page (`/about`)

### Section Order

| #  | Section              | Component                   | Layout                                           |
|----|----------------------|-----------------------------|--------------------------------------------------|
| 1  | **Page Hero**        | `PageHero`                  | Compact hero (40vh) with title + breadcrumb       |
| 2  | **Company Story**    | `CompanyStory`              | Timeline narrative, alternating left/right        |
| 3  | **Mission & Values** | `MissionValues`             | 4-column icon card grid                          |
| 4  | **Team**             | `TeamSection`               | Responsive grid of team member cards             |
| 5  | **Stats Bar**        | `StatsBar`                  | 4-column animated counter row                    |
| 6  | **CTA Section**      | `CTABanner`                 | Reuse from home page                             |

### Company Story Timeline

```
           ──── 2020 ────
           │  Founded with a vision to transform
           │  sports marketing worldwide.
           │
      ──── 2021 ────
      │  Expanded into 3D sports
      │  advertising technology.
      │
           ──── 2022 ────
           │  Partnered with major
           │  cricket & football leagues.
           │
      ──── 2023 ────
      │  Launched instadia branding
      │  solutions globally.
```

### Stats Bar

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│    5+        │    50+       │    4         │    10+       │
│ Years Exp.   │ Clients      │ Sports       │ Countries    │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

---

## 3. Service Pages (`/services/:slug`)

All three service pages share the **same layout template** but render different data.

### Services

| Slug               | Title                      | Accent Color             |
|--------------------|----------------------------|--------------------------|
| `3d-advertising`   | 3D Sports Advertising      | `--sp-color-primary`     |
| `instadia`         | Instadia Branding          | `--sp-color-secondary`   |
| `brand-strategy`   | Brand Strategy Consulting  | `--sp-color-accent`      |

### Section Order

| #  | Section                  | Component              | Layout                                        |
|----|--------------------------|------------------------|-----------------------------------------------|
| 1  | **Service Hero**         | `ServiceHero`          | Compact hero (50vh) with service title + image |
| 2  | **Service Description**  | `ServiceDescription`   | Alternating image-text rows (2–3 rows)         |
| 3  | **Sport-Specific Examples** | `SportExamples`     | Tabs: Cricket / Football / Rugby / Motorsport  |
| 4  | **How It Works**         | `ProcessSteps`         | Numbered step cards (3–5 steps) with icons     |
| 5  | **Benefits**             | `BenefitsGrid`         | 2×3 feature card grid                          |
| 6  | **CTA**                  | `CTABanner`            | Reuse — "Get a Quote" variant                  |

### Alternating Image-Text Row

```
Row 1:     [Image]          [Text Block]
Row 2:     [Text Block]     [Image]
Row 3:     [Image]          [Text Block]
```

### Process Steps

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  01     │───▶│  02     │───▶│  03     │───▶│  04     │
│  Icon   │    │  Icon   │    │  Icon   │    │  Icon   │
│  Title  │    │  Title  │    │  Title  │    │  Title  │
│  Desc   │    │  Desc   │    │  Desc   │    │  Desc   │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
```

---

## 4. Portfolio Page (`/portfolio`)

### Section Order

| #  | Section           | Component            | Layout                                       |
|----|-------------------|----------------------|----------------------------------------------|
| 1  | **Page Hero**     | `PageHero`           | Compact hero with title + breadcrumb          |
| 2  | **Filter Bar**    | `FilterBar`          | Horizontal pill-style filter buttons          |
| 3  | **Portfolio Grid**| `PortfolioGrid`      | Responsive grid (3 cols desktop, 2 tablet, 1 mobile) |

### Filter Bar

```
┌────────────────────────────────────────────────────┐
│  [All]  [Cricket]  [Football]  [Rugby]  [Motorsport]│
└────────────────────────────────────────────────────┘
```

### Portfolio Card

```
┌───────────────────────┐
│                       │
│   [Project Image]     │
│                       │
│  ┌─ Hover Overlay ──┐ │
│  │  [Category Tag]   │ │
│  │  Project Title    │ │
│  │  [View Details →] │ │
│  └───────────────────┘ │
└───────────────────────┘
```

---

## 5. Contact Page (`/contact`)

### Section Order

| #  | Section              | Component           | Layout                                         |
|----|----------------------|---------------------|------------------------------------------------|
| 1  | **Page Hero**        | `PageHero`          | Compact hero with title + breadcrumb            |
| 2  | **Contact Content**  | —                   | 2-column: Form left (60%), Info cards right (40%) |
| 3  | **Map**              | `MapEmbed`          | Full-width embedded map                         |

### Contact Layout

```
┌──────────────────────────┬──────────────────┐
│                          │                  │
│  [Contact Form]          │  [📍 Address]    │
│                          │                  │
│  Name: ___________       │  [📞 Phone]     │
│  Email: __________       │                  │
│  Phone: __________       │  [✉ Email]      │
│  Subject: ________       │                  │
│  Message:                │  [🕐 Hours]     │
│  ___________________     │                  │
│  ___________________     │  [Social Links]  │
│                          │                  │
│  [Send Message ▶]        │                  │
│                          │                  │
└──────────────────────────┴──────────────────┘
```

---

## 6. 404 Not Found Page (`*`)

### Layout

```
┌─────────────────────────────────────────────────┐
│                                                 │
│              [Animated 404 text]                │
│                                                 │
│         Page Not Found                          │
│                                                 │
│   The page you're looking for doesn't exist     │
│   or has been moved.                            │
│                                                 │
│           [← Back to Home]                      │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 7. Global Layout (All Pages)

### Navbar States

| State        | Trigger              | Style                                              |
|--------------|----------------------|----------------------------------------------------|
| Transparent  | Scroll Y = 0         | `background: transparent`, text white               |
| Solid        | Scroll Y > 80px      | `background: var(--sp-bg-tertiary)`, backdrop-blur   |
| Mobile       | < 768px               | Hamburger → slide-out drawer from right              |

### Navbar Structure

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]     [Home] [About] [Services ▾] [Portfolio] [Contact] │
│                                                             │
│             Services Mega Menu:                              │
│             ┌──────────────┬──────────────┬──────────────┐   │
│             │ 🎯 3D Ads    │ 🏟 Instadia  │ 📊 Strategy  │   │
│             │ Description  │ Description  │ Description  │   │
│             └──────────────┴──────────────┴──────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Footer Structure

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Logo + Tagline]    Quick Links     Services     Contact   │
│                      • Home          • 3D Ads     📍 Addr   │
│  Brief company       • About         • Instadia   📞 Phone  │
│  description         • Portfolio     • Strategy   ✉ Email   │
│                      • Contact                              │
│                                                             │
│  [Social Icons: LinkedIn | Twitter | Instagram | Facebook]  │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│  © 2024 Sports Panorama. All rights reserved.               │
└─────────────────────────────────────────────────────────────┘
```
