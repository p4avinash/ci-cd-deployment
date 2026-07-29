import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    // extends: ["js/recommended"],

    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      "max-lines": [
        "error",
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      "no-console": "off",
      "no-unused-vars": "off",
    },
  },

  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
    },
  },
])
