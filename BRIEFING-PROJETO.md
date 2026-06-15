# Briefing do Projeto — Guia de Defesa

## O que é este projeto
Blog em Astro hospedado em guiadedefesa.com.br, com deploy automático via 
Vercel conectado ao repositório GitHub srd0410/guia-de-defesa.

## Stack
- Framework: Astro 4.x com MDX
- Deploy: Vercel (auto-deploy a cada merge no main)
- Repositório: github.com/srd0410/guia-de-defesa
- Pasta local: D:\guia-de-defesa

## Estrutura do projeto
- src/content/posts/ — artigos em .mdx
- src/components/ — Faq.astro, AuthorBio.astro, ProductCard.astro, 
  YouTubeEmbed.astro, AdSlot.astro, SEO.astro, PostCard.astro,
  AffiliateDisclosure.astro, Header.astro, Footer.astro
- src/pages/ — index.astro, [slug].astro, autor.astro, sobre.astro, 
  categoria/[category].astro, rss.xml.js, 404.astro
- src/layouts/ — BaseLayout.astro
- src/styles/ — global.css
- src/consts.ts — configuração central (SITE, AUTHOR, CATEGORIES, STORES)
- public/ — favicon.svg, robots.txt, selo-etc.png

## Categorias do blog (7)
defesa-pessoal | defesa-residencial | equipamentos | sobrevivencialismo | 
tiro | ciencia-do-treinamento | fundamentos

## Autor
Felipe Arrais Serôdio
Credenciais: Instrutor de Tiro | Credenciado pela Polícia Federal | 
Instrutor licenciado — Metodologia ETC (Esperandio Tactical Concept)
Padrão nos posts: author omitido no frontmatter (default já configurado)

## Posts publicados (7)
1. legitima-defesa-no-brasil (defesa-pessoal)
2. sobrevivencialismo-para-iniciantes (sobrevivencialismo)
3. ciencia-do-treinamento-de-tiro (ciencia-do-treinamento)
4. melhores-red-dots-pistola (equipamentos, affiliate: true)
5. fundamentos-do-tiro (tiro)
6. dever-de-proteger-familia (fundamentos)
7. defesa-residencial-protocolo (defesa-residencial)

## Backlog de posts (23 restantes — ver PLANO-CONTEUDO.md)
Próximos a gerar: seguir a ordem e cadência do PLANO-CONTEUDO.md

## Skills instaladas
- motor-de-conteudo — gera artigos .mdx com SEO/GEO, FAQ, placeholders
- motor-instagram — adapta artigos para Instagram (legenda + prompt imagem)

## Componentes especiais
- <Faq items={[{q, a}]} /> — FAQ com schema FAQPage (importar de components)
- <ProductCard store="..." name url price take /> — afiliado com rel=sponsored
- <YouTubeEmbed id title /> — embed lazy-load
- <AffiliateDisclosure /> — automático quando affiliate: true no frontmatter
- <AuthorBio /> — automático no fim de cada post (via [slug].astro)

## AdSense
Ainda não ativado. Quando aprovado, colar o ID em src/consts.ts → adsenseClientId

## Fluxo de trabalho padrão
1. Nova sessão do Code apontando para D:\guia-de-defesa
2. Ler BRIEFING-PROJETO.md + PLANO-CONTEUDO.md + skill motor-de-conteudo
3. Gerar post em src/content/posts/<slug>.mdx
4. Rodar npm run build para validar
5. Mostrar o post para aprovação ANTES de abrir PR
6. Após aprovação: commit + push → Vercel republica automaticamente

## Regras críticas
- Nunca abrir PR sem aprovação do Felipe
- Experiência do autor: apenas instrução, cursos e estudos acadêmicos
- Nunca inventar vivência operacional ou de combate
- Posts com affiliate: true → incluir ProductCard com placeholder de link
- updatedDate: adicionar ao editar post existente (manter pubDate original)
- Lotes de 3 a 5 posts por vez, nunca tudo de uma vez
