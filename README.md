# Project Zero — Sports Panorama

> Elevating Brands Through Sport

## About

Sports Panorama is a premium sports marketing and branding solutions platform built with **Next.js** (App Router).

## Status

✅ **Phase 1 Complete** — Design system foundation is in place.
🚧 **Phase 2+** — Components and pages to be built from Stitch mockups.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to verify the foundation.

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── globals.css       # Master stylesheet (imports all layers)
│   ├── layout.js         # Root layout (fonts, metadata)
│   ├── page.js           # Home page
│   └── page.module.css   # Home page styles
└── styles/               # Design System (Phase 1)
    ├── variables.css     # Design tokens (colors, spacing, type scale)
    ├── reset.css         # Browser normalization
    ├── typography.css    # Font styles & heading hierarchy
    ├── utilities.css     # Layout helpers (flex, grid, container)
    └── animations.css    # Keyframes & animation utilities
```

## Documentation

All project specifications are in the [`docs/`](./docs) directory:

| Document | Description |
|----------|-------------|
| [PRD.md](./docs/PRD.md) | Product Requirements Document |
| [ARCHITECTURE.md](./docs/ARCHITECTURE.md) | System architecture and tech stack |
| [DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) | Colors, typography, spacing, and design tokens |
| [PAGES.md](./docs/PAGES.md) | Page-by-page specifications |
| [COMPONENT_GUIDE.md](./docs/COMPONENT_GUIDE.md) | Component library and usage |
| [ROUTING.md](./docs/ROUTING.md) | URL structure and navigation |
| [ANIMATION_GUIDE.md](./docs/ANIMATION_GUIDE.md) | Motion design and animation specs |
| [API_AND_DATA.md](./docs/API_AND_DATA.md) | Data models and API integration plans |
| [SEO_AND_PERFORMANCE.md](./docs/SEO_AND_PERFORMANCE.md) | SEO strategy and performance targets |
| [PROGRESSIVE_BUILD.md](./docs/PROGRESSIVE_BUILD.md) | Phased build plan |

## Tech Stack

- **Framework:** Next.js 16 (App Router + Turbopack)
- **Language:** JavaScript / JSX
- **Styling:** CSS Modules + CSS Custom Properties
- **Fonts:** Inter (body) + Outfit (display) via `next/font`
- **Animations:** CSS Keyframes (Framer Motion planned for Phase 7)

## License

Private — All rights reserved.
