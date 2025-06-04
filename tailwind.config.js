/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: '#C0C0C0',
        grey: '#1f1f1f',
      },
    },
  },
  plugins: [],
}
