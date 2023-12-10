import type { Config } from "tailwindcss";
import { extendTailwindMerge } from "tailwind-merge";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prata: ["var(--font-prata)"],
        kumbh: ["var(--font-kumbh)"],
        adelia: ["var(--font-adelia)"],
      },

      screens: {
        xs: "480px",
      },

      lineHeight: {
        header: "120%",
        body: "150%",
      },
      colors: {
        "blue-primary": "#0080A8",
        "blue-900": "#112136",
        "blue-700": "#14395E",
        "blue-600": "#1A4870",
        "blue-100": "#F0F6FC",
        "blue-100-alpha": "#F0F6FC91",
      },
    },
  },
  plugins: [],
};
export default config;

export const twMerge = extendTailwindMerge({});
