/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': ['ui-sans-serif', 'system-ui'],
        'dm': ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
