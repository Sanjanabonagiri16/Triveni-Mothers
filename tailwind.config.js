/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B0000', // deep maroon
          gold: '#D4AF37', // rich gold
          blue: '#000080', // deep blue
          light: '#FFB6C1', // soft pink
          dark: '#4A0404', // darker maroon
        },
        accent: {
          peach: '#FFDAB9', // peach
          beige: '#F5F5DC', // beige
          cream: '#FFF8DC', // cream
          pearl: '#F8F8FF', // ghost white
        },
        neutral: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Montserrat', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              fontFamily: 'Playfair Display, Georgia, serif',
            },
            'p, ul, ol': {
              fontFamily: 'Lato, Montserrat, sans-serif',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
