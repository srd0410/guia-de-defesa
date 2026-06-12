import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Troque pelo seu domínio definitivo quando ele estiver ativo.
export default defineConfig({
  site: 'https://guiadedefesa.com.br',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
