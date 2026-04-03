/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'cchia-blue': '#003764',
        'cchia-teal': '#008996',
        'cchia-light': '#F4F8FB',
        'cchia-blue-80': 'rgba(0,55,100,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.3em',
      },
    },
  },
  plugins: [],
}
