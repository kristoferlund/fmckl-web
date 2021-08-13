module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        "neue-haas-grotesk-display": [
          "neue-haas-grotesk-display",
          "sans-serif",
        ],
      },
      fontSize: {},
      backgroundImage: (theme) => ({}),
    },
  },
  variants: {
    extend: {},
  },
};
