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
  // settings: {
  //   'import/resolver': {
  //     alias: {
  //       map: [
  //         ["@components", "./src/components"],
  //         ["@constants", "./src/constants"],
  //         ["@types", "./src/types"],
  //       ],
  //       "extensions": [".js", ".jsx", ".ts", ".tsx"]
  //     }
  //   }
  // }
}
