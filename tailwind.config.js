/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./index.html"],
  theme: {
    colors: {
      'black': '#0a0908',
      'navy': '#22333b',
      'white': '#f2f4f3',
      'tan': '#a9927d',
      'brown': '#5e503f',
    },
    extend: {
      screens: {
        xs: '1px',
        sm: '500px',
        md: '1011px',
        lg: '1480px',
      },
      maxWidth: {
        '7xl': '1450px',
      },
      spacing: {
        'header': '185px', 
      },
    },
  },
  plugins: [],
}

