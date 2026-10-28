// Extrai as FAQs (<Faq items={[...]} />) dos posts em tempo de build, para montar a página
// central /perguntas-frequentes/ sem copiar nada à mão. Os arquivos .mdx são nossos (conteúdo
// confiável), por isso o literal do array é avaliado com `new Function`.
import { getCollection } from 'astro:content';
import { CATEGORIES } from '../consts';

export interface FaqEntry {
  q: string;
  short: string;      // resposta curta (1ª frase), sem HTML
  slug: string;       // slug do artigo
  title: string;      // título do artigo
  category: string;   // slug da categoria
  tags: string[];
  pubDate: Date;
}

const strip = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// Primeira frase (até ~190 caracteres), para o hub não repetir a resposta inteira do artigo.
export function shorten(html: string, max = 190): string {
  const t = strip(html);
  const m = t.match(/^(.{40,}?[.!?])(\s|$)/);
  let s = m ? m[1] : t;
  if (s.length > max) s = s.slice(0, max).replace(/\s+\S*$/, '') + '…';
  return s;
}

export async function getAllFaqs(): Promise<FaqEntry[]> {
  const posts = (await getCollection('posts', ({ data }) => !data.draft && data.pubDate <= new Date()))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const out: FaqEntry[] = [];
  for (const p of posts) {
    const m = (p.body ?? '').match(/<Faq\s+items=\{([\s\S]*?)\}\s*\/>/);
    if (!m) continue;
    let items: { q: string; a: string }[] = [];
    try { items = new Function('return ' + m[1])(); } catch { continue; }
    for (const it of items) {
      if (!it?.q || !it?.a) continue;
      out.push({
        q: it.q,
        short: shorten(it.a),
        slug: p.slug,
        title: p.data.title,
        category: p.data.category,
        tags: p.data.tags ?? [],
        pubDate: p.data.pubDate,
      });
    }
  }
  return out;
}

export function categoryOrder(slug: string) {
  const i = CATEGORIES.findIndex((c) => c.slug === slug);
  return i < 0 ? 999 : i;
}
