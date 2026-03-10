import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fffaf3',
        'cream-dark': '#f5ede0',
        brown: {
          light: '#e8d0b8',
          DEFAULT: '#c89f7b',
          medium: '#a07850',
          dark: '#7d5a3c',
          deep: '#3d2b1f',
        },
        pink: {
          light: '#fff0f7',
          DEFAULT: '#ffd6e7',
          medium: '#f5a7c7',
          dark: '#e07aab',
        },
        lavender: {
          light: '#f5eeff',
          DEFAULT: '#e8d5f5',
          medium: '#c4a8e8',
          dark: '#9b72cc',
        },
        mint: {
          light: '#edfff7',
          DEFAULT: '#d4f5e9',
          medium: '#8ed8be',
          dark: '#4db896',
        },
        peach: {
          light: '#fff5ee',
          DEFAULT: '#ffe5d0',
          medium: '#f5c4a0',
          dark: '#e09060',
        },
      },
      fontFamily: {
        display: ['var(--font-baloo)', 'cursive'],
        body: ['var(--font-nunito)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(200, 159, 123, 0.15)',
        'soft-lg': '0 8px 40px rgba(200, 159, 123, 0.2)',
        'soft-xl': '0 16px 60px rgba(200, 159, 123, 0.25)',
        glow: '0 0 30px rgba(255, 214, 231, 0.6)',
        'glow-lavender': '0 0 30px rgba(232, 213, 245, 0.6)',
        'glow-mint': '0 0 30px rgba(212, 245, 233, 0.6)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        sparkle: 'sparkle 1.5s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-kawaii': 'linear-gradient(135deg, #fffaf3 0%, #ffd6e7 30%, #e8d5f5 60%, #d4f5e9 100%)',
        'gradient-hero': 'radial-gradient(ellipse at top, #ffd6e7 0%, #fffaf3 50%, #e8d5f5 100%)',
        noise: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
