/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "button-background": "#5FBDC1",
        "sort-background": "#f1f1f1",
        "footer-background": "#010001"
      },
      backgroundImage: {
        "contact-section-dark": 'url("/contactbg.png")',
        "contact-section-light": 'url("/bg-white.jpg")',
      },
      colors: {
        "delete-button": "#E9493D",
      },
      borderColor: {
        "border-color": "#5FBDC1",
      },
    },
  },
  plugins: [],
};
