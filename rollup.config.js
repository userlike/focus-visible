import { defineConfig } from 'rollup';
import { terser } from 'rollup-plugin-terser';

export default defineConfig([
  {
    input: 'src/focus-visible.js',
    output: {
      name: 'focusVisible',
      file: 'dist/umd/focus-visible.js',
      format: 'umd'
    }
  },
  {
    input: 'src/focus-visible.js',
    output: {
      name: 'focusVisible',
      file: 'dist/umd/focus-visible.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: [terser()]
  },
  {
    input: 'src/focus-visible.js',
    output: {
      file: 'dist/cjs/focus-visible.js',
      format: 'cjs',
      sourcemap: true
    }
  },
  {
    input: 'src/focus-visible.js',
    output: {
      file: 'dist/es/focus-visible.js',
      format: 'es',
      sourcemap: true
    }
  }
]);
