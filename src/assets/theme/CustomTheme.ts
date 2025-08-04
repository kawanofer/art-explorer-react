// Tema Claro
const lightTheme = {
  /* Cores de Fundo */
  white: "#FFFFFF",
  black: "#1A1A1A",
  background: "#FFFFFF",
  surface: "#F8F9FA",

  /* Cores de Texto */
  textPrimary: "#1A1A1A",
  textSecondary: "#4A4A4A",
  textOnDark: "#F5F5F5",

  red: "#e4002b",

  /* Cores de Linhas e Bordas */
  grey: "#E9E9E9",
  border: "#DDDDDD",

  /* Cores Interativas / de Destaque */
  interactivePrimary: "#003366" /* Azul Marinho Escuro */,
  interactiveHover: "#004080" /* Azul Marinho um pouco mais claro para hover */,
  accentSubtle: "#B8860B" /* Dourado/Bronze - Opcional */,

  /* Fontes */
  fontFamilySerif: "'Playfair Display', serif" /* Para títulos */,
  fontFamily: "'Inter', sans-serif" /* Para corpo do texto e UI */,
};

// Tema Escuro
const darkTheme = {
  /* Cores de Fundo */
  white: "#1A1A1A",
  black: "#FFFFFF",
  background: "#1A1A1A",
  surface: "#2A2A2A",

  /* Cores de Texto */
  textPrimary: "#F5F5F5",
  textSecondary: "#CCCCCC",
  textOnDark: "#1A1A1A",

  red: "#e4002b",

  /* Cores de Linhas e Bordas */
  grey: "#3A3A3A",
  border: "#444444",

  /* Cores Interativas / de Destaque */
  interactivePrimary: "#4A90E2" /* Azul mais claro para tema escuro */,
  interactiveHover: "#5BA0F2" /* Azul ainda mais claro para hover */,
  accentSubtle: "#D4AF37" /* Dourado mais brilhante para tema escuro */,

  /* Fontes */
  fontFamilySerif: "'Playfair Display', serif" /* Para títulos */,
  fontFamily: "'Inter', sans-serif" /* Para corpo do texto e UI */,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeType = "light" | "dark";

// Mantendo compatibilidade com o tema existente (padrão claro)
const customTheme = lightTheme;

export default customTheme;
