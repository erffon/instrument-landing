/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppinsBold: [
          "Poppins-Bold",
          "system-ui",
          "ui-sans-serif",
          "ui-serif",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        poppinsLight: [
          "Poppins-Light",
          "system-ui",
          "ui-sans-serif",
          "ui-serif",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        poppinsMedium: [
          "Poppins-Medium",
          "system-ui",
          "ui-sans-serif",
          "ui-serif",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        cormorantBold: [
          "Cormorant-Bold",
          "system-ui",
          "ui-sans-serif",
          "ui-serif",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        cormorantLight: [
          "Cormorant-Light",
          "system-ui",
          "ui-sans-serif",
          "ui-serif",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
