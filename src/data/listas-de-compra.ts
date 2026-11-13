// Listas de compra ("monte seu kit"): subpáginas de um artigo que concentram as sugestões de
// produto que não cabem no artigo (lá o teto é de 3 links). Regras desta camada:
// - URL /<artigo>/<segmento>/, ligada ao artigo por link interno comum (sem afiliado).
// - noindex, follow e fora do sitemap: é página de utilidade para quem já leu o artigo, não
//   página de busca; não entra na avaliação de qualidade do índice.
// - Cada item diz POR QUE está ali e quanto levar; produto é opcional (itens de mercado e
//   farmácia ficam sem link de propósito).
// - Texto honesto: sugestões por avaliação/preço no Mercado Livre, sem uso próprio, salvo
//   quando o autor disser que usa.
// O teto de 3 links do `npm run check:afiliados` não se aplica a páginas noindex.
// Segmento novo de URL? Acrescente-o ao filtro do sitemap em astro.config.mjs.
import type { ProdutoAfiliado } from './produtos-afiliados';

export interface ItemLista {
  /** O que ter (texto do checklist). */
  item: string;
  /** Por que e quanto, em uma ou duas frases. */
  porque: string;
  /** Códigos de PRODUTOS (produtos-afiliados.ts) ou produtos avulsos, na ordem de exibição. */
  produtos?: (string | ProdutoAfiliado)[];
}

export interface SecaoLista {
  titulo: string;
  intro?: string;
  itens: ItemLista[];
}

export interface ListaDeCompra {
  /** slug do artigo de origem */
  artigo: string;
  /** segmento da URL da subpágina */
  segmento: string;
  titulo: string;
  description: string;
  /** rótulo curto do breadcrumb */
  rotulo: string;
  intro: string[];
  secoes: SecaoLista[];
  /** observações finais (personalização, manutenção) */
  fechamento: string[];
}

// Produto avulso (não está no catálogo geral): a mochila do card do artigo do kit 72 horas.
const MOCHILA_INVICTUS: ProdutoAfiliado = {
  id: 'KIT-MOCHILA-INVICTUS',
  nome: 'Mochila tática Invictus Giant Pro 72 Horas, 42 a 55 L',
  descricao:
    'Mochila pensada para o conceito de 72 horas, expansível de 42 a 55 L. Cheia, fica pesada: monte só com o essencial e teste o peso antes.',
  imagem: '',
  href: 'https://meli.la/28BAHGC',
  nota: '4,8',
  vendas: 'mais de 500',
};

export const LISTAS: ListaDeCompra[] = [
  {
    artigo: 'kit-72-horas-mochila-emergencia',
    segmento: 'monte-seu-kit',
    titulo: 'Monte seu kit de 72 horas: lista de compras item por item',
    description:
      'Lista de compras do kit de emergência de 72 horas, item por item: o que levar, quanto e por quê, com sugestões de produto no Mercado Livre.',
    rotulo: 'Monte seu kit',
    intro: [
      'Esta é a lista de compras do [kit de emergência de 72 horas](/kit-72-horas-mochila-emergencia/), na mesma ordem de prioridade do guia: água, abrigo e luz primeiro, comida depois. Marque o que você já tem e compre só o que falta.',
      'Os itens de mercado e de farmácia ficam sem link de propósito: compre onde for mais perto. Os demais trazem uma ou duas sugestões no Mercado Livre, escolhidas por avaliação e preço na data indicada em cada uma, sem uso próprio.',
    ],
    secoes: [
      {
        titulo: 'Água',
        intro: 'Carregar três dias de água para a família é inviável em peso. A mochila leva a água do primeiro momento e o meio de tornar potável a que você encontrar.',
        itens: [
          { item: 'Água potável para o primeiro dia', porque: 'Garrafas fechadas, de 2 a 4 litros por pessoa. O resto da conta (48 litros para quatro pessoas em três dias) fica em casa.' },
          { item: 'Pastilhas purificadoras', porque: 'O meio mais leve de desinfetar água. Coe a água turva antes e respeite o tempo de espera da embalagem.', produtos: ['K2'] },
          { item: 'Filtro portátil (opcional)', porque: 'Complementa as pastilhas para tirar partículas. Confira no anúncio o que ele filtra e a vida útil.', produtos: ['S8'] },
          { item: 'Recipiente dobrável', porque: 'Para buscar e guardar água num ponto de distribuição, sem ocupar espaço quando vazio.', produtos: ['S9'] },
        ],
      },
      {
        titulo: 'Abrigo e temperatura',
        intro: 'A exposição ao frio, à chuva ou ao sol derruba mais rápido que a fome.',
        itens: [
          { item: 'Manta térmica aluminizada (uma por pessoa)', porque: 'Segura o calor de quem ficou molhado e dobra do tamanho de um lenço.', produtos: ['K1', 'S6'] },
          { item: 'Saco térmico de emergência', porque: 'Faz o mesmo que a manta por mais tempo, para passar a noite fora de casa. É peça de socorro, não saco de dormir de acampamento.', produtos: ['K11'] },
          { item: 'Capa de chuva e uma muda de roupa seca', porque: 'Roupa seca em saco plástico e calçado fechado, principalmente em enchente.' },
        ],
      },
      {
        titulo: 'Luz e energia',
        intro: 'Lanterna recarregável fica inútil sem energia; a de pilha comum continua funcionando.',
        itens: [
          { item: 'Lanterna de mão a pilha', porque: 'Uma por adulto, de preferência com o mesmo tipo de pilha das outras.', produtos: ['K12'] },
          { item: 'Lanterna de cabeça', porque: 'Deixa as duas mãos livres para carregar, cozinhar ou socorrer. Deixe carregada.', produtos: ['K5'] },
          { item: 'Pilhas reserva AA e AAA', porque: 'Pelo menos uma troca completa para cada aparelho do kit, guardada longe do calor.', produtos: ['K3', 'K4'] },
          { item: 'Power bank carregado e cabo', porque: 'Mantém o celular vivo. O painel solar ajuda pouco: carregue pela tomada e recarregue a cada revisão do kit.', produtos: ['S10'] },
        ],
      },
      {
        titulo: 'Comunicação e sinalização',
        itens: [
          { item: 'Rádio AM/FM a pilha', porque: 'Com internet e celular fora do ar, é o que traz o aviso oficial da Defesa Civil.', produtos: ['K9', 'S4'] },
          { item: 'Apito', porque: 'Sinaliza sua posição quando a voz não alcança. Prenda na alça da mochila.', produtos: ['K7'] },
          { item: 'Lista de contatos no papel', porque: 'Telefones da família e os de emergência: Defesa Civil (199), Bombeiros (193) e SAMU (192).' },
        ],
      },
      {
        titulo: 'Saúde',
        itens: [
          { item: 'Remédios de uso contínuo e cópia da receita', porque: 'Para quem depende de um remédio diário, ele vale tanto quanto a água. Leve para pelo menos três dias.' },
          { item: 'Estojo de primeiros socorros', porque: 'Curativo, gaze, esparadrapo, antisséptico e analgésico. Confira a lista do anúncio e complete o que faltar.', produtos: ['K10', 'P2'] },
          { item: 'Higiene', porque: 'Lenço umedecido, papel higiênico, sabonete, álcool em gel e sacos de lixo. Compra de mercado.' },
        ],
      },
      {
        titulo: 'Comida',
        intro: 'Alimento que não precisa de fogo nem de geladeira, de alto valor energético. A reserva grande fica em casa, com rodízio.',
        itens: [
          { item: 'Comida pronta para três dias', porque: 'Atum, sardinha, barra de cereal, castanha e biscoito. Compra de mercado, sempre o mais antigo primeiro.' },
          { item: 'Abridor de latas manual', porque: 'Pequeno, barato e faz falta quando a comida é enlatada.', produtos: ['K6'] },
        ],
      },
      {
        titulo: 'Documentos e dinheiro',
        itens: [
          { item: 'Saco estanque', porque: 'Cópias de documentos, dinheiro e celular secos numa enchente. Saco plástico comum rasga.', produtos: ['K8'] },
          { item: 'Dinheiro em notas pequenas', porque: 'Máquina de cartão e caixa eletrônico param sem luz.' },
        ],
      },
      {
        titulo: 'Ferramentas',
        itens: [
          { item: 'Multiferramenta', porque: 'Faca, alicate e chave de fenda num volume só.', produtos: ['S7'] },
          { item: 'Isqueiro ou fósforo à prova d’água', porque: 'Pequeno e leve. Compra de mercado.' },
        ],
      },
      {
        titulo: 'A mochila',
        intro: 'Ela tem de ser carregável por quem vai usá-la. Escolha pelo peso que você aguenta andar, não pela capacidade máxima.',
        itens: [
          { item: 'Mochila de 40 a 55 litros', porque: 'Uma por adulto que vai carregar. Água, lanterna e primeiros socorros ficam nos bolsos de acesso rápido.', produtos: ['S1', MOCHILA_INVICTUS] },
        ],
      },
    ],
    fechamento: [
      'Some os itens da sua família, que não têm lista pronta: fralda e a fórmula que o bebê já usa, o que o idoso precisa e a ração e a água do animal de estimação.',
      'Revise o kit a cada seis meses: troque a água, a comida e os remédios que venceram e recarregue lanterna e power bank.',
    ],
  },
];
