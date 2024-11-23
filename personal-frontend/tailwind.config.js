/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3490ff',
        'primary-d': '#1a5b8c',

        'd-lv-0': '#121212',
        'd-lv-1': '#1e1e1e',
        'd-lv-2': '#242424',
        'd-lv-3': '#2c2c2c',
        'd-lv-4': '#323232',

        'warn': '#ffbb00',
        'error': '#ee2c4a',
        'success': '#44cc77',

        'warn-d': '#b28400',
        'error-d': '#a82830',
        'success-d': '#309053',
      },
      opacity: {
        'heavy': '0.87',
        'medium': '0.60',
        'light': '0.38',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(20px)', visibility: 'hidden' },
          '100%': { opacity: 1, transform: 'translateY(0)', visibility: 'block' },
        },
        'fade-out': {
          '0%': { opacity: 1, transform: 'translateY(0)', visibility: 'block' },
          '100%': { opacity: 0, transform: 'translateY(20px)', visibility: 'hidden' },
        },
      },

      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-out': 'fade-out 0.3s forwards',
      }

    },
  },
  plugins: [],
}