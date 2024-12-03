import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
        playfair_display: ["var(--font-playfair-display)", ...fontFamily.sans],
      },
      colors: {
        green_dark: "#177165",
        white: "#FFFFFF",
        gray_dark: "#777777",
        green_light: "#A4D6CF",
        green_ultra_light: "#E1F4F2",
        gray_medium: "#B1B1B1",
        green_medium: "#23786D",
        green_deep: "#0A312C",
        gray_light: "#DDDDDD",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
