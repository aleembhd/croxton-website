import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base — deep navy carried over from the original brand
        ink: {
          DEFAULT: "#001219",
          900: "#001219",
          800: "#04202b",
          700: "#072d3b",
          600: "#0b3a4b",
          500: "#12495c",
        },
        // Primary — taken from the Croxton logo mark
        brand: {
          DEFAULT: "#e8722c",
          light: "#ff9a5a",
          dark: "#c85a19",
        },
        // Secondary accent, used sparingly
        cyan: {
          DEFAULT: "#0ea5e9",
          light: "#38bdf8",
        },
        muted: "#93a9b4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.9s ease both",
        marquee: "marquee 32s linear infinite",
        glow: "glow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

export default config
