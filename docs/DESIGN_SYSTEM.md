# DESIGN_SYSTEM.md — Visual Design Tokens & Component Specs

---

## 1. Design Philosophy

> **Sports Panorama Enhanced** is a premium, dark-mode-first sports marketing website.
> The visual language blends **cinematic depth** with **sharp editorial clarity** —
> think broadcast-quality sports graphics meets a luxury agency portfolio.

### Design Pillars
1. **Cinematic Impact** — Full-bleed imagery, dramatic gradients, and bold typography
2. **Fluid Motion** — Every interaction feels intentional and alive (see `ANIMATION_GUIDE.md`)
3. **Editorial Precision** — Clean grids, generous whitespace, typographic hierarchy
4. **Premium Materials** — Glassmorphism, subtle noise textures, metallic accents

---

## 2. Color Palette

All colors are defined as CSS custom properties in `src/styles/variables.css`.

### Core Colors

```css
:root {
  /* ── Background ── */
  --sp-bg-primary:        #0a0a0f;       /* Deep black-blue — main bg */
  --sp-bg-secondary:      #12121a;       /* Slightly lifted — card bgs */
  --sp-bg-tertiary:       #1a1a2e;       /* Elevated surfaces — navbar solid state */
  --sp-bg-surface:        #252540;       /* Inputs, dropdowns */

  /* ── Brand ── */
  --sp-color-primary:     #6c63ff;       /* Electric indigo — primary actions */
  --sp-color-primary-light: #8b83ff;     /* Hover state */
  --sp-color-primary-dark: #4a42d4;      /* Active/pressed state */
  --sp-color-secondary:   #00d4aa;       /* Vibrant teal — accents, badges */
  --sp-color-accent:      #ff6b6b;       /* Coral red — alerts, highlights */

  /* ── Text ── */
  --sp-text-primary:      #f0f0f5;       /* Main body text */
  --sp-text-secondary:    #a0a0b8;       /* Muted / supporting text */
  --sp-text-tertiary:     #6b6b80;       /* Placeholder, disabled text */
  --sp-text-inverse:      #0a0a0f;       /* Text on light backgrounds */
  --sp-text-link:         var(--sp-color-primary-light);

  /* ── Borders & Dividers ── */
  --sp-border-subtle:     rgba(255, 255, 255, 0.06);
  --sp-border-default:    rgba(255, 255, 255, 0.10);
  --sp-border-strong:     rgba(255, 255, 255, 0.18);

  /* ── Glassmorphism ── */
  --sp-glass-bg:          rgba(255, 255, 255, 0.04);
  --sp-glass-border:      rgba(255, 255, 255, 0.08);
  --sp-glass-blur:        20px;

  /* ── Gradients ── */
  --sp-gradient-primary:  linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%);
  --sp-gradient-hero:     linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(10,10,15,0.8) 60%, #0a0a0f 100%);
  --sp-gradient-card:     linear-gradient(145deg, rgba(108,99,255,0.08) 0%, rgba(0,212,170,0.04) 100%);
  --sp-gradient-cta:      linear-gradient(135deg, #6c63ff 0%, #4a42d4 50%, #00d4aa 100%);

  /* ── Shadows ── */
  --sp-shadow-sm:         0 2px 8px rgba(0, 0, 0, 0.15);
  --sp-shadow-md:         0 4px 20px rgba(0, 0, 0, 0.25);
  --sp-shadow-lg:         0 8px 40px rgba(0, 0, 0, 0.35);
  --sp-shadow-glow:       0 0 30px rgba(108, 99, 255, 0.15);

  /* ── Sport Category Accents ── */
  --sp-sport-cricket:     #4ecdc4;
  --sp-sport-football:    #45b7d1;
  --sp-sport-rugby:       #f7dc6f;
  --sp-sport-motorsport:  #ff6b6b;
}
```

---

## 3. Typography

### Font Stack

```css
:root {
  --sp-font-body:    'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --sp-font-display: 'Outfit', 'Inter', sans-serif;
  --sp-font-mono:    'JetBrains Mono', 'Fira Code', monospace;
}
```

### Type Scale (Fluid with `clamp()`)

| Token                        | Min     | Preferred | Max     | Usage                         |
|------------------------------|---------|-----------|---------|-------------------------------|
| `--sp-text-xs`               | 0.75rem | 0.75rem   | 0.75rem | Badges, meta, labels          |
| `--sp-text-sm`               | 0.8125rem| 0.875rem | 0.875rem| Captions, small text          |
| `--sp-text-base`             | 0.9375rem| 1rem     | 1rem    | Body text                     |
| `--sp-text-lg`               | 1.0625rem| 1.125rem | 1.25rem | Lead paragraphs               |
| `--sp-text-xl`               | 1.2rem  | 1.25rem   | 1.5rem  | Sub-headings                  |
| `--sp-text-2xl`              | 1.4rem  | 1.5rem    | 1.75rem | Section sub-titles             |
| `--sp-text-3xl`              | 1.75rem | 2rem      | 2.25rem | Section titles                |
| `--sp-text-4xl`              | 2rem    | 2.5rem    | 3rem    | Page titles                   |
| `--sp-text-5xl`              | 2.5rem  | 3.5rem    | 4.5rem  | Hero headlines                |
| `--sp-text-6xl`              | 3rem    | 4.5rem    | 6rem    | Display / statement text      |

```css
:root {
  --sp-text-xs:   clamp(0.75rem, 0.75vw, 0.75rem);
  --sp-text-sm:   clamp(0.8125rem, 0.85vw, 0.875rem);
  --sp-text-base: clamp(0.9375rem, 1vw, 1rem);
  --sp-text-lg:   clamp(1.0625rem, 1.1vw, 1.25rem);
  --sp-text-xl:   clamp(1.2rem, 1.25vw, 1.5rem);
  --sp-text-2xl:  clamp(1.4rem, 1.5vw, 1.75rem);
  --sp-text-3xl:  clamp(1.75rem, 2.2vw, 2.25rem);
  --sp-text-4xl:  clamp(2rem, 3vw, 3rem);
  --sp-text-5xl:  clamp(2.5rem, 4.5vw, 4.5rem);
  --sp-text-6xl:  clamp(3rem, 6vw, 6rem);
}
```

### Font Weights

| Token               | Weight | Usage                                    |
|----------------------|--------|------------------------------------------|
| `--sp-font-light`    | 300    | Large display text                       |
| `--sp-font-regular`  | 400    | Body text                                |
| `--sp-font-medium`   | 500    | Emphasis, navigation                     |
| `--sp-font-semibold` | 600    | Headings, buttons                        |
| `--sp-font-bold`     | 700    | Hero headlines, strong emphasis           |

### Line Heights

| Token                | Value  | Usage                                     |
|----------------------|--------|-------------------------------------------|
| `--sp-leading-tight` | 1.1    | Display headlines                        |
| `--sp-leading-snug`  | 1.3    | Section titles, headings                 |
| `--sp-leading-normal`| 1.6    | Body text                                |
| `--sp-leading-relaxed`| 1.8   | Long-form content                        |

---

## 4. Spacing Scale

Based on an 8px grid. All spacing uses these tokens — **no magic numbers**.

```css
:root {
  --sp-space-1:    0.25rem;   /* 4px */
  --sp-space-2:    0.5rem;    /* 8px */
  --sp-space-3:    0.75rem;   /* 12px */
  --sp-space-4:    1rem;      /* 16px */
  --sp-space-5:    1.25rem;   /* 20px */
  --sp-space-6:    1.5rem;    /* 24px */
  --sp-space-8:    2rem;      /* 32px */
  --sp-space-10:   2.5rem;    /* 40px */
  --sp-space-12:   3rem;      /* 48px */
  --sp-space-16:   4rem;      /* 64px */
  --sp-space-20:   5rem;      /* 80px */
  --sp-space-24:   6rem;      /* 96px */
  --sp-space-32:   8rem;      /* 128px */
}
```

### Section Spacing

| Context                     | Vertical Padding                       |
|-----------------------------|----------------------------------------|
| Main section (desktop)      | `var(--sp-space-24)` top & bottom      |
| Main section (mobile)       | `var(--sp-space-16)` top & bottom      |
| Between cards in a grid     | `var(--sp-space-8)` gap                |
| Between text blocks         | `var(--sp-space-6)` margin-bottom      |

---

## 5. Border Radius

```css
:root {
  --sp-radius-sm:    0.375rem;  /* 6px — inputs, badges */
  --sp-radius-md:    0.75rem;   /* 12px — cards, dropdowns */
  --sp-radius-lg:    1rem;      /* 16px — modals, large cards */
  --sp-radius-xl:    1.5rem;    /* 24px — hero overlays */
  --sp-radius-full:  9999px;    /* Pill shapes — buttons, tags */
}
```

---

## 6. Breakpoints

```css
/* Mobile-first approach */
/* Default styles = mobile (< 480px) */

@media (min-width: 480px)  { /* sm  — large phones, landscape */ }
@media (min-width: 768px)  { /* md  — tablets */ }
@media (min-width: 1024px) { /* lg  — laptops, small desktops */ }
@media (min-width: 1280px) { /* xl  — desktops */ }
@media (min-width: 1536px) { /* 2xl — large screens */ }
```

### Container Max-Widths

| Breakpoint | Max-Width  |
|------------|------------|
| sm         | 100%       |
| md         | 720px      |
| lg         | 960px      |
| xl         | 1200px     |
| 2xl        | 1400px     |

---

## 7. Z-Index Scale

```css
:root {
  --sp-z-behind:     -1;
  --sp-z-base:        0;
  --sp-z-dropdown:    10;
  --sp-z-sticky:      20;    /* Sticky navbar */
  --sp-z-overlay:     30;    /* Overlays, backdrops */
  --sp-z-modal:       40;    /* Modals, drawers */
  --sp-z-toast:       50;    /* Toast notifications */
  --sp-z-preloader:   100;   /* Initial loading screen */
}
```

---

## 8. Component Visual Specs

### Buttons

| Variant   | Background                     | Text Color              | Border                  | Hover Effect                              |
|-----------|--------------------------------|-------------------------|-------------------------|-------------------------------------------|
| Primary   | `--sp-gradient-primary`        | `#ffffff`               | None                    | Lift + glow shadow + brightness(1.1)      |
| Secondary | `transparent`                  | `--sp-text-primary`     | `--sp-border-default`   | Background fill + border brighten         |
| Ghost     | `transparent`                  | `--sp-color-primary`    | None                    | Subtle bg tint                            |
| Danger    | `--sp-color-accent`            | `#ffffff`               | None                    | Darken + scale(0.98)                      |

**Sizes:** `sm` (36px h), `md` (44px h), `lg` (52px h)

### Cards

| Property       | Value                                                       |
|----------------|-------------------------------------------------------------|
| Background     | `--sp-bg-secondary` with `--sp-gradient-card` overlay       |
| Border         | `1px solid var(--sp-glass-border)`                          |
| Border Radius  | `var(--sp-radius-md)`                                       |
| Shadow         | `var(--sp-shadow-sm)` → `var(--sp-shadow-md)` on hover      |
| Padding        | `var(--sp-space-6)` to `var(--sp-space-8)`                  |
| Hover          | TranslateY(-4px) + shadow expand + border brighten           |

### Inputs

| Property       | Value                                                       |
|----------------|-------------------------------------------------------------|
| Background     | `var(--sp-bg-surface)`                                      |
| Border         | `1px solid var(--sp-border-default)`                        |
| Border Radius  | `var(--sp-radius-sm)`                                       |
| Focus          | `border-color: var(--sp-color-primary)` + `var(--sp-shadow-glow)` |
| Height         | `48px`                                                      |
| Font Size      | `var(--sp-text-base)`                                       |
| Placeholder    | `color: var(--sp-text-tertiary)`                            |

---

## 9. Iconography

- **Icon Library:** `react-icons` (Feather set `Fi` for UI, Simple Icons `Si` for brands)
- **Default Size:** `20px` for inline, `24px` for standalone
- **Color:** Inherits `currentColor` — set color on parent
- **Stroke Width:** Use Feather defaults (2px)
- **Custom Icons:** Export as React components from `src/assets/icons/`

---

## 10. Image Treatment

| Context              | Aspect Ratio | Corner Radius          | Overlay                              |
|----------------------|--------------|------------------------|--------------------------------------|
| Hero backgrounds     | 16:9 / full  | None                   | `--sp-gradient-hero` overlay         |
| Service cards        | 16:9         | `--sp-radius-md`       | None or subtle darkening             |
| Portfolio items      | 4:3          | `--sp-radius-md`       | Hover: dark + text reveal             |
| Team photos          | 1:1          | `--sp-radius-full`     | None                                 |
| Partner logos        | Auto         | None                   | Grayscale → color on hover            |
