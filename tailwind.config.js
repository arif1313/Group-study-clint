/** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     colors: {
//      mainTextcolor: '#00458B',
//      buttonColor: '#3FD2C7',
//      divColor: '#99DDFF'
//     }
//   }
// }
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
           mainTextcolor: '#00458B',
           buttonColor: '#3FD2C7',
           divColor: '#99DDFF'
          },
    extend: {},
  },
  plugins: [require("daisyui")],
}




