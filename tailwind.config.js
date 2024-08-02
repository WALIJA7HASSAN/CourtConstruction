/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primaryRed: '#bf2628',
        redHover: '#9D1A1C',
        secondaryGreen: '#018e49',
        greenHover: '#026C38',
        btnGrey: '#868E96',
        pText: '#5a5a5a',
        fText: '#d2d1d1',
      },
      backgroundImage: {
        'body-bg': "url('./assets/mainBg.jpg')",
      },
    },
  },
  plugins: [],
}

