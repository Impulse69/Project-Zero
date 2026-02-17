# PROGRESSIVE_BUILD.md — Frontend Development Strategy

> This document outlines the **progressive build strategy** for Project Zero.
> Development must follow these phases sequentially to ensure a stable, scalable, and visually consistent codebase.

---

## The Philosophy: "Atomic & Layered"

We do not build pages from top to bottom. We build **systems**.
We start with the smallest units (tokens, atoms) and compose them into increasingly complex structures (molecules, organisms, templates).

---

## Phase 1: The Foundation (System Layer)

Before writing a single component, the design system must be encoded in CSS.

1.  **Tokens (`variables.css`)**: Define all colors, fonts, spacing, radii, and shadows as CSS variables.
2.  **Reset (`reset.css`)**: Normalize browser defaults.
3.  **Typography (`typography.css`)**: Set global font styles, headings, and body types.
4.  **Utilities (`utilities.css`)**: Create helper classes for common layout patterns (flex, grid, spacing).
5.  **Global Styles (`index.css`)**: Import all the above in the correct order.

**Definition of Done:** The app renders with the correct background color and font family, even if empty.

---

## Phase 2: Core Primitives (Atoms)

Build the smallest, indivisible UI components. These should have **zero** business logic.

-   **Button**: Primary, Secondary, Ghost variants.
-   **Input / Form Elements**: Text, Select, Checkbox.
-   **Card**: Container with standardized padding, border, and hover state.
-   **Badge / Tag**: Status indicators or categories.
-   **Icon Wrapper**: Standardized sizing for icons.

**Definition of Done:** All atoms are capable of rendering all their variants in a Storybook-like isolation (or a test page).

---

## Phase 3: Common Components (Molecules)

Combine atoms into functional, reusable blocks.

-   **SectionHeading**: Title + Subtitle + alignment props.
-   **AnimatedCounter**: Number that counts up when viewed.
-   **SocialLinks**: Row of icon buttons.
-   **NavMenu**: Navigation items.

**Definition of Done:** Molecules function correctly and accept data via props.

---

## Phase 4: Site Structure (Templates)

Define the global shell of the application.

-   **Router**: Define routes in `router.jsx`.
-   **MainLayout**: Navbar + Footer + `<Outlet />`.
-   **Navbar**: Responsive logic (desktop vs. mobile drawer).
-   **Footer**: Links and copyright.
-   **ScrollToTop**: Global scroll behavior.

**Definition of Done:** You can navigate between blank pages, and the header/footer persist.

---

## Phase 5: Page Sections (Organisms)

Build the specific content blocks for each page. Each section is self-contained.

*Example: Home Page*
1.  **HeroSection**: Impactful visual intro.
2.  **ServicesList**: Grid of Service cards.
3.  **Testimonials**: Carousel of reviews.
4.  **partners**: Marquee of logos.

**Definition of Done:** Each section renders correctly with mock data.

---

## Phase 6: Page Assembly (Pages)

Stitch sections together to form complete pages.

1.  **HomePage.jsx**: `<Hero />` + `<Services />` + ...
2.  **AboutPage.jsx**: `<Story />` + `<Team />`
3.  **ServicePage.jsx**: Details for specific services.
4.  **SEO**: Add `useDocumentTitle` and meta tags.

**Definition of Done:** All pages are complete, navigable, and responsive.

---

## Phase 7: Optimization & Polish (Refinement)

The "Project Zero" difference — taking it from "functional" to "premium".

1.  **Motion**: Add `framer-motion` entrance animations (staggered children, fade-ins).
2.  **Interaction**: Hover states, active states, focus rings.
3.  **Performance**: Lazy loading (`React.lazy`), image optimization (WebP).
4.  **Accessibility**: Audit (ARIA labels, keyboard nav, contrast).

**Definition of Done:** Lighthouse score > 90. User is "wowed".

---

## Agent Workflow Checklist

When a user asks for a new feature (e.g., "Build the About Page"), follow this path:

1.  **Check Phase 1**: Are the necessary tokens (colors/fonts) available?
2.  **Check Phase 2**: Do I need new atoms (e.g., a `TeamMemberCard`)?
3.  **Build Phase 5**: Create the specialized sections (`CompanyHistory`).
4.  **Execute Phase 6**: Assemble into `AboutPage.jsx`.
5.  **Finish with Phase 7**: Add animations and polish.

**Do not** build a monolithic `AboutPage.jsx` file with inline styles and hardcoded sub-components. **Always** decompose.
