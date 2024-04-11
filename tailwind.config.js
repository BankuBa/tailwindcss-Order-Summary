/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      lg: "1000px",
    },
    extend: {
      colors: {
        Pale_blue: "hsl(225, 100%, 94%)",
        Bright_blue: "hsl(245, 75%, 52%)",
        Very_pale_blue: "hsl(225, 100%, 98%)",
        Desaturated_blue: "hsl(224, 23%, 55%)",
        Dark_blue: "hsl(223, 47%, 23%)",
      },
      backgroundImage: {
        desktopBackground: "url('/images/pattern-background-desktop.svg')",
        mobileBackground: "url('/images/pattern-background-mobile.svg')",
      },
    },
  },
  plugins: [],
};

