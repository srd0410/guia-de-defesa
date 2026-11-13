// Conta os links de afiliado (rel="sponsored") de cada página gerada em dist/ e avisa quando
// alguma passa do teto. Uso: npm run build && npm run check:afiliados  (--strict = falha o comando).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const TETO = 3;
const raiz = fileURLToPath(new URL('../dist/', import.meta.url));
const paginas = [];
(function andar(dir) {
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome);
    if (statSync(p).isDirectory()) andar(p);
    else if (nome === 'index.html') paginas.push(p);
  }
})(raiz);

const acima = [];
const faixas = { zero: 0, dentro: 0, fora: 0 };
for (const p of paginas) {
  const html = readFileSync(p, 'utf8');
  const n = (html.match(/<a\b[^>]*\brel="[^"]*\bsponsored\b[^"]*"/g) ?? []).length;
  faixas[n === 0 ? 'zero' : n <= TETO ? 'dentro' : 'fora']++;
  if (n > TETO) acima.push([n, '/' + relative(raiz, p).replace(/\\/g, '/').replace(/index\.html$/, '')]);
}
acima.sort((a, b) => b[0] - a[0]);
console.log(`Páginas: ${paginas.length} | sem afiliado: ${faixas.zero} | 1 a ${TETO}: ${faixas.dentro} | acima de ${TETO}: ${faixas.fora}`);
for (const [n, url] of acima) console.log(`  ${String(n).padStart(3)}  ${url}`);
if (acima.length && process.argv.includes('--strict')) process.exit(1);
