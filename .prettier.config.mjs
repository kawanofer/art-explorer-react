import pluginSortImports from "@trivago/prettier-plugin-sort-imports";

export default {
  arrowParens: "always",
  bracketSameLine: true,
  bracketSpacing: true,
  experimentalTernaries: true,
  jsxSingleQuote: true,
  quoteProps: "as-needed",
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false,

  // Plugin configuration
  plugins: [pluginSortImports],

  // Import sorting configuration
  importOrderParserPlugins: ["jsx", "decorators-legacy", "typescript"],
  importOrder: [
    "^react(.*)$", // React imports first
    "^@?\\w", // Third party libraries
    "^@mui/(.*)$", // MUI components
    "^@/(.*)$", // Your alias imports (if using @)
    "^@src/(.*)$", // Your @src alias imports
    "^[./]", // Relative imports
    "^\\.\\..*", // Parent directory imports
    "^\\..*", // Current directory imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
