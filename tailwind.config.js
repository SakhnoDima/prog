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
          green: "#5CB85C;",
          darkGreen: "#3d8b3d",
          black: "#373a3c",
          lightBlack: "#999",
          gray: "#bbb",
          lightGray: "#ddd",
          tagLightGray: "#aaa",
        },
      },
      spacing: {
        navItem: "0.425rem",
        0.6: "0.6rem",
        0.3: "0.3rem",
        0.2: "0.2rem",
      },
      boxShadow: {
        banner:
          "inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)",
      },
      dropShadow: {
        bannerText: "0px 1px 3px rgba(0, 0, 0, 0.3)",
      },
      fontSize: {
        logo: "3.5rem",
        date: "0.8rem",
      },
      borderRadius: {
        tag: "10rem",
        btnSm: "0.2rem",
      },
    },
  },
  plugins: [],
};
