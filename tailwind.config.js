/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EEEDFC',
          100: '#DDDBFA',
          200: '#BBB6F4',
          300: '#9992EF',
          400: '#776DE9',
          500: '#4F46E5',
          600: '#3F35C7',
          700: '#33299E',
          800: '#251E73',
          900: '#17134A',
        },
        surface: {
          light: '#FAFAFA',
          soft: '#F5F5F5',
          dark: '#0A0A0F',
          darksoft: '#101018',
        },
        ink: {
          light: '#111827',
          dark: '#F2F2F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(79,70,229,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,70,229,0.06) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(17,24,39,0.04), 0 8px 24px -8px rgba(17,24,39,0.08)',
        'soft-lg': '0 4px 16px rgba(17,24,39,0.06), 0 24px 48px -16px rgba(17,24,39,0.14)',
        glow: '0 0 0 1px rgba(79,70,229,0.15), 0 8px 30px -6px rgba(79,70,229,0.35)',
      },
      animation: {
        blob: 'blob 18s infinite ease-in-out',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-24px, 24px) scale(0.94)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
