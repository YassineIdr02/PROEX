/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat']
      },
      
      colors: {
        primary: "#222831",
        secondary: "#319795"
      }
    },
  },
  plugins: [
    require("daisyui"), 
    require("flowbite/plugin")
  ],
};
