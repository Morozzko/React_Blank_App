# Change create-react-app configs without eject

## Installation

#### Install `@npm.piece/cra-update` as a dev dependency:

```sh
npm i -D @npm.piece/cra-update
```

```sh
yarn add -D @npm.piece/cra-update
```

## Configuration

#### Create `.config.middleware.js` file near package.json file;

#### Import utils from package `(optional)`:

```javascript
const {
  v5: {
    editWebpackPlugin,
    getPluginsNames,
    getWebpackPlugin,
    overrideConfig,
    removeWebpackPlugin,
    replaceWebpackPlugin
  }
} = require('@npm.piece/cra-update')
```

#### Standard export:

```javascript
module.exports = [
  config => {
    console.log('mode: ', process.env.NODE_ENV)
    config.mode = process.env.NODE_ENV || 'development'

    // configure config here

    return config
  },
]
```

### Replace scripts in package.json

```
  "scripts": {
    "start": "updated-cra start",
    "build": "updated-cra build"
}
```

### Utils:

#### Get list of current plugins:

```javascript
const currentPlugins = getPluginsNames(config)
console.log('plugin names: ', currentPlugins)
```

#### Get plugin by name:

```javascript
const plugin = getWebpackPlugin(currentPlugins[0], config)
console.log(plugin)
```

#### Creating custom function for overwrite something

```javascript
const overrideSplitChunks = config => ({
  ...config,
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
})
```

#### Creating custom function for adding plugins

```javascript
const addPlugins = config => {
  config.plugins.unshift(
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
    })
  )
  return config
}
```

#### Using functions in `module.exports` callback

```javascript
module.exports = [
  config => {
    // The first argument takes the config, further along the chain the functions that take the config will be called
    return overrideConfig(config, addPlugins, overrideSplitChunks)
  },
]
```

#### Remove plugin by name custom function with helper

```javascript
const removePlugins = config => removeWebpackPlugin('IgnorePlugin', config)
```

#### Edit plugin by name custom function with helper

```javascript
 const editPlugin = config => editWebpackPlugin(
  plugin => {
    plugin.someProperty = 'new value'
    return plugin
  },
  // plugin name
  'IgnorePlugin',
  config,
)

```

#### Replace plugin by name custom function with helper

```javascript
 const editPlugin = config => replaceWebpackPlugin(
  new IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/,
  }),
  'IgnorePlugin',
  edited,
)
```

