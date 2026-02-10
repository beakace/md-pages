// ============================================
// Shared constants — single source of truth
// ============================================

/** Site metadata */
export const SITE = {
  name: "mdpages",
  url: "https://www.stronypolydzku.pl",
  email: "michaldziuba26@gmail.com",
  calendly: "https://calendly.com/michaldz/30min",
} as const;

/** Design tokens not covered by Tailwind config */
export const COLORS = {
  accent: "#c45a3b",
  bgLight: "#fafaf9",
  bgDark: "#0c0c0c",
  textLight: "#1a1a1a",
  textDark: "#e8e6e3",
} as const;

/** Animation timing presets (seconds) */
export const TIMING = {
  /** Standard fade-in duration */
  fade: 0.8,
  /** Delay between staggered children */
  stagger: 0.15,
  /** Scroll-reveal viewport margin */
  viewportMargin: "-20%",
} as const;

/** External service URLs */
export const SERVICES = {
  turnstileScript:
    "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
  turnstileVerify:
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  resendApi: "https://api.resend.com/emails",
} as const;
