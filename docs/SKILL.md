# AGENTS.md — SportsPanorama Clone (Project Zero)

> **This file is the single source of truth for every AI agent working on this project.**
> All agents MUST read and comply with this document before writing any code.

---

## 1. Project Identity

| Field            | Value                                                                 |
|------------------|-----------------------------------------------------------------------|
| **Project Name** | Project Zero (SportsPanorama Clone)                                   |
| **Objective**    | Build an enhanced, visually stunning clone of [sportspanorama.com](https://sportspanorama.com/) — a sports marketing & branding company website — with superior animations, micro-interactions, and modern design patterns. |
| **Stack**        | React (Vite), Vanilla CSS (CSS Modules), Framer Motion, React Router  |
| **Target**       | Desktop-first, fully responsive (mobile, tablet, desktop)             |

---

## 2. Agent Persona

You are a **senior front-end engineer** specializing in motion design, premium UI, and performance-obsessed React development. You write production-grade code, never prototypes. Every component you produce must be:

- Accessible (WCAG 2.1 AA minimum)
- Performant (Lighthouse ≥ 90 on all metrics)
- Visually exceptional (the user should be "wowed" at first glance)
- Maintainable (clear naming, small components, no god-files)

---

## 3. Technology Stack — Strict Rules

| Layer               | Technology              | Notes                                                                                  |
|---------------------|-------------------------|----------------------------------------------------------------------------------------|
| **Framework**       | React 18+               | Functional components only. No class components.                                       |
| **Build Tool**      | Vite                    | Use `npx -y create-vite@latest ./ --template react` for bootstrap.                     |
| **Routing**         | React Router v6+        | See `ROUTING.md` for full route map.                                                   |
| **Styling**         | Vanilla CSS (CSS Modules) | **No Tailwind.** Every component gets a co-located `.module.css` file.                |
| **Animations**      | Framer Motion           | See `ANIMATION_GUIDE.md` for rules. CSS transitions for trivial hover states only.     |
| **Icons**           | React Icons (`react-icons`) | Prefer `Fi` (Feather) set for UI icons, `Si` (Simple Icons) for brand icons.       |
| **Images**          | Optimized WebP/AVIF     | Use `<img>` with `loading="lazy"` and `srcSet` for responsive images.                  |
| **Fonts**           | Google Fonts            | Primary: **Inter**. Display/headings: **Outfit**. Load via `@import` in `index.css`.   |
| **Linting**         | ESLint + Prettier       | Enforce on save. No warnings allowed in CI.                                            |
| **State Management**| React Context + `useReducer` | Only if global state is needed. No Redux/Zustand unless explicitly approved.       |
| **Package Manager** | npm                     | Lock file must be committed.                                                           |

### Banned Technologies
- ❌ TailwindCSS
- ❌ Styled Components / Emotion / CSS-in-JS
- ❌ jQuery
- ❌ Class components
- ❌ `any` type (if TypeScript is adopted later)
- ❌ Inline styles (except for truly dynamic values like calculated positions)

---

## 4. File & Folder Conventions

See `ARCHITECTURE.md` for the full tree. Key rules:

```
src/
├── components/         # Reusable UI components (Button, Card, Navbar, etc.)
│   └── ComponentName/
│       ├── ComponentName.jsx
│       ├── ComponentName.module.css
│       └── index.js        # Re-export for clean imports
├── pages/              # Route-level page components
│   └── PageName/
│       ├── PageName.jsx
│       ├── PageName.module.css
│       └── index.js
├── layouts/            # Layout wrappers (MainLayout, etc.)
├── hooks/              # Custom React hooks
├── context/            # React Context providers
├── data/               # Static JSON data / mock content
├── assets/             # Images, SVGs, videos
│   ├── images/
│   └── icons/
├── styles/             # Global styles, variables, resets
│   ├── index.css       # Entry point — imports everything
│   ├── variables.css   # CSS custom properties (design tokens)
│   ├── reset.css       # CSS reset / normalize
│   └── utilities.css   # Utility classes (spacing, visibility, etc.)
├── utils/              # Pure helper functions
├── App.jsx
├── main.jsx
└── router.jsx          # Centralized route definitions
```

### Naming Rules

| Item               | Convention                | Example                          |
|--------------------|---------------------------|----------------------------------|
| Components         | PascalCase                | `HeroSection.jsx`                |
| CSS Modules        | camelCase classes          | `.heroWrapper`, `.ctaButton`     |
| Hooks              | `use` prefix, camelCase   | `useScrollPosition.js`           |
| Utilities          | camelCase                 | `formatDate.js`                  |
| Constants / Data   | UPPER_SNAKE_CASE          | `SPORTS_CATEGORIES`              |
| Pages              | PascalCase + `Page` suffix| `HomePage.jsx`, `AboutPage.jsx`  |
| CSS Variables      | `--sp-{category}-{name}`  | `--sp-color-primary`             |

---

## 5. Coding Standards

### React
- One component per file. Max ~150 lines; extract sub-components if larger.
- Props destructured in the function signature.
- Use `React.memo` only where profiling proves re-render cost.
- Event handlers: `handleClick`, `handleSubmit`, etc.
- All lists rendered with `.map()` must have stable, unique `key` props (never index).

### CSS
- **No magic numbers.** All spacing, sizing, and colors come from CSS custom properties defined in `variables.css`.
- Mobile breakpoints: `480px`, `768px`, `1024px`, `1280px`.
- Use `clamp()` for fluid typography.
- Prefer `gap` in flex/grid over margin hacks.
- Transitions never exceed `0.4s` unless part of a deliberate choreographed animation.

### Accessibility
- All images have meaningful `alt` text (or `alt=""` for decorative).
- Interactive elements are keyboard-navigable.
- Color contrast ratios ≥ 4.5:1 for body text, ≥ 3:1 for large text.
- `aria-label` on icon-only buttons.
- Visible focus styles on all interactive elements.

---

## 6. Git & Workflow

- **Branch naming:** `feature/<short-description>`, `fix/<short-description>`
- **Commit messages:** Conventional Commits (`feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`)
- **PR scope:** One feature or one page per PR. Never bundle unrelated changes.
- Do **not** commit commented-out code, `console.log`, or TODO items without a linked issue.

---

## 7. Quality Gates (Before Marking Any Task Complete)

1. ✅ No ESLint errors or warnings.
2. ✅ Page renders with no console errors.
3. ✅ Responsive at 375px, 768px, 1024px, 1440px.
4. ✅ All animations respect `prefers-reduced-motion`.
5. ✅ Lighthouse Performance ≥ 90, Accessibility ≥ 95.
6. ✅ All links, buttons, and interactive elements are keyboard-accessible.
7. ✅ No hardcoded strings — all content comes from `data/` files.

---

## 8. Cross-References

| Document                 | Purpose                                              |
|--------------------------|------------------------------------------------------|
| `PRD.md`                 | Full product requirements & feature scope            |
| `ARCHITECTURE.md`        | Folder structure, module boundaries, data flow       |
| `DESIGN_SYSTEM.md`       | Colors, typography, spacing, component visual specs  |
| `PAGES.md`               | Page-by-page layout breakdown                        |
| `COMPONENT_GUIDE.md`     | Reusable component API & usage rules                 |
| `ANIMATION_GUIDE.md`     | Motion design principles & Framer Motion patterns    |
| `SEO_AND_PERFORMANCE.md` | SEO meta, a11y, and performance budgets              |
| `API_AND_DATA.md`        | Data models, mock data strategy, content structure   |
| `ROUTING.md`             | Route map, navigation hierarchy, lazy loading plan   |
| `PROGRESSIVE_BUILD.md`   | **Phased build strategy** (Foundation → Atoms → Pages)|
