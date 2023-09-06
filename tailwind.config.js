/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        home: 'url("/homebg.png")'
      },
      fontFamily:{
        poppins: ['Poppins'],
        mulish: ['Mulish']
      },
      borderWidth: {
        '1': '1px', // You can adjust the border width as needed
      },
      borderColor: {
        'white': '#FFFFFF', // Replace with your desired border color
      },
      backgroundColor:{
        'blue-button': '#0E4D92'
      }
    },
  },
  plugins: [],
}
