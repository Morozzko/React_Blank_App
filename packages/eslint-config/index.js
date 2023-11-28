module.exports = {
  // Расширения конфигурации ESLint: Начало
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  // Расширения конфигурации ESLint: Конец

  // Плагины ESLint: Начало
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  // Плагины ESLint: Конец

  // Окружение: Начало
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
  },
  // Окружение: Конец

  // Настройки: Начало
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  // Настройки: Конец

  // Определение корня проекта: Начало
  root: true,
  // Определение корня проекта: Конец

  // TypeScript parser: Начало
  parser: '@typescript-eslint/parser',
  // TypeScript parser: Конец

  // Правила ESLint: Начало
  rules: {
    // Правило @ts-ignore: Начало
    '@typescript-eslint/ban-ts-comment': 'off',
    // Правило @ts-ignore: Конец

    // Отключение правила для запрета определённых типов в TypeScript: Начало
    '@typescript-eslint/ban-types': 'off',
    // Отключение правила для запрета определённых типов в TypeScript: Конец

    // Предупреждение о пустых функциях: Начало
    '@typescript-eslint/no-empty-function': 'warn',
    // Предупреждение о пустых функциях: Конец

    // Использование non-null утверждений (!) в TypeScript: Начало
    '@typescript-eslint/no-non-null-assertion': 'off',
    // Использование non-null утверждений (!) в TypeScript: Конец

    // Правило ненужных ограничений для Generics в TypeScript: Начало
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    // Правило ненужных ограничений для Generics в TypeScript: Конец

    // Использование require в TypeScript: Начало
    '@typescript-eslint/no-var-requires': 'warn',
    // Использование require в TypeScript: Конец

    // Стиль тела стрелочных функций: Начало
    'arrow-body-style': ['error', 'as-needed'],
    // Стиль тела стрелочных функций: Конец

    // Новая строка перед return: Начало
    'newline-before-return': 'error',
    // Новая строка перед return: Конец

    // Использование console: Начало
    'no-console': 'warn',
    // Использование console: Конец

    // Использование debugger: Начало
    'no-debugger': 'warn',
    // Использование debugger: Конец

    // Пустые паттерны в деструктуризации: Начало
    'no-empty-pattern': 'warn',
    // Пустые паттерны в деструктуризации: Конец

    // Использование шаблонных строк вместо конкатенации: Начало
    'prefer-template': 'error',
    // Использование шаблонных строк вместо конкатенации: Конец

    // Отображение имени компонента в React: Начало
    'react/display-name': 'off',
    // Отображение имени компонента в React: Конец

    // Форматирование комментариев: Начало
    'spaced-comment': [
      'warn',
      'always',
      {
        markers: ['/'],
      },
    ],
    // Форматирование комментариев: Конец

    // Присутствие фигурных скобок в JSX: Начало
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'ignore',
      },
    ],
    // Присутствие фигурных скобок в JSX: Конец

    // Использование PropTypes в React: Начало
    'react/prop-types': 'off',
    // Использование PropTypes в React: Конец

    // Импорт React в области JSX: Начало
    'react/react-in-jsx-scope': 'off',
    // Импорт React в области JSX: Конец

    // Использование самозакрывающихся тегов React: Начало
    'react/self-closing-comp': 'error',
    // Использование самозакрывающихся тегов React: Конец

    // Использование фигурных скобок в блоках управления: Начало
    curly: ['error', 'all'],
    // Использование фигурных скобок в блоках управления: Конец

    // Правило для наименований: Начало
    '@typescript-eslint/naming-convention': [
      'error',
      // Правило для наименования типов: Начало
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: 'Type$',
          match: true,
        },
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      // Правило для наименования типов: Конец

      // Правило для наименования интерфейсов: Начало
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      // Правило для наименования интерфейсов: Конец

      // Правило для наименования перечислений: Начало
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^[A-Z][a-zA-Z]*Enum$',
          match: true,
        },
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      // Правило для наименования перечислений: Конец

      // Правило для наименования булевых: Начало
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has', 'can'],
        filter: {
          // Исключения
          regex: '^(disabled)$',
          match: false,
        },
      },
      {
        selector: 'typeProperty',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has', 'can'],
        filter: {
          // Исключения
          regex: '^(disabled)$',
          match: false,
        },
      },
      // Правило для наименования булевых: Конец
    ],
    // Правило для наименований: Конец

    // Расположение свойств объекта на новых строках: Начало
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    // Расположение свойств объекта на новых строках: Конец

    // Максимальное количество пропсов в JSX на одной строке: Начало
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    // Максимальное количество пропсов в JSX на одной строке: Конец

    // Настройки Prettier: Начало
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        arrowParens: 'avoid',
        semi: false,
        bracketSameLine: true,
      },
    ],
    // Настройки Prettier: Конец

    // Запрет на экспорт по умолчанию: Начало
    'import/no-default-export': 'error',
    // Запрет на экспорт по умолчанию: Конец

    // Порядок импорта: Начало
    'import/order': [
      'error',
      {
        groups: [
          // 'builtin': Импорты встроенных модулей Node.js (например, fs, path)
          'builtin',
          // 'external': Импорты из библиотек и других внешних источников
          'external',
          // 'internal': Импорты из внутренних путей, настроенных в проекте (например, через alias webpack или TypeScript)
          'internal',
          // 'parent': Импорты модулей из родительских директорий (например, ../myModule)
          'parent',
          // 'sibling': Импорты модулей из директорий на том же уровне (например, ./siblingModule)
          'sibling',
          // 'index': Импорты из индексных файлов в текущей директории (например, './')
          'index',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@app/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@constants/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@functions/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@layouts/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@pages/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@services/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@styles/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@widgets/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'react'],
      },
    ],
    // Порядок импорта: Конец
  },
  // Правила ESLint: Конец

  // Переопределения для конкретных типов файлов: Начало
  overrides: [
    {
      files: ['*.ts', '*.js'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        'import/no-default-export': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'no-console': 'warn',
      },
    },
    {
      files: ['*_Sample*', '*_sample*', '**/_Sample/**/*', '**/_sample/**/*'],
      rules: {
        'no-empty-pattern': 'off',
        'no-console': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['**/*.config.js', '**/*.config.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  // Переопределения для конкретных типов файлов: Начало
}
