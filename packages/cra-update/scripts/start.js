process.env.NODE_ENV = process.env.BABEL_ENV = 'development'

const { forEach } = require('ramda')
const { paths } = require('../src/lib')
const gatherPipes = require('../src/loader')

const { webpack: webpackTransforms, devServer: devServerTransforms } = gatherPipes(['webpack', 'devServer'])

const patch = require('../src/patch')
const { webpackConfig, webpackDevServerConfig, start } = paths

forEach(
  args => patch(...args),
  [
    [webpackTransforms, webpackConfig],
    [devServerTransforms, webpackDevServerConfig],
  ]
)

require(start)
