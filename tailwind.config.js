/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          bgColor: '#fff',
          bgColor2: '#f7f8fa',
          title: '#374151'
        },
        dark: {
          bgColor: '#131414',
          bgColor2: '#141c1f',
          title: "#fff"
        }
      }
    },
  },
  plugins: [],
}