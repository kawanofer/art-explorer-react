module.exports = {
  extends: [
    // your existing extends
  ],
  plugins: ["simple-import-sort", "import"],
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // React first
          ["^react"],
          // Third party packages
          ["^@?\\w"],
          // MUI components
          ["^@mui"],
          // Internal packages (your aliases)
          ["^@src/", "^@/"],
          // Parent imports
          ["^\\.\\."],
          // Relative imports
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
