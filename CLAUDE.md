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

## Fluxo de publicação

1. Criar/editar `.mdx` em `src/content/posts/` numa **branch** (não direto na `main`)
2. Abrir **Pull Request** → a Vercel gera uma **prévia ao vivo** do post
3. Revisar a prévia e dar merge → o site republica sozinho
4. Cadência: controlar a data de publicação pelo campo `pubDate` de cada post

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
- ✅ **Cluster Legislação e Direito iniciado (4 artigos):** pilar `lei-de-armas-no-brasil` +
  satélites `guia-de-trafego`, `decretos-de-armas-o-que-mudou`, `crimes-do-estatuto-do-desarmamento`.
  Os 6 artigos legais existentes (defesa-pessoal) têm backlink para o pilar.
- ✅ **34 artigos publicados** no total (build 48 páginas com hubs de categoria).
- ⬜ **Trocar `SEU-LINK-DE-AFILIADO`** pelos links reais nos ProductCards dos 6 artigos afiliado:
  melhores-lanternas-taticas, melhores-coldres-de-porte, protecao-auditiva-para-tiro,
  melhor-faca-edc, cofre-para-arma, kit-72-horas-mochila-emergencia.
  - Obs.: `municao-de-defesa-calibres` é **educativo de propósito** (sem ProductCard): munição
    não é item de marketplace no Brasil (CAC adquire via autorização). Não adicionar afiliado.
- ⬜ Trocar IDs de vídeo placeholder nos YouTubeEmbed
- ⬜ **AdSense:** acervo já passou de 25 artigos — pedir aprovação e colar o ID em `src/consts.ts`.
- ⬜ Confirmar domínio em `astro.config.mjs` e `src/consts.ts`

### Próxima fase: clusters de expansão restantes
- **CAC/Tiro Desportivo** (`cac-tiro-desportivo`) — pilar-pilar + satélites (guia passo a passo
  de como se manter CAC, renovação, guia de tráfego do ponto de vista do atirador, clubes etc.).
- **Primeiros Socorros e Trauma** (`primeiros-socorros`) — YMYL, baseado em evidência,
  encaminhar sempre a treino presencial. Pilar + satélites (torniquete, IFAK, RCP etc.).
- Dentro de Legislação: ainda cabem artigos sobre o Estatuto artigo por artigo, crimes específicos
  (já criado), direitos do CAC em abordagem policial, etc.

## Fatos do domínio (YMYL — não regredir)

- **CAC: competência é da Polícia Federal, NÃO do Exército.** Desde **01/07/2025**
  (Decreto 11.615/2023), o registro de CAC (CR), a autorização de compra/transferência,
  as guias de tráfego e a fiscalização passaram do Exército para a **Polícia Federal**.
  Todo conteúdo novo sobre CAC deve refletir isso. Há controvérsia jurídica (decreto x
  Lei 10.826), mas operacionalmente é a PF.

## Convenções

- Português brasileiro; **10 categorias válidas** (devem bater entre `src/content/config.ts`
  e `src/consts.ts`): as 7 originais — `defesa-pessoal`, `defesa-residencial`, `equipamentos`,
  `sobrevivencialismo`, `tiro`, `ciencia-do-treinamento`, `fundamentos` — mais as 3 de
  expansão — `legislacao`, `cac-tiro-desportivo`, `primeiros-socorros` (ainda sem conteúdo).
- Nunca commitar `node_modules/`, `dist/`, `.astro/` (ver `.gitignore`)
