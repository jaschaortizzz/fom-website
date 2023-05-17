/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage:{
        'hero-section': "url(../public/images/hero-section.jpg)"
      },
      colors:{
        'tiffany-500': "#5CD4C8",
        'tiffany-600': "#67f5e7",
        'tiffany-400': "#47a198",
        'media-500': "#208CF6",
        'media-600': "#46a1fa",
        'media-400': "#1c6ab8",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
