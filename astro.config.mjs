import { defineConfig } from 'astro/config';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

// Mapa slug -> data de última modificação (updatedDate ?? pubDate), lido do frontmatter
// dos posts, para preencher <lastmod> no sitemap (sinal de frescor por URL para o Google).
const postsDir = fileURLToPath(new URL('./src/content/posts', import.meta.url));
const lastmodBySlug = {};
for (const file of readdirSync(postsDir)) {
  if (!file.endsWith('.mdx')) continue;
  const fm = readFileSync(`${postsDir}/${file}`, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) continue;
  const pub = fm[1].match(/^pubDate:\s*(.+)$/m)?.[1]?.trim();
  const upd = fm[1].match(/^updatedDate:\s*(.+)$/m)?.[1]?.trim();
  const d = upd || pub;
  if (d) {
    const parsed = new Date(d);
    if (!isNaN(parsed)) lastmodBySlug[file.replace(/\.mdx$/, '')] = parsed.toISOString();
  }
}

// Domínio canônico = www. O apex (guiadedefesa.com.br) faz 308 → www na Vercel, então o
// host que responde 200 é o www. Sitemap e canonical DEVEM apontar para www, senão o Google
// vê "Página com redirecionamento" em todas as URLs (incluindo a home). Mantido em sincronia
// com src/consts.ts (SITE.url) e public/robots.txt.
export default defineConfig({
  site: 'https://www.guiadedefesa.com.br',
  trailingSlash: 'always',
  // pagefind() indexa o conteúdo dos artigos ao final do build (astro:build:done)
  // e gera /pagefind/ em dist/. Não exige mudar o comando de build na Vercel.
  integrations: [
    mdx(),
    sitemap({
      // Preenche <lastmod> por URL de post, a partir das datas do frontmatter.
      serialize(item) {
        const slug = item.url.match(/\/([^/]+)\/$/)?.[1];
        if (slug && lastmodBySlug[slug]) item.lastmod = lastmodBySlug[slug];
        return item;
      },
    }),
    pagefind(),
  ],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
  vite: {
    build: {
      rollupOptions: {
        // O índice do Pagefind é gerado só no build e carregado em runtime pelo
        // navegador. Marcamos como externo para o Rollup não tentar empacotá-lo.
        external: ['/pagefind/pagefind.js'],
      },
    },
  },
});
