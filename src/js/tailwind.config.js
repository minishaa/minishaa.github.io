/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"], // Adapte selon la structure de ton projet
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")], // Ajoute DaisyUI ici
    daisyui: {
      themes: ["dark"], // Ajoute ton thème personnalisé
    },
  };
  