// =============================================================
//  Configuração central do site. Mexa AQUI para ajustar marca,
//  domínio, categorias e dados de afiliado/anúncio.
// =============================================================

export const SITE = {
  name: 'Guia de Defesa',
  tagline: 'Defesa pessoal, equipamento e prontidão — com método.',
  // Troque pelo domínio definitivo:
  url: 'https://guiadedefesa.com.br',
  // Usado nas meta tags sociais e no rodapé:
  description:
    'Conteúdo sério sobre defesa pessoal, defesa residencial, equipamentos e EDC, ' +
    'sobrevivencialismo, tiro e a ciência por trás do treinamento.',
  author: 'Guia de Defesa',
  locale: 'pt_BR',
  // Quando tiver o ID do AdSense, cole aqui (ex.: 'ca-pub-0000000000000000').
  // Deixe vazio para não carregar nada de anúncio ainda.
  adsenseClientId: '',
};

export type CategorySlug =
  | 'defesa-pessoal'
  | 'defesa-residencial'
  | 'equipamentos'
  | 'sobrevivencialismo'
  | 'tiro'
  | 'ciencia-do-treinamento'
  | 'fundamentos';

export interface Category {
  slug: CategorySlug;
  name: string;
  // Frase curta usada na página-hub da categoria (bom para SEO).
  blurb: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'defesa-pessoal',
    name: 'Defesa Pessoal',
    blurb:
      'O lado legal, o mindset e a técnica de quem leva a sério a própria proteção e a da família.',
  },
  {
    slug: 'defesa-residencial',
    name: 'Defesa Residencial',
    blurb:
      'Protocolos, camadas de segurança e equipamentos para proteger o lar antes que o problema chegue à porta.',
  },
  {
    slug: 'equipamentos',
    name: 'Equipamentos & EDC',
    blurb:
      'Análises e recomendações de equipamento e everyday carry — o que vale o seu dinheiro e o que não vale.',
  },
  {
    slug: 'sobrevivencialismo',
    name: 'Sobrevivencialismo',
    blurb:
      'Prontidão, prepping e autossuficiência: estar preparado quando a normalidade falha.',
  },
  {
    slug: 'tiro',
    name: 'Tiro',
    blurb:
      'Tiro esportivo, tiro de combate e fundamentos técnicos — do primeiro disparo à competição.',
  },
  {
    slug: 'ciencia-do-treinamento',
    name: 'Ciência do Treinamento',
    blurb:
      'Neurociência e biomecânica aplicadas ao treino: por que uma técnica funciona sob estresse.',
  },
  {
    slug: 'fundamentos',
    name: 'Fundamentos',
    blurb:
      'O porquê antes do como: responsabilidade, prudência e a base de quem decide se preparar para proteger.',
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

// Lojas suportadas pelo componente de produto afiliado.
export const STORES = {
  mercadolivre: { label: 'Mercado Livre', color: '#FFE600', text: '#2D3277' },
  amazon: { label: 'Amazon', color: '#FF9900', text: '#131A22' },
  shopee: { label: 'Shopee', color: '#EE4D2D', text: '#FFFFFF' },
  aliexpress: { label: 'AliExpress', color: '#E62E04', text: '#FFFFFF' },
  outro: { label: 'Ver oferta', color: '#687843', text: '#FFFFFF' },
} as const;

export type StoreKey = keyof typeof STORES;
