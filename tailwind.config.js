/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./index.html"],
  theme: {
    extend: {
      screens: {
        md: '1011px',
        lg: '1480px',
      },
      maxWidth: {
        '7xl': '1450px',
      },
    },
  },
  plugins: [],
}

