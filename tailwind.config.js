/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/assets/bg-index.svg')",
        'about': "url('/assets/bg-about.svg')",
      },
      colors: {
        'brown': '#B56445',
        'lightPink': '#FFDDD2'
      },
      fontFamily: {
        serif: 'Lora'
      }
    },
  },
  plugins: [],
}
