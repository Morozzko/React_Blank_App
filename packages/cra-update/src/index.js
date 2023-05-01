const {
	getWebpackPlugin,
	editWebpackPlugin,
	replaceWebpackPlugin,
	removeWebpackPlugin,
	getPluginsNames,
	overrideConfig,
} = require('./lib/')

module.exports = {
	v5: {
		overrideConfig,
		removeWebpackPlugin,
		replaceWebpackPlugin,
		editWebpackPlugin,
		getWebpackPlugin,
		getPluginsNames,
	},
	v4: {
		overrideConfig,
		removeWebpackPlugin,
		replaceWebpackPlugin,
		editWebpackPlugin,
		getWebpackPlugin,
		getPluginsNames,
	},
}
