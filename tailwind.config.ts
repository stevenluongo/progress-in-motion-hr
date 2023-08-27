import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Next.js google font optimization
        prata: ["var(--font-prata)"],
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        // Header
        "header-lg": "4rem",
        "header-md": "3rem",
        "header-sm": "2rem",
        "header-xs": "1.5rem",
        // Body
        body: "1em",
        sm: "0.875em",
        xs: "0.75em",
      },
      lineHeight: {
        // Header
        header: "120%",
        // Body
        body: "150%",
      },
      colors: {
        // Blue Palette
        blue: "#266891",
        "blue-0": "#CCF0F4",
        "blue-50": "#AAE1E9",
        "blue-100": "#89CDDC",
        "blue-200": "#6DB7CD",
        "blue-300": "#539EBB",
        "blue-400": "#3B83A7",
        "blue-500": "#3A627B",
        "blue-600": "#205781",
        "blue-700": "#1A4870",
        "blue-800": "#14395E",
        "blue-900": "#0F2B4C",
        // Neutral Palette
        "neutral-0": "#F5F5F5",
        "neutral-50": "#E5E5E5",
        "neutral-100": "#D4D4D4",
        "neutral-200": "#C4C4C4",
        "neutral-300": "#B3B3B3",
        "neutral-400": "#A3A3A3",
        "neutral-500": "#929292",
        "neutral-600": "#828282",
        "neutral-700": "#717171",
        "neutral-800": "#616161",
        "neutral-900": "#505050",
        // White
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;

/*
//FONT SIZES



text-header-lg = 4rem
text-header-md = 3rem
text-header-sm = 2rem
text-header-xs = 1.5rem
text-body = 1em
text-sm = 0.875em
text-xs = 0.75em




*/
