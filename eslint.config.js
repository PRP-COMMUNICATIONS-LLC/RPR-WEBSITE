import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

const nodeGlobals = {
  console: "readonly",
  process: "readonly",
  require: "readonly",
  __dirname: "readonly",
  __filename: "readonly",
  module: "readonly",
  exports: "writable",
};

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["Scripts/**/*.js", "Scripts/**/*.ts"],
    languageOptions: { globals: nodeGlobals },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { React: "readonly", JSX: "readonly" },
    },
    plugins: { react, "react-hooks": reactHooks },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
    settings: { react: { version: "detect" } },
  },
  { ignores: ["dist/**", "node_modules/**", "*.config.js", "*.config.ts"] },
];
