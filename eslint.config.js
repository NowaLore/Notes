import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    files: ["src/**/*.js", "src/**/*.ts"],
    ignores: ["**/*.config.js", "**/*.json"],
    languageOptions: {
      sourceType: "module"
    },
  }
];