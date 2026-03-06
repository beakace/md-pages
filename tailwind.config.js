/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      colors: {
        // Deep near-black for dark mode
        surface: {
          DEFAULT: '#fafaf9',
          dark: '#0c0c0c',
        },
        // Warm terracotta default, dynamic in alt dimension
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          muted: 'var(--color-accent-muted)',
        },
        // Tactile redesign colors
        washi: '#F7F5F0',
        ink: '#1C1B18',
        graphite: '#33312E',
        chalk: '#e8e6e3',
        // Muted text colors
        muted: {
          DEFAULT: '#6b6b6b',
          dark: '#888888',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: "class",
};
