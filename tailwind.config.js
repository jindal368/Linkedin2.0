module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs':'0.65rem'
      },
      maxWidth: {
        '6.5xxl':'80rem'
      }

    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
