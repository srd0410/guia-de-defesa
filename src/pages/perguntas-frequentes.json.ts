// Índice de busca da página /perguntas-frequentes/ (carregado só quando a pessoa usa a busca).
import { getAllFaqs } from '../lib/faq';

export async function GET() {
  const all = await getAllFaqs();
  const data = all.map((f) => ({ q: f.q, s: f.short, u: `/${f.slug}/#perguntas-frequentes`, t: f.title, c: f.category, g: f.tags.join(' ') }));
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
