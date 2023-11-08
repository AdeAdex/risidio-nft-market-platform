/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'button-background': '#5FBDC1',
      },
      backgroundImage: {
        'contact-section-dark': 'url("/contactbg.png")',
        'contact-section-light': 'url("/bg-white.jpg")',
      },
      colors: {
        'delete-button': '#E9493D'
      },
    },
  },
  plugins: [],
}