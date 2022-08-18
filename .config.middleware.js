const {
  container: { ModuleFederationPlugin }
} = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { imported, exported } = require('./.MF.module.js')
const { name, dependencies } = require('./package.json')
const {
  v5: { overrideConfig }
} = require('@npm.piece/cra-update')

const rewriteBabel = config => {
  const isBabelRule = (rule) => !!rule.oneOf
  const newBabelRule = config.module.rules.find(rule => isBabelRule(rule)).oneOf.slice()
  const babelIndex = config.module.rules.findIndex(rule => isBabelRule(rule))
  const isBabelConfig = (rule) => rule?.test?.toString() == /\.(js|mjs|jsx|ts|tsx)$/ && rule.loader.match('babel')


  const babelConfig = newBabelRule.find(rule => isBabelConfig(rule))
  const babelConfigIndex = newBabelRule.findIndex(rule => isBabelConfig(rule))

  if (!babelConfig.options) {
    throw new Error()
  }

  //Overwrite presets & plugins here
  const presets = [...babelConfig.options.presets]
  const plugins = [...babelConfig.options.plugins]

  const configPath = config.module.rules[babelIndex].oneOf[babelConfigIndex]

  config.module.rules[babelIndex].oneOf[babelConfigIndex] = {
    ...configPath,
    options: { ...configPath.options, presets, plugins }
  }
  return config
}

const addPlugins = config => {
  config.plugins.unshift(
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      exposes: exported,
      remotes: imported,
      shared: {
        ...dependencies
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
      }
    })
    // new BundleAnalyzerPlugin()
  )
  return config
}

module.exports = [
  config => {
    console.log(process.env.NODE_ENV)
    config.mode = process.env.NODE_ENV || 'development'
    return overrideConfig(config, addPlugins)
  }
]
