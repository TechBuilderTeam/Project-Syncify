/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "secondary-color": "#fff", // Custom color value for --secondary-color
      },
      boxShadow: {
        "light-shadow1": "0px 4px 12px rgba(0, 0, 0, 0.02)", // Custom box-shadow value for --light-shadow1
      },
    },
  },
  darkMode: "class",

  plugins: [require("daisyui")],
  variants: {
    extend: {
      display: ["focus-group"],
    },
  },
};
