const path = require('path');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbar-pattern': "url('/images/background-pattern.svg')",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors:{
        'redTED':'#FF0000',
        'c-red': '#FF2C07',
      }
    },
  },
  variants: {},
  plugins: [],
};
