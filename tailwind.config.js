/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#00E0FF",
          "background-light": "#F8FAFC",
          "background-dark": "#050505",
          "card-dark": "#0A0A0A",
          "border-dark": "#1A1A1A",
          "governance": "#8B5CFF",
          sovereign: {
            bg: {
              primary: 'var(--sovereign-bg-primary)',
              elevated: 'var(--sovereign-bg-elevated)',
            },
            fg: {
              primary: 'var(--sovereign-fg-primary)',
              muted: 'var(--sovereign-fg-muted)',
            },
            actor: {
              cyan: 'var(--sovereign-actor-cyan)',
              amber: 'var(--sovereign-actor-amber)',
              red: 'var(--sovereign-actor-red)',
            },
            border: {
              subtle: 'var(--sovereign-border-subtle)',
              strong: 'var(--sovereign-border-strong)',
            },
            card: {
              bg: 'var(--sovereign-card-bg)',
              ring: 'var(--sovereign-card-ring)',
            },
          },
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          mono: ["JetBrains Mono", "monospace"],
        },
      },
    },
    plugins: [],
  }