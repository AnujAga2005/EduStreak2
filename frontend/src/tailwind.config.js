/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class", // Enable dark mode via class
    theme: {
      extend: {
        colors: {
          primary: "#6C63FF", // Your brand color
          secondary: "#F6F8FC",
          accent: "#FF6584",
        },
      },
    },
    plugins: [],
  };
  