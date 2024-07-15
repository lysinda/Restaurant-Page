const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      celadon: "#a5d296",
      "dark-spring-green": "#0a1208",
      "lavender-blush": "#fcefef",
      "night-green": "#0a1703",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      green: colors.green,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        playwrite: ["Playwrite PT", "sans-serif"],
        handlee: ["Handlee", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "woman-image": "url('/images/woman.jpg')",
        "leaves-repetitive-image": "url('/images/leaves_repetitive.png')",
        "leaves-bg-image": "url('/images/leaves_bg.png')",
        "ivy-image": "url('/images/ivy.png')",
        "leaves-frame-image": "url('/images/leaves_frame.png')",
        "leaves-cake-image": "url('/images/leaves_cake.png')",
      },
      gridTemplateColumns: {
        "55/fr": "55% 1fr",
      },
    },
  },
  plugins: [],
};
