/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        gray: {
          350: '#9F9F9F',
          333: '#333333'
        },
        yellow: {
          40: '#FFF3E3',
          550: '#B88E2F',
        }
      },
      backgroundImage: {
        'bg-intro': "url('./src/assets/images/bg-intro-furniro.png')",
      }
    },
  },
  plugins: [],
}

