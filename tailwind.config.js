/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors: {
        slate: {
          1000: "#101010",
          1100: '#151515'
        }
      }
    },
  },
  plugins: [],
};
