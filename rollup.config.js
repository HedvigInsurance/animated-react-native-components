import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import pkg from './package.json'

const plugins = [typescript(), resolve(), commonjs()]
const external = ['react', 'react-native']
const globals = {
  react: 'React',
}

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'package',
      file: pkg.browser,
      format: 'umd',
      globals,
    },
    external,
    plugins,
  },
  {
    input: 'src/index.ts',
    output: [{ file: pkg.main, format: 'cjs', globals }],
    external,
    plugins,
  },
  {
    input: 'src/index.ts',
    output: [{ file: pkg.module, format: 'es', globals }],
    external,
    plugins,
  },
]
