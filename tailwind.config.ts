import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGreen: "#233D2A",
        green: "#51E559",
        paper: "#EFEFEF",
        black: "#000000",
      },

      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1600px",
        xxxl: "1750px",
      },

      fontFamily: {
        "gustavo-medium": "var(--font-gustavo-medium)",
        "gustavo-reg": "var(--font-gustavo-reg)",
      },
    },
  },
  plugins: [],
};
export default config;
