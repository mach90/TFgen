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
        heading: "'Passion One', 'sans-serif'",
        default: "'Lexend', 'serif'",
      },
      colors: {
        colorBackgroundDark: "#132316",
        colorBackgroundLight: "#f3ede4",
        color1: "#202127",
        textColor1: "#b1dee5",
        color2: "#64dd56",
        textColor2: "#1b1b1f",
        color3: "#b1dee5",
        textColor3: "#1b1b1f",
        color4: "#ea622d",
        colorTextLight: "#f3ede4",
        colorTextDark: "#000",

        primary: "#f3ede4",
        primaryText: "#2b1413",
        primaryHeading: "#2b1413",
        primarySubheading: "#f09d4e",

        secondary: "#2b1413",
        secondaryText: "#f3ede4",
        secondaryHeading: "#f3ede4",
        secondarySubheading: "#f09d4e",

        tertiary: "#f09d4e",
        tertiaryText: "#2b1413",
        tertiaryHeading: "#2b1413",

        alternate: "#ecba8e",
        alternateText: "#342a21",
        alternateHeading: "#342a21",

        valid: "#aad8af",
        validText: "#6f8b72",
        validHeading: "#6f8b72",
        validSubheading: "#6f8b72",

        warning: "#d17a4b",
        warningText: "#4d261c",
        warningHeading: "#4d261c",
        warningSubheading: "#4d261c",

        error: "#d84a4a",
        errorText: "#6d2425",
        errorHeading: "#6d2425",
        errorSubheading: "#6d2425",

        form: "#e9b990",
        formHeading: "#342a21",
        formText: "#342a21",

        buttonDefault: "#f09d4e",
        buttonDefaultText: "#2b1413",
        buttonTransparent: "#f3ede4",
        buttonTransparentText: "#f3ede4",
        buttonTransparentBorder: "#f3ede4",
      },
    },
  },
  plugins: [],
}


