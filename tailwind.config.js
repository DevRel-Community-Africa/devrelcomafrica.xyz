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
          light: "#E4F4E9",
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
      gridTemplateColumns: {
        "3-auto": "repeat(3, minmax(0, 1fr))",
      },
      screens: {
        sm: "640px", // Small screens, e.g., phones
        md: "768px", // Medium screens, e.g., tablets
        lg: "1024px", // Large screens, e.g., desktops
        xl: "1280px", // Extra-large screens
      },
    },
  },
  plugins: [],
};
