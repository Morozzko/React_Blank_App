const config = require('tailwind.config.js')

module.exports = {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		tailwindcss: { config },
		autoprefixer: {},
	},
}
