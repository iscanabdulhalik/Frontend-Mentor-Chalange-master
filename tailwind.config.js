/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors:{
      "ay-gray" : "hsl(220,15%,55%)",
      "koyu-mavi" : "hsl(218,44%,22%)",
    }
    },
  },
  plugins: [],
}