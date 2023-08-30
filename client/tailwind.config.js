/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        1100: "1100px",
        1200: "1200px",
      },
      backgroundColor: {
        primary: "#f5f5f5",
        secondary1: "#1266dd",
        secondary2: "#f73859",
      },
      maxWidth: {
        600: "600px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto : ['Roboto' , 'sans-serif']
      },
    },
  },
  plugins: [],
};
