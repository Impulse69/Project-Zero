# COMPONENT_GUIDE.md — Reusable Component Specification

> This document defines the **API, variants, and usage rules** for every reusable component.
> Agents must follow these specs exactly when building or using components.

---

## 1. Component Principles

1. **Single Responsibility** — One component, one job. If it does two things, split it.
2. **Props over Hardcoding** — All text, colors, sizes, and behaviors are controlled by props.
3. **Composable** — Prefer `children` prop over rigid prop-driven layouts where possible.
4. **Co-located Styles** — Every component has a `.module.css` file in the same folder.
5. **Re-exported** — Every component folder has an `index.js` for clean imports.

### Standard Component Folder

```
ComponentName/
├── ComponentName.jsx       # Component logic
├── ComponentName.module.css # Scoped styles
└── index.js                 # export { default } from './ComponentName';
```

---

## 2. Common Components (`components/common/`)

### 2.1 Button

**File:** `components/common/Button/Button.jsx`

| Prop          | Type                                      | Default     | Description                        |
|---------------|-------------------------------------------|-------------|------------------------------------|
| `children`    | `ReactNode`                               | —           | Button content                     |
| `variant`     | `'primary' \| 'secondary' \| 'ghost'`     | `'primary'` | Visual variant                     |
| `size`        | `'sm' \| 'md' \| 'lg'`                    | `'md'`      | Button size                        |
| `href`        | `string`                                  | —           | If provided, renders as `<a>` tag  |
| `to`          | `string`                                  | —           | If provided, renders as `<Link>`   |
| `icon`        | `ReactNode`                               | —           | Icon element (left side)           |
| `iconRight`   | `ReactNode`                               | —           | Icon element (right side)          |
| `loading`     | `boolean`                                 | `false`     | Shows spinner, disables click      |
| `fullWidth`   | `boolean`                                 | `false`     | Stretches to parent width          |
| `className`   | `string`                                  | —           | Additional CSS classes             |
| `...rest`     | `HTMLButtonAttributes`                    | —           | Spread to native element           |

**Hover:** `scale(1.03)` + shadow expansion
**Active:** `scale(0.98)`
**Focus:** Visible outline ring using `--sp-color-primary`

---

### 2.2 SectionHeading

**File:** `components/common/SectionHeading/SectionHeading.jsx`

Standardized heading block used at the top of every section.

| Prop        | Type                            | Default    | Description                          |
|-------------|---------------------------------|------------|--------------------------------------|
| `badge`     | `string`                        | —          | Small uppercase label above title    |
| `title`     | `string`                        | —          | Main heading (renders as `<h2>`)     |
| `subtitle`  | `string`                        | —          | Supporting text below title          |
| `align`     | `'left' \| 'center'`           | `'center'` | Text alignment                       |
| `light`     | `boolean`                       | `false`    | Use lighter text (for dark bgs)      |

**Visual:** Badge uses `--sp-color-primary` pill style. Title uses `--sp-text-3xl`. Subtitle uses `--sp-text-lg` in `--sp-text-secondary` color. ScrollReveal wraps the whole block.

---

### 2.3 Card

**File:** `components/common/Card/Card.jsx`

Generic card container with hover effects.

| Prop          | Type          | Default   | Description                         |
|---------------|---------------|-----------|-------------------------------------|
| `children`    | `ReactNode`   | —         | Card content                        |
| `variant`     | `'default' \| 'glass' \| 'outlined'` | `'default'` | Visual variant |
| `hover`       | `boolean`     | `true`    | Enable hover lift effect            |
| `padding`     | `'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding                 |
| `className`   | `string`      | —         | Additional CSS classes              |
| `as`          | `string`      | `'div'`   | HTML element to render as           |

**Hover:** `translateY(-4px)` + shadow depth + border brighten

---

### 2.4 ScrollReveal

**File:** `components/common/ScrollReveal/ScrollReveal.jsx`

Wraps any content with scroll-triggered entrance animation.

| Prop        | Type                                       | Default  | Description                           |
|-------------|--------------------------------------------|----------|---------------------------------------|
| `children`  | `ReactNode`                                | —        | Content to animate                    |
| `direction` | `'up' \| 'down' \| 'left' \| 'right'`     | `'up'`   | Direction content enters from         |
| `delay`     | `number`                                   | `0`      | Delay in seconds before animation     |
| `duration`  | `number`                                   | `0.6`    | Animation duration in seconds         |
| `once`      | `boolean`                                  | `true`   | Animate only on first view            |
| `className` | `string`                                   | —        | Wrapper class                         |

---

### 2.5 AnimatedCounter

**File:** `components/common/AnimatedCounter/AnimatedCounter.jsx`

Animates a number from 0 to the target value when scrolled into view.

| Prop        | Type      | Default  | Description                              |
|-------------|-----------|----------|------------------------------------------|
| `target`    | `number`  | —        | Final number to count to                 |
| `suffix`    | `string`  | `''`     | Text after number (e.g., `'+'`, `'%'`)   |
| `prefix`    | `string`  | `''`     | Text before number (e.g., `'$'`)         |
| `duration`  | `number`  | `2`      | Animation duration in seconds            |
| `label`     | `string`  | —        | Label text below the number              |

---

### 2.6 Badge

**File:** `components/common/Badge/Badge.jsx`

Small pill-shaped tag for categories, labels, etc.

| Prop        | Type                                    | Default     | Description             |
|-------------|-----------------------------------------|-------------|-------------------------|
| `children`  | `ReactNode`                             | —           | Badge content           |
| `variant`   | `'primary' \| 'secondary' \| 'accent' \| 'sport'` | `'primary'` | Color variant |
| `size`      | `'sm' \| 'md'`                          | `'sm'`      | Badge size              |

---

### 2.7 Skeleton

**File:** `components/common/Skeleton/Skeleton.jsx`

Loading placeholder with shimmer animation.

| Prop      | Type                             | Default | Description              |
|-----------|----------------------------------|---------|--------------------------|
| `variant` | `'text' \| 'circular' \| 'rect'`| `'text'`| Shape of skeleton        |
| `width`   | `string`                         | `'100%'`| Width                    |
| `height`  | `string`                         | `'1em'` | Height                   |
| `count`   | `number`                         | `1`     | Number of skeleton lines |

---

### 2.8 ScrollToTop

**File:** `components/common/ScrollToTop/ScrollToTop.jsx`

Floating button that appears after scrolling 300px down.

| Props | None — self-contained component |

**Behavior:** Fades in at scroll Y > 300px. Click smoothly scrolls to top. Uses `--sp-color-primary` background. Arrow-up icon.

---

### 2.9 Preloader

**File:** `components/common/Preloader/Preloader.jsx`

Full-screen branded loading screen shown on initial page load.

| Props | None — self-contained component |

**Behavior:** Fades out and `pointer-events: none` after 1.5–2s or when `window.onload` fires (whichever comes first). Uses logo + loading bar or spinner animation.

---

## 3. Layout Components (`components/layout/`)

### 3.1 Navbar

**File:** `components/layout/Navbar/Navbar.jsx`

| Sub-Component  | File                | Description                                  |
|----------------|---------------------|----------------------------------------------|
| `Navbar`       | `Navbar.jsx`        | Main navbar with scroll-aware background     |
| `MegaMenu`     | `MegaMenu.jsx`      | Dropdown for "Services" nav item             |
| `MobileDrawer` | `MobileDrawer.jsx`  | Full-height slide-out drawer for mobile nav  |

**States:**
- **Transparent** (scroll Y = 0): `bg: transparent`, logo white, text white
- **Solid** (scroll Y > 80): `bg: var(--sp-bg-tertiary)`, `backdrop-filter: blur(16px)`
- **Mobile** (< 768px): Hamburger icon → MobileDrawer

---

### 3.2 Footer

**File:** `components/layout/Footer/Footer.jsx`

4-column layout:
1. Logo + company description + social icons
2. Quick Links (Home, About, Portfolio, Contact)
3. Services (3D Advertising, Instadia, Brand Strategy)
4. Contact Info (Address, Phone, Email)

Bottom bar: Copyright + optional legal links.

---

### 3.3 PageHero

**File:** `components/layout/PageHero/PageHero.jsx`

Reusable compact hero for inner pages.

| Prop          | Type      | Default | Description                         |
|---------------|-----------|---------|-------------------------------------|
| `title`       | `string`  | —       | Page title                          |
| `subtitle`    | `string`  | —       | Optional subtitle                   |
| `breadcrumbs` | `Array`   | —       | `[{ label, to }]` breadcrumb items  |
| `bgImage`     | `string`  | —       | Optional background image URL       |

**Visual:** 40vh height, dark overlay gradient, centered text, animated text reveal.

---

### 3.4 Container

**File:** `components/layout/Container/Container.jsx`

Centered max-width wrapper.

| Prop        | Type                      | Default   | Description                     |
|-------------|---------------------------|-----------|---------------------------------|
| `children`  | `ReactNode`               | —         | Content                         |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'full'` | `'lg'` | Max-width variant          |
| `className` | `string`                  | —         | Additional class                |

---

### 3.5 Section

**File:** `components/layout/Section/Section.jsx`

Standardized section wrapper with consistent vertical padding.

| Prop          | Type                          | Default     | Description                    |
|---------------|-------------------------------|-------------|--------------------------------|
| `children`    | `ReactNode`                   | —           | Section content                |
| `bg`          | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Background color     |
| `padding`     | `'sm' \| 'md' \| 'lg'`       | `'lg'`      | Vertical padding amount        |
| `id`          | `string`                      | —           | Section anchor ID              |
| `className`   | `string`                      | —           | Additional class               |

---

## 4. Page-Specific Components

Page-specific components live in their respective folder under `components/` (e.g., `components/home/`, `components/about/`). They are **NOT** imported by other pages.

### Naming Convention

| Component             | Folder                            | Notes                            |
|-----------------------|-----------------------------------|----------------------------------|
| `HeroSection`         | `components/home/HeroSection/`    | Only used on Home page           |
| `ServicesOverview`    | `components/home/ServicesOverview/`| Only used on Home page           |
| `CompanyStory`        | `components/about/CompanyStory/`  | Only used on About page          |
| `ContactForm`         | `components/contact/ContactForm/` | Only used on Contact page        |

### Rule: If a component is used on 2+ pages, move it to `components/common/` or `components/layout/`.

---

## 5. Component Checklist (for agents)

Before marking a component as complete, verify:

- [ ] Props are documented in a JSDoc comment above the component
- [ ] Default props are set via destructuring defaults
- [ ] `className` prop is supported and merged with internal classes
- [ ] Hover and focus states are implemented
- [ ] Responsive at all breakpoints (375, 768, 1024, 1440px)
- [ ] `prefers-reduced-motion` is respected for animations
- [ ] Accessibility: proper ARIA, keyboard nav, focus management
- [ ] No hardcoded text — all content from props or data files
- [ ] CSS Module file exists with all styles scoped
- [ ] `index.js` re-export is in place
