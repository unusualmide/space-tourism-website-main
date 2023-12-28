/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url('/home/background-home-desktop.jpg')",
        'home-tablet': "url('/home/background-home-tablet.jpg')",
        'home-mobile': "url('/home/background-home-mobile.jpg')",
        'destination-mobile': "url('/destination/background-destination-mobile.jpg')",
        'destination-desktop': "url('/destination/background-destination-desktop.jpg')",
        'destination-tablet': "url('/destination/background-destination-tablet.jpg')",
        'crew-desktop': "url('/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('/crew/background-crew-mobile.jpg')",
        'technology-desktop': "url('/technology/background-technology-desktop.jpg')",
        'technology-tablet': "url('/technology/background-technology-tablet.jpg')",
        'technology-mobile': "url('/technology/background-technology-mobile.jpg')",
      },
      colors: {
        'legacy-blue': '#D0D6F9',
        'legacy-black': '#0B0D17',
        'legacy-grey': '#383B4B',
        'legal-stake': '#979797',
      },
    },
  },
  plugins: [],
}

