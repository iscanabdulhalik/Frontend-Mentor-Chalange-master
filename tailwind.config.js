/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
      "ay-gray" : "hsl(220,15%,55%)",
      "koyu-mavi" : "hsl(218,44%,22%)",
        "nftmainbgcolor" : "hsl(217, 54%, 11%)",
        "nftcardbackground" : "hsl(216, 50%, 16%)",
        "nfttxtcolor" : "hsl(215, 51%, 70%)",
        "nftlinecolor" : "hsl(215, 51%, 70%)",
    }
    },
  },
  plugins: [],
}