module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},

    colors: {
      white: "#fff",
      primary: "#ED5545",
      grey: "#202631",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
