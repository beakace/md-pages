// Shared animation utilities

export const accentFilter =
  "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(401%) hue-rotate(336deg) brightness(89%) contrast(88%)";

/** Returns true when the user prefers reduced motion (accessibility). */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
