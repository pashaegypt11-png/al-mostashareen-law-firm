import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004d40",
          light: "#00796b",
          dark: "#00251a",
        },
        secondary: {
          DEFAULT: "#d4af37",
          light: "#e6c26e",
          dark: "#b8860b",
        },
        accent: {
          DEFAULT: "#f5f5dc",
          dark: "#fffbf0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        arabic: ["var(--font-amiri)", "serif"],
      },
    },
  },
  plugins: [],
}

export default config
