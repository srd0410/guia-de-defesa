import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

// Troque pelo seu domínio definitivo quando ele estiver ativo.
export default defineConfig({
  site: 'https://guiadedefesa.com.br',
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
