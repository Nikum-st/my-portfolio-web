/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#1a202c",
        },
        text: {
          light: "#1a202c",
          dark: "#f7fafc",
        },
      },
    },
  },
  plugins: [],
};
