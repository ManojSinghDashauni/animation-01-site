/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#fe6b7e',
        'BrandWhite':'#f5f9fc',
        'darkBlue':'#171a67'
      },

      fontFamily:{
        poppins:["Poppins","sans-sarif"]
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          '2xl': "6rem"

        }
      }
    },
  },
  plugins: [],
}