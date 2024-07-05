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
      fontFamily: {
        custom1: "'Encode Sans Semi Expanded', 'sans-serif'",
      },
      colors: {
        colorBackground: "#131313",
        color1: "#202127",
        textColor1: "#9a9a9b",
        color2: "#6dd9b9",
        textColor2: "#1b1b1f",
        color3: "#ffd866",
        textColor3: "#1b1b1f",
        color4: "#df4339",
        colorTextLight: "#fff",
        colorTextDark: "#000",
      },
    },
  },
  plugins: [],
}


