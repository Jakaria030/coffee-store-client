/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Rancho": ["Rancho", "cursive"],
        "Raleway": ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "header-img": "url('./src/assets/1.jpg')",
        "footer-img": "url('./src/assets/2.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}