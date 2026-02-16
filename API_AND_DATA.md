# API_AND_DATA.md — Data Models & Mock Content Strategy

> All content is **static JSON** stored in `src/data/`. No backend API in v1.
> This document defines the exact shape of every data file so agents produce consistent data.

---

## 1. Data Architecture

```
src/data/
├── siteConfig.json       # Global site metadata & contact info
├── navigation.json       # Nav structure with dropdowns
├── services.json         # All three services
├── sports.json           # Sport categories
├── portfolio.json        # Case study items
├── team.json             # Team members
├── testimonials.json     # Client testimonials
└── partners.json         # Partner/client logos
```

### Import Pattern

```js
// Always use the @data alias
import services from '@data/services.json';
import siteConfig from '@data/siteConfig.json';
```

---

## 2. Data Models

### 2.1 `siteConfig.json`

```json
{
  "companyName": "Sports Panorama",
  "tagline": "Elevating Brands Through Sport",
  "description": "Premium sports marketing and branding solutions for global audiences.",
  "founded": 2020,
  "email": "info@sportspanorama.com",
  "phone": "+1-XXX-XXX-XXXX",
  "address": {
    "street": "123 Sports Avenue",
    "city": "London",
    "state": "",
    "zip": "EC1A 1BB",
    "country": "United Kingdom"
  },
  "officeHours": {
    "weekdays": "9:00 AM – 6:00 PM",
    "weekends": "Closed"
  },
  "social": {
    "linkedin": "https://linkedin.com/company/sportspanorama",
    "twitter": "https://twitter.com/sportspanorama",
    "instagram": "https://instagram.com/sportspanorama",
    "facebook": "https://facebook.com/sportspanorama"
  },
  "stats": [
    { "value": 5, "suffix": "+", "label": "Years Experience" },
    { "value": 50, "suffix": "+", "label": "Clients Worldwide" },
    { "value": 4, "suffix": "", "label": "Sports Covered" },
    { "value": 10, "suffix": "+", "label": "Countries Reached" }
  ]
}
```

---

### 2.2 `navigation.json`

```json
{
  "mainNav": [
    { "label": "Home", "to": "/" },
    { "label": "About", "to": "/about" },
    {
      "label": "Services",
      "to": "/services",
      "children": [
        {
          "label": "3D Sports Advertising",
          "to": "/services/3d-advertising",
          "icon": "FiTarget",
          "description": "Place your brand in stunning 3D on the field of play"
        },
        {
          "label": "Instadia Branding",
          "to": "/services/instadia",
          "icon": "FiMonitor",
          "description": "Modern banners and perimeter boards at sporting events"
        },
        {
          "label": "Brand Strategy Consulting",
          "to": "/services/brand-strategy",
          "icon": "FiTrendingUp",
          "description": "Expert consulting to enhance your brand value"
        }
      ]
    },
    { "label": "Portfolio", "to": "/portfolio" },
    { "label": "Contact", "to": "/contact" }
  ],
  "footerNav": {
    "quickLinks": [
      { "label": "Home", "to": "/" },
      { "label": "About Us", "to": "/about" },
      { "label": "Portfolio", "to": "/portfolio" },
      { "label": "Contact", "to": "/contact" }
    ],
    "services": [
      { "label": "3D Sports Advertising", "to": "/services/3d-advertising" },
      { "label": "Instadia Branding", "to": "/services/instadia" },
      { "label": "Brand Strategy", "to": "/services/brand-strategy" }
    ]
  }
}
```

---

### 2.3 `services.json`

```json
[
  {
    "id": "3d-advertising",
    "title": "3D Sports Advertising",
    "shortTitle": "3D Advertising",
    "icon": "FiTarget",
    "accentColor": "--sp-color-primary",
    "heroImage": "/assets/images/services/3d-hero.webp",
    "shortDescription": "Place your sponsorship brand in a 3D perspective on or around the field of play.",
    "fullDescription": "Our 3D Sports Advertising service places your brand in a stunning three-dimensional perspective directly on or around the field of play. This innovative approach ensures your brand stands out and benefits from maximum exposure during live TV broadcasts, highlight reels, and social media coverage.",
    "features": [
      {
        "title": "Live TV Exposure",
        "description": "Your brand appears in 3D during live broadcast coverage, reaching millions of viewers worldwide.",
        "icon": "FiTv"
      },
      {
        "title": "Social Media Amplification",
        "description": "Eye-catching 3D visuals generate organic social media shares and engagement.",
        "icon": "FiShare2"
      },
      {
        "title": "Highlight Reel Inclusion",
        "description": "Brands remain visible in replays and highlight packages for extended exposure.",
        "icon": "FiFilm"
      },
      {
        "title": "Custom Placement",
        "description": "Strategic positioning tailored to each sport and venue for maximum impact.",
        "icon": "FiMapPin"
      }
    ],
    "sportExamples": [
      {
        "sport": "Cricket",
        "description": "3D camera carpets on the pitch and mid-wicket logos visible during broadcasts.",
        "image": "/assets/images/services/3d-cricket.webp"
      },
      {
        "sport": "Football",
        "description": "3D camera carpets near goal posts and corner flags for maximum TV visibility.",
        "image": "/assets/images/services/3d-football.webp"
      },
      {
        "sport": "Rugby",
        "description": "In-goal area 3D branding and try-line camera carpets for broadcast impact.",
        "image": "/assets/images/services/3d-rugby.webp"
      }
    ],
    "process": [
      { "step": 1, "title": "Consultation", "description": "We assess your brand goals and target audience." },
      { "step": 2, "title": "Design & Placement", "description": "Our team designs the 3D placement for optimal visibility." },
      { "step": 3, "title": "Implementation", "description": "We install and configure the 3D branding at the venue." },
      { "step": 4, "title": "Measurement", "description": "Post-event analysis of brand exposure and reach." }
    ]
  },
  {
    "id": "instadia",
    "title": "Instadia Branding",
    "shortTitle": "Instadia",
    "icon": "FiMonitor",
    "accentColor": "--sp-color-secondary",
    "heroImage": "/assets/images/services/instadia-hero.webp",
    "shortDescription": "Modern banners and perimeter boards to boost brand visibility at sports events.",
    "fullDescription": "Our Instadia Branding solutions offer modern, eye-catching banners and LED perimeter boards designed to maximize your brand's visibility at live sporting events. From football stadiums to cricket grounds, we ensure your brand captures attention at every angle.",
    "features": [
      {
        "title": "LED Perimeter Boards",
        "description": "Dynamic LED displays that rotate your brand throughout the match.",
        "icon": "FiZap"
      },
      {
        "title": "Static Banners",
        "description": "High-quality static banners positioned at strategic points around the venue.",
        "icon": "FiImage"
      },
      {
        "title": "Digital Integration",
        "description": "Seamless integration with broadcast graphics for enhanced visibility.",
        "icon": "FiLayers"
      },
      {
        "title": "Multi-Sport Coverage",
        "description": "Solutions for football, cricket, athletics, and more.",
        "icon": "FiGlobe"
      }
    ],
    "sportExamples": [
      {
        "sport": "Football",
        "description": "Perimeter LED boards and tunnel branding for premier league matches.",
        "image": "/assets/images/services/instadia-football.webp"
      },
      {
        "sport": "Cricket",
        "description": "Boundary rope branding and sight screen ads for international matches.",
        "image": "/assets/images/services/instadia-cricket.webp"
      },
      {
        "sport": "Athletics",
        "description": "Track-side banners and finish-line branding for global athletics events.",
        "image": "/assets/images/services/instadia-athletics.webp"
      }
    ],
    "process": [
      { "step": 1, "title": "Brief & Strategy", "description": "Understanding your branding objectives and event selection." },
      { "step": 2, "title": "Creative Design", "description": "Designing impactful visuals tailored to the venue." },
      { "step": 3, "title": "Production & Install", "description": "Manufacturing and installing branded elements on-site." },
      { "step": 4, "title": "Reporting", "description": "Post-event visibility and reach analytics." }
    ]
  },
  {
    "id": "brand-strategy",
    "title": "Brand Strategy Consulting",
    "shortTitle": "Brand Strategy",
    "icon": "FiTrendingUp",
    "accentColor": "--sp-color-accent",
    "heroImage": "/assets/images/services/strategy-hero.webp",
    "shortDescription": "Expert consulting to manage your brand and enhance its value at sporting events.",
    "fullDescription": "Our Brand Strategy Consulting helps clients create a powerful, cohesive brand identity that resonates in the sports arena. We combine market research, creative storytelling, and strategic positioning to build brands that leave a lasting impression on audiences worldwide.",
    "features": [
      {
        "title": "Market Research",
        "description": "Deep analysis of target demographics and competitive landscape.",
        "icon": "FiSearch"
      },
      {
        "title": "Brand Positioning",
        "description": "Crafting a unique brand narrative that resonates with sports fans.",
        "icon": "FiCompass"
      },
      {
        "title": "Campaign Planning",
        "description": "End-to-end campaign strategy from concept to execution.",
        "icon": "FiCalendar"
      },
      {
        "title": "ROI Analysis",
        "description": "Measuring brand impact and return on marketing investment.",
        "icon": "FiBarChart2"
      }
    ],
    "sportExamples": [
      {
        "sport": "Cricket",
        "description": "IPL and international cricket sponsorship strategy and execution.",
        "image": "/assets/images/services/strategy-cricket.webp"
      },
      {
        "sport": "Football",
        "description": "Premier league and Champions League brand partnership consulting.",
        "image": "/assets/images/services/strategy-football.webp"
      },
      {
        "sport": "Motor Racing",
        "description": "Formula racing team and event sponsorship strategy.",
        "image": "/assets/images/services/strategy-motorsport.webp"
      }
    ],
    "process": [
      { "step": 1, "title": "Discovery", "description": "Understanding your brand DNA, goals, and challenges." },
      { "step": 2, "title": "Strategy Development", "description": "Building a tailored brand strategy and activation plan." },
      { "step": 3, "title": "Creative Execution", "description": "Developing brand assets and campaign materials." },
      { "step": 4, "title": "Launch & Optimize", "description": "Executing the campaign and iterating based on performance." }
    ]
  }
]
```

---

### 2.4 `sports.json`

```json
[
  {
    "id": "cricket",
    "name": "Cricket",
    "slug": "cricket",
    "description": "From IPL to international test matches, we bring brands to the crease with innovative pitch-side advertising and sponsorship solutions.",
    "image": "/assets/images/sports/cricket.webp",
    "accentColor": "--sp-sport-cricket",
    "icon": "🏏"
  },
  {
    "id": "football",
    "name": "Football",
    "slug": "football",
    "description": "Maximize brand exposure at the world's most-watched sport with perimeter boards, 3D camera carpets, and strategic sponsorships.",
    "image": "/assets/images/sports/football.webp",
    "accentColor": "--sp-sport-football",
    "icon": "⚽"
  },
  {
    "id": "rugby",
    "name": "Rugby",
    "slug": "rugby",
    "description": "From in-goal branding to try-line camera carpets, capture the intensity of rugby with high-impact brand placements.",
    "image": "/assets/images/sports/rugby.webp",
    "accentColor": "--sp-sport-rugby",
    "icon": "🏉"
  },
  {
    "id": "motorsport",
    "name": "Motor Racing",
    "slug": "motorsport",
    "description": "High-speed brand exposure through track-side advertising, team sponsorships, and broadcast-integrated placements.",
    "image": "/assets/images/sports/motorsport.webp",
    "accentColor": "--sp-sport-motorsport",
    "icon": "🏎️"
  }
]
```

---

### 2.5 `portfolio.json`

```json
[
  {
    "id": "portfolio-1",
    "title": "Premier League 3D Branding Campaign",
    "slug": "premier-league-3d",
    "category": "football",
    "service": "3d-advertising",
    "thumbnail": "/assets/images/portfolio/pl-3d-thumb.webp",
    "heroImage": "/assets/images/portfolio/pl-3d-hero.webp",
    "shortDescription": "3D camera carpet placement for a major beverage brand during Premier League matches.",
    "challenge": "The client needed maximum brand visibility during live Premier League broadcasts reaching 500M+ global viewers.",
    "solution": "We deployed 3D camera carpets near both goal posts, ensuring prominent placement during every goal and replay.",
    "results": [
      "2.3 billion cumulative TV impressions",
      "45% increase in brand recall among UK audiences",
      "Featured in 800+ highlight clips across social media"
    ],
    "gallery": [
      "/assets/images/portfolio/pl-3d-1.webp",
      "/assets/images/portfolio/pl-3d-2.webp",
      "/assets/images/portfolio/pl-3d-3.webp"
    ],
    "featured": true
  },
  {
    "id": "portfolio-2",
    "title": "IPL Instadia Branding",
    "slug": "ipl-instadia",
    "category": "cricket",
    "service": "instadia",
    "thumbnail": "/assets/images/portfolio/ipl-thumb.webp",
    "heroImage": "/assets/images/portfolio/ipl-hero.webp",
    "shortDescription": "Comprehensive instadia branding for a tech company across 5 IPL venues.",
    "challenge": "The client wanted consistent brand presence across multiple IPL venues with varied stadium configurations.",
    "solution": "We designed adaptable LED and static branding solutions that maintained brand consistency across all five venues.",
    "results": [
      "1.5 billion TV impressions across the tournament",
      "Consistent brand recall across all 5 venues",
      "35% increase in website traffic during the IPL season"
    ],
    "gallery": [
      "/assets/images/portfolio/ipl-1.webp",
      "/assets/images/portfolio/ipl-2.webp"
    ],
    "featured": true
  },
  {
    "id": "portfolio-3",
    "title": "Six Nations Rugby Brand Strategy",
    "slug": "six-nations-strategy",
    "category": "rugby",
    "service": "brand-strategy",
    "thumbnail": "/assets/images/portfolio/rugby-thumb.webp",
    "heroImage": "/assets/images/portfolio/rugby-hero.webp",
    "shortDescription": "End-to-end brand strategy for a financial services company's Six Nations sponsorship.",
    "challenge": "Position a financial services brand as a credible rugby sponsor with authentic connection to the sport.",
    "solution": "We developed a multi-channel brand activation strategy centered around community rugby values.",
    "results": [
      "28% increase in brand favorability",
      "50,000+ social media engagements",
      "Partnership renewed for 3 additional years"
    ],
    "gallery": [
      "/assets/images/portfolio/rugby-1.webp",
      "/assets/images/portfolio/rugby-2.webp"
    ],
    "featured": true
  },
  {
    "id": "portfolio-4",
    "title": "F1 Track-Side Advertising",
    "slug": "f1-trackside",
    "category": "motorsport",
    "service": "3d-advertising",
    "thumbnail": "/assets/images/portfolio/f1-thumb.webp",
    "heroImage": "/assets/images/portfolio/f1-hero.webp",
    "shortDescription": "Strategic track-side advertising placement for a luxury watch brand at F1 Grand Prix events.",
    "challenge": "Achieve premium brand association with Formula 1's high-end audience across 3 Grand Prix events.",
    "solution": "Precision placement of 3D branded elements at key camera angles around pit lanes and podium areas.",
    "results": [
      "890 million global TV impressions",
      "62% increase in brand searches during race weekends",
      "3 Grand Prix events covered"
    ],
    "gallery": [
      "/assets/images/portfolio/f1-1.webp",
      "/assets/images/portfolio/f1-2.webp"
    ],
    "featured": false
  }
]
```

---

### 2.6 `team.json`

```json
[
  {
    "id": "team-1",
    "name": "James Anderson",
    "role": "CEO & Founder",
    "bio": "With over 15 years in sports marketing, James founded Sports Panorama to revolutionize how brands connect with sports audiences globally.",
    "photo": "/assets/images/team/james.webp",
    "social": {
      "linkedin": "#",
      "twitter": "#"
    }
  },
  {
    "id": "team-2",
    "name": "Sarah Mitchell",
    "role": "Creative Director",
    "bio": "Sarah leads our creative team, bringing innovative visual solutions to every project across all sporting disciplines.",
    "photo": "/assets/images/team/sarah.webp",
    "social": {
      "linkedin": "#",
      "twitter": "#"
    }
  },
  {
    "id": "team-3",
    "name": "David Chen",
    "role": "Head of Technology",
    "bio": "David oversees our 3D advertising technology stack, ensuring cutting-edge solutions for our clients.",
    "photo": "/assets/images/team/david.webp",
    "social": {
      "linkedin": "#"
    }
  },
  {
    "id": "team-4",
    "name": "Priya Sharma",
    "role": "Brand Strategy Lead",
    "bio": "Priya brings deep expertise in sports branding, having managed campaigns for major international tournaments.",
    "photo": "/assets/images/team/priya.webp",
    "social": {
      "linkedin": "#",
      "instagram": "#"
    }
  }
]
```

---

### 2.7 `testimonials.json`

```json
[
  {
    "id": "testimonial-1",
    "quote": "Sports Panorama transformed our brand visibility in the Premier League. Their 3D advertising solutions are truly next-level.",
    "author": "Michael Thompson",
    "role": "Marketing Director",
    "company": "Global Beverages Inc.",
    "photo": "/assets/images/testimonials/michael.webp"
  },
  {
    "id": "testimonial-2",
    "quote": "The instadia branding across our IPL venues was flawless. Consistent quality and maximum impact at every ground.",
    "author": "Anita Desai",
    "role": "Head of Partnerships",
    "company": "TechVista Solutions",
    "photo": "/assets/images/testimonials/anita.webp"
  },
  {
    "id": "testimonial-3",
    "quote": "Their brand strategy consulting helped us build an authentic connection with the rugby community. Highly recommend.",
    "author": "Robert Welsh",
    "role": "CMO",
    "company": "Sterling Financial",
    "photo": "/assets/images/testimonials/robert.webp"
  }
]
```

---

### 2.8 `partners.json`

```json
[
  { "id": "p1", "name": "Global Sports Network", "logo": "/assets/images/partners/gsn.svg" },
  { "id": "p2", "name": "Stadium Solutions", "logo": "/assets/images/partners/stadium.svg" },
  { "id": "p3", "name": "BrandVision Media", "logo": "/assets/images/partners/brandvision.svg" },
  { "id": "p4", "name": "SportTech International", "logo": "/assets/images/partners/sporttech.svg" },
  { "id": "p5", "name": "Digital Arena", "logo": "/assets/images/partners/digitalarena.svg" },
  { "id": "p6", "name": "ProLeague Marketing", "logo": "/assets/images/partners/proleague.svg" },
  { "id": "p7", "name": "Victory Brands", "logo": "/assets/images/partners/victory.svg" },
  { "id": "p8", "name": "Champion Media Group", "logo": "/assets/images/partners/champion.svg" }
]
```

---

## 3. Data Usage Rules

1. **Always import from `@data/`** — Never hardcode content strings in components.
2. **IDs must be unique** — Used as `key` props and for filtering/routing.
3. **Slugs are URL-safe** — lowercase, hyphenated, no special characters.
4. **Image paths are relative to `public/`** — Vite serves `public/` at root.
5. **Icons reference `react-icons` names** — Components map these strings to actual icon components.
6. **Placeholder images** — During development, use generated placeholder images. Replace with real assets before launch.
7. **No sensitive data** — All data is publicly bundled. Never put API keys, passwords, or private info here.
