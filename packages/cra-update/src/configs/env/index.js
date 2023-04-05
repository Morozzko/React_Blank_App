const { split, last, reduce, compose } = require('ramda')
const { loadFromPackageField, resolveFromRoot } = require('../../lib')
const useBabelConfig = require('../babel')
const useESLintConfig = require('../eslint')
const useTSLintConfig = require('../tslint')

const nameOnly = path => (path ? last(split('/', path)) : null)

module.exports = config => {
  const babelConfig =
    loadFromPackageField('babel') || nameOnly(resolveFromRoot('.babelrc') || resolveFromRoot('config.babel'))

  const eslintConfig =
    loadFromPackageField('eslintConfig') || nameOnly(resolveFromRoot('.eslintrc') || resolveFromRoot('config.eslint'))

  const tslintConfig = resolveFromRoot('tsconfig.json') && resolveFromRoot('tslint')

  const transforms = reduce(
    (accumulator, [key, path]) => (path ? [...accumulator, key(path)] : accumulator),
    [],
    [
      [useBabelConfig, babelConfig],
      [useESLintConfig, eslintConfig],
      [useTSLintConfig, tslintConfig],
    ]
  )

  const transform = compose(...transforms)

  return transform(config)
}
