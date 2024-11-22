/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {},
  },
  plugins: [],
};
