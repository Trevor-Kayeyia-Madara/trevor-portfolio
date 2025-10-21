/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2.5s ease-in-out infinite',
      },
    },
  },
}
