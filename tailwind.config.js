module.exports = {
  purge: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
