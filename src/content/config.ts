import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Vira a <meta description>. Mantenha 120–160 caracteres.
      description: z.string(),
      category: z.enum([
        'defesa-pessoal',
        'defesa-residencial',
        'equipamentos',
        'sobrevivencialismo',
        'tiro',
        'ciencia-do-treinamento',
        'fundamentos',
      ]),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Felipe Arrais Serôdio'),
      // Imagem de capa (opcional). Coloque o arquivo na mesma pasta do post.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // Marque true para não publicar ainda (não aparece no site nem no build).
      draft: z.boolean().default(false),
      // true quando o post contém links de afiliado (mostra o aviso automático).
      affiliate: z.boolean().default(false),
    }),
});

export const collections = { posts };
