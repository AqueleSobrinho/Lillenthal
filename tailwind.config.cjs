/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.astro"],
  theme: {
    colors: { ...colors,
      'l-red': '#F0414E',
      'l-yellow': '#F3E7A9',
      'l-white': '#FAFAFA',
      'l-black': '#242424'
    },
    extend: {},
  },
  plugins: [],
}
