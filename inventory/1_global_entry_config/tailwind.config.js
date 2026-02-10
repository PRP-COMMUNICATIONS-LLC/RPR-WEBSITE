/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // HARD-LOCKED: Pure Black
        "sovereign-bg-primary": "#000000",
        "sovereign-bg-elevated": "#050505",
        "sovereign-border-subtle": "rgba(255, 255, 255, 0.05)",
        "sovereign-actor-cyan": "#22d3ee",
        "sovereign-actor-red": "#ef4444",
        // System alignment tokens
        border: "rgba(255, 255, 255, 0.1)",
        background: "#000000",
        foreground: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};