import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default defineConfig([
  {
    input: 'src/focus-visible.ts',
    output: {
      name: 'focusVisible',
      file: 'dist/umd/focus-visible.js',
      format: 'umd',
    },
    plugins: [typescript()],
  },
  {
    input: 'src/focus-visible.ts',
    output: {
      name: 'focusVisible',
      file: 'dist/umd/focus-visible.min.js',
      format: 'umd',
      sourcemap: true,
    },
    plugins: [typescript(), terser()],
  },
  {
    input: 'src/focus-visible.ts',
    output: {
      file: 'dist/cjs/focus-visible.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [typescript()],
  },
  {
    input: 'src/focus-visible.ts',
    output: {
      file: 'dist/es/focus-visible.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [typescript()],
  },
]);
