/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        CustomBlue: "#1C48F5"
      },
      fontFamily: {
        Exo: ["Exo", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

