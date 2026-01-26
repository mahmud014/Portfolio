/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0D2426",
        secondary: "#AEFF72",
        accent: "#00C6FF",
        "background-light": "#F3F4F6",
        "background-dark": "#0D2426",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
