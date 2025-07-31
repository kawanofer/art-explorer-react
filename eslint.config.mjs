import js from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

function trimGlobals(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.trim(), v]));
}

export default [
  {
    ignores: ["dist", "coverage", "node_modules", ".git", ".vite", "e2e"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactRefresh.configs.recommended, // corrigido: `configs.recommended` existe, não `configs.vite`
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...trimGlobals(globals.browser),
        ...trimGlobals(globals.node),
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react-hooks/exhaustive-deps": "warn",
      "comma-dangle": ["error", "never"],
      "object-curly-newline": [
        "error",
        { consistent: true, minProperties: 10 },
      ],
      "no-alert": "error",
      "no-console": "warn",
      "react/no-deprecated": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "no-debugger": "off",
      "space-before-function-paren": "off",
      "no-tabs": "off",
      "generator-star-spacing": ["off", { before: false, after: false }],
      "operator-linebreak": ["error", "after"],
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
