# CONTINUAR AQUI — Guia de Defesa

> Documento de retomada. Leia este arquivo + o `CLAUDE.md` no início de qualquer nova
> sessão. Aponte o Claude Code para **esta** pasta (`D:\guia-de-defesa`). A skill
> `motor-de-conteudo` (em `.claude/skills/`) carrega sozinha.

## Onde está (estado atual)
- **Repositório:** github.com/srd0410/guia-de-defesa. **Publicado** (Vercel + domínio
  `guiadedefesa.com.br`). A cada merge na `main`, a Vercel republica.
- **43 artigos publicados**, em 10 clusters:
  - **Plano de 30 (completo):** Defesa Pessoal 7 · Equipamentos 7 · Defesa Residencial 5 ·
    Tiro 4 · Ciência do Treinamento 3 · Sobrevivencialismo 3 · Fundamentos 1.
  - **Expansão:** Legislação e Direito 4 · CAC e Tiro Desportivo 5 · Primeiros Socorros 4.
- **Fato YMYL fixado:** competência do CAC é da **Polícia Federal** (não Exército) desde
  01/07/2025. Todo conteúdo novo de CAC deve refletir isso (ver `CLAUDE.md`).

## Pendências (próximos passos)

### 1. Trocar placeholders de afiliado (6 ProductCards)
Substituir `SEU-LINK-DE-AFILIADO` pelos links reais em: melhores-lanternas-taticas,
melhores-coldres-de-porte, protecao-auditiva-para-tiro, melhor-faca-edc, cofre-para-arma,
kit-72-horas-mochila-emergencia. (Opções de produto já pesquisadas — ver o PDF
"Guia de Produtos - Afiliados" na Área de Trabalho.) `municao-de-defesa-calibres` é
educativo de propósito (sem ProductCard) — não adicionar afiliado.

### 2. Corrigir o artigo `melhores-red-dots-pistola.mdx`
- ProductCard com URL `https://SEU-LINK-DE-AFILIADO-AQUI` e preço `R$ 000` — trocar pelos reais.
- YouTubeEmbed com ID placeholder `dQw4w9WgXcQ` — trocar pelo ID do vídeo real.

### 3. Correções pendentes (ver `REVISAO-COMPLETA.md`)
- `clubes-de-tiro-no-brasil.mdx`: "comprovaa habitualidade" → "comprova a habitualidade".
- `kit-edc-essencial.mdx`: "vantegem tática" → "vantagem tática".
- (Opcional) Recategorizar `como-tirar-cac` e `quais-armas-cac-pode-ter` de `defesa-pessoal`
  para `cac-tiro-desportivo` — decisão de taxonomia ainda em aberto.

### 4. AdSense (quando quiser monetizar)
Acervo já passou de 25 artigos. Pedir aprovação no Google AdSense e colar o ID em
`src/consts.ts` → `adsenseClientId`. (Autor sinalizou: não agora.)

### 5. Conteúdo futuro (opcional, há espaço para crescer)
- Mais satélites dos clusters de expansão (Legislação, CAC, Primeiros Socorros).
- Subcategorias de maior busca (ver `PLANO-CATEGORIAS-EXPANSAO.md`): defesa da mulher,
  balística, consciência situacional, etc.
- Camada de **Glossário/Enciclopédia** (verbetes curtos) — formato muito citável por IA (GEO).

## Fluxo de trabalho
Criar/editar `.mdx` em `src/content/posts/` numa **branch** → Pull Request → preview na
Vercel → merge. Node em `C:\Program Files\nodejs`. `npm run dev` / `npm run build`.
Categorias válidas (10): ver enum em `src/content/config.ts` (precisa bater com `consts.ts`).

## ⛔ Não misturar
Não trazer a pasta `D:\blog-pamela` (blog da Dra. Pâmela) para esta sessão. São projetos e
repositórios independentes (guia-de-defesa x blog-dra-pamela).
