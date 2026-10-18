// Produtos de afiliado (Mercado Livre) usados no meio dos artigos (<ProdutoContexto ids="..." />)
// e na rotação de lateral/fim de artigo (<ProductSlot>). Os códigos (S1, R5...) vêm das listas
// AFILIADOS-LOTE-1.md/2.md. Nota e vendas: consulta em 14/10/2026 no Mercado Livre.
// Preço não é exibido de propósito (muda toda semana). Imagens em /public/produtos/.

export const DATA_CONSULTA = '14/10/2026';

export interface ProdutoAfiliado {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  href: string;
  nota: string;
  vendas: string;
}

export const PRODUTOS: Record<string, ProdutoAfiliado> = {
  "S1": { id: "S1", nome: "Mochila militar tática 40 L impermeável", descricao: "Mochila de 40 litros, impermeável segundo o anúncio, na faixa de capacidade usada em kits de emergência de 72 horas.", imagem: '/produtos/ml-1MkdVcA.webp', href: 'https://meli.la/1MkdVcA', nota: '4,9', vendas: 'mais de 10 mil' },
  "S2": { id: "S2", nome: "Lanterna de cabeça recarregável Hytalux HY093 2000 lm", descricao: "Lanterna de cabeça recarregável com zoom, que deixa as duas mãos livres para trocar um pneu, cozinhar ou se deslocar no escuro.", imagem: '/produtos/ml-2zZetmb.webp', href: 'https://meli.la/2zZetmb', nota: '4,8', vendas: 'mais de 10 mil' },
  "S3": { id: "S3", nome: "Lampião LED recarregável de camping", descricao: "Lampião LED recarregável de camping, para iluminar o ambiente durante uma queda de energia.", imagem: '/produtos/ml-2xzfPLc.webp', href: 'https://meli.la/2xzfPLc', nota: '4,8', vendas: 'mais de 10 mil' },
  "S4": { id: "S4", nome: "Rádio de emergência solar/manivela AM/FM com lanterna e 10.000 mAh", descricao: "Rádio AM/FM solar e de manivela, com lanterna e bateria de 10.000 mAh, para se informar quando a energia e a internet caem.", imagem: '/produtos/ml-2TKFy1N.webp', href: 'https://meli.la/2TKFy1N', nota: '4,8', vendas: 'mais de 1 mil' },
  "S4b": { id: "S4b", nome: "Rádio digital solar/manivela FM/AM USB", descricao: "Rádio digital AM/FM solar e de manivela, com lanterna e entrada USB. Opção mais barata para ouvir notícias sem energia.", imagem: '/produtos/ml-2LUgTAP.webp', href: 'https://meli.la/2LUgTAP', nota: '4,8', vendas: 'mais de 500' },
  "S5": { id: "S5", nome: "Fogareiro Nautika Frontier 1 boca", descricao: "Fogareiro de uma boca a gás, da linha Frontier da Nautika, para cozinhar e ferver água sem luz.", imagem: '/produtos/ml-1d4x1Kr.webp', href: 'https://meli.la/1d4x1Kr', nota: '4,9', vendas: 'mais de 10 mil' },
  "S5b": { id: "S5b", nome: "Fogareiro portátil dobrável ignição automática", descricao: "Fogareiro portátil dobrável a gás, com ignição automática, que ocupa pouco espaço no kit.", imagem: '/produtos/ml-1Hh6QHE.webp', href: 'https://meli.la/1Hh6QHE', nota: '4,9', vendas: 'mais de 5 mil' },
  "S6": { id: "S6", nome: "Manta térmica aluminizada de emergência (kit 3)", descricao: "Kit com 3 mantas térmicas aluminizadas (2,10 x 1,40 m): ajudam a reter o calor do corpo e ocupam quase nenhum espaço.", imagem: '/produtos/ml-2yhEJ1K.webp', href: 'https://meli.la/2yhEJ1K', nota: '4,9', vendas: 'mais de 5 mil' },
  "S7": { id: "S7", nome: "Alicate multiferramenta Nautika Bulldog 21 funções", descricao: "Alicate multiferramenta Nautika Bulldog com 21 funções, para o kit de emergência ou o EDC.", imagem: '/produtos/ml-27e5jCc.webp', href: 'https://meli.la/27e5jCc', nota: '4,9', vendas: 'mais de 1 mil' },
  "S8": { id: "S8", nome: "Filtro de água portátil de sobrevivência (Blue Purifier)", descricao: "Filtro de água portátil tipo canudo, para camping e emergências. Confira no anúncio o que ele filtra e a vida útil antes de comprar.", imagem: '/produtos/ml-2cahkjN.webp', href: 'https://meli.la/2cahkjN', nota: '4,8', vendas: 'mais de 500' },
  "S9": { id: "S9", nome: "Galão de água dobrável 8 L com torneira", descricao: "Galão dobrável de 8 litros com torneira: guarda água para uso doméstico e dobra quando vazio.", imagem: '/produtos/ml-1N4FuYM.webp', href: 'https://meli.la/1N4FuYM', nota: '4,7', vendas: 'mais de 100' },
  "S10": { id: "S10", nome: "Power bank solar 50.000 mAh", descricao: "Power bank solar de 50.000 mAh com saída USB-C. A carga pelo sol é lenta; use o painel como apoio e carregue pela tomada.", imagem: '/produtos/ml-1vPXMeV.webp', href: 'https://meli.la/1vPXMeV', nota: '4,8', vendas: 'mais de 5 mil' },
  "S11": { id: "S11", nome: "Kit 12 potes herméticos Electrolux", descricao: "Kit com 12 potes herméticos retangulares da Electrolux, para guardar mantimentos secos e proteger da umidade.", imagem: '/produtos/ml-2WeEWPC.webp', href: 'https://meli.la/2WeEWPC', nota: '4,9', vendas: 'mais de 250 mil' },
  "S12": { id: "S12", nome: "Compressor de ar portátil Vonder CAV 150", descricao: "Compressor de ar elétrico portátil Vonder CAV 150, de 120 W, para calibrar pneus na estrada ou na garagem.", imagem: '/produtos/ml-1ZUMupe.webp', href: 'https://meli.la/1ZUMupe', nota: '4,8', vendas: 'mais de 50 mil' },
  "S13": { id: "S13", nome: "Cabo chupeta 400 A, 5 m reforçado", descricao: "Cabo de chupeta de 5 metros e 400 A, reforçado, para dar partida usando a bateria de outro veículo.", imagem: '/produtos/ml-1PBBmUX.webp', href: 'https://meli.la/1PBBmUX', nota: '4,8', vendas: 'mais de 10 mil' },
  "P1": { id: "P1", nome: "Kit completo de primeiros socorros com maleta", descricao: "Kit de primeiros socorros com maleta resistente. Confira a lista de itens no anúncio e complete o que faltar.", imagem: '/produtos/ml-2bn87Ge.webp', href: 'https://meli.la/2bn87Ge', nota: '4,7', vendas: 'mais de 10 mil' },
  "P2": { id: "P2", nome: "Kit primeiros socorros compacto p/ bolsa, mochila e carro (Curatec)", descricao: "Kit compacto de primeiros socorros, feito para bolsa, mochila, camping e carro.", imagem: '/produtos/ml-1jN4dKe.webp', href: 'https://meli.la/1jN4dKe', nota: '4,8', vendas: 'mais de 5 mil' },
  "P3": { id: "P3", nome: "Bolsa organizadora de primeiros socorros (tática, SOS)", descricao: "Bolsa organizadora de primeiros socorros em estilo tático, para montar o seu kit individual e achá-lo rápido.", imagem: '/produtos/ml-1e6MB9Q.webp', href: 'https://meli.la/1e6MB9Q', nota: '4,9', vendas: 'mais de 1 mil' },
  "P4": { id: "P4", nome: "Bandagem israelense 4\" estéril", descricao: "Bandagem israelense elástica de 4 polegadas, estéril, com velcro: permite aplicar pressão sobre o ferimento.", imagem: '/produtos/ml-2LBFamV.webp', href: 'https://meli.la/2LBFamV', nota: '4,9', vendas: 'mais de 1 mil' },
  "P5": { id: "P5", nome: "Tesoura ponta romba corta-vestes (APH)", descricao: "Tesoura de ponta romba para cortar roupas no socorro sem ferir a pele.", imagem: '/produtos/ml-1itdpXQ.webp', href: 'https://meli.la/1itdpXQ', nota: '4,8', vendas: 'mais de 5 mil' },
  "P6": { id: "P6", nome: "Máscara pocket para RCP com válvula e estojo", descricao: "Máscara de bolso (pocket mask) para RCP, com válvula e estojo. O uso correto se aprende em curso presencial.", imagem: '/produtos/ml-2J5Sh7c.webp', href: 'https://meli.la/2J5Sh7c', nota: '4,9', vendas: 'mais de 5 mil' },
  "P7": { id: "P7", nome: "Luva nitrílica Descarpack, caixa 100 un", descricao: "Luvas nitrílicas pretas, caixa com 100 unidades (tamanho M), como barreira de proteção no atendimento.", imagem: '/produtos/ml-1JbGjMU.webp', href: 'https://meli.la/1JbGjMU', nota: '4,8', vendas: 'mais de 100 mil' },
  "R1": { id: "R1", nome: "Kit 2 câmeras de segurança Wi-Fi iCSee, interna/externa, à prova d'água", descricao: "Kit com 2 câmeras Wi-Fi iCSee, internas ou externas, com infravermelho e resistência a água.", imagem: '/produtos/ml-1CYpbXo.webp', href: 'https://meli.la/1CYpbXo', nota: '4,8', vendas: 'mais de 250 mil' },
  "R1b": { id: "R1b", nome: "Câmera Wi-Fi Intelbras 3 MP", descricao: "Câmera Wi-Fi Intelbras de 3 MP, de marca conhecida no Brasil, para cobrir um ponto cego da casa.", imagem: '/produtos/ml-1tjXKS7.webp', href: 'https://meli.la/1tjXKS7', nota: '4,9', vendas: 'mais de 50 mil' },
  "R2": { id: "R2", nome: "Campainha sem fio com câmera e Wi-Fi (Quick)", descricao: "Campainha sem fio com função fotográfica, Wi-Fi e sensor, da Quick, para ver quem está no portão.", imagem: '/produtos/ml-1tYjtFj.webp', href: 'https://meli.la/1tYjtFj', nota: '4,5', vendas: 'mais de 1 mil' },
  "R3": { id: "R3", nome: "Sensor de movimento que acende a luz Intelbras ESPI 360 A", descricao: "Sensor de movimento Intelbras ESPI 360 A, que acende a luz automaticamente quando detecta presença.", imagem: '/produtos/ml-1riFPb8.webp', href: 'https://meli.la/1riFPb8', nota: '4,8', vendas: 'mais de 10 mil' },
  "R3b": { id: "R3b", nome: "Interruptor com sensor de presença e fotocélula", descricao: "Interruptor com sensor de presença e fotocélula, para acender a iluminação só quando necessário.", imagem: '/produtos/ml-32uiTY8.webp', href: 'https://meli.la/32uiTY8', nota: '4,8', vendas: 'mais de 100 mil' },
  "R4": { id: "R4", nome: "Sensor magnético sem fio de porta/janela Intelbras (bateria)", descricao: "Sensor magnético sem fio da Intelbras (a bateria) para detectar a abertura de porta ou janela. Confira a compatibilidade com o seu alarme.", imagem: '/produtos/ml-1KALVaF.webp', href: 'https://meli.la/1KALVaF', nota: '4,8', vendas: 'mais de 10 mil' },
  "R5": { id: "R5", nome: "Fechadura digital biométrica de embutir Intelbras FR 221V", descricao: "Fechadura digital biométrica de embutir Intelbras FR 221V, para quem quer abrir a porta sem chave.", imagem: '/produtos/ml-2GVSicF.webp', href: 'https://meli.la/2GVSicF', nota: '4,9', vendas: 'mais de 5 mil' },
  "R5b": { id: "R5b", nome: "Fechadura eletrônica digital biometria/senha/cartão/app", descricao: "Fechadura eletrônica digital com biometria, senha, cartão e aplicativo. Opção de preço menor.", imagem: '/produtos/ml-1m6gBBj.webp', href: 'https://meli.la/1m6gBBj', nota: '4,9', vendas: 'mais de 10 mil' },
  "R6": { id: "R6", nome: "Pasta sanfonada A4 12 divisórias (documentos da família)", descricao: "Pasta sanfonada A4 com 12 divisórias, para organizar os documentos da família em um só lugar.", imagem: '/produtos/ml-2KhHVm7.webp', href: 'https://meli.la/2KhHVm7', nota: '4,9', vendas: 'mais de 10 mil' },
  "D2": { id: "D2", nome: "Smart tag localizador (Find My / Find Hub)", descricao: "Localizador (smart tag) compatível com Apple Find My e Android Find Hub, com alarme sonoro de 100 dB.", imagem: '/produtos/ml-2iaDLkq.webp', href: 'https://meli.la/2iaDLkq', nota: '4,7', vendas: 'mais de 1 mil' },
  "D3": { id: "D3", nome: "Rastreador GPS veicular Tkstar TK905 com ímã", descricao: "Rastreador GPS veicular com ímã e bateria. Verifique no anúncio o chip e o plano de dados necessários.", imagem: '/produtos/ml-1K1bCgV.webp', href: 'https://meli.la/1K1bCgV', nota: '4,5', vendas: 'mais de 5 mil' },
  "D4": { id: "D4", nome: "Mochila antifurto impermeável com porta USB", descricao: "Mochila para notebook, impermeável, com porta USB e fecho com senha.", imagem: '/produtos/ml-1bnEELz.webp', href: 'https://meli.la/1bnEELz', nota: '4,9', vendas: 'mais de 10 mil' },
  "E1": { id: "E1", nome: "Protetor auricular abafador Confort Plus 26 dB, CA 4805", descricao: "Protetor auricular tipo concha (abafador) de 26 dB, passivo. Confira o número do CA no anúncio.", imagem: '/produtos/ml-22wrC6c.webp', href: 'https://meli.la/22wrC6c', nota: '4,8', vendas: 'mais de 10 mil' },
  "E2": { id: "E2", nome: "Óculos de proteção para tiro/airsoft (teste balístico)", descricao: "Óculos de proteção para tiro e airsoft. Confira se o anúncio informa certificação (CA); sem ela é só acessório.", imagem: '/produtos/ml-2uMq4o3.webp', href: 'https://meli.la/2uMq4o3', nota: '4,8', vendas: 'mais de 500' },
  "E3": { id: "E3", nome: "Lanterna tática LED recarregável T9 Apfer", descricao: "Lanterna tática LED recarregável, modelo T9 da Apfer, com zoom.", imagem: '/produtos/ml-1VXuZDC.webp', href: 'https://meli.la/1VXuZDC', nota: '4,8', vendas: 'mais de 100 mil' },
  "E4": { id: "E4", nome: "Carregador digital de bateria 18650/26650 bivolt", descricao: "Carregador digital para baterias 18650 e 26650, bivolt, para quem usa lanterna recarregável.", imagem: '/produtos/ml-1QhVoE8.webp', href: 'https://meli.la/1QhVoE8', nota: '4,8', vendas: 'mais de 5 mil' },
  "A1": { id: "A1", nome: "Carregador GaN 65 W USB-C com 3 portas (Dapon)", descricao: "Carregador GaN de 65 W com 3 portas USB-C, que atende celular e notebook.", imagem: '/produtos/ml-2Bw72GW.webp', href: 'https://meli.la/2Bw72GW', nota: '4,9', vendas: 'mais de 1 mil' },
  "A2": { id: "A2", nome: "Caixa de som Bluetooth portátil com FM/SD 20 W", descricao: "Caixa de som Bluetooth portátil com entrada para cartão SD e rádio FM.", imagem: '/produtos/ml-2pjbX91.webp', href: 'https://meli.la/2pjbX91', nota: '4,6', vendas: 'mais de 50 mil' },
  "A3": { id: "A3", nome: "Garrafa térmica Termolar Lúmina 1 L com bomba", descricao: "Garrafa térmica Termolar Lúmina de 1 litro com bomba de pressão.", imagem: '/produtos/ml-2YscgTS.webp', href: 'https://meli.la/2YscgTS', nota: '4,7', vendas: 'mais de 100 mil' },
  "A4": { id: "A4", nome: "Suporte magnético de celular para carro", descricao: "Suporte magnético de celular para o carro, com base rotativa.", imagem: '/produtos/ml-1NwSyt8.webp', href: 'https://meli.la/1NwSyt8', nota: '4,8', vendas: 'mais de 10 mil' },
  "A5": { id: "A5", nome: "Mochila executiva antifurto impermeável (USB)", descricao: "Mochila executiva impermeável com porta USB e compartimento para notebook, com recursos antifurto.", imagem: '/produtos/ml-21SNXHH.webp', href: 'https://meli.la/21SNXHH', nota: '5,0', vendas: 'mais de 50 mil' },
  "A6": { id: "A6", nome: "Lanterna tática \"T9\" recarregável (outra loja)", descricao: "Lanterna tática T9 recarregável, versão preta.", imagem: '/produtos/ml-2gUMrWZ.webp', href: 'https://meli.la/2gUMrWZ', nota: '4,9', vendas: 'mais de 10 mil' },
  Q1: { id: 'Q1', nome: "Compressa de gaze estéril 13 fios, 500 unidades (Nobre)", descricao: "Compressas de gaze estéril em pacotes de 10 unidades, para cobrir a queimadura ou o ferimento com material limpo. Gaze comum pode grudar na ferida: troque a cobertura com cuidado.", imagem: '/produtos/ml-2WCucWf.webp', href: 'https://meli.la/2WCucWf', nota: '4,9', vendas: 'mais de 100 mil' },
  C1: { id: 'C1', nome: "Scanner de mesa Canon Lide 300 (USB)", descricao: "Scanner de mesa para digitalizar CR, CRAF, guias, protocolos e certidões e ter uma cópia digital de tudo.", imagem: '/produtos/ml-2KgPvEC.webp', href: 'https://meli.la/2KgPvEC', nota: '4,8', vendas: 'mais de 10 mil' },
  C2: { id: 'C2', nome: "HD externo portátil Toshiba Canvio 1 TB (USB 3.0)", descricao: "HD externo para guardar a cópia de segurança dos documentos digitalizados, longe do computador principal.", imagem: '/produtos/ml-1RFAGt5.webp', href: 'https://meli.la/1RFAGt5', nota: '4,8', vendas: 'mais de 10 mil' },
  C3: { id: 'C3', nome: "SSD externo portátil SanDisk 1 TB (USB 3.2)", descricao: "SSD externo, mais rápido e resistente a quedas que o HD, para a cópia de segurança dos documentos.", imagem: '/produtos/ml-25DvPZ6.webp', href: 'https://meli.la/25DvPZ6', nota: '4,9', vendas: 'mais de 10 mil' },
};

/** Rotação de lateral e fim de artigo (nunca no meio do texto): itens gerais e também equipamento de combate/tiro e kit de trauma, que só entram no meio do artigo se forem recomendação pessoal do autor. */
export const ROTACAO = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'S1', 'S2', 'S3', 'S10', 'S12', 'S13', 'E1', 'E2', 'E3', 'E4', 'P3', 'P4', 'P5'];

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Escolhe um produto da rotação de forma determinística (mesma página = mesmo produto em todo
 * build); posições diferentes da mesma página (indice 0, 1, 2) recebem produtos diferentes.
 */
export function escolherProduto(seed: string, indice = 0): ProdutoAfiliado {
  const base = hash(seed);
  return PRODUTOS[ROTACAO[(base + indice * 5) % ROTACAO.length]];
}
