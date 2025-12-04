/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0098ff',
          dark: '#003f5f',
          light: '#f1f5ff',
        },
        secondary: {
          DEFAULT: '#f273b1',
          dark: '#4c3bb2',
        },
        accent: {
          pink: '#f273b1',
          blue: '#0098ff',
          purple: '#4c3bb2',
        },
        neutral: {
          background: '#f1f5ff',
          dark: '#16163b',
          text: '#003f5f',
        },
        error: '#de3730',
        gold: '#ffb423',
        silver: '#87a0b4',
        bronze: '#c27b3b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 152, 255, 0.1), 0 2px 4px -1px rgba(0, 152, 255, 0.06)',
        'blue': '0 4px 14px 0 rgba(0, 152, 255, 0.39)',
      },
    },
  },
  plugins: [],
}
