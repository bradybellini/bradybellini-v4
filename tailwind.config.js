const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.coolGray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.amber,
      amber: colors.amber,
      blue: colors.blue,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
    },
    fontFamily: {
      "sans-serif": ["Varela Round", "sans-serif"],
      serif: ["Franklin Gothic Medium"],
      body: ["Itcfont"],
    },
    container: {
      center: true,
    },
    extend: {
      spacing: {
        425: "425px",
        750: "750px",
      },
      backgroundImage: {
        "vhs-light": "url('/static/img/vhslight.svg')",
      },
      colors: {
        "retro-gray": "#202930",
        "retro-black": "#0E1215",
        "retro-cream": "#FFFBE5",
        "retro-yellow": "#FFBB00",
        "retro-orange": "#FF5A00",
        "retro-red": "#FF002C",
        "retro-purple": "#AF00D0",
        "retro-violet": "#6300BA",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "theme('colors.gray.200')",
            maxWidth: '85ch',
            a: {
              color: "theme('colors.retro-red')",
              "&:hover": {
                color: "theme('colors.gray.100')",
              },
            },
            h1: {
              color: "theme('colors.retro-red')",
            },
            h2: {
              color: "theme('colors.retro-red')",
            },
            h3: {
              color: "theme('colors.retro-red')",
            },
            h4: {
              color: "theme('colors.retro-red')",
            },
            thead: {
              color: "theme('colors.gray.100')"
            },
            strong: {
              color: "theme('colors.gray.100')"
            },
            em: {
              color: "theme('colors.gray.100')"
            },
            s: {
              color: "theme('colors.gray.100')"
            },
            blockquote: {
              color: "theme('colors.retro-yellow')",
              borderLeftColor: "theme('colors.retro-yellow')",
            },
            'ol > li::before': {
              color: "theme('colors.retro-orange')",
            },
            'ul > li::before': {
              backgroundColor:" theme('colors.retro-orange')",
            },
            hr: {
              borderColor: "theme('colors.gray.100')",
            },
            'figure figcaption': {
              color: "theme('colors.gray.900')",
            },
            code: {
              color: "theme('colors.gray.100')",
            },
            pre: {
              color: "theme('colors.gray.100', defaultTheme.colors.gray[200])",
              backgroundColor: "theme('colors.retro-gray', defaultTheme.colors.gray[800])",
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
