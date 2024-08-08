/** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class",
// };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translate3d(0, 100%, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },

        "fade-out-down": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translate3d(0, 100%, 0)" },
        },

        "fade-in-left": {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "fade-out-right": {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 0.5s ease-out forwards",
        "fade-out-right": "fade-out-right 0.5s ease-out forwards",

        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "fade-out-down": "fade-out-down 0.5s ease-out forwards",
      },
    },
  },

  plugins: [],
};
