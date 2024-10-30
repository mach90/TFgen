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
        heading: "'Courgette', 'cursive'",
        default: "'Libre Baskerville', 'serif'",
      },
      colors: {
        colorBackgroundDark: "#ff00ff",
        colorBackgroundLight: "#ff00ff",
        color1: "#ff00ff",
        textColor1: "#ff00ff",
        color2: "#ff00ff",
        textColor2: "#ff00ff",
        color3: "#ff00ff",
        textColor3: "#ff00ff",
        color4: "#ff00ff",
        colorTextLight: "#ff00ff",
        colorTextDark: "#ff00ff",

        primary: "#e6e6e6",
        primaryCard: "#ffffff",
        primaryText: "#092826",
        primaryHeading: "#092826",
        primaryBorder: "#b3b3b3",
        primarySubheading: "#fcbd40",
        primaryIcon: "#4f8a53",
        primaryIconBg: "#fcbd40",

        secondary: "#092826",
        secondaryBorder: "#6f8b72",
        secondaryText: "#e6e6e6",
        secondaryHeading: "#e6e6e6",
        secondarySubheading: "#fcbd40",
        secondaryIcon: "#fcbd40",

        tertiary: "#f09d4e",
        tertiaryText: "#092826",
        tertiaryHeading: "#092826",

        alternate: "#4f8a53",
        alternateText: "#092826",
        alternateHeading: "#092826",

        valid: "#4a8b47",
        validText: "#c2e6bf",
        validHeading: "#c2e6bf",
        validSubheading: "#c2e6bf",
        validHover: "#fff",

        warning: "#d17a4b",
        warningText: "#4d261c",
        warningHeading: "#4d261c",
        warningSubheading: "#4d261c",

        error: "#d84a4a",
        errorText: "#58191b",
        errorHeading: "#58191b",
        errorSubheading: "#58191b",
        errorHover: "#351013",

        form: "#ffffff",
        formBorder: "#e6e6e6",
        formField: "#e6e6e6",
        formFieldText: "#092826",
        formHeading: "#092826",
        formSubheading: "#888d81",
        formText: "#092826",
        formHover: "#092826",
        formIcon: "#fcbd40",

        buttonDefault: "#fcbd40",
        buttonDefaultText: "#142317",
        buttonTransparent: "#e6e6e6",
        buttonTransparentText: "#e6e6e6",
        buttonTransparentBorder: "#e6e6e6",
      },
      backgroundImage: {
        'exampleForm': "url('img/example-form.avif')",
      },
    },
  },
  plugins: [],
}


