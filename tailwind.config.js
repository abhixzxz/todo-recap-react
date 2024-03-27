// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4500", // Example color variable with hex value
        secondary: {
          100: "#E2E2D5", // Example color variable with shades
          200: "#888883",
          300: "#444438",
        },
        // Add more color variables as needed
      },
    },
  },
  plugins: [],
};
