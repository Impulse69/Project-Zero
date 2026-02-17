/**
 * App-wide constants
 */

// Breakpoints (must match CSS)
export const BREAKPOINTS = {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
};

// Animation durations (ms)
export const DURATIONS = {
    fast: 200,
    normal: 300,
    slow: 500,
};

// Z-index layers
export const Z_INDEX = {
    behind: -1,
    base: 0,
    dropdown: 10,
    sticky: 20,
    overlay: 30,
    modal: 40,
    toast: 50,
    preloader: 100,
};

// Scroll behavior
export const SCROLL = {
    navbarSolidThreshold: 100, // px scrolled before navbar becomes solid
    scrollToTopThreshold: 300, // px scrolled before scroll-to-top button appears
};
