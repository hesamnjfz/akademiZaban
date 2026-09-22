import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050607",
        panel: "#0b0e0d",
        panel2: "#0f1412",
        silver: "#9aa5a1",
        silverline: "#2b3330",
        neon: {
          DEFAULT: "#39ff8f",
          soft: "#7dffb8",
          dim: "#1c8a52",
          glow: "#00ff9d",
        },
      },
      fontFamily: {
        fa: ["var(--font-vazirmatn)", "sans-serif"],
        en: ["var(--font-rubik-mono)", "sans-serif"],
        body: ["var(--font-vazirmatn)", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 8px rgba(57,255,143,0.55), 0 0 24px rgba(57,255,143,0.25)",
        neonlg: "0 0 24px rgba(57,255,143,0.35), 0 0 64px rgba(57,255,143,0.15)",
      },
      keyframes: {
        blink: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        floaty: "floaty 5s ease-in-out infinite",
        fadeUp: "fadeUp .6s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
