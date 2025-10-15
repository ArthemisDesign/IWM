/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#F46647',
        'custom-blue': '#3DC5DA',
      },
      fontFamily: {
        sans: ['BwModelica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
