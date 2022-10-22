/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'light-gray': '#FFE0E0'
    },
    extend: {
      keyframes: {
        ldsroller: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backgroundColor: {
        'theme-a': '#C74544',
        'theme-b': '#A32928',
        'theme-c': '#E06665',
        'theme-d': '#FC8887',
        'theme-e': '#FFE0E0'
      },
      gridTemplateColumns:{
        "auto":"repeat(auto-fit,minmax(150px,1fr))"
      }

    }
  },
  plugins: [
  ]
})
