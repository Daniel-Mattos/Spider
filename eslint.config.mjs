import { dirname } from "path"
import { fileURLToPath } from "url"

import { FlatCompat } from "@eslint/eslintrc"
import unusedImports from "eslint-plugin-unused-imports"
import importPlugin from "eslint-plugin-import"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: {
      "unused-imports": unusedImports,
      import: importPlugin,
    },
    rules: {
      // Regra para remover imports não utilizados
      "unused-imports/no-unused-imports": "error",

      // Regra para ordenar os imports
      "import/order": [
        "error",
        {
          "newlines-between": "always",
        },
      ],
    },
  },
]

export default eslintConfig
