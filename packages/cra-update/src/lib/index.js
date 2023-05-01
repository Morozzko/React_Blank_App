const errors = require('./errors')
const general = require('./general')
const overrideConfig = require('./overrideConfig')
const paths = require('./paths')
const plugins = require('./plugins')

module.exports = {
	...paths,
	...errors,
	...plugins,
	...general,
	...overrideConfig,
}
