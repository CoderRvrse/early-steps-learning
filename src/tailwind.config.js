// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#0077CC',
        secondary: '#FFB400',
        dark:      '#333333',
        light:     '#ffffff',
      }
    },
    fontFamily: {
      heading: ['Poppins','sans-serif'],
      body:    ['Open Sans','sans-serif'],
    },
  },
  plugins: [],
}
