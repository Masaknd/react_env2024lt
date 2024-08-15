/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      condensed: ['Saira Condensed', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#0e0e0e',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      keyframes: {
        progress: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        dance: {
          '0%': { transform: 'rotate(0deg)' },
          '35%': { transform: 'rotate(5deg)' },
          '65%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        flying: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(50px,50px)' },
          '50%': { transform: 'translate(150px,-25px)' },
          '75%': { transform: 'translate(-25px,25px)' },
          '100%': { transform: 'translate(0,0)' },
        },
      },
      animation: {
        progress: 'progress 2s ease',
        dance: 'dance 2s ease infinite',
        flying: 'flying 10s linear infinite',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png)",
      },
    },
  },
  plugins: [],
}
