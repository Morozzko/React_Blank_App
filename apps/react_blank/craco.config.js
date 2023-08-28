const path = require('path')
const { MFLiveReloadPlugin } = require('@module-federation/fmr')

const {
  container: { ModuleFederationPlugin },
} = require('webpack')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { exported, imported } = require('./.MF.module')

const { name, dependencies } = require('./package.json')
module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@functions': path.resolve(__dirname, 'src/utils/functions/'),
      '@generated': path.resolve(__dirname, 'src/features/generated/'),
      '@utility-components': path.resolve(__dirname, 'src/utils/components/'),
      '@hooks': path.resolve(__dirname, 'src/utils/hooks/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@services': path.resolve(__dirname, 'src/features/services/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@widgets': path.resolve(__dirname, 'src/features/widgets/'),
    },
    plugins: {
      add: [
        new MFLiveReloadPlugin({
          port: 9001, // the port your app runs on
          container: name, // the name of your app, must be unique
          standalone: false, // false uses chrome extention
        }),
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

      // Вернуть измененную конфигурацию
      return config
    },
  },
}
