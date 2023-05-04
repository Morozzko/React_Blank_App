const path = require('path')
const {
	container: { ModuleFederationPlugin },
} = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { exported, imported } = require('./.MF.module')

const { name, dependencies } = require('./package.json')
module.exports = {
	// ...
	webpack: {
		alias: {
			'@app': path.resolve(__dirname, 'src/app/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@constants': path.resolve(__dirname, 'src/constants/'),
			'@functions': path.resolve(__dirname, 'src/utils/functions/'),
			'@generated': path.resolve(__dirname, 'src/features/generated/'),
			'@helpers': path.resolve(__dirname, 'src/utils/helpers/'),
			'@hooks': path.resolve(__dirname, 'src/utils/hooks/'),
			'@layouts': path.resolve(__dirname, 'src/layouts/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@services': path.resolve(__dirname, 'src/features/services/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@widgets': path.resolve(__dirname, 'src/features/widgets/'),
		},
		plugins: {
			add: [
				new ModuleFederationPlugin({
					name,
					filename: 'remoteEntry.js',
					exposes: exported,
					remotes: imported,
					shared: {
						...dependencies,
						// react: {
						//   singleton: true,
						//   version: dependencies['react'],
						// },
						// 'react-dom': {
						//   singleton: true,
						//   version: dependencies['react-dom'],
						// },
						// 'react-router-dom': {
						//   singleton: true,
						//   version: dependencies['react-router-dom'],
						// },
						// 'react-redux': {
						//   singleton: true,
						//   version: dependencies['react-router-dom'],
						// },
					},
				}),
				// new BundleAnalyzerPlugin()
			],
			remove: [
				/* ... */
			],
		},
		configure: (webpackConfig, { env, paths }) =>
			/* ... */
			webpackConfig,
	},
}
