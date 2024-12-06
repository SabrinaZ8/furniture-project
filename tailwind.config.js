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
          333: '#333333',
          666: '#666666',
          750: '#3A3A3A',
          898: '#898989',
          110: '#B0B0B0'
        },
        yellow: {
          40: '#FFF3E3',
          70: '#F9F1E7',
          550: '#B88E2F',
        },
        red: {
          350:'#E97171'
        },
        green: {
          450: "#2EC1AC"
        },
        indigo: {
          450: "#816DFA"
        }
      },
      backgroundImage: {
        'bg-intro': "url('./src/assets/images/banners/bg-intro-furniro.png')",
      }
    },
  },
  plugins: [],
}

