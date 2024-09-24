/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        S1: "url(./assets/Images/S1.png)",
        Artboard: "url(./assets/Images/Artboard.png)",
        Artboardlarge: "url(./assets/Images/Artboard2.png)",
           
      },

      fontFamily: {
        Poppins: ["Poppins"],
        Anton: ["Anton"],
        TitilliumWeb: ["TitilliumWeb"],
        Signika: ["Signika"],
      },
      screens: {
        xs: "360px",
        xsb: "430px",
        "3xl": "1920px"
      },
      dropShadow: {
        'custom': '1px 6px 4.7px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};
