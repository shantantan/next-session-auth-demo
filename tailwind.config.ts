import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: [
          "'Noto Sans JP Variable', -apple-system, BlinkMacSystemFont, sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
