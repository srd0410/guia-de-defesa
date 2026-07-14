#!/usr/bin/env node
// Regera favicon/apple-touch-icon/og-image em public/ a partir do brasão da marca
// (public/logo.jpg — já é o emblema isolado, centralizado, sem o wordmark "GUIA DE
// DEFESA"). Para publicar uma versão nova do brasão:
//   1. Substitua public/logo.jpg pela versão nova (emblema isolado, mesma composição
//      centralizada) e, se aplicável, public/logo-completo.jpg (emblema + wordmark).
//   2. Rode `npm run brand:build` — favicons, apple-touch-icon e og-image são
//      regerados automaticamente a partir do logo.jpg atualizado.
// As iterações históricas do logo (V1.0–V2.2, guia de identidade) ficam versionadas em
// brand-assets/ só como referência de design — o pipeline lê sempre de public/logo.jpg.
import sharp from 'sharp';

const EMBLEM_SOURCE = 'public/logo.jpg';

// Canvas final do og-image.jpg (proporção 1200x630 recomendada por Facebook/Twitter/
// LinkedIn — o logo.jpg de origem é quadrado e não serve direto pra social share).
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const OG_EMBLEM_SIZE = 460;

async function sampleBrandBackground(imagePath) {
  const { data } = await sharp(imagePath)
    .extract({ left: 0, top: 0, width: 1, height: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  return { r: data[0], g: data[1], b: data[2] };
}

async function buildIcons() {
  await sharp(EMBLEM_SOURCE).resize(32, 32).png().toFile('public/favicon-32.png');
  await sharp(EMBLEM_SOURCE).resize(48, 48).png().toFile('public/favicon-48.png');
  await sharp(EMBLEM_SOURCE).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  console.log('  favicon-32.png, favicon-48.png, apple-touch-icon.png');
}

async function buildOgImage(background) {
  const emblem = await sharp(EMBLEM_SOURCE).resize(OG_EMBLEM_SIZE, OG_EMBLEM_SIZE).toBuffer();
  await sharp({ create: { width: OG_WIDTH, height: OG_HEIGHT, channels: 3, background } })
    .composite([{ input: emblem, gravity: 'center' }])
    .jpeg({ quality: 88 })
    .toFile('public/og-image.jpg');
  console.log('  og-image.jpg');
}

async function run() {
  const background = await sampleBrandBackground(EMBLEM_SOURCE);
  console.log(`Cor de fundo amostrada de ${EMBLEM_SOURCE}: rgb(${background.r}, ${background.g}, ${background.b})`);

  console.log(`Gerado a partir de ${EMBLEM_SOURCE}:`);
  await buildIcons();
  await buildOgImage(background);

  console.log('OK — assets atualizados em public/.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
