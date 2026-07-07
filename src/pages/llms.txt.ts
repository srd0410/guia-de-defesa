import { getCollection } from 'astro:content';
import { SITE, AUTHOR, CATEGORIES } from '../consts';

// Endpoint dinâmico (mesmo padrão do rss.xml.js): gera o /llms.txt a partir do
// conteúdo real do site a cada build, para nunca ficar desatualizado conforme
// novos artigos são publicados. Convenção llms.txt (llmstxt.org) — um resumo do
// site em Markdown simples, pensado para ser lido por agentes de IA/LLMs.

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft && data.pubDate <= new Date()))
    .sort((a, b) => a.data.title.localeCompare(b.data.title, 'pt-BR'));

  const siteUrl = (context.site ?? new URL(SITE.url)).href.replace(/\/$/, '');

  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push('');
  lines.push(`> ${SITE.description}`);
  lines.push('');
  lines.push(
    `Escrito por ${AUTHOR.name} (${AUTHOR.credentials.join(', ')}). ` +
      `Conteúdo em português do Brasil, com foco no contexto legal e prático brasileiro.`,
  );
  lines.push('');

  for (const cat of CATEGORIES) {
    const catPosts = posts.filter((p) => p.data.category === cat.slug);
    if (catPosts.length === 0) continue;
    lines.push(`## ${cat.name}`);
    lines.push('');
    lines.push(cat.blurb);
    lines.push('');
    for (const p of catPosts) {
      lines.push(`- [${p.data.title}](${siteUrl}/${p.slug}/): ${p.data.description}`);
    }
    lines.push('');
  }

  lines.push('## Sobre');
  lines.push('');
  lines.push(`- [Sobre o site](${siteUrl}/sobre/)`);
  lines.push(`- [Sobre o autor](${siteUrl}${AUTHOR.url})`);
  lines.push(`- [Sitemap XML](${siteUrl}/sitemap-index.xml)`);
  lines.push(`- [Feed RSS](${siteUrl}/rss.xml)`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
