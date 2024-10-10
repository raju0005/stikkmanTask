/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'page3-bg': "url('/src/assets/page3bg.png')",
      },
    },
  },
  plugins: [],
}