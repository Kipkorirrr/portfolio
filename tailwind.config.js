/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Montserrat', 'Space Grotesk', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        'navy': '#0a1036',
        'twilight': '#101a47',
        'cosmic': '#b6aaff',
        'neon': '#82e2ff'
      },
      dropShadow: {
        'glow': '0 0 16px #b6aaffaa'
      }
    },
  },
  plugins: [],
}