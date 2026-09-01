# CONTINUAR AQUI — Guia de Defesa

> Documento de retomada. Leia este arquivo + o `CLAUDE.md` no início de qualquer nova
> sessão. Aponte o Claude Code para **esta** pasta (`F:\Sites\guia-de-defesa`). A skill
> `motor-de-conteudo` (em `.claude/skills/`) carrega sozinha.

## Onde está (estado atual)
- **Repositório:** github.com/srd0410/guia-de-defesa. **Publicado** (Vercel + domínio
  `guiadedefesa.com.br`). A cada merge na `main`, a Vercel republica.
- **48 artigos publicados**, em 10 clusters:
  - **Plano de 30 (completo):** Defesa Pessoal 7 · Equipamentos 7 · Defesa Residencial 5 ·
    Tiro 4 · Ciência do Treinamento 3 · Sobrevivencialismo 3 · Fundamentos 1.
  - **Expansão:** Legislação e Direito 8 · CAC e Tiro Desportivo 6 · Primeiros Socorros 4.
  - **Acrescentados nesta fase:** Legislação — `como-tirar-registro-de-arma`,
    `porte-de-arma-quem-pode`, `sinarm-x-sigma`, `renovacao-registro-de-arma`; CAC —
    `renovacao-craf-2026` (calendário escalonado da PF por mês de aniversário).
- **Fato YMYL fixado (1):** competência do CAC é da **Polícia Federal** (não Exército) desde
  01/07/2025. Todo conteúdo novo de CAC deve refletir isso (ver `CLAUDE.md`).
- **Fato YMYL fixado (2):** renovação dos CRAFs que venciam em 20/07/2026 foi prorrogada pela
  **IN DG/PF nº 330/2026**, com calendário escalonado por mês de nascimento (ago/2026 a
  ago/2027). Documentado em `renovacao-craf-2026.mdx` (datas conferidas em gov.br/pf).
- **Skill atualizada:** `motor-de-conteudo` agora exige **retro-linkagem** — ao publicar
  artigo novo, varrer os antigos relacionados, linká-los ao novo e marcar `updatedDate`
  (mantendo `pubDate`). Já aplicado nos artigos desta fase.

## Pendências (próximos passos)

### 1. Trocar placeholders de afiliado (ProductCards)
- ✅ `melhores-lanternas-taticas`: card único da Sofirn SP31 V3 (AliExpress) com link de afiliado
  real, preço R$ 207,89 — **feito**. O card da Apfer T9 foi reincluído e depois **removido de
  novo**: o link `https://meli.la/27Y8mUf` estava redirecionando para o produto errado (o
  canivete, não a lanterna). Não recolocar a Apfer T9 sem um link novo, gerado e conferido pelo
  autor no Portal de Afiliados do ML.
- ✅ `cofre-para-arma`: card de cofre eletrônico Contelux (Mercado Livre) com link de afiliado real,
  preço R$ 189 — **feito** (mergeado, PR #34).
- ✅ `melhores-coldres-de-porte`: **sem afiliado** (decisão do autor) — trocado o ProductCard por
  menção direta à [Hardholster](https://www.instagram.com/hardholster/) (Instagram, sem link
  rastreado), fabricante de coldres kydex sob medida. `affiliate: false` no frontmatter.
- ✅ `melhor-faca-edc`: card do Canivete Taue Semiautomático (Mercado Livre) com link de afiliado
  real, preço R$ 34,48 — **feito**. A pausa na busca de afiliados foi **encerrada pelo autor em
  17/08/2026** para pesquisar produtos dos novos artigos de preparo.
- **Faltam** (ainda com `SEU-LINK-DE-AFILIADO`): protecao-auditiva-para-tiro,
  kit-72-horas-mochila-emergencia.
  (Opções de produto já pesquisadas — ver o PDF "Guia de Produtos - Afiliados" na Área de Trabalho.)
- `municao-de-defesa-calibres` é educativo de propósito (sem ProductCard) — não adicionar afiliado.

#### Pesquisar afiliados para os artigos de preparo (pedido de 17/08/2026)

Objetivo: escolher **um produto principal por artigo**. A lista abaixo é independente de loja: o autor
deve procurar o modelo na Shopee, no Mercado Livre e na Amazon, escolher a melhor oferta disponível e
só então gerar e conferir o link rastreado. Preços e indicadores foram observados em **17/08/2026** e
servem apenas para ordenar o potencial de venda.

##### `estoque-de-alimentos-para-emergencia` — potes herméticos

1. **Principal — conjunto de 5 potes de vidro borossilicato de 640 ml, com quatro travas.** Referência
   observada: [linha Ecos de 640 ml](https://www.mercadolivre.com.br/conjunto-5-potes-vidro-hermetico-marmita-mantimentos-640ml/p/MLB31040218),
   cerca de **R$ 58,90**, nota **4,9**, **4.432 opiniões** e **10 mil+ vendidos**. É a indicação com
   melhor equilíbrio entre preço acessível, forte prova social e uso cotidiano. Procurar o mesmo tipo
   de conjunto nas três lojas; vidro borossilicato, vedação de silicone e quatro travas são os pontos
   que devem aparecer no anúncio escolhido.
2. **Econômico — kit de 10 potes plásticos de 750 ml com travas.** Referência observada:
   [Ercaplast 750 ml](https://www.mercadolivre.com.br/kit-10-potes-750ml-hermeticos-travas-marmita-reutilizavel-transparente/p/MLB64485971),
   cerca de **R$ 39,99**, nota **4,8**, **1.200 opiniões** e **5 mil+ vendidos**. O preço baixo e a
   quantidade favorecem a conversão; conferir se é livre de BPA e se a vedação é realmente hermética.
3. **Maior capacidade — kit de 4 potes de vidro borossilicato de aproximadamente 1,04 L.** Referência:
   [Rishon 1,04 L](https://www.mercadolivre.com.br/rishon-pote-hermetico-borossilicato-azul-claro-kit-4-4-104-l/p/MLB64221750),
   cerca de **R$ 67,99**, nota **4,8** e **4.903 opiniões**. Boa alternativa para grãos e porções
   maiores, mantendo tíquete intermediário.
4. **Kit completo/premium — 10 potes de vidro de 640 ml com quatro travas.** Referência:
   [Aristus 640 ml](https://www.mercadolivre.com.br/kit-10-potes-hermeticos-vidro-aristus-640ml-4-travas-cozinha/p/MLB63315912),
   cerca de **R$ 114**, nota **4,9**, **2.402 opiniões** e **5 mil+ vendidos**. Indicado para quem quer
   montar o conjunto de uma vez, mas com barreira de preço maior.
5. **Entrada de preço — kit de 10 potes plásticos com jarra de 1,8 L.** Referência encontrada na
   [loja M.A. Decor da Shopee](https://shopee.com.br/m.a.decor), por cerca de **R$ 25,99**, nota
   anunciada **4,8** e **10 mil+ vendidos**. Usar apenas se o anúncio individual informar material,
   medidas e tipo de vedação; a página da loja não basta como destino final do card.

##### `plano-de-comunicacao-familiar-em-emergencias` — power banks

1. **Principal — i2GO Turbo PROBAT018, 20.000 mAh, USB-C PD de 20 W e visor digital.** Referência:
   [i2GO PROBAT018](https://www.mercadolivre.com.br/carregador-portatil-power-bank-turbo-i2go-20000mah-20w-com-display-digital/p/MLB21410949),
   entre **R$ 179,90 e R$ 199,90**, nota **4,8** e mais de **5 mil opiniões**. É o melhor equilíbrio
   entre capacidade, carregamento rápido, marca reconhecível, proteções declaradas e garantia de um
   ano; tende a inspirar mais confiança que os modelos genéricos.
2. **Compacto/intermediário — Geonav PB12KMB, 12.000 mAh.** Referência na
   [busca da Amazon](https://www.amazon.com.br/s?k=Geonav+PB12KMB), cerca de **R$ 119,90** e
   **2 mil+ compras no mês** observadas. Tem capacidade menor, mas preço e portabilidade podem facilitar
   a compra. Confirmar que a oferta é exatamente a PB12KMB.
3. **Premium — Samsung EB-P4520/EBP4520, 20.000 mAh e 45 W, com três USB-C.** Referência:
   [Samsung 20.000 mAh/45 W](https://www.mercadolivre.com.br/bateria-carregador-portatil-3x-usb-c-20000mah-super-rapida-45w/p/MLB38736097),
   cerca de **R$ 289**, nota **4,9**, **5.602 opiniões** e **10 mil+ vendidos**. Marca e potência são
   fortes argumentos, mas o preço reduz a conversão; funciona melhor como opção premium.
4. **Econômico de marca — i2GO 20.000 mAh Smart Charge de 12 W.** Referência:
   [i2GO 12 W](https://www.mercadolivre.com.br/carregador-portatil-power-bank-i2go-20000-mah-12w-smart-charge-preto/p/MLB42682189),
   nota **4,8**, **616 opiniões** e **1 mil+ vendidos**. É mais lento que o principal, porém mantém
   marca e garantia; escolher somente se a diferença de preço for relevante.
5. **Baixo custo para teste — power bank Connect/genérico de 20.000 mAh, 22,5 W e cabos embutidos.**
   Referência: [modelo com cabos embutidos](https://www.mercadolivre.com.br/carregador-portatil-powerbank-turbo-rapido-20000mah-c-cabos-imbutidos/p/MLB36613545),
   cerca de **R$ 77,59**, nota **4,6**, **1.593 opiniões** e **10 mil+ vendidos**. O preço e a conveniência
   ajudam a vender, mas a nota é inferior; só usar após conferir certificação Anatel, garantia,
   capacidade real, aquecimento e avaliações negativas recentes.

**Ordem recomendada para procurar os links:** primeiro o conjunto de 5 potes de vidro de 640 ml e o
i2GO PROBAT018; depois Geonav PB12KMB e o kit plástico de 10 potes de 750 ml; manter Samsung e os kits
maiores como alternativas de tíquete alto. Não é necessário encontrar todos na mesma loja.

**Critérios antes de fechar qualquer card:** produto em estoque; envio nacional; preço competitivo;
nota preferencialmente ≥ 4,7; volume relevante de vendas/avaliações; reclamações recentes lidas;
marca ou vendedor confiável; características compatíveis com o texto; e link de afiliado testado no
destino correto. No `take`, declarar que é **sugestão baseada em pesquisa de mercado, sem uso pessoal
do autor**, salvo se Felipe confirmar experiência própria. Ao inserir o card, mudar `affiliate: true`,
atualizar `updatedDate` e rodar o build.

### 2. Corrigir o artigo `melhores-red-dots-pistola.mdx`
- ProductCard com URL `https://SEU-LINK-DE-AFILIADO-AQUI` e preço `R$ 000` — trocar pelos reais.
- YouTubeEmbed com ID placeholder `dQw4w9WgXcQ` — trocar pelo ID do vídeo real.

### 3. Correções (ver `REVISAO-COMPLETA.md`)
- ✅ `clubes-de-tiro-no-brasil.mdx`: "comprovaa" → "comprova a" — **corrigido**.
- ✅ `kit-edc-essencial.mdx`: "vantegem" → "vantagem" — **corrigido**.
- ✅ Recategorizar `como-tirar-cac` e `quais-armas-cac-pode-ter` de `defesa-pessoal`
  para `cac-tiro-desportivo` — **feito** (02/08). Tag "defesa pessoal" removida das
  duas (redundante com a nova categoria); `updatedDate` atualizado. `npm run build`
  limpo, 81 páginas.

### ✅ Busca no site (feito)
Busca full-text com **Pagefind** (client-side, site estático). Campo translúcido sobreposto no
banner (Opção 4 escolhida pelo autor: 35% de transparência, canto inferior direito), presente em
todas as páginas; no mobile vira barra full-width abaixo do banner. Indexa só os artigos. Detalhes
técnicos no `CLAUDE.md` (seção "Busca no site"). Testado localmente (build+preview): retorna os
artigos onde o termo aparece, com destaque. Na Vercel funciona sem mudar o comando de build.

### 4. AdSense (quando quiser monetizar)
Acervo já passou de 25 artigos. Pedir aprovação no Google AdSense e colar o ID em
`src/consts.ts` → `adsenseClientId`. (Autor sinalizou: não agora.)

### 5. Conteúdo futuro (opcional, há espaço para crescer)
- Mais satélites dos clusters de expansão (Legislação, CAC, Primeiros Socorros).
- Subcategorias de maior busca (ver `PLANO-CATEGORIAS-EXPANSAO.md`): defesa da mulher,
  balística, consciência situacional, etc.
- Camada de **Glossário/Enciclopédia** (verbetes curtos) — formato muito citável por IA (GEO).

## Fluxo de trabalho
Criar/editar `.mdx` em `src/content/posts/` numa **branch** → Pull Request → preview na
Vercel → merge. Node em `C:\Program Files\nodejs`. `npm run dev` / `npm run build`.
Categorias válidas (10): ver enum em `src/content/config.ts` (precisa bater com `consts.ts`).

## ⛔ Não misturar
Não trazer a pasta `F:\Sites\regenere-saude` (portal Regenere Saúde, com a Dra. Pâmela
como autora) para esta sessão. São projetos e repositórios independentes.
