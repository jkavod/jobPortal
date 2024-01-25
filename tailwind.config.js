/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2994A",
        secondary: "#FFEFE0",
        tertiary: "rgba(242, 153, 74, 0.5)",
        lightDark: "#828282",
        aboutHero: "rgba(0, 0, 0, 0.7)",
        newGray: "#828282",
      },
      fontFamily: {
        aclonica: ["Aclonica", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}