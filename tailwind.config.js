/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fogra: "#0A090C",
        jet: "#3B3A3D",
        ghost: "#F4F4F4",
        slate: "#6D8EA0",
        chestnut: "#BC4749",
      },
    },
  },
  plugins: [],
}
