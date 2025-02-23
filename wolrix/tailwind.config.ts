import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "gray-dark": "var(--gray-dark)",
        "gray-light": "var(--gray-light)",
        "text-muted": "var(--text-muted)",
        muted: "var(--muted)",
        border: "var(--border)",
        hover: "var(--hover)",
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
