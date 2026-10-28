/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary:"#ee6c4d",
        secondary:"#f38d68",
        accent:"#662c91",
        muted:"#17a398",
        light:{
          100: 'rgb(248, 248, 247)',
          200: 'rgb(238, 237, 237)',
          300: 'rgb(228, 227, 226)',
          400: 'rgb(214, 211, 210)',
          500: 'rgb(184, 180, 178)',
          600: 'rgb(165, 159, 157)',
        },
        dark:{
          100: 'rgb(29, 27, 26)',
          200: 'rgb(48, 45, 44)',
          300: 'rgb(61, 57, 56)',
          400: 'rgb(82, 77, 76)',
          500: 'rgb(128, 119, 117)',
          600: 'rgb(165, 158, 157)',
        },
      }
    },
  },
  plugins: [],
}