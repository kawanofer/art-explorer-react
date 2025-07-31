// prettier.config.mjs
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
  importOrderParserPlugins: ["jsx", "decorators-legacy"],
  plugins: [pluginSortImports],
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@mui",
    "^@src/components",
    "^@src/store",
    "^@src/constants",
    "^@src/utils",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
