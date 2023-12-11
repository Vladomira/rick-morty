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
    },

    extend: {
      screens: {
        superSmall: { raw: "(max-width: 640px)" },
        maxMedium: { raw: "(max-width: 767px)" },
      },
    },
  },
  plugins: [],
}
