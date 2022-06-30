/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: { sans: 'Roboto, sans-serif' },
      colors: {
        fe_black: '#000000',
        fe_gray: '#b8b8b8',
        fe_green: '#5cb646',
        fe_red: '#e02020'
      },
    },
  },
  plugins: [],
}
