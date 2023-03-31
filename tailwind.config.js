/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "scale-up-center":
          "scale-up-center 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      },
      backgroundImage: {
        plane: "url('/public/plane.jpg')",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
      keyframes: {
        "scale-up-center": {
          "0%": {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
  plugins: [],
};
