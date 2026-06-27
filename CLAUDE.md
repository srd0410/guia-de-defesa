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
- **Retro-linkagem obrigatória:** ao publicar artigo novo, varrer os artigos antigos
  relacionados, adicionar link deles para o novo (linkagem bidirecional) e marcar
  `updatedDate` nesses antigos, mantendo o `pubDate` original. (Regra detalhada na skill.)

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
- ✅ **Cluster Legislação e Direito (8 artigos):** pilar `lei-de-armas-no-brasil` + satélites
  `guia-de-trafego`, `decretos-de-armas-o-que-mudou`, `crimes-do-estatuto-do-desarmamento`,
  `como-tirar-registro-de-arma`, `porte-de-arma-quem-pode`, `sinarm-x-sigma`,
  `renovacao-registro-de-arma`. Os artigos legais de `defesa-pessoal` têm backlink para o pilar.
- ✅ **Cluster CAC/Tiro Desportivo (6 artigos):** pilar `cac-guia-completo` + `como-se-manter-cac`,
  `acervo-cac-como-gerenciar`, `abordagem-policial-sendo-cac`, `clubes-de-tiro-no-brasil`,
  `renovacao-craf-2026`.
- ✅ **Cluster Primeiros Socorros (4 artigos):** pilar `primeiros-socorros-trauma` +
  `controle-de-hemorragia-torniquete`, `kit-ifak-primeiros-socorros`, `rcp-basico`.
- ✅ **48 artigos publicados** no total.
- ⬜ **Trocar `SEU-LINK-DE-AFILIADO`** pelos links reais nos ProductCards:
  - `melhores-lanternas-taticas`: **em andamento** — Apfer T9 (ML) com link real e marcada como
    temporária; Sofirn SP31 (1ª escolha) ainda com placeholder (AliExpress/Shopee em cadastro).
  - **Faltam:** melhores-coldres-de-porte, protecao-auditiva-para-tiro, melhor-faca-edc,
    cofre-para-arma, kit-72-horas-mochila-emergencia.
  - Obs.: `municao-de-defesa-calibres` é **educativo de propósito** (sem ProductCard): munição
    não é item de marketplace no Brasil (CAC adquire via autorização). Não adicionar afiliado.
- ⬜ Trocar IDs de vídeo placeholder nos YouTubeEmbed
- ⬜ **AdSense:** acervo já passou de 25 artigos — pedir aprovação e colar o ID em `src/consts.ts`.
- ⬜ Confirmar domínio em `astro.config.mjs` e `src/consts.ts`

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
