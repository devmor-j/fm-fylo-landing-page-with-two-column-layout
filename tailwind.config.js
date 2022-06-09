const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      'very-dark-blue': "hsl(243, 87%, 12%)",
      'desaturated-blue': "hsl(238, 22%, 44%)",
      'bright-blue': "hsl(224, 93%, 58%)",
      'moderate-cyan': "hsl(170, 45%, 43%)",
      'light-grayish-blue': "hsl(240, 75%, 98%)",
      'light-gray': "hsl(0, 0%, 75%)",
    },
    fluidType: {
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: 'fluid-' // set a prefix to use it alongside the default font sizes
      },
      // Creates the text-xx classes
      // removed all line-height settings
      values: {
        'xs': [-2],
        'sm': [-1],
        'base': [0],
        'lg': [1],
        'xl': [2],
        '2xl': [3],
        '3xl': [4],
        '4xl': [5],
        '5xl': [6],
        '6xl': [7],
        '7xl': [8],
        '8xl': [9],
        '9xl': [10],
      }
    },
    variants: {
      fluidType: ['responsive']
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        "Raleway": ['Raleway', 'sans-serif'],
        "Open-Sans": ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-fluid-type'),
  ],
}
