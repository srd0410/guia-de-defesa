# Como criar conteúdo

## Modelo de post

Crie um arquivo em `src/content/posts/slug-do-post.mdx`. O nome do arquivo vira a URL
(`/slug-do-post/`). Use minúsculas, sem acento, com hífen.

```mdx
---
title: "Título do artigo (vira o H1 e o título no Google)"
description: "Resumo de 120–160 caracteres. É o que aparece no Google."
category: "equipamentos"   # uma das 7 categorias (veja src/consts.ts)
pubDate: 2026-06-11
tags: ["edc", "lanterna"]
affiliate: true            # true se tiver link de afiliado (mostra o aviso)
---
import ProductCard from '../../components/ProductCard.astro';
import YouTubeEmbed from '../../components/YouTubeEmbed.astro';

Texto do artigo em **Markdown**. Use ## para subtítulos.

## Subtítulo
Parágrafo normal.
```

## Inserir um produto de afiliado

Onde quiser o card, escreva:

```mdx
<ProductCard
  store="mercadolivre"   /* mercadolivre | amazon | shopee | aliexpress | outro */
  name="Nome do produto"
  url="SEU-LINK-DE-AFILIADO"   /* o link com o SEU código de rastreio */
  price="R$ 189"               /* opcional */
  take="Sua opinião de instrutor em 1–2 frases. Honesta. É o que o Google premia."
/>
```

> O link já sai com `rel="sponsored"` automático — não precisa fazer nada.

## Inserir um vídeo do YouTube

```mdx
<YouTubeEmbed id="ID_DO_VIDEO" title="Descrição do vídeo" />
```
O `ID_DO_VIDEO` é a parte depois de `v=` na URL do YouTube. O player só carrega ao clicar
(não pesa a página). Use embed, nunca repost — respeita o direito do criador.

## As 7 categorias
defesa-pessoal · defesa-residencial · equipamentos · sobrevivencialismo · tiro ·
ciencia-do-treinamento · fundamentos
