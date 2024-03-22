/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vt-blue": "#4a00ff",
        "vt-bg-gray":"#f4f4f4",
        "vt-bg-progress-bar":"#dedeff"
      },
    },
  },
  plugins: [],
};
