module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/warnings',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'prettier',
		'plugin:tailwindcss/recommended',
	],
	plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
	env: {
		browser: true,
		jasmine: true,
		jest: true,
		node: true,
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
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unnecessary-type-constraint': 'off',
		'@typescript-eslint/no-var-requires': 'warn',
		'arrow-body-style': ['error', 'as-needed'],
		'newline-before-return': 'error',
		'no-console': 'warn',
		'no-debugger': 'warn',
		'no-empty-pattern': 'warn',
		'prefer-template': 'error',
		'react/display-name': 'off',
		'spaced-comment': [
			'warn',
			'always',
			{
				markers: ['/'],
			},
		],
		'react/jsx-curly-brace-presence': [
			'error',
			{
				props: 'never',
				children: 'ignore',
			},
		],
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/self-closing-comp': 'error',
		// 'function-paren-newline': ['error', 'multiline-arguments'],
		// 'object-curly-newline': [
		// 	'error',
		// 	{
		// 		ObjectExpression: {
		// 			multiline: true,
		// 			minProperties: 2,
		// 			consistent: true,
		// 		},
		// 		ObjectPattern: {
		// 			multiline: true,
		// 			minProperties: 2,
		// 			consistent: true,
		// 		},
		// 		ImportDeclaration: 'never',
		// 		ExportDeclaration: {
		// 			multiline: true,
		// 			minProperties: 2,
		// 			consistent: true,
		// 		},
		// 	},
		// ],
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: false,
			},
		],

		'@typescript-eslint/naming-convention': [
			'error',
			// Правило для типов
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
			// Правило для интерфейсов
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
			// Правило для перечислений
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
		],
		'react/jsx-max-props-per-line': [
			'error',
			{
				maximum: 1,
				when: 'multiline',
			},
		],
		'prettier/prettier': [
			'warn',
			{
				// printWidth: 120,
				singleQuote: true,
				tabWidth: 2,
				useTabs: true,
				arrowParens: 'avoid',
				semi: false,
				bracketSameLine: true,
			},
		],
		'import/no-default-export': 'error',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				pathGroups: [
					{
						pattern: '@app/**',
						group: 'internal',
					},
					{
						pattern: '@components/**',
						group: 'internal',
					},
					{
						pattern: '@constants/**',
						group: 'internal',
					},
					{
						pattern: '@functions/**',
						group: 'internal',
					},
					{
						pattern: '@hooks/**',
						group: 'internal',
					},
					{
						pattern: '@layouts/**',
						group: 'internal',
					},
					{
						pattern: '@pages/**',
						group: 'internal',
					},
					{
						pattern: '@services/**',
						group: 'internal',
					},
					{
						pattern: '@styles/**',
						group: 'internal',
					},
					{
						pattern: '@widgets/**',
						group: 'internal',
					},
				],
				pathGroupsExcludedImportTypes: ['builtin'],
			},
		],
	},
	overrides: [
		{
			files: ['*.ts', '*.js'],
			rules: { 'no-console': 'off' },
		},
		{
			files: ['*.d.ts'],
			rules: { '@typescript-eslint/naming-convention': 'off' },
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
			rules: { 'no-console': 'warn' },
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
	],
}
