/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px) scale(0.98)",
            
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            
          },
        },
      },

      animation: {
        fadeup:
          "fadeInUp 2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },

      fontFamily: {
        lato: ["var(--font-lato)"],
        playfair: ["var(--font-playfair)"],
        fraunces: ["var(--font-fraunces)"],
        cormorant: ["var(--font-cormorant)"],
        lovers: ["var(--font-lovers)"],
      },
    },
  },

  plugins: [],
};