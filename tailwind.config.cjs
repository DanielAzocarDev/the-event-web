/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      exo2: ['"Exo 2"'],
      nunito: ["Nunito"],
    },
    extend: {
      colors: {
        cta: "#EE1486",
        deepPurple: "#200C6F",
        deepViolet: "#8A1D86",
      },
    },
  },
  plugins: [],
};
