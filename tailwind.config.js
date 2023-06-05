/** @type {import('tailwindcss').Config} */
const { typography } = require('./tailwind-plugins');

module.exports = {
  content: [],
  darkMode: 'media',
  plugins: [typography],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          default: 'var(--color-gray-1)',
          active: 'var(--color-gray-2)',
          success: 'var(--color-mustard-1)',
          'success-inactive': 'var(--color-inactive-mustard-1)',
          error: 'var(--color-red-1)',
          'error-inactive': 'var(--color-inactive-red-1)',
          warning: 'var(--color-gray-2)',
          'warning-inactive': 'var(--color-inactive-gray-1)',
          information: 'var(--color-gray-1)',
          'information-inactive': 'var(--color-inactive-gray-1)',
        },
        border: {
          default: 'var(--color-gray-1)',
          active: 'var(--color-gray-2)',
          strong: 'var(--color-gray-3)',
          success: 'var(--color-mustard-1)',
          'success-inactive': 'var(--color-inactive-mustard-2)',
          error: 'var(--color-red-1)',
          'error-inactive': 'var(--color-inactive-red-2)',
          warning: 'var(--color-gray-2)',
          'warning-inactive': 'var(--color-inactive-gray-2)',
          information: 'var(--color-gray-1)',
          'information-inactive': 'var(--color-inactive-gray-2)',
        },
        text: {
          default: 'var(--color-gray-1)',
          inactive: 'var(--color-gray-2)',
          active: 'var(--color-gray-3)',
          error: 'var(--color-red-1)',
          success: 'var(--color-mustard-1)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
};
