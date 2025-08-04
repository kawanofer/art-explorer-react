// Tema Claro
const lightTheme = {
  /* Cores de Fundo */
  colorBackground: "#FFFFFF",
  colorSurface: "#F8F9FA",
  colorCard: "#FFFFFF",

  /* Cores de Texto */
  colorTextPrimary: "#1A1A1A",
  colorTextSecondary: "#4A4A4A",
  colorTextOnDark: "#F5F5F5",

  /* Cores de Feedback */
  colorError: "#e4002b",

  /* Cores de Linhas e Bordas */
  colorBorder: "#DDDDDD",
  colorDivider: "#E9E9E9",

  /* Cores Interativas e de Destaque */
  colorPrimary: "#003366",
  colorPrimaryHover: "#004080",
  colorAccent: "#B8860B", // Dourado/Bronze

  /* Fontes */
  fontFamilySerif: "'Playfair Display', serif",
  fontFamily: "'Inter', sans-serif",
};

// Tema Escuro
const darkTheme = {
  /* Cores de Fundo */
  colorBackground: "#1A1A1A",
  colorSurface: "#2A2A2A",
  colorCard: "#2A2A2A",

  /* Cores de Texto */
  colorTextPrimary: "#F5F5F5",
  colorTextSecondary: "#CCCCCC",
  colorTextOnDark: "#1A1A1A",

  /* Cores de Feedback */
  colorError: "#e4002b",

  /* Cores de Linhas e Bordas */
  colorBorder: "#444444",
  colorDivider: "#3A3A3A",

  /* Cores Interativas e de Destaque */
  colorPrimary: "#4A90E2",
  colorPrimaryHover: "#5BA0F2",
  colorAccent: "#D4AF37",

  /* Fontes */
  fontFamilySerif: "'Playfair Display', serif",
  fontFamily: "'Inter', sans-serif",
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeType = "light" | "dark";

// Mantendo compatibilidade com o tema existente (padrão claro)
const customTheme = lightTheme;

export default customTheme;
