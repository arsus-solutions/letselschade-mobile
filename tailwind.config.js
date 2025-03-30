/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "shield-blue": {
          light: "#8BA3C1",
          DEFAULT: "#4A6A94",
          dark: "#2C4A76",
        },
        "shield-gray": {
          light: "#E5E7EB",
          DEFAULT: "#9CA3AF",
          dark: "#4B5563",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
