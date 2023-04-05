const { findIndex, either, equals, type, reduce, assoc, reduceRight, mergeWith, flatten, includes } = require('ramda')
const { loadFromPackageField, loadRawFromRoot, loadFromRoot, error, load } = require('../src/lib')
const rootConfigFile = (() => {
  const configKeyIndex = findIndex(either(equals('--config'), equals('-c')), process.argv)

  const loaded =
    configKeyIndex >= 0
      ? loadRawFromRoot(process.argv[configKeyIndex + 1]) ||
        loadFromRoot(process.argv[configKeyIndex + 1]) ||
        load(process.argv[configKeyIndex + 1])
      : loadFromPackageField('piece-updated-cra-middleware') ||
        loadRawFromRoot('.config.middleware') ||
        loadFromRoot('.config.middleware') ||
        error(
          "You're likely seeing this bug because you haven't defined in root .config.middleware.js or your config contains a syntactical error. If you're certain of otherwise, please file an issue."
        )

  switch (type(loaded)) {
    case 'Function':
    case 'Object': {
      return [loaded]
    }
    default: {
      return loaded
    }
  }
})()

const normalizeLoaded = x =>
  type(x) === 'String'
    ? load(`@piece/updated-cra-${x}`) || load(`piece-${x}`) || load(x) || load(`@piece/${x}`) || loadFromRoot(x)
    : x

const loadCreatorAndApplyArgs = ([creator, ...args]) => normalizeLoaded(creator)(...args)

const normalize = r => (type(r) === 'Array' ? loadCreatorAndApplyArgs(r) : normalizeLoaded(r))

const mergePipes = reduceRight(
  mergeWith((x, y) => flatten([x, y])),
  {}
)

const isolate = (scope, o) =>
  reduce((accumulator, key) => (o[key] ? assoc(key, o[key], accumulator) : accumulator), {}, scope)

const gatherPipes = (scope, configFile = rootConfigFile) =>
  reduce(
    (pipes, e) => {
      const r = normalize(e)
      const rType = type(r)

      switch (rType) {
        case 'Array': {
          if (r) {
            const gathered = gatherPipes(scope, r)

            return mergePipes([gathered, pipes])
          }

          return
        }

        case 'Function': {
          return includes('webpack', scope) ? mergePipes([{ webpack: [r] }, pipes]) : pipes
        }

        case 'Object': {
          const scoped = isolate(scope, r)

          return mergePipes([scoped, pipes])
        }

        default: {
          error('It seems that your overwritten configuration is invalid.')

          return
        }
      }
    },
    {},
    configFile
  )

module.exports = gatherPipes
