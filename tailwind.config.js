/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors: {
        slate: {
          1000: "#101010",
          1100: "#151515",
        },
        red: {
          1000: "#FC0441"
        },
        gradient:
          "linear-gradient(90deg, rgba(252,4,65,1) 0%, rgba(51,0,252,1) 100%)",
      },
    },
  },
  plugins: [],
};
