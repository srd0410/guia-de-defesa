import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts.ts';

export async function GET(context) {
  // Só publicados: não-rascunho e com data já alcançada (ver index.astro).
  const posts = (await getCollection('posts', ({ data }) => !data.draft && data.pubDate <= new Date()))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/${p.slug}/`,
    })),
    customData: `<language>pt-br</language>`,
  });
}
