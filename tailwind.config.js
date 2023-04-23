/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "440px",
      md: "700px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#1c3a4e",
        secondary: "#E5E4E2",
        yellow: "#F4BB44",
      },
    },
  },
  plugins: [],
};
