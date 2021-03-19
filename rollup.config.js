import fs from 'fs';
import path from 'path';
import dts from "rollup-plugin-dts";
import typescript from '@rollup/plugin-typescript';

const output_dir = './dist';

const prod = process.env.NODE_ENV === 'production';

const ts_plugin = typescript({
  target: 'es5',
  include: 'src/**',
  outDir: output_dir,
  typescript: require('typescript'),
});

const dump = (file) => path.join(output_dir, file);

const copy = (files) => files.forEach((file) => fs.copyFileSync(file, dump(file)));

const rmdir = (dir) =>  fs.existsSync(dir) && fs.statSync(dir).isDirectory() && fs.rmdirSync(dir, { recursive: true });

const mkdir = (dir) => !(fs.existsSync(dir) && fs.statSync(dir).isDirectory()) && fs.mkdirSync(dir);

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: dump('index.js'),
        format: 'cjs',
      },
      {
        file: dump('index.mjs'),
        format: 'esm',
      }
    ],
    plugins: [
      ts_plugin,
      rmdir(output_dir),
      mkdir(output_dir),
      copy(['package.json', 'README.md', 'LICENSE']),
    ]
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: dump('index.d.ts'),
        format: 'es'
      },
    ],
    plugins: [
      dts(),
    ]
  }
]

