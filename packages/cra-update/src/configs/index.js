const useBabel = require('./babel')
const useENV = require('./env')
const useESLint = require('./eslint')
const useStylelint = require('./stylelint')
const useTSLint = require('./tslint')

module.exports = {
	useBabel,
	useENV,
	useStylelint,
	useESLint,
	useTSLint,
}
