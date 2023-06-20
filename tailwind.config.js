/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'White' : '#fbfef9',
      'Black' : '#00171f',
      'Blue1' : '#003459',
      'Blue2' : '#007ea7',
      'Blue3' : '#00a8e8'
    },
  },
  fontFamily: {
    tittleFont: ['tittleFont', 'sans-serif'],
  },

  plugins: [],
}

