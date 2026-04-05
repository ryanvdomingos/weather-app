import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    js.configs.recommended,

    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
                fetch: "readonly"
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
        },
    },

    eslintConfigPrettier,
];
