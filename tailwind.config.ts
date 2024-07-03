import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
    colors: {
      primary: colors.gray[300],
    }
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
