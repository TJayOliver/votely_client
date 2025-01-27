/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { mineBold: ["mineBold"] },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
