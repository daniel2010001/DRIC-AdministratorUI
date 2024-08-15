/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'jacques': ['"Jacques Francois Shadow"', 'serif'],
      },
      backgroundColor: {
        'light-primary': '#fff',
        'light-secondary': '#f7f7f7',
        'dark-primary': '#1a1a1a',
        'dark-secondary': '#2d2d2d',
      },
      textColor: {
        'light-primary': '#333',
        'light-secondary': '#555',
        'dark-primary': '#ddd',
        'dark-secondary': '#aaa',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      const themes = {
        '.light-primary': {
          '@apply text-light-primary bg-light-primary': {},
        },
        '.light-secondary': {
          '@apply text-light-secondary bg-light-secondary': {},
        },
        '.dark-primary': {
          '@apply text-dark-primary bg-dark-primary': {},
        },
        '.dark-secondary': {
          '@apply text-dark-secondary bg-dark-secondary': {},
        },
      };

      addComponents(themes);
    },
  ],
}

