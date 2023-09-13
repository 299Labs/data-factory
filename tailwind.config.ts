import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#4F46E5",
        secondary: "#4ade80",
        dark: "#111827",
        warning: "#FF2E2E",
        success: "#2A9928",
      },
    },
  },
  plugins: [],
};
export default config;
