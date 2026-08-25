/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
        },
        board: {
          light: '#eeeed2',
          dark: '#769656',
          highlight: 'rgba(255, 255, 0, 0.4)',
          selected: 'rgba(20, 85, 30, 0.5)'
        }
      },
    },
  },
  plugins: [],
}
