/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4589F4"
        },
        secondary: {
          100: "#031D36"
        }
      }
    },
  },
  plugins: [],
}

