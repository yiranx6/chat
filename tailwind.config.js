module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'Permanent_Marker', 'sans-serif'],
      },
      animation:{
        typing: "typing 2.5s steps(14) infinite alternate, blink 0.7s infinite"
      },
      colors: {
        customColor: "#202123",
      },

      keyframes:{
        typing: {
          from:{width:"0"},
          to:{width:"var(--typing-width)"}
        },
        blink: {
          from: { "border-right-color": "white" },
          to: { "border-right-color": "black" },
        }
      },
    },
  },
  variants: {},
  plugins: [],
}


