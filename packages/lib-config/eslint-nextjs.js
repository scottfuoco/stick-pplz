module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "plugin:react/recommended",
      "prettier",
      "airbnb",
      "plugin:import/typescript"
  ],
  "parser": "@typescript-eslint/parser",

  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "plugins": [
      "react",
      "@typescript-eslint"
  ],
  "rules": {
    "max-len": ["warn", { "code": 150 }],
    "no-underscore-dangle": "off",
    "react/react-in-jsx-scope": "off",
    "global-require": "off",
    "import/no-unresolved": "off",
    "react/function-component-definition": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-param-reassign": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "import/no-amd": "off",
    "import/prefer-default-export": "off",
    "linebreak-style": "off",
    "react/require-default-props": [0],
    "no-use-before-define": "off",
    "camelcase": "off",
    "@typescript-eslint/no-use-before-define": ["off"],
    "import/extensions": [
      "error",
      "always",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "": "never"
      }
    ],
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }]
  }
}
