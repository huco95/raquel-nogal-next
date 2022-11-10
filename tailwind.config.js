/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "header-mobile": "75px",
        header: "112px",
        footer: "55px",
      },
      minHeight: {
        "main-mobile": "calc(100vh - 75px - 55px)",
        main: "calc(100vh - 112px - 55px)",
      },
      fontFamily: {
        body: ["Montserrat", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
