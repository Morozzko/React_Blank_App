const path = require('path')
const {
  container: { ModuleFederationPlugin },
} = require('webpack')
const { getPackages } = require('../../_config/scriptsForBundle/')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { imported } = require('./.MF.module')
const { name, dependencies } = require('./package.json')

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@functions': path.resolve(__dirname, 'src/utils/functions/'),
      '@generated': path.resolve(__dirname, 'src/features/generated/'),
      '@hooks': path.resolve(__dirname, 'src/utils/hooks/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@modules': path.resolve(__dirname, 'src/modules/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@services': path.resolve(__dirname, 'src/features/services/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@utility-components': path.resolve(__dirname, 'src/utils/components/'),
      '@widgets': path.resolve(__dirname, 'src/features/widgets/'),
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name,
          filename: 'remoteEntry.js',
          remotes: imported,
          shared: {
            ...getPackages(dependencies, true),
          },
        }),
        // new BundleAnalyzerPlugin()
      ],
      remove: [
        /* ... */
      ],
    },
    configure: (webpackConfig, { env }) => {
      if (env === 'development') {
        const publicPath = `//${process.env.HOST}:${process.env.PORT}/`
        console.log(publicPath)
        webpackConfig.output.publicPath = publicPath
      } else {
        const publicPath = `${process.env.REACT_APP_PUBLIC_PATH}`
        console.log(publicPath)
        webpackConfig.output.publicPath = publicPath
      }
      webpackConfig.resolve = webpackConfig.resolve || {}
      webpackConfig.resolve.fallback = webpackConfig.resolve.fallback || {}
      webpackConfig.resolve.fallback.process =
        require.resolve('process/browser')
      webpackConfig.devServer = {
        ...webpackConfig.devServer,
        liveReload: true,
        watchFiles: [],
        devMiddleware: {
          writeToDisk: true,
        },
      }

      return webpackConfig
    },
  },
  jest: {
    configure(config) {
      config.moduleNameMapper = {
        '^@app/(.*)$': '<rootDir>/src/app/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@constants/(.*)$': '<rootDir>/src/constants/$1',
        '^@functions/(.*)$': '<rootDir>/src/utils/functions/$1',
        '^@generated/(.*)$': '<rootDir>/src/features/generated/$1',
        '^@utility-components/(.*)$': '<rootDir>/src/utils/components/$1',
        '^@hooks/(.*)$': '<rootDir>/src/utils/hooks/$1',
        '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@services/(.*)$': '<rootDir>/src/features/services/$1',
        '^@styles/(.*)$': '<rootDir>/src/styles/$1',
        '^@widgets/(.*)$': '<rootDir>/src/features/widgets/$1',
      }

      return config
    },
  },
}
