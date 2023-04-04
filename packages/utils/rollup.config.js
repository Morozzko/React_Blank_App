import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDeps from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

const fs = require('fs')

const getFiles = (entry, extensions = [], excludeExtensions = []) => {
  let fileNames = []
  const dirs = fs.readdirSync(entry)

  dirs.forEach(dir => {
    const path = `${entry}/${dir}`

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [...fileNames, ...getFiles(path, extensions, excludeExtensions)]

      return
    }

    if (!excludeExtensions.some(exclude => dir.endsWith(exclude)) && extensions.some(ext => dir.endsWith(ext))) {
      fileNames.push(path)
    }
  })

  return fileNames
}
const extensions = ['.js', '.ts', '.jsx', '.tsx']

// eslint-disable-next-line import/no-default-export
export default {
  input: [
    './src/index.ts',
    ...getFiles('./src/hooks', extensions),
    ...getFiles('./src/components', extensions),
    ...getFiles('./src/utils', extensions),
  ],
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
      declaration: true,
      declarationDir: 'dist',
    }),
    babel({ babelHelpers: 'bundled' }),
    terser(),
    // visualizer({
    //   filename: 'bundle-analysis.html',
    //   open: true,
    // }),
  ],
}
