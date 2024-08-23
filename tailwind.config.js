/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '1fr auto',
      },
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif'],
      },
      colors: {
        'azul': ['hsl(220, 100%, 50%)'],
        'azul-claro': ['hsl(220, 100%, 60%)'],
        'cinza': ['hsl(303, 10%, 53%)'],
        'branco': ['hsl(0, 0%, 100%)'],  
        'branco-neve': ['hsl(300, 24%, 96%)'],
      },
    },
  },
  plugins: [],
}

