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

- ✅ 7 artigos no padrão editorial: os 5 pilares (defesa-residencial, fundamentos-do-tiro,
  ciencia-do-treinamento-de-tiro, sobrevivencialismo-para-iniciantes, dever-de-proteger-familia)
  + os 2 originais aprofundados (melhores-red-dots-pistola, legitima-defesa-no-brasil)
- ⬜ 23 artigos restantes do PLANO-CONTEUDO.md (pingar 2–3/dia, priorizando Defesa Pessoal e Equipamentos)
- ⬜ Trocar placeholders `https://SEU-LINK-DE-AFILIADO-AQUI` pelos links reais nos ProductCards
- ⬜ Trocar IDs de vídeo placeholder nos YouTubeEmbed
- ⬜ Com ~25 artigos no ar: pedir aprovação do Google AdSense e colar o ID em `src/consts.ts`
- ⬜ Confirmar domínio em `astro.config.mjs` e `src/consts.ts`

## Convenções

- Português brasileiro; categorias válidas (exatamente estas 7): `defesa-pessoal`,
  `defesa-residencial`, `equipamentos`, `sobrevivencialismo`, `tiro`,
  `ciencia-do-treinamento`, `fundamentos`
- Nunca commitar `node_modules/`, `dist/`, `.astro/` (ver `.gitignore`)
