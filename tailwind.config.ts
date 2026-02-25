import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        emerald: {
          350: '#2dd4aa',
          450: '#1bc99a',
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f1f5f9',
          dark: '#0f172a',
          'dark-alt': '#020617',
        },
      },
      animation: {
        'float-a': 'floatA 9s ease-in-out infinite',
        'float-b': 'floatB 7s ease-in-out infinite',
        'float-c': 'floatC 11s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'slide-up-hero': 'slideUpHero 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'draw-progress': 'drawProgress 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
        'count-up': 'countUp 0.4s ease forwards',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        floatA: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(25px,-18px) scale(1.04)' },
          '66%': { transform: 'translate(-18px,12px) scale(0.97)' },
        },
        floatB: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-22px,16px)' },
        },
        floatC: {
          '0%,100%': { transform: 'translate(0,0) rotate(0deg)' },
          '40%': { transform: 'translate(15px,-10px) rotate(3deg)' },
          '80%': { transform: 'translate(-8px,14px) rotate(-2deg)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUpHero: {
          from: { opacity: '0', transform: 'translateY(36px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        drawProgress: {
          from: { width: '0%' },
          to: { width: 'var(--target-width)' },
        },
        countUp: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-light': 'linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(rgba(16,185,129,0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.065) 1px, transparent 1px)',
        'hero-light': 'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(16,185,129,0.13) 0%, transparent 70%), radial-gradient(ellipse 55% 40% at 85% 45%, rgba(52,211,153,0.07) 0%, transparent 60%)',
        'hero-dark': 'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(16,185,129,0.18) 0%, transparent 70%), radial-gradient(ellipse 55% 40% at 85% 45%, rgba(52,211,153,0.09) 0%, transparent 60%)',
        'emerald-shimmer': 'linear-gradient(135deg, #10b981 0%, #34d399 40%, #6ee7b7 65%, #10b981 100%)',
      },
      backgroundSize: {
        'grid': '52px 52px',
        'shimmer': '200% auto',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.06), 0 12px 32px rgba(16,185,129,0.12)',
        'card-dark': '0 1px 3px rgba(0,0,0,0.3), 0 4px 24px rgba(0,0,0,0.4)',
        'card-dark-hover': '0 4px 8px rgba(0,0,0,0.4), 0 12px 32px rgba(16,185,129,0.15)',
        'popular': '0 0 0 2px #10b981, 0 0 48px rgba(16,185,129,0.2), 0 24px 48px rgba(0,0,0,0.08)',
        'popular-dark': '0 0 0 2px #10b981, 0 0 48px rgba(16,185,129,0.25), 0 24px 48px rgba(0,0,0,0.5)',
        'btn': '0 4px 14px rgba(16,185,129,0.35)',
        'btn-hover': '0 8px 24px rgba(16,185,129,0.45)',
      },
    },
  },
  plugins: [],
}

export default config
