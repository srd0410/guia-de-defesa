# CLAUDE.md — Guia de Defesa

Contexto permanente do projeto para qualquer sessão futura do Claude Code.
Leia este arquivo antes de trabalhar no blog.

## O que é

Blog em **Astro** (tiro, defesa pessoal, equipamentos, sobrevivencialismo), no contexto
brasileiro. Otimizado para SEO, com sistema de afiliado e embed de YouTube embutidos.
Hospedagem na **Vercel**; código no GitHub: `https://github.com/srd0410/guia-de-defesa`.

## Estrutura

- `src/content/posts/*.mdx` — os artigos (o nome do arquivo vira a URL)
- `src/components/` — componentes (ProductCard, YouTubeEmbed, SEO, etc.)
- `src/consts.ts` — config do site (URL, adsenseClientId, etc.)
- `CONTEUDO.md` — formato exato de post e componentes
- `PLANO-CONTEUDO.md` — roteiro dos 30 artigos do acervo inicial e cadência
- `.claude/skills/motor-de-conteudo/` — a skill que gera os artigos
- `src/components/SearchBox.astro` — busca do site (campo translúcido no banner)
- `src/pages/llms.txt.ts` — endpoint dinâmico (convenção GEO llmstxt.org), gerado a cada
  build a partir do conteúdo real (mesmo padrão do `rss.xml.js`) — nunca precisa manutenção
  manual, artigo novo aparece sozinho

## Busca no site (Pagefind)

Busca **full-text** client-side com **Pagefind** (site é estático, sem servidor).

- Integração `astro-pagefind` em `astro.config.mjs`: indexa o `dist/` ao final do build
  (`astro:build:done`) e gera `dist/pagefind/`. **Não muda o comando de build da Vercel.**
- Só os **artigos** são indexados: `[slug].astro` tem `data-pagefind-body` no `<article>`, e
  `data-pagefind-ignore` no que não é conteúdo (trilha, byline, anúncio, tags, bio, disclosure).
  A categoria vira metadado via `data-pagefind-meta="categoria"` no eyebrow. Páginas de
  categoria/índice/autor/sobre **não** entram no índice.
- `SearchBox.astro` (dentro do `<Header>`, logo aparece em todas as páginas): campo translúcido
  sobreposto no canto inferior direito do banner (desktop) e barra full-width abaixo do banner
  (mobile ≤640px). Carrega o Pagefind sob demanda via `import('/pagefind/pagefind.js')` — esse
  caminho está em `vite.build.rollupOptions.external` no config para o Rollup não empacotá-lo.
- **Atenção (dev):** o índice só existe **depois de um build**. `npm run dev` sozinho não tem
  busca; rode `npm run build` e depois `npm run preview` para testar localmente. Na Vercel
  funciona normal (é sempre um build).
- Comportamento: busca por prefixo + tolerância a erro de digitação (padrão do Pagefind).
  Mínimo de 2 letras. Termo inexistente pode cair no maior prefixo existente — é esperado.
- **Artigos novos entram sozinhos, sem passo extra.** Todo `.mdx` novo é renderizado pelo
  `[slug].astro` (que tem o campo de busca via `<Header>` e o `data-pagefind-body`), então:
  (1) a página do artigo novo já nasce com o campo de busca; (2) o artigo é indexado no próximo
  build e passa a aparecer nos resultados. A Vercel reconstrói a cada merge, então basta publicar
  o artigo normalmente. (Provado com artigo de teste: o índice foi de 48 → 49 fragmentos.)
  Ressalva: post **agendado** (pubDate futuro) só entra no índice no primeiro build feito após a
  data chegar — mesma regra que já vale para o post aparecer no site.

## Skill de conteúdo

A skill **motor-de-conteudo** (em `.claude/skills/`) gera os posts `.mdx` no padrão
editorial do blog. Use-a sempre que for criar/escrever um artigo. Regras-chave que ela aplica:

- Arco introdução → desenvolvimento → conclusão, com ganho real de aplicabilidade
- Parágrafo no padrão: tópico frasal → desenvolvimento → fechamento (a lente interna "e daí?",
  nunca escrita no texto)
- Conclusões parciais ao fim de cada tópico
- Termo técnico em inglês mantido só quando consagrado, com tradução entre aspas e
  parênteses na primeira ocorrência: `*dry fire*` ("tiro a seco")
- Texto pensado para ser compartilhado no WhatsApp / salvo para consulta
- `affiliate: true` apenas quando há `<ProductCard>`; `description` de 120–160 caracteres
- **Honestidade no texto do produto (`take` do `<ProductCard>`):** deixar sempre claro se é
  recomendação de **uso pessoal testado pelo autor** ("a que eu uso", "tenho a minha há X anos")
  ou uma **sugestão sem uso próprio** (pesquisa/reputação, deixar isso explícito no texto, ex.:
  "não tenho uso pessoal desta, a indicação é baseada em pesquisa e depoimentos"). Nunca escrever
  um texto genérico tipo "modelo para começar" que não diz de onde vem a confiança na indicação —
  o leitor precisa saber se é experiência real ou não.
- **Aviso de afiliado sempre no final do artigo**, nunca no topo. Isso é automático — o
  `<AffiliateDisclosure>` é renderizado pelo template (`[slug].astro`), logo após `<Content />`
  e antes das tags de rodapé, para todo post com `affiliate: true`. Não duplicar manualmente
  esse aviso dentro do `.mdx`.
- **FAQ sempre com o componente `<Faq>`** (`src/components/Faq.astro`), nunca em markdown solto
  (`## Perguntas frequentes` + `**Pergunta?**`/resposta). O componente emite o schema **FAQPage**
  (JSON-LD) — importante para SEO e GEO (citação por IA). Uso:
  `<Faq items={[{ q: "Pergunta?", a: "Resposta." }]} />`. Negrito/links na resposta devem ser HTML
  real (`<strong>`, `<a href="...">`), não markdown — o componente renderiza a resposta com
  `set:html`, que não converte markdown. (Os 41 posts antigos que ainda usavam markdown solto
  foram convertidos no PR #40; não regredir para o formato antigo em posts novos.)
- **Retro-linkagem obrigatória:** ao publicar artigo novo, varrer os artigos antigos
  relacionados, adicionar link deles para o novo (linkagem bidirecional) e marcar
  `updatedDate` nesses antigos, mantendo o `pubDate` original. (Regra detalhada na skill.)

## Fluxo de conteúdo (geração → revisão → publicação)

**Desde 2026-07-08, o Cowork (Google Drive + e-mail) foi desativado.** Todo o fluxo de
conteúdo roda localmente, por pastas + comandos. Referência completa e comandos prontos
pra copiar/colar: **`COMANDOS-RAPIDOS.md`** (raiz do projeto). Resumo:

- `revisao/` — artigos aguardando a conferência do autor (Claude Code gera aqui quando
  pedido "gerar novo artigo", ou o autor cria manualmente)
- `revisados/` — artigos que o autor já aprovou; **mover um artigo pra cá é o sinal de
  aprovação**, mas a publicação em si só acontece com um comando explícito (nunca automático)
- `scripts/publicar-artigos.ps1` — script que move de `revisados/` para
  `src/content/posts/`, tira `draft: true` e comita. Rodar com `-Once` (uma vez) ou
  `-DryRun` (simula sem alterar nada)
- Pedir "**publica os artigos aprovados**" faz o Claude Code rodar o fluxo inteiro:
  cria branch dedicada → publica → faz a **retro-linkagem automaticamente** → abre PR →
  aguarda "pode mesclar" antes de dar merge
- Pastas antigas descontinuadas: `revisoes/` (plural, fluxo de e-mail do Cowork) e os
  scripts `email_config.py`/`send_article_email.py` foram apagados — não recriar

### Publicação técnica (git/PR)

1. Artigo (ou mudança de código) numa **branch** (não direto na `main`)
2. Abrir **Pull Request** → a Vercel gera uma **prévia ao vivo**
3. Revisar a prévia e dar merge → o site republica sozinho
4. Cadência de conteúdo: controlar a data de publicação pelo campo `pubDate` de cada post
5. **Antes de abrir PR numa branch antiga:** sincronizar com o `main` primeiro
   (`git merge origin/main`) — branches que ficam paradas divergem rápido conforme o `main`
   recebe outras PRs, e o merge tardio pode trazer conflitos de conteúdo (já aconteceu nos
   PRs #51 e #53, resolvido combinando as duas versões manualmente)

## Rodar localmente

```
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site em dist/
```
(Node fica em `C:\Program Files\nodejs` neste notebook.)

## Estado do acervo (atualizar conforme avança)

- ✅ **Plano de 30 artigos (PLANO-CONTEUDO.md) CONCLUÍDO.** Todos os 7 clusters originais
  completos: Defesa Pessoal (7/7), Equipamentos (7/7), Defesa Residencial (5/5), Tiro (4/4),
  Ciência do Treinamento (3/3), Sobrevivencialismo (3/3), Fundamentos (1/1).
- ✅ Cluster Defesa Pessoal nivelado ao padrão da skill (FAQ + linkagem + `updatedDate`, PR #16).
- ✅ **Cluster Legislação e Direito (8 artigos):** pilar `lei-de-armas-no-brasil` + satélites
  `guia-de-trafego`, `decretos-de-armas-o-que-mudou`, `crimes-do-estatuto-do-desarmamento`,
  `como-tirar-registro-de-arma`, `porte-de-arma-quem-pode`, `sinarm-x-sigma`,
  `renovacao-registro-de-arma`. Os artigos legais de `defesa-pessoal` têm backlink para o pilar.
- ✅ **Cluster CAC/Tiro Desportivo (6 artigos):** pilar `cac-guia-completo` + `como-se-manter-cac`,
  `acervo-cac-como-gerenciar`, `abordagem-policial-sendo-cac`, `clubes-de-tiro-no-brasil`,
  `renovacao-craf-2026`.
- ✅ **Cluster Primeiros Socorros (4 artigos):** pilar `primeiros-socorros-trauma` +
  `controle-de-hemorragia-torniquete`, `kit-ifak-primeiros-socorros`, `rcp-basico`.
- ✅ **51 artigos publicados** no total (inclui `manobra-de-heimlich-engasgo` e
  `portal-pf-novo-sistema-cac`, publicados em 2026-07-08).
- ⬜ **Trocar `SEU-LINK-DE-AFILIADO`** pelos links reais nos ProductCards:
  - `melhores-lanternas-taticas`: **feito** — Sofirn SP31 V3 (AliExpress), R$ 207,89. Card da
    Apfer T9 removido (o link `https://meli.la/27Y8mUf` redirecionava para o produto errado, o
    canivete). Não recolocar sem link novo conferido pelo autor.
  - `cofre-para-arma`: **feito** — Cofre Eletrônico Digital Contelux (Mercado Livre), R$ 189.
  - `melhores-coldres-de-porte`: **sem afiliado** — menção direta à Hardholster (Instagram),
    sem link rastreado; `affiliate: false`.
  - `melhor-faca-edc`: **feito** — Canivete Taue Semiautomático (Mercado Livre), R$ 34,48.
  - **Faltam:** protecao-auditiva-para-tiro, kit-72-horas-mochila-emergencia. (Autor sinalizou
    pausa na busca de afiliados por ora.)
  - Obs.: `municao-de-defesa-calibres` é **educativo de propósito** (sem ProductCard): munição
    não é item de marketplace no Brasil (CAC adquire via autorização). Não adicionar afiliado.
- ⬜ Trocar IDs de vídeo placeholder nos YouTubeEmbed
- ⬜ **AdSense:** requisitos técnicos prontos — falta só solicitar a aprovação no
  google.com/adsense e colar o ID em `src/consts.ts` (`adsenseClientId`).
  - ✅ Acervo já passou de 25 artigos (51 publicados).
  - ✅ Domínio confirmado e consistente (`www.guiadedefesa.com.br`).
  - ✅ **Política de Privacidade** criada (`/politica-de-privacidade/`, PR direto na main,
    2026-07-08) — cobre coleta de dados (Web3Forms, Vercel, Google Analytics), cookies de
    publicidade do Google, links de afiliado e direitos LGPD. Link no rodapé (`Footer.astro`).
  - ✅ **Gate de confirmação de idade (18+)** implementado (`src/components/AgeGate.astro`,
    integrado no `BaseLayout.astro`, mesma data) — autodeclaração obrigatória antes de liberar
    o site inteiro (uma vez por visitante, via `localStorage`), sem flash de conteúdo antes da
    confirmação. "Não" bloqueia na mesma URL sem redirecionar. Isenta responsabilidade do site
    em caso de acesso por menor que se autodeclarar incorretamente.
  - ⚠️ **Ponto de atenção:** mesmo com o site aprovado, é esperado que artigos específicos sobre
    calibres/armas fiquem marcados como "anúncios limitados" pela política do Google para esse
    tipo de conteúdo — não é erro, não regredir tentando "consertar".
- ✅ **Domínio canônico = `www`.** O apex `guiadedefesa.com.br` faz **308 → www** na Vercel
  (www é o primário, responde 200). `site` (astro.config), `SITE.url` (consts) e o `Sitemap` do
  robots.txt usam **www**, para o sitemap/canonical baterem com o host 200 e não gerar
  "Página com redirecionamento" no Search Console. Se um dia trocar o primário para o apex na
  Vercel, reverter os três para sem-www.
- ✅ **Auditoria de SEO/GEO concluída (2026-07-04 a 2026-07-07, PRs #39, #40, #41):**
  schema **FAQPage** em 41 posts (componente `<Faq>`, ver regra abaixo), sitemap com `lastmod`,
  `BreadcrumbList` nos artigos, `publisher`/`Organization` com logo, e as 32 descrições acima de
  160 caracteres aparadas para o padrão 120–160. Também verificada a propriedade de **Domínio**
  no Search Console (a que cobre www+https de uma vez), verificada via TXT na Vercel.
  Pendências que sobraram (baixa prioridade, não são bugs): nenhum post tem imagem de `cover`
  (tarefa de design, não de código); `llms.txt` **feito** (endpoint dinâmico, ver Estrutura acima).

### Próxima fase: aprofundar os clusters (todos já iniciados)
- **Legislação:** ainda cabem `processos-junto-a-pf` (como protocolar), Estatuto artigo por
  artigo, transporte do cidadão comum, etc.
- **CAC/Tiro Desportivo:** colecionamento (passo a passo), caça (aspectos legais/regionais),
  federações de tiro, modalidades.
- **Primeiros Socorros e Trauma:** trauma penetrante, emergências clínicas comuns, onde treinar
  (encaminhamento presencial). YMYL — baseado em evidência, sempre encaminhar a treino presencial.
- Subcategorias de maior busca nos pilares existentes (defesa da mulher, balística, consciência
  situacional) e camada de **Glossário/Enciclopédia** (verbetes curtos, muito citáveis por IA).

## Fatos do domínio (YMYL — não regredir)

- **CAC: competência é da Polícia Federal, NÃO do Exército.** Desde **01/07/2025**
  (Decreto 11.615/2023), o registro de CAC (CR), a autorização de compra/transferência,
  as guias de tráfego e a fiscalização passaram do Exército para a **Polícia Federal**.
  Todo conteúdo novo sobre CAC deve refletir isso. Há controvérsia jurídica (decreto x
  Lei 10.826), mas operacionalmente é a PF.
- **Renovação de CRAF 2026 (IN DG/PF nº 330/2026).** A PF prorrogou os CRAFs de CAC
  concedidos antes de 21/07/2023 e válidos até 20/07/2026, substituindo o vencimento único
  por **calendário escalonado por mês de nascimento** (ago/2026 a ago/2027). O CRAF segue
  regular no Sinarm até a data-limite do mês. Documentado em `renovacao-craf-2026.mdx`
  (datas conferidas em gov.br/pf). Se a PF publicar nova norma, atualizar o artigo.

## Convenções

- Português brasileiro; **10 categorias válidas** (devem bater entre `src/content/config.ts`
  e `src/consts.ts`): as 7 originais — `defesa-pessoal`, `defesa-residencial`, `equipamentos`,
  `sobrevivencialismo`, `tiro`, `ciencia-do-treinamento`, `fundamentos` — mais as 3 de
  expansão — `legislacao`, `cac-tiro-desportivo`, `primeiros-socorros` (todas já com conteúdo).
- Nunca commitar `node_modules/`, `dist/`, `.astro/` (ver `.gitignore`)
