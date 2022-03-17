module.exports = {
  ...require('config/eslint-server'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    "no-restricted-syntax": "off",
  }
}
