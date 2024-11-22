/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primOr: "#ff5533",
        secOr: "#cc2200",
        lightOr: "#ff8066",
        hoverOr: "#ff2b00",
        primGray: "#777360"
      },
    },
  },
  plugins: [],
}

