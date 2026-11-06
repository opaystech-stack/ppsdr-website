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
        brand: {
          red: "#960051",
          "red-hover": "#75003f",
          dark: "#403a60",
          "dark-hover": "#312c4b",
          blue: "#006f62",
          "blue-hover": "#00594f",
          // Mappings to preserve scanning structure and replace Sightsavers colors
          yellow: "#ffbb22",
          "yellow-hover": "#e5a71a",
          navy: "#403a60",
          "navy-dark": "#312c4b",
          plum: "#960051",
          "plum-dark": "#75003f",
          teal: "#006f62",
          orange: "#ffbb22",
          text: "#373737",
          "text-muted": "#686c74",
          "gray-light": "#f0f1f2",
          "gray-border": "#e5e9e8",
          bg: "#ffffff"
        }
      },
      fontFamily: {
        sans: ["Lato", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 6px 16px rgba(0, 0, 0, 0.12)",
      }
    },
  },
  plugins: [],
};
export default config;
