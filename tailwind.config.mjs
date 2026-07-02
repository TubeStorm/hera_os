/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '72rem',
        prose: '46rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      fontSize: {
        display: ['clamp(2.6rem, 6vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        h1: ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.06', letterSpacing: '-0.03em' }],
        h2: ['clamp(1.5rem, 2.6vw, 2.15rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        h3: ['1.3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        lead: ['clamp(1.1rem, 1.6vw, 1.4rem)', { lineHeight: '1.45', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        card: '18px',
        pill: '999px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
