/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        dark1: '#1c252e',
        dark2: '#12191f',
        dark3: '#0e141b',
        medium1: '#5f7c8b',
        medium2: '#37474f',
        light1: '#f9fafa',
        light2: '#d2d2d2',
        light3: '#9f9f9f',
        bright1: '#ff9f43',
        bright2: '#ffca49',
        bright3: '#ffd455',
      }
    },
  },
  plugins: [],
}

