const plugin = require('tailwindcss/plugin');

module.exports = {
  typography: plugin(({ addUtilities }) => {
    const typography = {
      '.text-1': {
        fontSize: '38px',
        lineHeight: '38px',
      },
      '.text-2': {
        fontSize: '30px',
        lineHeight: '28.25px',
      },
      '.text-3': {
        fontSize: '26px',
        lineHeight: '24.75px',
      },
      '.text-4': {
        fontSize: '22px',
        lineHeight: '21.25px',
      },
      '.text-5': {
        fontSize: '16px',
        lineHeight: '13px',
      },
      '.text-6': {
        fontSize: '12px',
        lineHeight: '10.5px',
      },
    };

    addUtilities(typography, ['responsive']);
  }),
};
