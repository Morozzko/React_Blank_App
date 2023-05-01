const {
	has,
	partition,
	insertAll,
	identity,
	intersperse,
	flatten,
	compose,
	type,
} = require('ramda')

const isMiddleware = has('isMiddleware')

module.exports = (gathered, path) => {
	if (gathered) {
		const [middleware, transforms] =
			type(gathered) === 'Array'
				? partition(isMiddleware, gathered)
				: [false, gathered]

		const padded = insertAll(1, transforms, [identity, identity])
		const newMiddlewares = middleware && intersperse(middleware, padded)
		const normalizedArray = flatten(newMiddlewares || padded)
		const transform = compose(...normalizedArray)

		const resolved = require.resolve(path)
		const config = require(resolved)
		require.cache[resolved].exports =
			type(config) === 'Function'
				? (...args) => {
						const original = config(...args)

						return transform(original)
				  }
				: transform(config)
	}
}
