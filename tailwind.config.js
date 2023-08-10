/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'tiffany': '#78D5D7',
        'pale': '#63D2FF',
        'steel': '#2081C3',
        'ash': '#BED8D4',
        'seasalt': '#F7F9F9',
      },
      fontFamily: {
        'bree': ['Bree Serif', 'serif'],
        'lumanosimo': ['Lumanosimo', 'cursive'],
        'permanent': ['Permanent Marker', 'cursive'],
        'preahvihear': ['Preahvihear', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}