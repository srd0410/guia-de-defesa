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
        // Pilares de expansão (PLANO-CATEGORIAS-EXPANSAO.md). Já existem em consts.ts.
        'legislacao',
        'cac-tiro-desportivo',
        'primeiros-socorros',
      ]),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Felipe Arrais Serodio'),
      // Autor convidado: quando presente, o artigo é assinado por ele e o Guia de
      // Defesa (Felipe) aparece como "Edição" (responsável editorial). Ver [slug].astro.
      guestAuthor: z
        .object({
          name: z.string(),
          // Credencial curta, ex.: "Advogado criminalista", "Médico emergencista".
          credential: z.string().optional(),
          // Link do convidado (site, Instagram, LinkedIn). Opcional.
          url: z.string().url().optional(),
        })
        .optional(),
      // Imagem de capa (opcional). Coloque o arquivo na mesma pasta do post.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // Marque true para não publicar ainda (não aparece no site nem no build).
      draft: z.boolean().default(false),
      // true quando o post contém links de afiliado (mostra o aviso automático).
      affiliate: z.boolean().default(false),
      // false desativa AdSense no artigo (categorias restritas pelo Google: armas,
      // munição, acessórios de arma de fogo). Default true.
      ads: z.boolean().default(true),
    }),
});

export const collections = { posts };
