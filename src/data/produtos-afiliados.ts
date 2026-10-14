// Vitrine de produtos com link de afiliado (Mercado Livre; AliExpress quando houver links).
// Usada pelo <ProductSlot> no lugar dos espaços de AdSense enquanto o Google não aprova o site.
// Fonte: os mesmos links já usados no resolvesimples.com.br (meli.la = link de afiliado do autor).
// Imagens em /public/produtos/ (cópia local, 360px) — nada de hotlink.
// Preço não é exibido de propósito: muda toda semana e ficaria desatualizado no site.
// Para adicionar produto: copie a imagem para public/produtos/ e acrescente um item abaixo.

export type Loja = 'mercadolivre' | 'aliexpress';

export interface ProdutoAfiliado {
  id: string;
  loja: Loja;
  nome: string;
  /** 1–2 frases, factuais, sem promessa que não dá para conferir */
  descricao: string;
  /** caminho em /public */
  imagem: string;
  href: string;
  /** usado para dar preferência a produtos afins ao tema do artigo */
  tema: 'energia' | 'casa' | 'cozinha' | 'beleza' | 'auto';
}

export const PRODUTOS: ProdutoAfiliado[] = [
  {
    id: 'powerbank-10k',
    loja: 'mercadolivre',
    nome: 'Power Bank 10.000 mAh Turbo 22,5 W com display digital',
    descricao: 'Carregador portátil que cabe no bolso, com carga rápida e display que mostra a bateria restante. Bom para a mochila do dia a dia e para apagões curtos.',
    imagem: '/produtos/ml-2TYLNx2.webp',
    href: 'https://meli.la/2TYLNx2',
    tema: 'energia',
  },
  {
    id: 'powerbank-i2go',
    loja: 'mercadolivre',
    nome: 'Power Bank i2GO Turbo 20.000 mAh 20 W com display digital',
    descricao: 'Capacidade para recarregar o celular várias vezes. Útil em viagem, em trilha e como reserva de energia em casa.',
    imagem: '/produtos/ml-2fftTns.webp',
    href: 'https://meli.la/2fftTns',
    tema: 'energia',
  },
  {
    id: 'powerbank-20k',
    loja: 'mercadolivre',
    nome: 'Power Bank 20.000 mAh 22,5 W carga rápida',
    descricao: 'Opção de 20.000 mAh com carga rápida de 22,5 W, para quem carrega mais de um aparelho ou passa o dia fora.',
    imagem: '/produtos/ml-2zhLnsz.webp',
    href: 'https://meli.la/2zhLnsz',
    tema: 'energia',
  },
  {
    id: 'airfryer-mondial-12l',
    loja: 'mercadolivre',
    nome: 'Air Fryer Forno Mondial Oven 12 L',
    descricao: 'Fritadeira sem óleo com capacidade de forno, para a família toda de uma vez. É a que o autor do Resolve Simples usa há mais de um ano.',
    imagem: '/produtos/ml-25Z84td.webp',
    href: 'https://meli.la/25Z84td',
    tema: 'cozinha',
  },
  {
    id: 'tabua-descongelar',
    loja: 'mercadolivre',
    nome: 'Tábua de descongelar rápido em alumínio',
    descricao: 'Descongela carne, frango e peixe só pela condução do alumínio, sem água quente e sem micro-ondas.',
    imagem: '/produtos/ml-2yAuVW5.webp',
    href: 'https://meli.la/2yAuVW5',
    tema: 'cozinha',
  },
  {
    id: 'tabua-magica',
    loja: 'mercadolivre',
    nome: 'Tábua mágica para descongelar alimentos',
    descricao: 'Versão mais em conta da tábua de descongelamento rápido, para acelerar o preparo do dia a dia.',
    imagem: '/produtos/ml-2ZpQzdc.webp',
    href: 'https://meli.la/2ZpQzdc',
    tema: 'cozinha',
  },
  {
    id: 'kit-silicone-12',
    loja: 'mercadolivre',
    nome: 'Kit 12 utensílios de cozinha em silicone',
    descricao: 'Conjunto de espátulas, colheres e pegadores em silicone, que não riscam panela antiaderente.',
    imagem: '/produtos/ml-2Sng2x9.webp',
    href: 'https://meli.la/2Sng2x9',
    tema: 'cozinha',
  },
  {
    id: 'cortador-14-em-1',
    loja: 'mercadolivre',
    nome: 'Cortador, picador e fatiador de legumes 14 em 1',
    descricao: 'Pica, fatia e rala legumes em segundos, com recipiente para recolher. Reduz o tempo de preparo das refeições.',
    imagem: '/produtos/ml-23h98yo.webp',
    href: 'https://meli.la/23h98yo',
    tema: 'cozinha',
  },
  {
    id: 'fatiadores-kitop',
    loja: 'mercadolivre',
    nome: 'Kit 2 fatiadores Kitop corta-tudo',
    descricao: 'Dois fatiadores manuais para legumes e verduras em fatias finas e uniformes.',
    imagem: '/produtos/ml-2wv6YAE.webp',
    href: 'https://meli.la/2wv6YAE',
    tema: 'cozinha',
  },
  {
    id: 'aspirador-electrolux',
    loja: 'mercadolivre',
    nome: 'Aspirador de pó vertical sem fio Electrolux Ergorapido',
    descricao: 'Aspirador 2 em 1 sem fio, leve, que também vira portátil. Prático para a limpeza rápida do dia a dia.',
    imagem: '/produtos/ml-1ZMBUHk.webp',
    href: 'https://meli.la/1ZMBUHk',
    tema: 'casa',
  },
  {
    id: 'aspirador-redroad',
    loja: 'mercadolivre',
    nome: 'Aspirador vertical sem fio Redroad W15 (seco e úmido)',
    descricao: 'Aspira e passa pano ao mesmo tempo, para quem quer resolver o piso em uma única passada.',
    imagem: '/produtos/ml-1SnmUPX.webp',
    href: 'https://meli.la/1SnmUPX',
    tema: 'casa',
  },
  {
    id: 'robo-xiaomi-s40',
    loja: 'mercadolivre',
    nome: 'Robô aspirador de pó Xiaomi Vacuum S40',
    descricao: 'Robô inteligente que mapeia a casa e limpa sozinho, com controle pelo celular.',
    imagem: '/produtos/ml-2NviqeP.webp',
    href: 'https://meli.la/2NviqeP',
    tema: 'casa',
  },
  {
    id: 'vassoura-rodo-silicone',
    loja: 'mercadolivre',
    nome: 'Vassoura rodo mágico de silicone UTZ',
    descricao: 'Junta pelo e poeira do piso e ainda serve de rodo para vidro e box, com a lâmina de silicone.',
    imagem: '/produtos/ml-137gUnK.webp',
    href: 'https://meli.la/137gUnK',
    tema: 'casa',
  },
  {
    id: 'escova-secadora-3em1',
    loja: 'mercadolivre',
    nome: 'Escova secadora 3 em 1 alisadora e modeladora 1000 W',
    descricao: 'Seca, alisa e modela com um só aparelho. Atenção: este modelo é 127 V.',
    imagem: '/produtos/ml-2E5qDZW.webp',
    href: 'https://meli.la/2E5qDZW',
    tema: 'beleza',
  },
  {
    id: 'escova-mondial-bivolt',
    loja: 'mercadolivre',
    nome: 'Escova rotativa Mondial cerâmica Tourmaline íon 3x1 bivolt',
    descricao: 'Escova rotativa de marca conhecida, bivolt, para funcionar em qualquer tomada de casa ou de viagem.',
    imagem: '/produtos/ml-1y6VpXF.webp',
    href: 'https://meli.la/1y6VpXF',
    tema: 'beleza',
  },
  {
    id: 'camera-de-re',
    loja: 'mercadolivre',
    nome: 'Câmera de ré universal HD 170° com visão noturna',
    descricao: 'Câmera colorida à prova d’água com cabo de 6 m, para ajudar nas manobras de estacionamento.',
    imagem: '/produtos/ml-2BG7B8e.webp',
    href: 'https://meli.la/2BG7B8e',
    tema: 'auto',
  },
];

/** Temas preferidos por categoria do site (energia/casa combinam com defesa residencial, sobrevivência etc.). */
export const TEMAS_POR_CATEGORIA: Record<string, ProdutoAfiliado['tema'][]> = {
  'defesa-residencial': ['casa', 'energia'],
  sobrevivencialismo: ['energia', 'casa'],
  'primeiros-socorros': ['energia', 'casa'],
  equipamentos: ['energia', 'auto'],
};

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Escolhe um produto de forma determinística (mesma página = mesmo produto em todo build)
 * e garante que posições diferentes da MESMA página recebam produtos diferentes.
 * `indice` = 0 (topo), 1 (fim), 2 (lateral)...
 */
export function escolherProduto(seed: string, indice = 0, categoria?: string): ProdutoAfiliado {
  const preferidos = categoria ? TEMAS_POR_CATEGORIA[categoria] : undefined;
  const ordenados = [...PRODUTOS].sort((a, b) => {
    const pa = preferidos?.includes(a.tema) ? 0 : 1;
    const pb = preferidos?.includes(b.tema) ? 0 : 1;
    return pa - pb || a.id.localeCompare(b.id);
  });
  const pool = preferidos ? ordenados.filter((p) => preferidos.includes(p.tema)) : ordenados;
  const base = hash(seed);
  // quando há poucos afins, as posições seguintes caem no catálogo inteiro
  const lista = indice < pool.length && pool.length >= 3 ? pool : ordenados;
  return lista[(base + indice * 5) % lista.length];
}
