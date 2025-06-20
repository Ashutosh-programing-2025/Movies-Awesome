/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-header-bg': '#121212',
        'custom-yellow' : '#f5c519',
      },
    },
  },
  plugins: [],
}

