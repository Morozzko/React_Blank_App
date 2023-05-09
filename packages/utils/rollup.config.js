import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDeps from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

export default {
	input: './src/index.ts',
	output: {
		dir: 'dist',
		format: 'esm',
		preserveModules: true,
		preserveModulesRoot: 'src',
		sourcemap: true,
	},
	external: ['react'],
	plugins: [
		resolve(),
		peerDeps(),
		commonjs(),
		typescript({
			tsconfig: './tsconfig.json',
		}),
		babel({ babelHelpers: 'bundled' }),
		terser(),
	],
}
