// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure this array correctly points to all your files that use Tailwind classes,
    // e.g., './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
    './src/**/*.{js,jsx,ts,tsx}', // <--- Make sure this line is correct for your project
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 4s linear infinite', // Make sure this line exists
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}