const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
        colors: {
          "d-brown-100": "#fbf9f8",
          "d-brown-200": "#e1cdc0",
          "d-brown-300": "#c7b5a8",
          "d-brown-400": "#ad9c91",
          "d-brown-500": "#948479",
          "d-brown-600": "#7a6b61",
          "d-brown-700": "#60534a",
          "d-brown-800": "#463a32",
          "d-brown-900": "#252525",
          "d-green": "#6b8f71",
          "d-red": "#e15634",
        },
        fontFamily: {
          mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
          sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  purge: {
    enabled: process.env.NETLIFY == "true",
    content: ["./output/**/*.html"],
  },
}
