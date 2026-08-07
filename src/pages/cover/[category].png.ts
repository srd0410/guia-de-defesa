import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { CATEGORIES } from '../../consts';

// Capa decorativa de header, usada dentro da página do artigo quando não há `cover` real
// (ver [slug].astro). Diferente de /og/[slug].png (que leva o título, pensado pra
// compartilhamento fora do site), esta não tem texto de artigo nenhum — só varia a cor de
// destaque por categoria — porque dentro da própria página o título já está no H1 logo
// abaixo, e repetir geraria a redundância que motivou este componente existir. Só 10
// imagens (uma por categoria), não uma por artigo — TESTE, ver com o autor se pega o rumo
// certo antes de estender pra mais lugares (ex.: og:image das próprias páginas de categoria).

export async function getStaticPaths() {
  return CATEGORIES.map((c) => ({ params: { category: c.slug } }));
}

const fontsDir = join(process.cwd(), 'src/assets/fonts');
const plexMono = readFileSync(join(fontsDir, 'IBMPlexMono-Medium.ttf'));
const logoBase64 = `data:image/jpeg;base64,${readFileSync(join(process.cwd(), 'public/logo.jpg')).toString('base64')}`;

const COLOR = { command: '#18241e', paper: '#f7f5f0', brass: '#b07d2b', steel: '#5c6b6b', lineDk: '#34433b' };

// Cor de destaque por categoria — tons dentro da mesma paleta desaturada do site
// (oliva/latão/aço), evitando cores saturadas que destoariam da identidade "manual de campo".
const ACCENT: Record<string, string> = {
  'defesa-pessoal': '#687843',
  'defesa-residencial': '#5c6b6b',
  equipamentos: '#b07d2b',
  sobrevivencialismo: '#8a7a4f',
  tiro: '#4f6273',
  'ciencia-do-treinamento': '#3f6b5e',
  fundamentos: '#4f5d32',
  legislacao: '#6b5240',
  'cac-tiro-desportivo': '#855039',
  'primeiros-socorros': '#6e3a3a',
};

function renderCard(accent: string) {
  return {
    type: 'div',
    props: {
      style: { width: '1200px', height: '630px', display: 'flex', flexDirection: 'column', backgroundColor: COLOR.paper, position: 'relative', overflow: 'hidden' },
      children: [
        // Linhas finas decorativas nos cantos — mesma textura "manual de campo" do resto do site.
        { type: 'div', props: { style: { position: 'absolute', top: '64px', left: '72px', width: '300px', height: '2px', backgroundColor: COLOR.lineDk, display: 'flex', opacity: 0.22 } } },
        { type: 'div', props: { style: { position: 'absolute', top: '84px', left: '72px', width: '190px', height: '2px', backgroundColor: COLOR.lineDk, display: 'flex', opacity: 0.22 } } },
        { type: 'div', props: { style: { position: 'absolute', bottom: '112px', right: '72px', width: '300px', height: '2px', backgroundColor: COLOR.lineDk, display: 'flex', opacity: 0.22 } } },
        { type: 'div', props: { style: { position: 'absolute', bottom: '92px', right: '72px', width: '190px', height: '2px', backgroundColor: COLOR.lineDk, display: 'flex', opacity: 0.22 } } },
        // Faixa diagonal com o emblema por cima.
        { type: 'div', props: { style: { position: 'absolute', width: '1700px', height: '230px', backgroundColor: accent, transform: 'rotate(-7deg)', top: '210px', left: '-250px', display: 'flex' } } },
        { type: 'div', props: { style: { position: 'absolute', width: '1700px', height: '5px', backgroundColor: COLOR.brass, transform: 'rotate(-7deg)', top: '206px', left: '-250px', display: 'flex' } } },
        { type: 'div', props: { style: { position: 'absolute', width: '1700px', height: '5px', backgroundColor: COLOR.brass, transform: 'rotate(-7deg)', top: '435px', left: '-250px', display: 'flex' } } },
        { type: 'img', props: { src: logoBase64, width: 130, height: 130, style: { position: 'absolute', top: '260px', left: '535px', display: 'flex', borderRadius: '10px' } } },
        // Barra sólida embaixo + rodapé com o nome do site.
        { type: 'div', props: { style: { position: 'absolute', bottom: '0', width: '100%', height: '14px', backgroundColor: COLOR.command, display: 'flex' } } },
        {
          type: 'div',
          props: {
            style: { position: 'absolute', bottom: '40px', left: '72px', display: 'flex', fontSize: '24px', letterSpacing: '3px', textTransform: 'uppercase', color: COLOR.steel, fontFamily: 'IBM Plex Mono' },
            children: 'Guia de Defesa',
          },
        },
      ],
    },
  };
}

export async function GET({ params }: { params: { category: string } }) {
  const accent = ACCENT[params.category] ?? COLOR.steel;

  const svg = await satori(renderCard(accent) as never, {
    width: 1200,
    height: 630,
    fonts: [{ name: 'IBM Plex Mono', data: plexMono, weight: 500, style: 'normal' }],
  });

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();

  return new Response(png, {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}
