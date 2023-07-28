/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "##E4F4E9",
          DEFAULT: "#038046",
        },
        secondary: {
          DEFAULT: "#FFF9F7",
        },
      },
      fontFamily: {
        heading: ["Epilogue", "sans-serif"],
        sans: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
