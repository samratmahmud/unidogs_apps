import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {"50": "#ffffff", "900": "#1A1B23"},
        neutral: {"600": "#565976"},
        fuchsia: {"600": "#E100FF", "500": "#C586FC"},
        Black: {"100": " var(--black-black-100, #FFF 3%);"},
      },
      fontFamily: {
        poppins: ["'Poppins'", ...fontFamily.sans],
        pangram: ["'Pangram'", ...fontFamily.sans],
        inter: ["'Inter'", ...fontFamily.sans],
      },
    },
    backgroundImage: {
      "100": "linear-gradient(92deg, #E100FF -4.03%, #7F00FF 110.27%)",
    },
    fontSize: {
      xs: ["8px", {lineHeight: "1.32em"}],
      sm: ["14px", {lineHeight: "1.53em"}],
      md: ["17px", {lineHeight: "1.49em"}],
      base: ["18px", {}],
      lg: ["20px", {lineHeight: "1.3em"}],
      xl: ["24px", {letterSpacing: "0.02em"}],
      "2xl": ["32px", {lineHeight: "1.31em"}],
      "3xl": ["36px", {letterSpacing: "0.02em"}],
      "4xl": ["40px", {letterSpacing: "0.02em"}],
    },
    shadows: {
      sm: "400px 400px 400px",
      md: "200px 200px 200px",
      lg: "350px 350px 350px",
      xl: "0px 0px 5px white",
      "2xl": "0px 2px 2px rgba(255, 255, 255, 0.15) inset",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1150px",
      "2xl": "1336px",
    },
  },
  plugins: [],
};
export default config;
