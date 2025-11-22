import js from "@eslint/js";
import eslintPluginVue from "eslint-plugin-vue";
import ts from "typescript-eslint";
import prettier from "eslint-plugin-prettier/recommended";
export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...eslintPluginVue.configs["flat/recommended"],
    prettier,
    {
        files: ["*.vue", "**/*.vue"],
        languageOptions: {
            parserOptions: {
                parser: "@typescript-eslint/parser",
            },
        }
    },
);
