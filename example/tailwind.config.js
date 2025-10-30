/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#cdd9fd',
          300: '#afc2fc',
          400: '#7394f9',
          500: '#667eea',
          600: '#4c63d2',
          700: '#3d4eb8',
          800: '#303e95',
          900: '#263073',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#764ba2',
          600: '#5b3a7d',
          700: '#4a2f66',
          800: '#3a2550',
          900: '#2b1c3a',
        },
      },
    },
  },
  plugins: [],
}
