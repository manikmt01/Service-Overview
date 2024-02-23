/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      colors: {
        buttonBg: '#F3F5FE',
        buttonActive: '#4e588c',
        buttonText: '#19235A',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
