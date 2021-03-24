const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.amber,
      amber: colors.amber,
      blue: colors.blue,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
    },
    fontFamily: {
      'serif': ['Helvetica']
    },
    container: {
      center: true,
    },
    extend: {

    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
