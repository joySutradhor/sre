/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        gucina: ["Gucina"],
        lexend: ["Lexend"],
        sans: ["Open Sans"],
      },
      screens: {
        xs: "375px",
        ts: "375px",
        large: "1500px",
        fs: "1530px",
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(135.72deg, #09E5E5 -12.91%, #12E6DC -0.28%, #2BEAC5 20.76%, #55F1A0 48.11%, #8EFA6D 79.68%, #A8FF57 92.3%)",
      },
    },
  },
  plugins: [],
};
