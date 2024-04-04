/** @type {import('tailwindcss').Config} */
const { blackA, green, grass, mauve } = require('@radix-ui/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",

  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...green,
        ...grass,
        ...mauve,
      },
      fontFamily: {
        Noto: 'Noto Color Emoji, sans-serif',
        Poppins: 'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
}