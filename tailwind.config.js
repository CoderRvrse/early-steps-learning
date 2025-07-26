// File: early-steps-ui-fresh/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',    // Blue
        secondary: '#F5A623',  // Orange
        dark: '#333333',       // Dark gray
      },
      fontFamily: {
        'heading': ['Arial', 'sans-serif'],
        'body': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}