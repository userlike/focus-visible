/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true
  },
  plugins: ['@typescript-eslint'],
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended']
};
