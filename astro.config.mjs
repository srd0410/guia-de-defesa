import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

// Domínio canônico = www. O apex (guiadedefesa.com.br) faz 308 → www na Vercel, então o
// host que responde 200 é o www. Sitemap e canonical DEVEM apontar para www, senão o Google
// vê "Página com redirecionamento" em todas as URLs (incluindo a home). Mantido em sincronia
// com src/consts.ts (SITE.url) e public/robots.txt.
export default defineConfig({
  site: 'https://www.guiadedefesa.com.br',
  trailingSlash: 'always',
  // pagefind() indexa o conteúdo dos artigos ao final do build (astro:build:done)
  // e gera /pagefind/ em dist/. Não exige mudar o comando de build na Vercel.
  integrations: [mdx(), sitemap(), pagefind()],
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
