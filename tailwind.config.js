// const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "#450A0A",
      white: "#fff",
      black: "#1B1C1E",
      secondary: "#9CD663",
    },
    backgroundColor: () => ({
      primary: "#450A0A",
      primaryDark: "#4B1F1F",
      secondary: "#FFEFE6",
      white: "#fff",
      black: "#1A1818",
      cardbg: "#2F565C",
      violet: "#3F0A40",
    }),

    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      fontFamily: {
        sans: ["Rowdies", "cursive"],
        serif: ["Rubik", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
