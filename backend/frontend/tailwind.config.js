/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: '#F4F4F4',
        secondary: '#c4b6a6',
        card: '#F1C40F',
      }
    },
  },
  plugins: [],
}

