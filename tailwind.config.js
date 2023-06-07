/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'media',
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: {
          default: 'var(--color-gray-1)',
          active: 'var(--color-gray-2)',
          success: 'var(--color-green-bold)',
          'success-inactive': 'var(--color-inactive-green)',
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
          success: 'var(--color-green-bold)',
          'success-inactive': 'var(--color-green)',
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
          success: 'var(--color-green-bold)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
};
