/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          800: '#0F2746',
          900: '#0A1A2F',
        },
        'light-blue': {
          400: '#93C5FF',
          500: '#7FB3FF',
          600: '#4D94FF',
          700: '#1A75FF',
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
};