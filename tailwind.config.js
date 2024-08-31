/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        popInOut: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
      },
      animation: {
        popInOut: 'popInOut 1s ease-in-out infinite', // Adjust duration here
      },
    },
  },
  plugins: [],
}
