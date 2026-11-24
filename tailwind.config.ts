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
          DEFAULT: "#063a2f",
          light: "#117a63",
          dark: "#04251f",
        },
        accent: {
          DEFAULT: "#c9a227",
          light: "#d9b74a",
          dark: "#a8871f",
        },
        surface: {
          cream: "#f7f3e8",
          paper: "#fffdf7",
        },
        content: {
          DEFAULT: "#14181a",
          muted: "#3f4744",
        },
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        arabic: ["var(--font-amiri)", "serif"],
      },
    },
  },
  plugins: [],
}

export default config
