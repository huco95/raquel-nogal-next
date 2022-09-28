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
        header: "112px",
      },
      minHeight: {
        main: "calc(100vh - 112px)",
      },
    },
  },
  plugins: [],
};
