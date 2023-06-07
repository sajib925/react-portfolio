/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        Font: ["Josefin Sans, sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        darkText: "#212428",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        // designColor: "#6495ED",
        designColorlight: " #ff014f",
        designColor: "#5de4c7",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        // shadowTwo: "2px 2px 19px #d2d4d9, -2px -2px 19px #94989c",
        shadowTwo:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      },
    },
  },
  plugins: [],
};
