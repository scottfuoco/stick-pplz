const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        success: {
          DEFAULT: '#6AF145',
          lighter: '#76F253',
          darker: '#4AEE1D',
        },
        warning: {
          DEFAULT: '#F8E623',
          lighter: '#F9EA40',
          darker: '#F8E623',
        },
        danger: {
          DEFAULT: '#F7233A',
          lighter: '#EA2C42',
          darker: '#BB1226',
        },
      },
      fontFamily: {
        sans: ['Lato', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
              code: { color: theme('colors.blue.400') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            thead: {
              borderBottomColor: theme('colors.gray.200'),
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
      borderStyle: ['hover', 'focus'],
      animation: ['hover', 'focus', 'group-hover'],
    },
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
