 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Arial',
    },
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1200px',
    //   xxl: '1600px',
    //   xxxl: '1900px',
    // },
    extend: {
      colors: {
        primary: '#0E1112',
        bcBlue: '#446784',
        bcGrey: '#DDDDDD'
      },
    },
  },
  plugins: [],
}