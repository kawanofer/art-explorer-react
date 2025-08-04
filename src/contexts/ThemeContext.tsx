import React, { createContext, ReactNode, useEffect, useState } from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { themes, ThemeType } from "../assets/theme/CustomTheme";

export interface ThemeContextType {
  currentTheme: ThemeType;
  toggleTheme: () => void;
  theme: typeof themes.light;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("light");

  // Carregar tema do localStorage na inicialização
  useEffect(() => {
    const savedTheme = localStorage.getItem("art-explorer-theme") as ThemeType;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Salvar tema no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem("art-explorer-theme", currentTheme);

    // Atualizar classe no body para estilos globais se necessário
    document.body.className = `theme-${currentTheme}`;
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = themes[currentTheme];

  const contextValue: ThemeContextType = {
    currentTheme,
    toggleTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
