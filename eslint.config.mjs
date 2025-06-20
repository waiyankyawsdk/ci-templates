import js from "@eslint/js";
import globals from "globals";
import scssPlugin from "eslint-plugin-scss";
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
        files: ["**/*.scss"],
        plugins: { scss: scssPlugin },
        languageOptions: {
            globals: { ...globals.browser },
            parserOptions: {
                // SCSS parser if needed, usually stylelint does this
            }
        },
        rules: {
            // Example: enable some scss rules
            "scss/dollar-variable-pattern": ["warn", "^foo"],
            "scss/selector-no-redundant-nesting-selector": "error",
            // add more scss rules here as needed
        },
    },
    { 
        files: ["**/*.{js,mjs,cjs}"], 
        languageOptions: { globals: globals.browser } 
    }
]);
