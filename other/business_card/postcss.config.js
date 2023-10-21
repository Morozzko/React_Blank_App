const config = require('other/business_card/tailwind.config.js')

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: { config },
    autoprefixer: {},
  },
}
