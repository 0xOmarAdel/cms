/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        swing: "swing ease-in-out 0.5s 1 alternate",
      },
    },
  },
  plugins: [],
};
