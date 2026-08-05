import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { getCategory } from '../../consts';

// Gera a imagem de compartilhamento (og:image / Discover) de cada artigo em build time —
// mesmo padrão dos outros endpoints dinâmicos do site (llms.txt.ts, rss.xml.js). Zero
// esforço manual por artigo: todo post publicado ganha uma capa consistente com a marca,
// sem depender de foto real. `cover` no frontmatter continua disponível para quem quiser
// substituir por uma foto de verdade artigo a artigo (ver SEO.astro).

export async function getStaticPaths() {
  const posts = await getCollection('posts', ({ data }) => !data.draft && data.pubDate <= new Date());
  return posts.map((post) => ({ params: { slug: post.slug }, props: { post } }));
}

// Caminhos resolvidos a partir da raiz do projeto (process.cwd(), onde `astro build`
// roda) em vez de import.meta.url — assim o Vite não tenta tratar os .ttf como asset
// de cliente e reescrever o caminho na hora do build.
const fontsDir = join(process.cwd(), 'src/assets/fonts');
const sairaBold = readFileSync(join(fontsDir, 'SairaCondensed-Bold.ttf'));
const plexMono = readFileSync(join(fontsDir, 'IBMPlexMono-Medium.ttf'));

const logoPath = join(process.cwd(), 'public/logo.jpg');
const logoBase64 = `data:image/jpeg;base64,${readFileSync(logoPath).toString('base64')}`;

// Paleta do site (src/styles/global.css) — duplicada aqui porque satori não lê CSS
// externo nem var(--x); precisa dos valores literais na árvore de nós.
const COLOR = {
  command: '#18241e',
  olive: '#687843',
  paper: '#f7f5f0',
  brass: '#b07d2b',
  steel: '#8b9a99',
  lineDk: '#34433b',
};

// Título mais curto que uma linha típica de manchete recebe fonte maior; títulos longos
// encolhem para continuar cabendo nas ~4 linhas disponíveis sem estourar o card.
function titleFontSize(title: string) {
  if (title.length <= 45) return 68;
  if (title.length <= 70) return 56;
  if (title.length <= 95) return 48;
  return 40;
}

function renderCard(title: string, categoryName: string) {
  return {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: COLOR.command,
        fontFamily: 'IBM Plex Mono',
      },
      children: [
        // Barra de acento no topo
        { type: 'div', props: { style: { width: '100%', height: '10px', backgroundColor: COLOR.olive, display: 'flex' } } },
        // Corpo
        {
          type: 'div',
          props: {
            style: {
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '64px 72px 48px',
            },
            children: [
              // Eyebrow de categoria
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontSize: '26px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: COLOR.brass,
                    fontFamily: 'IBM Plex Mono',
                  },
                  children: categoryName,
                },
              },
              // Título
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    marginTop: '28px',
                    fontSize: `${titleFontSize(title)}px`,
                    lineHeight: 1.15,
                    color: COLOR.paper,
                    fontFamily: 'Saira Condensed',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                  },
                  children: title,
                },
              },
              // Rodapé: linha + marca
              {
                type: 'div',
                props: {
                  style: { display: 'flex', flexDirection: 'column', marginTop: '32px' },
                  children: [
                    { type: 'div', props: { style: { width: '100%', height: '1px', backgroundColor: COLOR.lineDk, display: 'flex' } } },
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: '24px',
                        },
                        children: [
                          {
                            type: 'div',
                            props: {
                              style: {
                                display: 'flex',
                                fontSize: '24px',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                color: COLOR.steel,
                                fontFamily: 'IBM Plex Mono',
                              },
                              children: 'Guia de Defesa',
                            },
                          },
                          {
                            type: 'img',
                            props: {
                              src: logoBase64,
                              width: 56,
                              height: 56,
                              style: { display: 'flex', borderRadius: '6px' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}

export async function GET({ props }: { props: { post: Awaited<ReturnType<typeof getCollection>>[number] } }) {
  const { post } = props;
  const categoryName = getCategory(post.data.category)?.name ?? '';

  const svg = await satori(renderCard(post.data.title, categoryName) as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Saira Condensed', data: sairaBold, weight: 700, style: 'normal' },
      { name: 'IBM Plex Mono', data: plexMono, weight: 500, style: 'normal' },
    ],
  });

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();

  return new Response(png, {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}
