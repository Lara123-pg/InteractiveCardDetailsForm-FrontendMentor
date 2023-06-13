/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        gradient1: 'hsl(249, 99%, 64%)',
        gradient2: 'hsl(278, 94%, 30%)',
        inputErros: 'hsl(0, 100%, 66%)',
        background: 'hsl(0, 0%, 100%)',
        colorNameInputs: 'hsl(279, 6%, 55%)',
        colorPlaceholder: ' hsl(270, 3%, 87%)',
        backgroundButton: 'hsl(278, 68%, 11%)'
      },

      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      },
    },

    screens: {
      'extra': {'max': '1326px'},
      'extra2': {'max': '1271px'},
      'extra3': {'max': '1218px'},
      'extra4': {'max': '1164px'},
      'extra5': {'max': '1106px'},
      'extra10': {'max': '1035px'},
      'extra6': {'max': '1015px'},
      'extra7': {'max': '960px'},
      'extra8': {'max': '955px'},
      'extra9': {'max': '852px'},
      'extra11': {'max': '730px'},
      'extra12': {'max': '615px'},
      'extra13': {'max': '518px'}
    }
  },
  plugins: [],
}