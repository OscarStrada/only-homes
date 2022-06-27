module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.1)',
        xl: '0 15px 60px -15px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
  mode: 'jit',
};
