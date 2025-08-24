/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        primary: "#3b82f6",
        accent: "#10b981",
      },
    },
  },
  plugins: [],
};
