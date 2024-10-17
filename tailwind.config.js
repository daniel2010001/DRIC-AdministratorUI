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
        'light-primary': '#F4FDFF',
        'light-secondary': '#E1ECFA',
        'dark-primary': '#3c3c3c',
        'dark-secondary': '#4c4c4c',
      },
      textColor: {
        'light-primary': '#333',
        'light-secondary': '#555',
        'dark-primary': '#ddd',
        'dark-secondary': '#ccc',
      },
      borderColor: {
        'light-primary': '#bbb',
        'light-secondary': '#ccc',
        'dark-primary': '#f3f3f3',
        'dark-secondary': '#7f7f7f',
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      const themes = {
        '.light-primary': {
          '@apply text-light-primary bg-light-primary border-light-primary': {},
        },
        '.light-secondary': {
          '@apply text-light-secondary bg-light-secondary border-light-secondary': {},
        },
        '.dark-primary': {
          '@apply text-dark-primary bg-dark-primary border-dark-primary': {},
        },
        '.dark-secondary': {
          '@apply text-dark-secondary bg-dark-secondary border-dark-secondary': {},
        },
      };
      addComponents(themes);
    },
  ],
}

