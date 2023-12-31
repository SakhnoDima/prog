/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      withoutTag: "768px",

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
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
          hoverButtonProfile: "#ccc",
          activeButtonProfile: "#a1a1a1",
          lightGray: "#ddd",
          tagLightGray: "#aaa",
          gray: "#bbb",
          darkGray: "#333",
          borderComment: "#e5e5e5",
          bgComment: "#f5f5f5",
          pageHoverBg: "#eceeef",
          tagCloud: "#f3f3f3",
          tagItemBg: "#818a91",
          tagItemBgHover: "#687077",
          red: "#BB5C5C",
        },
      },
      spacing: {
        25: "6.25rem",
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
        articleBanner: "2.8rem",
        articleText: "1.2rem",
        date: "0.8rem",
      },
      borderRadius: {
        tag: "10rem",
        btnSm: "0.2rem",
      },
      lineHeight: {
        articleBanner: "1.1",
        articleText: "1.8rem",
      },
      opacity: { 15: 0.15 },
    },
  },
  plugins: [],
};
