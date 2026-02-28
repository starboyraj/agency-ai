/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',   // 🔥 YEH ADD KIYA
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
      },
    },
  },
  plugins: [],
}

