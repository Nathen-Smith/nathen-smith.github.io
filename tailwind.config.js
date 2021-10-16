module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'curved-container': '#242526',
      },
      borderRadius: {
        '6xl': '3rem'
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
