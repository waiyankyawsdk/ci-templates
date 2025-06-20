import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: {
            globals: {
                QRCode: "readonly",
                ...globals.browser,
            }
        },
        rules: {
            // ✅ Turn off camelCase check
            camelcase: "off",

            // ✅ Allow unused function args or catch block args starting with `_`
            "no-unused-vars": ["warn", {
                argsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_"
            }]
        }
    },
    { 
        files: ["**/*.{js,mjs,cjs}"], 
        languageOptions: { globals: globals.browser } 
    }
]);
