module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        funnel: ['"Funnel Display"', 'sans-serif'],
      },
      colors: {
        'custom-light-blue': 'rgba(80, 170, 200, 1)',
        'custom-dark-blue': 'rgba(40, 80, 110, 1)',
      },
      keyframes: {
        move: {
          '0%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '400% 0' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
      animation: {
        move: 'move 20s linear infinite',
      }
    },
  },
  plugins: [],
};