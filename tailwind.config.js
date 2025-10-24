/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};