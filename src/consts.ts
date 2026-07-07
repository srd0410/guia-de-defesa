// =============================================================
//  Configuração central do site. Mexa AQUI para ajustar marca,
//  domínio, categorias e dados de afiliado/anúncio.
// =============================================================

export const SITE = {
  name: 'Guia de Defesa',
  tagline: 'Defesa pessoal, equipamento e prontidão.',
  // Subtítulo alternativo — use em componentes, rodapé, cards de apresentação etc.
  taglineAlt: 'Conhecer, treinar, proteger.',
  // Domínio canônico = www (o apex faz 308 → www na Vercel). Deve casar com o `site` em
  // astro.config.mjs e o Sitemap em public/robots.txt. Usado no canonical, og:url e JSON-LD.
  url: 'https://www.guiadedefesa.com.br',
  // Usado nas meta tags sociais e no rodapé:
  description:
    'Guia completo sobre defesa pessoal, residencial, tiro, legislação, equipamentos, ' +
    'primeiros socorros, preparação e prontidão. Informação técnica para quem quer aprender e pesquisar.',
  author: 'Guia de Defesa',
  locale: 'pt_BR',
  // Quando tiver o ID do AdSense, cole aqui (ex.: 'ca-pub-0000000000000000').
  // Deixe vazio para não carregar nada de anúncio ainda.
  adsenseClientId: '',
};

// Autor padrão dos artigos (sinal forte de E-E-A-T para Google e IAs).
export const AUTHOR = {
  name: 'Felipe Arrais Serodio',
  role: 'Instrutor de Tiro',
  url: '/autor/',
  credentials: [
    'Instrutor de Armamento e Tiro - Credenciado pela Polícia Federal',
    'Instrutor de Tiro licenciado - Metodologia ETC (Esperandio Tactical Concept)',
  ],
  bio:
    'Felipe Arrais Serodio é instrutor de tiro credenciado pela Polícia Federal e ' +
    'licenciado na Metodologia ETC (Esperandio Tactical Concept). Dedica-se ao ensino e ' +
    'ao estudo do tiro com base em ciência do treinamento, biomecânica e fundamentos ' +
    'técnicos, traduzindo a pesquisa em prática deliberada no estande e fora dele. ' +
    'Escreve sobre defesa pessoal, tiro e prontidão com rigor técnico e sem sensacionalismo.',
  knowsAbout: [
    'defesa pessoal', 'tiro esportivo', 'tiro de combate', 'treinamento de tiro',
    'biomecânica do tiro', 'prática deliberada no tiro', 'defesa residencial', 'EDC',
  ],
  // Selo de credencial exibido junto das credenciais do autor.
  seal: {
    src: '/selo-etc.png',
    alt: 'Selo de Instrutor Licenciado — Metodologia ETC (Esperandio Tactical Concept)',
  },
};

export type CategorySlug =
  | 'defesa-pessoal'
  | 'defesa-residencial'
  | 'equipamentos'
  | 'sobrevivencialismo'
  | 'tiro'
  | 'ciencia-do-treinamento'
  | 'fundamentos'
  | 'legislacao'
  | 'cac-tiro-desportivo'
  | 'primeiros-socorros';

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
  {
    slug: 'legislacao',
    name: 'Legislação e Direito',
    blurb:
      'Armas, porte, posse e legítima defesa explicados com base na lei — conteúdo educativo, com referência na fonte primária.',
  },
  {
    slug: 'cac-tiro-desportivo',
    name: 'CAC e Tiro Desportivo',
    blurb:
      'O universo do CAC: como se tornar e se manter em dia, acervo, guias de tráfego, clubes, federações e colecionamento.',
  },
  {
    slug: 'primeiros-socorros',
    name: 'Primeiros Socorros e Trauma',
    blurb:
      'Atendimento pré-hospitalar e resposta a trauma: controle de hemorragia, kit IFAK e as primeiras intervenções em situações de risco à vida.',
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
