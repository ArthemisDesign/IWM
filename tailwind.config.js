/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#FD6D5B',
        'custom-blue': '#3DC5DA',
        'custom-grey': '#DFE3E2',
        'pale-red': '#FDE4E1',
        'pale-blue': '#D5F2F7',
        'pale-grey': '#F2F4F3',
      },
      fontFamily: {
        sans: ['BwModelicaCyrillicDEMO', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
