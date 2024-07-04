/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        CustomBlue: "#1C48F5",
        NavbarBG: "rgba(255, 255, 255, 0.1)"
      },
      fontFamily: {
        Exo: ["Exo", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Daredevil: ["daredevil"]
      }
    },
  },
  plugins: [],
}

