/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      sideShadow: "inset  1px 0px 21px 3px #7fff00",
      greyShadow: "1px 4px 25px -2px #C0C0C0",
      imgGreenShadow: "5px 3px 10px 0px rgba(41,173,44,0.75)",
      bottomGreen: " -1px 7px 10px 0px rgba(41,173,44,0.75)",
      listItem: " 10px 10px 5px 0px rgba(0,0,0,0.75)",
      yellowShadow: " 0px 5px 10px 2px rgba(231, 235, 13, 0.6)",
      table: "0px 5px 10px 2px rgba(34, 60, 80, 1) inset",
    },
    colors: {
      primaryYellow: "rgb(252, 252, 6)",
      black: "#000",
      white: "#FFF",
      "green-50": "#f0fdf4",
      "green-400": "#4ade80",
      "green-800": "#166534",
      "green-600": "#16a34a",
      blackTransparent: "rgba(0, 0, 0, 0.7)",
      "fuchsia-300": " rgba(255,24,240,1)",
    },

    extend: {
      dropShadow: {
        shiny: "-1px 4px 6px rgba(248,255,24,1)",
        nav: "2px -1px 2px rgba(0,0,0,0.6)",
      },
      screens: {
        superSmall: { raw: "(max-width: 640px)" },
        maxMedium: { raw: "(max-width: 767px)" },
        maxLarge: { raw: "(max-width: 900px)" },
      },
      scale: ["focus"],
    },
  },
  plugins: [],
};
