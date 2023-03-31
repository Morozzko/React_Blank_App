module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/warnings',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  root: true,
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-var-requires': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
    'newline-before-return': 'error',
    'prefer-template': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore' }],
    'react/self-closing-comp': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-empty-pattern': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        arrowParens: 'avoid',
        semi: false,
        bracketSameLine: false,
      },
    ],
    'import/no-default-export': 'error',
    'import/order': [
      'warn',
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        'newlines-between': 'never',
        pathGroupsExcludedImportTypes: ['react'],
        pathGroups: [
          {
            pattern: 'components',
            group: 'internal',
          },
          {
            pattern: 'common',
            group: 'internal',
          },
          {
            pattern: 'routes/ **',
            group: 'internal',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
