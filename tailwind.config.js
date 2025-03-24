/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#d4b595',
        'primary-light': '#f5e6d3',
        secondary: '#8b7355',
        accent: '#e6c9a8',
        background: '#faf6f1',
        text: '#4a4a4a',
      },
    },
  },
  plugins: [],
};