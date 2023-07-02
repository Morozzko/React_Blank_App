module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "@npm.piece/eslint-config-npmpiece"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {

  },

}
