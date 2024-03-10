/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D24CA",
        primarylight: "#98ABEE",
        light: "#F9E8C9",
        dark: "#201658",
      },
    },
  },
  plugins: [],
};
