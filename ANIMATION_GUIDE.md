# ANIMATION_GUIDE.md — Motion Design Rules & Framer Motion Patterns

---

## 1. Motion Philosophy

> **Motion is not decoration — it is communication.**
> Every animation must serve a purpose: guide attention, provide feedback, or reinforce spatial relationships.

### The Three Commandments
1. **Purpose over flash** — If you can't explain *why* something moves, remove the animation.
2. **Respect the user** — Always honor `prefers-reduced-motion`. Never loop attention-grabbing animations.
3. **Performance first** — Only animate `transform` and `opacity`. Never animate `width`, `height`, `top`, `left`, or `box-shadow` directly.

---

## 2. Timing & Easing

### Duration Scale

```css
:root {
  --sp-duration-instant:   100ms;   /* Toggles, checkboxes */
  --sp-duration-fast:      200ms;   /* Hover states, tooltips */
  --sp-duration-normal:    300ms;   /* Menus, dropdowns, fades */
  --sp-duration-slow:      500ms;   /* Page sections entering viewport */
  --sp-duration-slower:    700ms;   /* Hero animations, dramatic reveals */
  --sp-duration-slowest:   1000ms;  /* Preloader, page transitions */
}
```

### Easing Functions

| Token                      | Value                                   | Use Case                            |
|----------------------------|-----------------------------------------|--------------------------------------|
| `--sp-ease-out`            | `cubic-bezier(0.16, 1, 0.3, 1)`        | Elements entering (scroll reveals)   |
| `--sp-ease-in`             | `cubic-bezier(0.55, 0.055, 0.675, 0.19)` | Elements exiting                   |
| `--sp-ease-in-out`         | `cubic-bezier(0.65, 0, 0.35, 1)`       | Symmetric transitions                |
| `--sp-ease-spring`         | Framer Motion spring config             | Bouncy, organic interactions         |
| `--sp-ease-smooth`         | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Subtle, smooth transitions           |

### Framer Motion Spring Presets

```js
export const SPRING = {
  gentle:  { type: 'spring', stiffness: 120, damping: 14, mass: 1 },
  snappy:  { type: 'spring', stiffness: 300, damping: 20, mass: 0.8 },
  bouncy:  { type: 'spring', stiffness: 400, damping: 10, mass: 0.5 },
  slow:    { type: 'spring', stiffness: 80,  damping: 20, mass: 1.2 },
};

export const TWEEN = {
  fast:    { type: 'tween', duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  normal:  { type: 'tween', duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  slow:    { type: 'tween', duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};
```

---

## 3. Animation Catalogue

### 3.1 Scroll-Triggered Reveals

Every section on every page uses scroll-triggered entrance animations. Use `useInView` from Framer Motion.

| Pattern           | Motion                                     | Duration  | Stagger     |
|-------------------|--------------------------------------------|-----------|-------------|
| **Fade Up**       | `opacity: 0 → 1`, `y: 40 → 0`            | 0.6s      | 0.1s        |
| **Fade In**       | `opacity: 0 → 1`                          | 0.5s      | —           |
| **Slide Left**    | `opacity: 0 → 1`, `x: 60 → 0`            | 0.6s      | 0.15s       |
| **Slide Right**   | `opacity: 0 → 1`, `x: -60 → 0`           | 0.6s      | 0.15s       |
| **Scale Up**      | `opacity: 0 → 1`, `scale: 0.9 → 1`       | 0.5s      | 0.1s        |
| **Blur In**       | `opacity: 0 → 1`, `filter: blur(10px) → blur(0)` | 0.5s | —         |

#### Standard Scroll Reveal Component Pattern

```jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  duration = 0.6,
  once = true 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const directions = {
    up:    { y: 40, x: 0 },
    down:  { y: -40, x: 0 },
    left:  { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};
```

#### Staggered Children Pattern

```jsx
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// Usage:
<motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map(item => (
    <motion.div key={item.id} variants={child}>
      <Card {...item} />
    </motion.div>
  ))}
</motion.div>
```

---

### 3.2 Hover Interactions

| Element           | Effect                                                           |
|-------------------|------------------------------------------------------------------|
| **Buttons**       | `scale(1.03)` + shadow expand + background brightness            |
| **Cards**         | `translateY(-4px)` + shadow depth increase + border glow         |
| **Nav Links**     | Underline slide-in from left (pseudo-element `scaleX(0→1)`)      |
| **Images**        | Subtle `scale(1.05)` with overflow hidden on container           |
| **Social Icons**  | `scale(1.15)` + color change to brand color                     |
| **Partner Logos** | `grayscale(1) → grayscale(0)` + `opacity(0.5 → 1)`             |

---

### 3.3 Page Transitions

Use Framer Motion `AnimatePresence` wrapping the router outlet:

```jsx
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:     { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// In MainLayout:
const location = useLocation();

<AnimatePresence mode="wait">
  <motion.main key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <Outlet />
  </motion.main>
</AnimatePresence>
```

---

### 3.4 Micro-Interactions

| Interaction               | Animation                                              |
|---------------------------|--------------------------------------------------------|
| **Form submit**           | Button shrinks → spinner → checkmark → expands back   |
| **Copy to clipboard**     | Tooltip fades in: "Copied!" → fades out after 2s       |
| **Tab switch**            | Active indicator slides to new tab position             |
| **Accordion open/close**  | Height auto-animate + chevron rotation                  |
| **Counter increment**     | Numbers count up from 0 to target over 2s              |
| **hamburger ↔ X toggle**  | Morph hamburger lines to X with rotation                |
| **Scroll progress**       | Thin progress bar at top of viewport                   |

---

### 3.5 Special Effects

| Effect                   | Implementation                                                  | Where Used             |
|--------------------------|-----------------------------------------------------------------|------------------------|
| **Parallax hero**        | Background `translateY` at 0.3x scroll speed via `useTransform` | Hero sections          |
| **Logo marquee**         | CSS `@keyframes` infinite scroll, `animation-play-state: paused` on hover | Partners section |
| **Gradient mesh bg**     | Animated radial gradients with slow position shifts              | Behind hero, CTA       |
| **Text reveal**          | Clip-path or overflow-hidden word-by-word reveal                 | Hero headline          |
| **Cursor glow**          | Radial gradient follows mouse position on cards (optional)       | Service cards          |
| **Number counter**       | `useAnimatedCounter` hook with requestAnimationFrame             | Stats bar              |

---

## 4. Reduced Motion Support

**MANDATORY.** Every animation must degrade gracefully:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

In Framer Motion components:
```jsx
import { useReducedMotion } from 'framer-motion';

const prefersReducedMotion = useReducedMotion();

<motion.div
  initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
/>
```

---

## 5. Performance Rules

1. **Only animate `transform` and `opacity`** — these are GPU-accelerated and don't trigger layout.
2. **Use `will-change` sparingly** — only on elements that are *about* to animate, remove after.
3. **Lazy-load heavy animations** — Carousels, parallax, and cursor-follow effects should lazy-load.
4. **Cap stagger counts** — Never stagger more than 8–10 items. Beyond that, batch in groups.
5. **Disable scroll animations below the fold on mobile** — Mobile GPUs are weaker; keep it simple.
6. **Test on low-end devices** — Animations must be smooth at 60fps on a mid-range Android phone.

---

## 6. File Organization

```
src/
├── utils/
│   └── motionVariants.js    # All shared Framer Motion variants & spring presets
├── hooks/
│   ├── useInView.js          # Intersection Observer wrapper
│   ├── useScrollPosition.js  # Scroll Y position tracker
│   ├── useAnimatedCounter.js # Counter animation hook
│   └── useParallax.js        # Parallax transform calculator
├── components/
│   └── common/
│       ├── ScrollReveal/      # Reusable scroll-triggered reveal wrapper
│       └── AnimatedCounter/   # Animated number counter
└── styles/
    └── animations.css         # Global @keyframes (marquee, pulse, shimmer, etc.)
```
