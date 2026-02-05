// Shared animation variants for Framer Motion

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Common accent color filter for SVG doodles
export const accentFilter =
  "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(401%) hue-rotate(336deg) brightness(89%) contrast(88%)";
