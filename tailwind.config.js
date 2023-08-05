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
        'navbar-pattern': `url('${path.resolve(
          __dirname,
          '/images/background-pattern.png'
        )}')`,
      },
      colors: {
        'c-red': '#FF2C07',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors:{
        'redTED':'#FF0000'
      }
    },
  },
  variants: {},
  plugins: [],
};
