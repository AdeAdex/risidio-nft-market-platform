/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxsm: "240px",
        // => @media (min-width: 240px) { ... }
        xsm: "340px",
        // => @media (min-width: 340px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        xxl: "1440px",
        // => @media (min-width: 1440px) { ... }
        xxxl: "1700px",
        // => @media (min-width: 2040px) { ... }
        xxxxl: "2560px",
        // => @media (min-width: 2560px) { ... }
      },
      backgroundColor: {
        "button-background": "#5FBDC1",
        "sort-background": "#292A2D",
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
