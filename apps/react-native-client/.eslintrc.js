/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: 'expo',
  ignorePatterns: ['/dist/*'],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
  }
};
