module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        funnel: ['"Funnel Display"', 'sans-serif'],
      },
      colors: {
        'custom-light-blue': '#0060ff',
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
      },
      boxShadow: {
        'text': '0px 2px 5px rgba(0, 0, 0, 0.15)', // Sombra para texto
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};