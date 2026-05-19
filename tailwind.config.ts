import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        clean: {
          50: "#f5fbf8",
          100: "#dff3ea",
          200: "#bee8d7",
          500: "#3aa985",
          700: "#23755f"
        },
        ocean: {
          50: "#eef8ff",
          100: "#d8efff",
          500: "#288fc9",
          700: "#17658f"
        },
        coral: {
          50: "#fff2ef",
          100: "#ffe0d9",
          500: "#ef6b4d",
          700: "#bd412b"
        },
        ink: {
          900: "#16202a",
          700: "#344252",
          500: "#667085"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(22, 32, 42, 0.08)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
