import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

let pkg = require('./package.json')
let plugins = [
  resolve(),
  babel(),
  commonjs(),
  terser({
    sourcemap: true
  })
]

export default [
  {
    input: 'src/node-index.js',
    plugins,
    output: [
      {
        file: pkg.main,
        name: 'utils',
        format: 'cjs'
      }
    ]
  },
  {
    input: 'src/index.js',
    plugins,
    output: [
      {
        file: pkg.module,
        format: 'esm'
      }
    ]
  }
]
