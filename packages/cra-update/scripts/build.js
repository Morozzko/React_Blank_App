process.env.NODE_ENV = process.env.BABEL_ENV = 'production'
const { paths } = require('../src/lib')
const gatherPipes = require('../src/loader')
const { webpack: transforms } = gatherPipes(['webpack'])

const patch = require('../src/patch')
const { webpackConfig, build } = paths

patch(transforms, webpackConfig)

require(build)
