// Uso:  node build.js
// 1) Compila Tailwind -> tailwind.css
// 2) Mete tailwind.css + styles.css dentro de index.html (<style>), para que la primera
//    pantalla no dependa de descargar archivos CSS aparte (mejora FCP/LCP en móvil).
// Ejecútalo cada vez que cambies index.html, script.js o styles.css, y luego sube con git.
const { execSync } = require('child_process');
const fs = require('fs');

const LINKS = '<link rel="stylesheet" href="tailwind.css">\n<link rel="stylesheet" href="styles.css">';
const re = /<!-- CSS:START -->[\s\S]*?<!-- CSS:END -->/;
const setBlock = (html, inner) => {
  if (!re.test(html)) throw new Error('No encuentro los marcadores <!-- CSS:START --> / <!-- CSS:END --> en index.html');
  return html.replace(re, () => '<!-- CSS:START -->\n' + inner + '\n<!-- CSS:END -->');
};

let html = fs.readFileSync('index.html', 'utf8');

if (!process.argv.includes('--inline-only')) {
  // Restaurar los <link> antes de compilar, para que Tailwind no escanee el CSS ya incrustado
  fs.writeFileSync('index.html', setBlock(html, LINKS));
  const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  execSync(npx + ' tailwindcss@3 -i input.css -o tailwind.css --minify', { stdio: 'inherit' });
  html = fs.readFileSync('index.html', 'utf8');
}

const min = s => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '');
const css = fs.readFileSync('tailwind.css', 'utf8') + min(fs.readFileSync('styles.css', 'utf8'));
fs.writeFileSync('index.html', setBlock(html, '<style>' + css + '</style>'));
console.log('Listo: index.html actualizado con el CSS incrustado (' + Math.round(css.length / 1024) + ' KB).');
