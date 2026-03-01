/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
      },

      // 🔥 custom spacing (pt-30, top-100, right-70)
      spacing: {
        '30': '7.5rem',    // pt-30
        '70': '17.5rem',   // right-70
        '100': '25rem',    // top-100
      },

      // 🔥 custom scale (hover:scale-103)
      scale: {
        '103': '1.03',
      },

      // 🔥 negative z-index support
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
}