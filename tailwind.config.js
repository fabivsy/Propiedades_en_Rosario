/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',
      },
    },
  },
  plugins: [],
};