/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],  
  theme: {
    extend: {
      fontFamily: {
        bebaseNeue: ['Bebas Neue', 'ui-sans-serif', 'system-ui'],
        roboto: ['Roboto', 'ui-sans-serif', 'system-ui'],
        anton: ['Anton', 'ui-sans-serif', 'system-ui']
      },

      fontSize: {
        h1: ['3.815rem', '130%'],
        h2: ['3.052rem', '110%'],
        h3: ['2.441rem', '110%'],
        h4: ['1.953rem', '110%'],
        subtitle1: '1.563rem',
        subtitle2: '1.25rem',
        body1: ['1rem', '190%'],
        body2: ['0.8rem', '190%'],
        button: '0.8rem',
        caption: '0.64rem'
      },

      colors: {
        primary: '#333333',
        secondary: '#FFD633',
        support1: '#4682B4',
        support2: '#808080',
        accent: '#D56D2D'
      }
    },
  },
  plugins: [],
}