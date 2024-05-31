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
        darkCard: '#202d37',
        darkFooterBackground: '#0e161d',
        darkFooterText: '#6b7280',
        darkBackground: '#141f28',
        darkFooterLink: '#115e59',
        darkH1: '#9ca3af',
        darkP: '#6b7280',
        redAccent: '#ef4444',
        redAccentLight: '#f87171',
        darkControlsBackground: '#374151',
        medium1: '#55646b',
        medium2: '#37474f',
        light1: '#f9fafa',
        light2: '#d2d2d2',
        light3: '#9f9f9f',
        orangeAccent: '#ff9f43',
        bright2: '#ffca49',
        bright3: '#ffd455',
        brandNameDark: '#4a4437',
        brandNameDarkHover: '#665e4c',
        brandNameLight: '#e5e7eb',
        brandNameLightHover: '#f9fafb',
      },
      classes: {
        testBitch: 'mt-6 text-sm sm:text-lg md:text-2xl leading-8 text-redAccent',
      }
    },
  },
  plugins: [],
}


