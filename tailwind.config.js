/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-red": " hsl(0, 93%, 68%)",
        "desaturated-red": "hsl(0, 36%, 70%)",
        "dark-grayish-red": "hsl(0, 6%, 24%)",
      },
    },
    fontFamily: {
      body: ['"Josefin Sans"', "sans-serif"],
    },
  },
  plugins: [],
};
