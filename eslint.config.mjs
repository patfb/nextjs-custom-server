import eslintConfigPrettier from "eslint-config-prettier";
import jest from "eslint-plugin-jest";
import globals from "globals";
import path from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    ignores: [".next", "dist", "node_modules"],
  },
  {
    files: ["**/*.test.ts"],
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs["flat/recommended"].rules,
      ...jest.configs["flat/style"].rules,
    },
  },
);
