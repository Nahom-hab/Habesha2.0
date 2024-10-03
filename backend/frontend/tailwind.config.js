/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        'pc': '1114px',
        'pc2': '922px',
        'iphone': '600px'
      },
      colors: {
        primary: '#F4F4F4',
        secondary: '#c4b6a6',
        card: '#F1C40F',
      }
    },
  },
  plugins: [],
}

