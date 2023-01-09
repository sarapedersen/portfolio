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
        'projects': "url('/assets/bg-projects.svg')",
        'projectsM': "url('/assets/bg-projects-mobile.svg')",
      },
      colors: {
        'brown': '#B56445',
        'lightPink': '#FFDDD2'
      },
      fontFamily: {
        serif: 'Lora'
      },
      animation: {
        fadeOut: "fadeOut 2s ease-in forwards"
      },
      keyframes: {
        fadeOut: {
          "100%": { opacity: 0 },
          "0%": { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
