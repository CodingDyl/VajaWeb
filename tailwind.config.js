/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'libre-baskerville': ['Libre Baskerville', 'serif'],
      },
      colors: {
        primary: '#F5F2ED',
        secondary: '#9A887B',
        'accent': ' #A4B792',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3"
    },
  },
},
  plugins: [],
}
