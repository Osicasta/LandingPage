const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['/js/script.js'],  // Archivo principal de JavaScript
  bundle: true,                // Empaqueta todos los módulos en uno solo
  minify: true,                // Minifica el código
  outfile: 'dist/apprueba.js',      // Salida del archivo empaquetado y minificado
  sourcemap: true,             // Crea un archivo sourcemap para depuración
}).catch(() => process.exit(1));
