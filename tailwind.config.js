/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-background': '#040615',
        'main-container' : '#020312',
        'main-light-container': '#f5f5f5',
        'home-background': '#a6a6d7'
      },
      backgroundImage: {
        'contact-section-dark': 'url("/contactbg.png")',
        'contact-section-light': 'url("/bg-white.jpg")',
      },
      colors: {
        'about-me-text-color': '#516D89',
        'about-me-contact-text-color': 'yellowgreen',
        'my-red': '#E1306C'
      },
    },
  },
  plugins: [],
}