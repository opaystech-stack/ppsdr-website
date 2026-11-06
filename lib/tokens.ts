/**
 * PPSDR Design Tokens
 * Centralized design system constants for PPSDR (Programmes de Promotion de la Santé et de Développement en Milieux Ruraux)
 */

export const colors = {
  primary: {
    red: "#960051",
    redHover: "#75003f",
    dark: "#403a60",
    darkHover: "#312c4b",
  },
  accent: {
    blue: "#006f62",
    blueDark: "#1f58bf",
    yellow: "#960051", // Accent buttons / accents mapping to red
  },
  neutral: {
    text: "#373737",
    textMuted: "#686c74",
    border: "#e5e9e8",
    grayLight: "#f0f1f2",
    white: "#ffffff",
  },
} as const;

export const fonts = {
  sans: "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
} as const;

export const siteConfig = {
  name: "PPSDR ONGD",
  fullName: "Programmes de Promotion de la Santé et de Développement en Milieux Ruraux",
  tagline: "Encadrement des peuples autochtones pygmées et des paysans vulnérables en RDC",
  fondateur: "MUHINDO MUTHETHE Hénoc",
  anneeFondation: "2011",
  contact: {
    phone: "+243 997 133 925",
    email1: "ppsdrcongo@gmail.com",
    email2: "ppsdrongdasbl@gmail.com",
    address: "Goma, RD Congo",
  },
  social: {
    facebook: "https://www.facebook.com/ongd.ppsdr",
    youtube: "https://youtube.com/@PPSDRONGDasbl",
  },
  donateMessage:
    "En faisant un don, vous contribuez à améliorer le cadre de vie des personnes vulnérables et des populations pygmées en République démocratique du Congo.",
};
