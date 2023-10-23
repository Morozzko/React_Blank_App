const libs = [
  '@reduxjs/toolkit',
  '@npm.piece/common-frontend-frontend',
  '@npm.piece/constants',
  '@npm.piece/ui-kit',
  '@npm.piece/utils',
  'async-mutex',
  'axios',
  'i18next',
  'react',
  'react-dom',
  'react-helmet',
  'react-hook-form',
  'react-i18next',
  'react-redux',
  'react-router-dom',
  'react-window',
  'redux',
  'uuid',
  'web-vitals',
]

const packageFabric = (name, packageJson, isRoot) => {
  if (!packageJson[name]) {
    throw new Error(`Package ${name} not found in package.json`)
  }
  const version = packageJson[name].replace('^', '')

  return {
    [name]: isRoot
      ? {
          singleton: true,
          eager: true,
          version,
          requiredVersion: version,
        }
      : {
          singleton: true,
          import: false,
        },
  }
}
const getPackages = (packageJson, isRoot) =>
  libs.reduce((acc, name) => {
    const pack = packageFabric(name, packageJson, isRoot)

    return {
      ...acc,
      ...pack,
    }
  }, {})

module.exports = {
  getPackages,
  libs,
}
