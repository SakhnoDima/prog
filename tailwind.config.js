/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web", " sans-serif"],
      },
      colors: {
        conduit: {
          green: "#32CD32",
        },
      },
      spacing: {
        navItem: "0.425rem",
      },
      boxShadow: {
        banner: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      dropShadow: {
        bannerText: "0px 1px 3px rgba(0, 0, 0, 0.3);",
      },
      fontSize: {
        logo: "3.5rem",
      },
    },
  },
  plugins: [],
};
