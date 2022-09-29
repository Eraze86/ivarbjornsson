/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'primary': '#4DFAC6',
      'dark-primary': '#47D8AC',
      'secondary': '#A67FFA',
      'black': '#000000',
      'red': '#FF2828',
      'dark-red': '#C91919',
      'gray': '#979797',
      'white': '#FFFFFF',
  
    },
   
    fontFamily: {
      sans: 'Work Sans',
    },
    dropShadow: {
      'lg2': '2px 4px 10px rgba(0, 0, 0, 0.25);',
    },
  },
},
  plugins: [],
}