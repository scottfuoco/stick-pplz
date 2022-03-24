module.exports = {
  "env": {
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "parser": "@typescript-eslint/parser",

  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".ts"]
    },
    "import/resolver": {
      "typescript": {
        "extensions": [".js", ".ts"]
      }
    }
  },
  "plugins": [
    "import",
    "@typescript-eslint"
  ],
  "overrides": [
    {
      "env": {
        "jest": true
      },
      "files": [
        "**/__tests__/**/*.[jt]s",
        "**/?(*.)+(spec|test).[jt]s"
      ],
      "extends": [
        "plugin:jest/recommended"
      ],
      "rules": {
        "import/no-extraneous-dependencies": [
          "off",
          {
            "devDependencies": [
              "**/?(*.)+(spec|test).[jt]s"
            ]
          }
        ]
      }
    }
  ],
  "ignorePatterns": [
    "node_modules",
    ".turbo",
    "dist",
    "coverage"
  ]
}
