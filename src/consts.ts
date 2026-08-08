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
  // E-mail de contato do site (sugestões de pauta, parcerias). Domínio próprio via Hostinger
  // Email (MX/SPF/DKIM/DMARC apontados na Vercel, onde o DNS do domínio é gerenciado).
  contactEmail: 'contato@guiadedefesa.com.br',
  // ID do editor AdSense (aprovado em 2026-07-09). Cada posição de anúncio ([slug].astro,
  // index.astro, categoria/[category].astro) só ativa de verdade quando também tiver o
  // "slot" (ID da unidade de anúncio) preenchido — ver COMANDOS-RAPIDOS.md, seção 4.5.
  adsenseClientId: 'ca-pub-8473582368044331',
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
  // Frase curta usada no cabeçalho da página-hub da categoria (bom para SEO).
  blurb: string;
  // Texto editorial real da página-hub (2-3 parágrafos), exibido antes do anúncio e da
  // lista de posts. Existe para a página de categoria nunca ser só H1 + blurb + anúncio +
  // cards — conteúdo próprio, não gerado a partir dos posts.
  intro: string[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'defesa-pessoal',
    name: 'Defesa Pessoal',
    blurb:
      'O lado legal, o mindset e a técnica de quem leva a sério a própria proteção e a da família.',
    intro: [
      'Defesa pessoal não começa no momento da ameaça — começa muito antes, na decisão de se preparar. Esta seção reúne o que sustenta essa decisão: o arcabouço legal da legítima defesa no Brasil, o desenvolvimento de mentalidade defensiva e as técnicas que efetivamente funcionam sob estresse, fora da ficção de filme de ação.',
      'O foco é o cidadão comum, não o operador. Aqui você encontra desde os fundamentos de consciência situacional e prevenção — a defesa que nunca precisa virar confronto — até a resposta técnica quando a ameaça já está em curso, sempre ancorada no que a lei brasileira efetivamente permite. Defesa da mulher, segurança veicular, de-escalonamento de conflito e o uso responsável da força fazem parte do mesmo eixo: proteger sem se colocar em risco maior, legal ou físico, do que a ameaça original.',
      'Não é conteúdo sobre confronto pelo confronto. É sobre estar preparado o suficiente para, na maioria das vezes, nem precisar agir — e saber exatamente o que fazer nas vezes em que precisar.',
    ],
  },
  {
    slug: 'defesa-residencial',
    name: 'Defesa Residencial',
    blurb:
      'Protocolos, camadas de segurança e equipamentos para proteger o lar antes que o problema chegue à porta.',
    intro: [
      'Proteger uma casa não é sobre um único produto ou uma única decisão — é um sistema de camadas que precisa funcionar em conjunto: perímetro, iluminação, barreiras físicas, detecção e, por trás de tudo isso, um protocolo que a família realmente conhece e pratica.',
      'Esta seção trata a segurança residencial como arquitetura, não como reação a um susto. Cobre desde escolhas estruturais — fechaduras, portas, janelas, iluminação de perímetro — até camadas eletrônicas como alarmes e câmeras, sempre com o critério de quanto cada camada realmente atrasa ou desestimula uma invasão, e não apenas o quanto parece sofisticada. Segurança digital e OPSEC doméstico entram como extensão natural do mesmo raciocínio: a porta de entrada também pode ser uma senha fraca ou uma rotina publicada nas redes.',
      'O objetivo final é sempre o mesmo: que o problema nunca chegue perto o suficiente de exigir uma resposta de emergência — e que, se chegar, a família já saiba exatamente o que fazer.',
    ],
  },
  {
    slug: 'equipamentos',
    name: 'Equipamentos & EDC',
    blurb:
      'Análises e recomendações de equipamento e everyday carry — o que vale o seu dinheiro e o que não vale.',
    intro: [
      'Equipamento certo não substitui treino, mas equipamento errado atrapalha até quem treina bem. Esta seção existe para separar as duas coisas: o que realmente entrega desempenho e confiabilidade, e o que é só marketing bem-feito.',
      'As análises aqui partem de critério de instrutor, não de review genérico — óticas e red dots, coldres, lanternas táticas, munição e balística terminal, facas e ferramentas de everyday carry, proteção auditiva e visual. Cada recomendação deixa claro se vem de uso pessoal testado ou de pesquisa sem experiência direta; nenhuma indicação aqui finge uma confiança que não existe. Manutenção, limpeza e armazenamento completam o quadro, porque o melhor equipamento do mundo falha se for mal cuidado.',
      'Cada análise carrega a mesma pergunta de fundo: isso vale o dinheiro para quem leva a sério o próprio EDC, ou é só mais um produto bonito na prateleira?',
    ],
  },
  {
    slug: 'sobrevivencialismo',
    name: 'Sobrevivencialismo',
    blurb:
      'Prontidão, prepping e autossuficiência: estar preparado quando a normalidade falha.',
    intro: [
      'Sobrevivencialismo bem-feito não é sobre paranoia nem sobre bunker — é sobre reduzir metodicamente os pontos em que sua rotina depende de tudo continuar funcionando normalmente. Água, energia, alimentação, comunicação: cada camada de dependência removida é uma camada de vulnerabilidade a menos quando algo sai do previsto.',
      'Esta seção cobre prontidão de forma prática e escalável, começando pelo kit de 72 horas e pelo armazenamento básico de água e alimento, e avançando para energia e iluminação de emergência, comunicação em situação de crise e as habilidades de bushcraft que sustentam autossuficiência real fora de casa. Saúde em emergência aparece como extensão direta do mesmo raciocínio: parte da prontidão é saber agir quando ajuda profissional não está a poucos minutos de distância.',
      'A meta não é acumular medo do pior cenário — é reduzir, um item de cada vez, o quanto o dia a dia depende de que nada saia do previsto.',
    ],
  },
  {
    slug: 'tiro',
    name: 'Tiro',
    blurb:
      'Tiro esportivo, tiro de combate e fundamentos técnicos — do primeiro disparo à competição.',
    intro: [
      'Atirar bem é uma habilidade motora que se constrói em camadas — postura, empunhadura, respiração, controle de gatilho — muito antes de qualquer discussão sobre velocidade ou competição. Esta seção cobre esse caminho inteiro, dos fundamentos técnicos do primeiro disparo até o refinamento que separa quem atira ocasionalmente de quem atira com consistência.',
      'Saque e apresentação, manejo e segurança da arma, modalidades esportivas como Steel Challenge e IPSC, tiro defensivo e a prática de dry fire (treino a seco) — cada tema é tratado como técnica que se treina deliberadamente, não como talento inato. A ponte com a ciência do treinamento é constante: entender por que uma técnica funciona sob estresse importa tanto quanto saber executá-la no estande, calmo e sem pressão.',
      'O critério aqui não é impressionar. É repetir o fundamento certo até ele virar automático quando importa.',
    ],
  },
  {
    slug: 'ciencia-do-treinamento',
    name: 'Ciência do Treinamento',
    blurb:
      'Neurociência e biomecânica aplicadas ao treino: por que uma técnica funciona sob estresse.',
    intro: [
      'A maior parte do que se ensina sobre tiro e defesa pessoal é transmitida por tradição — "sempre foi assim" — sem que ninguém pergunte por quê. Esta seção existe para responder esse "por quê" com o que a ciência do treinamento, a neurociência do estresse e a biomecânica já sabem sobre desempenho humano sob pressão.',
      'Prática deliberada, periodização, estrutura de treino, biomecânica aplicada ao disparo e os efeitos concretos do estresse agudo — frequência cardíaca elevada, degradação da motricidade fina, visão em túnel — sobre a tomada de decisão em uma situação real. É o diferencial técnico do site: em vez de repetir dicas soltas, cada artigo conecta o fundamento científico à aplicação prática no estande ou no dia a dia.',
      'Entender o mecanismo por trás de uma técnica é o que permite adaptá-la quando a situação foge do script — e é isso que treino de verdade precisa entregar.',
    ],
  },
  {
    slug: 'fundamentos',
    name: 'Fundamentos',
    blurb:
      'O porquê antes do como: responsabilidade, prudência e a base de quem decide se preparar para proteger.',
    intro: [
      'Antes de qualquer técnica, equipamento ou tática, existe uma decisão mais fundamental: por que se preparar para proteger, e com que responsabilidade essa preparação vem junto. Esta seção trata da base mental e ética que sustenta tudo o mais no site — sem ela, técnica vira apenas capacidade, sem critério para saber quando e se usá-la.',
      'Consciência situacional, o dever de proteger a família, a ética e a responsabilidade no uso da força e os códigos de prontidão que orientam a tomada de decisão sob pressão (como o ciclo OODA) formam o núcleo dessa discussão. É um tema que precede — e deveria orientar — qualquer conversa sobre defesa pessoal, tiro ou equipamento: a pergunta não é só "o que fazer", mas "por que, e a que custo".',
      'Quem pula essa base tende a acumular capacidade técnica sem o julgamento para usá-la bem. Esta seção existe para não deixar isso acontecer.',
    ],
  },
  {
    slug: 'legislacao',
    name: 'Legislação e Direito',
    blurb:
      'Armas, porte, posse e legítima defesa explicados com base na lei — conteúdo educativo, com referência na fonte primária.',
    intro: [
      'Legislação de armas no Brasil é onde mais se erra por achismo — decretos mudam, competências são transferidas entre órgãos, e o que era verdade há dois anos pode não ser mais. Esta seção existe para tratar esse terreno com o rigor que ele exige: sempre com referência à fonte primária (lei, decreto, instrução normativa) e nunca como opinião genérica sobre "o que a lei diz".',
      'Os temas cobrem o Estatuto do Desarmamento, a diferença entre porte e posse, o aprofundamento jurídico da legítima defesa, decretos e atualizações recentes — como a transferência da competência sobre CAC do Exército para a Polícia Federal, em vigor desde julho de 2025 (Decreto 11.615/2023) — e o passo a passo de processos administrativos junto aos órgãos competentes. Guias de tráfego e o lado legal do transporte de arma completam o quadro.',
      'Este conteúdo é educativo, não é assessoria jurídica: para uma situação específica, a orientação de um advogado especializado continua insubstituível. O que esta seção oferece é a base para entender a norma antes de precisar dela.',
    ],
  },
  {
    slug: 'cac-tiro-desportivo',
    name: 'CAC e Tiro Desportivo',
    blurb:
      'O universo do CAC: como se tornar e se manter em dia, acervo, guias de tráfego, clubes, federações e colecionamento.',
    intro: [
      'Ser CAC — Colecionador, Atirador ou Caçador — envolve uma camada de burocracia que praticamente não tem paralelo em outros hobbies regulamentados no Brasil, e é justamente aí que a maioria das dúvidas reais aparece: como se registrar, quanto pode ter no acervo, como funciona a guia de tráfego na prática, e o que muda a cada nova norma da Polícia Federal.',
      'Esta seção cobre esse universo do início ao dia a dia consolidado: o passo a passo para se tornar CAC, limites e categorias de acervo, clubes e federações de tiro esportivo, os aspectos legais e regionais da caça, e o colecionamento como categoria própria dentro do sistema. Prazos de renovação — como o calendário escalonado de CRAF por mês de nascimento, definido pela IN DG/PF nº 330/2026 — recebem atenção específica, porque é onde mais gente perde prazo por falta de informação clara.',
      'O objetivo é ser a referência que falta em português para quem já é CAC ou está decidindo se tornar um: informação prática, atualizada e ancorada na norma vigente.',
    ],
  },
  {
    slug: 'primeiros-socorros',
    name: 'Primeiros Socorros e Trauma',
    blurb:
      'Atendimento pré-hospitalar e resposta a trauma: controle de hemorragia, kit IFAK e as primeiras intervenções em situações de risco à vida.',
    intro: [
      'Nos primeiros minutos depois de um trauma grave, o que se faz — ou deixa de fazer — antes do socorro profissional chegar pode determinar o desfecho. Esta seção cobre exatamente essa janela: controle de hemorragia com torniquete e agente hemostático, montagem e uso de um kit IFAK, reconhecimento de trauma penetrante e resposta a emergências clínicas comuns, sempre com base em protocolo revisado, não em intuição.',
      'O conteúdo aqui é baseado em evidência e nas diretrizes mais recentes de entidades como a American Heart Association, sempre citadas com a instituição e o ano de revisão. Isso inclui RCP e resposta à parada cardíaca, além de orientação clara sobre quando uma situação exige atendimento médico imediato em vez de intervenção leiga.',
      'Nenhum artigo aqui substitui treinamento presencial certificado: ler sobre controle de hemorragia é preparação necessária, mas não é o mesmo que praticar a técnica sob supervisão. Esta seção existe para que, quando os minutos contarem, a teoria já esteja internalizada — o treino presencial continua sendo indispensável.',
    ],
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
  instagram: { label: 'Instagram', color: '#E1306C', text: '#FFFFFF' },
  outro: { label: 'Ver oferta', color: '#687843', text: '#FFFFFF' },
} as const;

export type StoreKey = keyof typeof STORES;
