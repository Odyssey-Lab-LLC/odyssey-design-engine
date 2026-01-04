/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./sites/**/*.{js,jsx,ts,tsx,html}",
    "./shared/**/*.{js,jsx,ts,tsx}",
    "./_workspace/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

