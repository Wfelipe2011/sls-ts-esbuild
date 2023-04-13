import { build } from 'esbuild';

build({
  entryPoints: ['src/handler.ts'],
  outfile: 'dist/handler.mjs',
  bundle: true,
  minify: false,
  platform: 'node',
  target: 'node16', // Use a versão do Node.js correspondente à sua escolha de runtime no serverless.yml
  external: ['aws-sdk'], // Exclui o 'aws-sdk' do pacote final, pois já está disponível no ambiente AWS Lambda
  sourcemap: false,
  format: 'esm',
}).catch(() => process.exit(1));
