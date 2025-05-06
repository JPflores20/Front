/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    './static/src/**/*.js',
  ],
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
    },
  },
  plugins: [],
}