/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url('/public/home/background-home-desktop.jpg')",
        'home-tablet': "url('/public/home/background-home-tablet.jpg')",
        'home-mobile': "url('/public/home/background-home-mobile.jpg')",
        'destination-mobile': "url('/public/destination/background-destination-mobile.jpg')",
        'destination-desktop': "url('/public/destination/background-destination-desktop.jpg')",
        'destination-tablet': "url('/public/destination/background-destination-tablet.jpg')",
        'crew-desktop': "url('/public/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('/public/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('/public/crew/background-crew-mobile.jpg')",
        'technology-desktop': "url('/public/technology/background-technology-desktop.jpg')",
        'technology-tablet': "url('/public/technology/background-technology-tablet.jpg')",
        'technology-mobile': "url('/public/technology/background-technology-mobile.jpg')",
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

