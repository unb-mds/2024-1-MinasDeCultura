import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module", // Especifica o uso de módulos ES6
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react": pluginReact,
    },
    rules: {
      // Adicione aqui regras personalizadas se necessário
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // Para arquivos .js que usam CommonJS
    },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.recommended, // Use as configurações recomendadas
];
