# CLAUDE.md — Guia de Defesa

Contexto permanente do projeto para qualquer sessão futura do Claude Code.
Leia este arquivo antes de trabalhar no blog. **Histórico de PRs, bugs já corrigidos e
decisões passadas ficam no `git log`, não aqui** — este arquivo só guarda o que ainda
é instrução ativa ou fato que não pode regredir.

## O que é

Blog em **Astro** (tiro, defesa pessoal, equipamentos, sobrevivencialismo), no contexto
brasileiro. Otimizado para SEO, com sistema de afiliado e embed de YouTube embutidos.
Hospedagem na **Vercel**; código no GitHub: `https://github.com/srd0410/guia-de-defesa`.

## Estrutura

- `src/content/posts/*.mdx` — os artigos (o nome do arquivo vira a URL)
- `src/components/` — componentes (ProductCard, YouTubeEmbed, SEO, StickyReadingBar, etc.)
- `src/pages/artigos.astro` — acervo completo (todos os artigos); a home mostra só os
  9 mais recentes + CTA pra essa página
- `src/consts.ts` — config do site (URL, adsenseClientId, etc.)
- `CONTEUDO.md` — formato exato de post e componentes
- `PLANO-CONTEUDO.md` — roteiro dos 30 artigos do acervo inicial e cadência (concluído)
- `.claude/skills/motor-de-conteudo/` — a skill que gera os artigos
- `src/pages/llms.txt.ts` — endpoint dinâmico (convenção GEO llmstxt.org), gerado a cada
  build a partir do conteúdo real — nunca precisa manutenção manual

## Busca no site (Pagefind)

Busca **full-text** client-side com **Pagefind** (site é estático, sem servidor).

- Integração `astro-pagefind` em `astro.config.mjs`: indexa o `dist/` ao final do build.
  Só os **artigos** são indexados (`data-pagefind-body` em `[slug].astro`); categoria/
  índice/autor/sobre não entram.
- `SearchBox.astro` tem duas variantes: `banner` (campo no `<Header>`, sobreposto no
  banner) e `compact` (ícone que expande, usado na `StickyReadingBar`, presente em toda
  página via `BaseLayout`). Mesmo motor Pagefind nas duas — script isola cada instância
  por `querySelectorAll('.site-search')`, sem depender de ids fixos.
- **Atenção (dev):** o índice só existe **depois de um build**. `npm run dev` sozinho não
  tem busca; rode `npm run build` + `npm run preview` pra testar localmente.
- Artigo novo entra sozinho no índice no próximo build — sem passo manual. Post agendado
  (pubDate futuro) só indexa no primeiro build após a data chegar.

## Skill de conteúdo

A skill **motor-de-conteudo** (em `.claude/skills/`) gera os posts `.mdx` no padrão
editorial do blog. Use-a sempre que for criar/escrever um artigo. Regras-chave:

- Arco introdução → desenvolvimento → conclusão, com ganho real de aplicabilidade
- Parágrafo no padrão: tópico frasal → desenvolvimento → fechamento
- Termo técnico em inglês mantido só quando consagrado, com tradução entre aspas e
  parênteses na primeira ocorrência: `*dry fire*` ("tiro a seco")
- `affiliate: true` apenas quando há `<ProductCard>`; `description` de 120–160 caracteres
- **Honestidade no texto do produto (`take` do `<ProductCard>`):** sempre deixar claro se
  é recomendação de **uso pessoal testado** ("a que eu uso") ou **sugestão sem uso próprio**
  (dizer isso explicitamente). Nunca um texto genérico que não diga de onde vem a confiança.
- **Aviso de afiliado sempre no final**, nunca no topo — já é automático via
  `<AffiliateDisclosure>` no template. Não duplicar manualmente no `.mdx`.
- **FAQ sempre com o componente `<Faq>`** (`src/components/Faq.astro`), nunca markdown
  solto — ele emite schema FAQPage (JSON-LD). Negrito/link na resposta em HTML real
  (`<strong>`, `<a>`), não markdown (o componente usa `set:html`).
- **Retro-linkagem obrigatória:** ao publicar artigo novo, linkar artigos antigos
  relacionados a ele (bidirecional) e marcar `updatedDate` neles, mantendo `pubDate` original.

## Fluxo de conteúdo (geração → revisão → publicação)

Roda localmente, por pastas + comandos (sem Cowork/Google Drive — descontinuado em
2026-07-08). Referência completa e comandos prontos: **`COMANDOS-RAPIDOS.md`** (raiz).

- `revisao/` — artigos aguardando conferência do autor
- `revisados/` — **mover um artigo pra cá é o sinal de aprovação**; a publicação em si
  só acontece com comando explícito
- `scripts/publicar-artigos.ps1` — move de `revisados/` pra `src/content/posts/`, tira
  `draft: true` e comita. Rodar com `-Once` ou `-DryRun`
- Pedir "**publica os artigos aprovados**" roda o fluxo inteiro: branch dedicada →
  publica → retro-linkagem automática → abre PR → aguarda "pode mesclar" antes do merge

### Publicação técnica (git/PR)

1. Artigo (ou mudança de código) numa **branch** (não direto na `main`)
2. Abrir **Pull Request** → a Vercel gera uma **prévia ao vivo**; revisar e dar merge
3. Cadência de conteúdo: controlar a data de publicação pelo campo `pubDate` de cada post
4. **Antes de abrir PR numa branch antiga:** sincronizar com o `main` primeiro
   (`git merge origin/main`) — branch parada diverge rápido e o merge tardio já trouxe
   conflito de conteúdo mais de uma vez

## Rodar localmente

```
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site em dist/
```
(Node fica em `C:\Program Files\nodejs` neste notebook.)

## Estado do acervo

- **51 artigos publicados**, cobrindo os 10 clusters válidos: os 7 originais (Defesa
  Pessoal, Defesa Residencial, Equipamentos, Sobrevivencialismo, Tiro, Ciência do
  Treinamento, Fundamentos) e os 3 de expansão (Legislação, CAC/Tiro Desportivo,
  Primeiros Socorros). `PLANO-CONTEUDO.md` original está concluído.
- **Pendências reais:**
  - Afiliado de `protecao-auditiva-para-tiro` — autor pausou a busca por ora
  - IDs de vídeo placeholder ainda a trocar nos `YouTubeEmbed`
  - Nenhum post tem imagem de `cover` (tarefa de design, não bloqueia nada)
  - `municao-de-defesa-calibres` é educativo de propósito, sem `ProductCard` — munição
    não é item de marketplace no Brasil, não adicionar afiliado
- **AdSense ativo** (`adsenseClientId` em `src/consts.ts`), 5 posições via
  `src/components/AdSlot.astro` (home lateral, categoria topo, artigo topo/fim/lateral).
  Artigos sobre calibres/armas específicas ficarem com "anúncios limitados" é esperado
  pela política do Google, não é bug.
  - ⚠️ **Gotcha de build:** `<AdSlot>` (ou qualquer componente) dentro de um Fragment
    `<>...</>` aninhado num ternário não renderiza, sem erro/warning no build. Usar
    `{cond && <Componente />}` em vez de `{cond ? (<>...</>) : (...)}`, e sempre conferir
    com build limpo antes de dar como certo.
- **Domínio canônico = `www`** (apex faz 308 → www na Vercel). `site` (astro.config),
  `SITE.url` (consts) e o `Sitemap` do robots.txt usam www. Se um dia trocar o primário
  pro apex na Vercel, reverter os três.
- Auditoria de SEO/GEO concluída: schema FAQPage, sitemap com `lastmod`, BreadcrumbList,
  `publisher`/`Organization` com logo, descrições no padrão 120–160 caracteres.

### Próxima fase: aprofundar os clusters (todos já iniciados)
- **Legislação:** `processos-junto-a-pf` (como protocolar), Estatuto artigo por artigo,
  transporte do cidadão comum, etc.
- **CAC/Tiro Desportivo:** colecionamento (passo a passo), caça (aspectos legais/
  regionais), federações de tiro, modalidades.
- **Primeiros Socorros e Trauma:** trauma penetrante, emergências clínicas comuns, onde
  treinar (encaminhamento presencial). YMYL — baseado em evidência, sempre encaminhar a
  treino presencial.
- Subcategorias de maior busca nos pilares existentes (defesa da mulher, balística,
  consciência situacional) e camada de **Glossário/Enciclopédia** (verbetes curtos,
  citáveis por IA).

## Fatos do domínio (YMYL — não regredir)

- **CAC: competência é da Polícia Federal, NÃO do Exército.** Desde **01/07/2025**
  (Decreto 11.615/2023), registro de CAC (CR), autorização de compra/transferência,
  guias de tráfego e fiscalização passaram do Exército para a **Polícia Federal**. Todo
  conteúdo novo sobre CAC deve refletir isso. Há controvérsia jurídica (decreto x Lei
  10.826), mas operacionalmente é a PF.
- **Renovação de CRAF 2026 (IN DG/PF nº 330/2026).** A PF prorrogou os CRAFs concedidos
  antes de 21/07/2023 e válidos até 20/07/2026, com **calendário escalonado por mês de
  nascimento** (ago/2026 a ago/2027) substituindo o vencimento único. Documentado em
  `renovacao-craf-2026.mdx`. Se a PF publicar nova norma, atualizar o artigo.

## Convenções

- Português brasileiro; **10 categorias válidas** (devem bater entre `src/content/config.ts`
  e `src/consts.ts`): `defesa-pessoal`, `defesa-residencial`, `equipamentos`,
  `sobrevivencialismo`, `tiro`, `ciencia-do-treinamento`, `fundamentos`, `legislacao`,
  `cac-tiro-desportivo`, `primeiros-socorros`.
- Nunca commitar `node_modules/`, `dist/`, `.astro/` (ver `.gitignore`)
