/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'd-base': '#000000',
        'l-base': '#000000',

        'primary': '#3490ff',
        'd-primary': '#1a5b8c',

        'd-lv-0': '#121212',
        'd-lv-1': '#1e1e1e',
        'd-lv-2': '#242424',
        'd-lv-3': '#2c2c2c',
        'd-lv-4': '#323232',
      },
      opacity: {
        'heavy': '0.87',
        'medium': '0.60',
        'light': '0.38',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-out': {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(20px)' },
        },
      },

      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-in',
      }

    },
  },
  plugins: [],
}