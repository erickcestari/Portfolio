import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  darkMode: "class",
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  theme: {
    extend: {
      colors: {
        accent: "#936DFF",
        accent2: "#8459FF",
        accent3: "#7140FF",
        text1: "#FFFFFF",
        text2: "#99A2FF",
        background1: "#080313",
        background2: "#140B27",
        background3: "#251448",
        attention: "#CEFF40",
        info: "#40FFD1",
        danger: "#FF406E",
      },
      fontSize: {
        "3xl": "2.5rem",
        "2xl": "1.75rem",
        xl: "1.5rem",
        lg: "1.25rem",
        md: "1rem",
        sm: "0.875rem",
      },
      screens: {
        phone: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
      },
      typography: {
        strong: {
          css: {
            "p strong": { color: "#FF406E" },
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
    hljs: {
      theme: "github-dark",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-highlightjs"),
  ],
};
export default config;