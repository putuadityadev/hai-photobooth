/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu' : ['Ubuntu'],
        'oswald' : ['Oswald']
      },
      colors : {
        'secondary' : ['#696969']
      }
    },
  },
  plugins: [],
}