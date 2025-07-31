import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Pastas/arquivos a serem ignorados
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.git/**",
      "**/e2e/**",
      "**/.vite/**", // Adicionando cache do Vite
      "**/coverage/**", // Ignorando relatórios de cobertura
    ],

    // Ambiente de teste (JS DOM para React)
    environment: "jsdom",

    // Arquivo de configuração inicial
    setupFiles: "./src/setupTests.ts",

    // Configurações adicionais recomendadas:
    globals: true, // Permite usar describe/test/it sem import
    clearMocks: true, // Limpa mocks entre testes
    restoreMocks: true, // Restaura mocks originais

    // Configuração para cobertura de código
    coverage: {
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/*.stories.{js,jsx,ts,tsx}", // Ignora arquivos de Storybook
        "**/setupTests.ts", // Ignora arquivo de setup
        "**/src/main.{js,jsx,ts,tsx}", // Ignora ponto de entrada da aplicação
      ],
      reporter: ["text", "json", "html"], // Formatos de relatório
    }
  }
});
