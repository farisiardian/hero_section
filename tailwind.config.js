/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        violet: "hsl(257, 40%, 49%)",
        softMagenta: "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "600px",
        md: "992px",
      },
      boxShadow: {
        custom: "0 6px 3px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        custom: "40px",
        full: "9999px",
      },
      maxWidth: {
        custom: "590px",
        full: "100%",
      },
      minWidth: {
        custom: "400px",
      },
      padding: {
        custom: "65px 80px",
        sm: "24px",
      },
      margin: {
        custom: "126px 120px",
        btn: "50px 130px",
        social: "24px 0",
      },
      fontSize: {
        customTitle: "3rem",
        customTxt: "1.9774rem",
        btn: "1.5rem",
        mdTitle: "2.5rem",
        mdTxt: "18px",
      },
      gridTemplateColumns: {
        custom: "minmax(0, 696px) minmax(0, 508px)",
      },
      scale: {
        custom: "0.75",
        social: "0.8",
      },
      translate: {
        "-fullX": "-48px",
      },
      gridColumn: {
        full: "1 / -1",
        social: "3 / -3",
      },
      gap: {
        social: "10px",
        sm: "17px",
      },
      borderWidth: {
        custom: "1px",
      },
      height: {
        btn: "80px",
        sm: "50px",
        md: "55px",
      },
      width: {
        customBtn: "400px",
        mdBtn: "200px",
        sm: "50px",
        md: "38px",
      },
    },
  },
  plugins: [],
};
