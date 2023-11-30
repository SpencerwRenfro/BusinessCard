/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    colors: {
      salmon: '#CA6D81',
      salmonLight: '#F4BABB'
    }
  },

  },
  plugins: [require("daisyui")],
}