# PRD — Product Requirements Document
## Project Zero: SportsPanorama Clone (Enhanced)

---

## 1. Executive Summary

**Project Zero** is a pixel-inspired, visually enhanced clone of [sportspanorama.com](https://sportspanorama.com/) — a sports marketing and branding company that specializes in 3D sports advertising, instadia branding, and brand strategy consulting for cricket, football, motor racing, and rugby.

The clone will replicate the site's information architecture and content structure while **dramatically upgrading** the visual experience with modern animations, micro-interactions, glassmorphism, parallax effects, and a premium dark-mode design system.

---

## 2. Goals & Success Criteria

| Goal                         | Metric                                                              |
|------------------------------|----------------------------------------------------------------------|
| Visual Excellence            | User is "wowed" on first load; premium, agency-grade feel            |
| Performance                  | Lighthouse Performance ≥ 90, LCP < 2.5s, CLS < 0.1                  |
| Accessibility                | WCAG 2.1 AA compliant, Lighthouse Accessibility ≥ 95                |
| Responsiveness               | Pixel-perfect at 375px, 768px, 1024px, 1440px                       |
| Code Quality                 | Zero ESLint errors, modular architecture, no god-files               |
| SEO                          | Proper meta tags, Open Graph, structured data on every page          |

---

## 3. Target Audience

- Sports organizations seeking branding/marketing partnerships
- Event organizers exploring advertising solutions
- Brand managers evaluating sponsorship placement
- Corporate clients interested in sports-related brand consulting

---

## 4. Sitemap & Pages

| #  | Page                    | Route                   | Priority |
|----|-------------------------|-------------------------|----------|
| 1  | Home                    | `/`                     | P0       |
| 2  | About Us                | `/about`                | P0       |
| 3  | 3D Sports Advertising   | `/services/3d-advertising` | P0    |
| 4  | Instadia Branding       | `/services/instadia`    | P0       |
| 5  | Brand Strategy Consulting| `/services/brand-strategy` | P0    |
| 6  | Portfolio / Case Studies | `/portfolio`            | P1       |
| 7  | Sports Categories       | `/sports/:category`     | P1       |
| 8  | Contact Us              | `/contact`              | P0       |
| 9  | 404 Not Found           | `*`                     | P1       |

> **P0** = Must ship in v1. **P1** = Should ship in v1, can defer if needed.

---

## 5. Feature Requirements

### 5.1 Global Features (All Pages)

| Feature                     | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| **Sticky Navbar**           | Transparent on hero, solid on scroll. Logo left, links center, CTA right.   |
| **Mega Menu**               | Services dropdown with icons and short descriptions for each service.       |
| **Page Transitions**        | Smooth cross-fade or slide transitions between routes.                      |
| **Scroll-to-Top Button**    | Appears after 300px scroll, smooth scrolls to top.                          |
| **Footer**                  | Multi-column: About, Quick Links, Services, Contact Info, Social Icons.     |
| **Loading State**           | Skeleton loaders or shimmer effects during content load.                    |
| **Cookie/Privacy Banner**   | Dismissible banner on first visit.                                          |
| **Preloader**               | Branded loading animation on initial page load.                             |

### 5.2 Home Page

| Section                     | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| **Hero**                    | Full-viewport cinematic hero with video/image background, headline, sub-headline, and CTA button. Parallax scrolling. |
| **Services Overview**       | 3-column card grid showcasing core services with icons, hover effects, and "Learn More" links. |
| **About Snapshot**          | Split layout — image left, text right. Animated counters (years, clients, sports). |
| **Sports Categories**       | Horizontal scrollable or grid of sport cards (Cricket, Football, Rugby, Motor Racing). |
| **Portfolio Highlights**    | Carousel or masonry grid of featured case studies with overlay reveals.      |
| **Testimonials**            | Auto-rotating testimonial carousel with client photos and quotes.           |
| **CTA Banner**              | Full-width gradient banner with heading and contact CTA.                    |
| **Partners / Clients**      | Logo marquee of partner brands with infinite scroll animation.              |

### 5.3 About Us Page

| Section                     | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| **Page Hero**               | Compact hero with breadcrumb, title, and background image.                  |
| **Company Story**           | Timeline-style narrative with scroll-triggered reveals.                     |
| **Mission & Values**        | Icon cards grid (Creativity, Innovation, Adaptability, Professionalism).    |
| **Team Section**            | Team member cards with photo, name, role, social links, hover flip effect.  |
| **Stats / Achievements**    | Animated counter bar (Years of Experience, Clients Served, Sports Covered, Countries Reached). |

### 5.4 Services Pages (3D Advertising, Instadia Branding, Brand Strategy)

| Section                     | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| **Service Hero**            | Bold headline + service-specific imagery. Background parallax.              |
| **Service Description**     | Rich text with embedded images/videos. Alternating image-text rows.         |
| **Sport-Specific Examples** | Tabbed or accordion sections for Cricket, Football, Rugby showing how the service applies. |
| **Process / How It Works**  | Step-by-step numbered process with icon animations.                         |
| **Benefits Grid**           | Feature cards highlighting key advantages.                                  |
| **CTA Section**             | "Get a Quote" or "Contact Us" call-to-action block.                         |

### 5.5 Portfolio / Case Studies

| Section                     | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| **Filterable Grid**         | Filter by sport or service type. Animated grid layout transitions.          |
| **Case Study Card**         | Image, title, category tag, hover overlay with "View Details" link.         |
| **Case Study Detail**       | Full-page layout: hero image, challenge, solution, results, gallery.        |

### 5.6 Contact Page

| Section                     | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| **Contact Form**            | Name, Email, Phone, Subject, Message. Client-side validation. Submit animation. |
| **Contact Info Cards**      | Address, Phone, Email with icons and copy-to-clipboard.                     |
| **Embedded Map**            | Interactive map (Google Maps embed or static map image).                    |
| **Office Hours**            | Visual schedule block.                                                      |

---

## 6. Non-Functional Requirements

| Requirement        | Target                                                                     |
|--------------------|---------------------------------------------------------------------------  |
| **Performance**    | FCP < 1.8s, LCP < 2.5s, TTI < 3.8s, CLS < 0.1                            |
| **Bundle Size**    | Initial JS bundle < 200KB gzipped                                          |
| **Browser Support**| Chrome 90+, Firefox 90+, Safari 14+, Edge 90+                             |
| **Accessibility**  | WCAG 2.1 AA compliant                                                      |
| **SEO**            | Proper meta, OG tags, JSON-LD structured data, semantic HTML               |
| **Responsiveness** | Mobile-first breakpoints at 480, 768, 1024, 1280px                         |

---

## 7. Content Strategy

### v1: Static JSON Content

**v1 Implementation:** All website content is stored as static JSON files in `src/data/`. Future versions will integrate backend services and CMS as outlined in section 9.

| Data File                | Content                                              |
|--------------------------|------------------------------------------------------|
| `services.json`          | Service names, descriptions, features, icons         |
| `sports.json`            | Sport categories with descriptions and images        |
| `portfolio.json`         | Case studies with titles, images, descriptions       |
| `team.json`              | Team members with names, roles, bios, photos         |
| `testimonials.json`      | Client quotes with names, companies, photos          |
| `partners.json`          | Partner/client logos                                  |
| `siteConfig.json`        | Company info, social links, contact details          |
| `navigation.json`        | Nav structure with nested dropdown definitions       |

### Future: Live Sports Data Integration

> **Note:** In future versions, we will integrate live sports data using free public APIs from [public-apis/public-apis](https://github.com/public-apis/public-apis).

**Potential API Integrations:**
- **Live Scores & Fixtures** — Real-time match data for cricket, football, rugby
- **Team Statistics** — Historical performance data and rankings
- **Player Profiles** — Athlete information and career stats
- **Tournament Data** — League tables, schedules, and results
- **News Feeds** — Latest sports news and updates

**Architecture Considerations:**
- API calls will be abstracted into a dedicated `src/services/api/` layer
- Data will be cached client-side to minimize API calls
- Fallback to static data if API is unavailable
- Rate limiting and error handling strategies
- Environment variables for API keys (if required)

---

## 8. Out of Scope (v1)

- ❌ Backend API / CMS integration
- ❌ User authentication
- ❌ Blog / Article publishing system
- ❌ E-commerce / Payment processing
- ❌ Multi-language (i18n)
- ❌ Dark/Light mode toggle (ships dark mode only in v1)
- ❌ Real-time data (scores, live feeds)

---

## 9. Future Enhancements (v2+)

- 🔮 **Live Sports Data Integration** — Integrate free public sports APIs for real-time scores, fixtures, and stats
- 🔮 **Headless CMS integration** — Sanity / Strapi for content management
- 🔮 **Blog section** — Article pages with sports marketing insights
- 🔮 **Multi-language support** — i18n for global audiences
- 🔮 **Dark/Light mode toggle** — User preference for theme switching
- 🔮 **Client portal** — Campaign tracking and analytics dashboard
- 🔮 **Live match widgets** — Embedded live score widgets on relevant pages
- 🔮 **Sports news aggregator** — Curated news feed from multiple sources
