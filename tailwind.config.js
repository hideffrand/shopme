/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
      },
      colors: {
        "orange": '#ff4500',
        "orange-dark": '#F12C00',
      },
    },
  },
  plugins: [],
}

