# Guia de Defesa

Blog em **Astro** — rápido, otimizado para SEO, com sistema de afiliado e embed de YouTube embutidos.

## Subir e publicar (passo a passo)

1. **Criar o repositório no GitHub**
   - Em github.com, crie um repositório novo (ex.: `guia-de-defesa`), vazio.
   - Suba estes arquivos para ele (pela interface "upload files" ou via Git).

2. **Conectar no Vercel**
   - Em vercel.com → *Add New → Project* → importe o repositório.
   - O Vercel detecta Astro sozinho. É só clicar em **Deploy**.
   - A cada alteração aprovada (merge no GitHub), o Vercel republica automático.

3. **Ligar o domínio**
   - No projeto do Vercel → *Settings → Domains* → adicione `guiadedefesa.com.br`.
   - O Vercel mostra os registros de DNS. Cole-os no painel do **registro.br**.
   - Em `astro.config.mjs` e em `src/consts.ts`, confirme que a URL é o seu domínio.

## Como publicar um artigo (fluxo de aprovação)

Cada post é um arquivo em `src/content/posts/`. O fluxo é:
1. Um novo arquivo `.mdx` é criado (por você ou pelo Claude) numa *branch*.
2. Abre-se um **Pull Request** — o Vercel gera uma **prévia ao vivo** do post.
3. Você revê a prévia e aprova (merge). O site republica sozinho.

Veja `CONTEUDO.md` para o modelo de post e como inserir produtos de afiliado.

## Ligar os anúncios (AdSense) — só depois de ter conteúdo

1. Tenha ~15–25 bons artigos no ar.
2. Peça aprovação no Google AdSense.
3. Aprovado, cole seu ID em `src/consts.ts` → `adsenseClientId`.
   Os blocos de anúncio (`AdSlot`) acendem sozinhos.

## Rodar localmente (opcional)
```
npm install
npm run dev      # abre em http://localhost:4321
npm run build    # gera o site em dist/
```
