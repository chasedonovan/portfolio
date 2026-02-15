/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#5651e5',
        secondary: '#709dff',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0,0,0,0.06)',
        'soft-dark': '0 2px 8px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
