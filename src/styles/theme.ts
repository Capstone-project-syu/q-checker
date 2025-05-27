export const theme = {
  colors: {
    primary: "#2E8E14",
    secondary: "#34C759",
    background: "#FFFFFF",
    text: "#000000",
    error: "#FFF000",
    success: "#4CD964",
    gray: "#B0B0B0",
    white: "#FFFFFF",
    dark: {
      background: "#151718",
      text: "#ECEDEE",
      icon: "#9BA1A6",
    },
    light: {
      background: "#FFFFFF",
      text: "#11181C",
      icon: "#687076",
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: "bold",
      lineHeight: 40,
    },
    h2: {
      fontSize: 28,
      fontWeight: "bold",
      lineHeight: 36,
    },
    h3: {
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 32,
    },
    body: {
      fontSize: 16,
      fontWeight: "400",
      lineHeight: 22,
    },
    caption: {
      fontSize: 12,
      fontWeight: "300",
      lineHeight: 18,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 5,
    md: 10,
    lg: 15,
  },
} as const;

export type Theme = typeof theme;
