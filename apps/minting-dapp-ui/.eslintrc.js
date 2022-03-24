module.exports = {
  ...require('lib-config/eslint-nextjs'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
