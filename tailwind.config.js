/** @type {import('tailwindcss').Config} */
module.exports = {
  layers: ['components'],
  content: ['./src/**/*.{html,js,jsx,css}'],
  theme: {
    extend: {
      boxShadow: {
        default: '0px 0px 10px rgba(0, 0, 0, 0.15)',
        mini: '0px 0px 4px rgba(0, 0, 0, 0.15)'
      },
      colors: {
        primary:'#7126B5',
      }
    },
  },
  plugins: [],
}
