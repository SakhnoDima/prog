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
    },
  },
  plugins: [],
};
