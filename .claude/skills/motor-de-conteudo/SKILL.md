---
name: motor-de-conteudo
description: >
  Gera e edita artigos do blog Guia de Defesa (defesa pessoal, defesa residencial,
  equipamentos/EDC, sobrevivencialismo, tiro, ciência do treinamento, fundamentos,
  legislação, CAC/tiro desportivo, primeiros socorros). Use sempre que for pedido criar,
  escrever, revisar ou atualizar um post/artigo do site, inclusive rascunhos de revisao/.
  Produz arquivos .mdx prontos pra publicar, otimizados para SEO e GEO (recuperação por
  mecanismos de IA), no padrão de CONTEUDO.md e PLANO-CONTEUDO.md.
---

# Motor de Conteúdo — Guia de Defesa

## Princípio fundamental

Escreva para **responder perguntas reais de forma mais completa que qualquer concorrente**.
Não escreva para palavras-chave nem para algoritmos. Google e IAs recompensam conteúdo
que resolve o problema do leitor sem ele precisar abrir outro site.

A meta não é só receber visita — é ser **a melhor fonte em português** sobre aquele
assunto, a ponto de Google, ChatGPT e Gemini usarem o conteúdo como referência natural.

## A voz do autor (regra crítica — vale acima de qualquer formato)

O blog é escrito por um **instrutor de tiro credenciado pela PF** que tem posição clara
sobre os temas: o cidadão tem o direito e o dever de proteger a si e à família, preparo é
responsabilidade pessoal, e conhecimento técnico bem aplicado salva vidas. O texto
**ensina com convicção**, como um instrutor experiente falando com um aluno.

- **Afirme o que é conhecimento consolidado do campo.** Não transforme cada frase em
  ressalva. Cautela entra onde muda a decisão do leitor (segurança, lei, saúde), uma vez,
  no lugar certo — não espalhada pelo texto.
- **Nunca dilua nem inverta a posição do autor.** Ao revisar, preserve o raciocínio e as
  conclusões dele. Se uma afirmação estiver factualmente errada, corrija o fato com fonte;
  não troque a tese por um "depende" genérico.
- **Ensine o "como".** O leitor veio aprender a fazer: passos, critérios, números com
  fonte, exemplos de aplicação. Um artigo que só explica os limites dos modelos, sem dizer
  o que fazer, falhou.
- **Proibido metacomentário de pesquisa no corpo do artigo**: "as fontes consultadas nesta
  revisão não apresentam...", "o resumo publicado não sustenta...", "isso descreve o
  alcance desta pesquisa", "sem extrapolar". Isso é bastidor para o relatório ao autor,
  nunca texto para o leitor.
- **Sem tom defensivo em série**: "não é garantia", "sem promessas", "não prova",
  "não substitui" repetidos em várias seções e no FAQ deixam o texto fraco e com cara de
  IA. Uma ressalva bem colocada vale mais que dez.

Teste final: leia a abertura e duas seções em voz alta. Soa como o instrutor explicando
no estande, com segurança e didática? Se soa como um parecer jurídico cheio de
condicionais, reescreva.

## Estrutura padrão do artigo (guia, não fôrma)

1. **H1** — título que parte da dor do leitor (ver abaixo).
2. **Introdução curta** + **resposta direta** (ver regra abaixo).
3. **Explicação aprofundada** em seções com subtítulos H2/H3.
4. **Fundamentos** (científicos/legais/técnicos conforme o tema).
5. **Aplicação prática**.
6. **Erros comuns**.
7. **Perguntas frequentes (FAQ)**.
8. **Conclusão** com encerramento e CTA quando fizer sentido.
9. **Fontes consultadas** (ver "Originalidade e fontes").

> IMPORTANTE — anti-fôrma: essa estrutura é um esqueleto de referência, não um molde
> rígido a ser copiado igual em todo post. Varie a ordem, os nomes das seções e o ritmo
> conforme o tema. Em escala, artigos idênticos na forma "cheiram a IA" e os sistemas
> anti-spam do Google penalizam conteúdo produzido em massa.

## Título, description e gancho

- **Parta da dor do leitor.** O título começa pelo sintoma ou pela dúvida que ele busca;
  o termo técnico vem como resposta ("Grupo espalhado? Empunhadura e postura no tiro").
- **Gancho direto**: situação reconhecível e utilidade imediata, linguagem de conversa.
  Sem clickbait, medo artificial ou promessa absoluta.
- **A promessa do título é cumprida no primeiro parágrafo,** sem suspense.
- Título com cerca de 50–65 caracteres; `description` com 120–160 caracteres, contendo a
  resposta ou o benefício. O título do frontmatter já vira H1; não crie outro no corpo.

## Regra da resposta imediata

Nos primeiros **150–250 caracteres** do corpo, responda claramente à pergunta principal.
NUNCA comece com "Neste artigo vamos falar…", "Hoje veremos…", "Antes de começar…".
Isso desperdiça o trecho que o Google e as IAs mais leem.

**Na prática, o parágrafo de abertura costuma passar desse limite** (é comum ficar em
400–600 caracteres, porque mistura resposta + contexto + gancho). Isso é aceitável para o
parágrafo em si — mas não deixa o artigo escaneável para quem só quer a resposta. Por isso,
logo depois do parágrafo de abertura (antes de qualquer `<blockquote>` de aviso), adicione
uma caixa de **resposta rápida** com o componente `<Callout>` já existente — é a leitura
de 30 segundos a 1 minuto de quem não vai ler o resto:

```
import Callout from '../../components/Callout.astro';
...
<Callout type="resumo" title="Resposta rápida">
  <ul>
    <li><strong>Rótulo curto:</strong> resposta telegráfica, 1 linha.</li>
    <li><strong>Outro rótulo:</strong> resposta telegráfica.</li>
  </ul>
</Callout>
```

3 a 6 itens, cada um cobrindo uma faceta distinta da pergunta principal (quem/onde/quanto/
prazo/o que fazer/o que não vale), em formato "rótulo em negrito: resposta direta" — não
frases longas, não repita o parágrafo de abertura palavra por palavra. Os itens dizem **o
que fazer**, não só o que evitar. Use HTML real dentro do Callout (`<strong>`, `<a>`,
`<em>`), não markdown — mesma regra do `<Faq>`. Artigos muito curtos ou de resposta única
(sem múltiplas facetas) podem dispensar a caixa.

## Subtítulos como perguntas reais

Use H2/H3 que sejam perguntas que as pessoas realmente fazem. Ex.: "O red dot é mais
rápido que a mira aberta?", "Como o estresse afeta a precisão do tiro?", "Quanto tempo
leva pra se adaptar ao red dot?". Esses formatos são reproduzidos por sistemas de IA.

## Entidades

Mencione explicitamente as entidades relevantes do tema e relacione-as. As IAs trabalham
por relações entre entidades — quanto mais claras, melhor a recuperação. Ex. (tiro/treino):
sistema nervoso simpático, frequência cardíaca, visão periférica, visão em túnel, red dot,
mira aberta, prática deliberada, engrama motor, tomada de decisão sob estresse.

## Profundidade obrigatória

Cada artigo deve responder, no que couber ao tema: o que é? por que acontece? como
funciona? quando ocorre? quais vantagens? quais limitações? como aplicar? quais erros
evitar? Se uma dessas faltar e for pertinente, o artigo está incompleto.

## Experiência prática — COM INTEGRIDADE (regra crítica)

Sinais de experiência real elevam o E-E-A-T. MAS:
- **NUNCA invente** anedotas, vivências, números ou "causos" que não aconteceram. Em
  tema de segurança, experiência fabricada é falha de integridade e risco de induzir o
  leitor a erro.
- **Escopo da experiência do autor:** o autor (Felipe Arrais Serôdio) só relata vivências
  de **instrução de tiro, cursos e estudos acadêmicos**. NUNCA atribua a ele experiência
  de operações reais, combate ou missões militares, nem insinue passado operacional —
  ainda que o tema seja "tiro de combate". A autoridade vem da instrução e do estudo, não
  de operação.
- **Nunca insira o placeholder de experiência por conta própria (regra revisada em
  2026-08-08).** Um trecho que "pediria" experiência de primeira mão **não** deve virar
  automaticamente um placeholder — o padrão é escrever em linguagem técnica e impessoal
  o que é conhecimento consolidado do campo ("observa-se que, sob estresse agudo, a
  motricidade fina se degrada"), sem fingir uma experiência pessoal específica. Um
  placeholder inacabado é pior do que nenhum placeholder: é um item pendente publicável
  por engano, e isso já aconteceu (ver `CONTINUAR-AQUI.md`/memória do projeto).
- **Só insira o placeholder quando o autor pedir explicitamente** que um trecho específico
  traga uma vivência pessoal dele. Nesse caso — e só nesse caso —, use o formato:
  `> [EXPERIÊNCIA DO AUTOR: observação real de instrução/curso/estudo sobre X]`, sempre
  dentro do escopo acima (instrução/curso/estudo).
- Se um placeholder já existir num artigo (de um pedido anterior do autor) e ele não foi
  preenchido, resolva antes de publicar: (a) preencha com o relato real que o autor deu,
  ou (b) remova o callout e caia na linguagem técnica impessoal. Ao revisar um PR antes do
  merge, sempre grep por essa string nos arquivos tocados para garantir que nenhum
  placeholder pendente vá para produção.

## E-E-A-T e tom

Demonstre Experiência, Expertise, Autoridade e Confiança via: precisão técnica,
consistência conceitual, ausência de exagero, fontes citadas. Tom **objetivo, técnico,
claro** — e seguro do que ensina (ver "A voz do autor"). Sem marketing excessivo, sem
clickbait, sem sensacionalismo, sem promessas absolutas. Lembrar: temas como legítima
defesa, CAC e defesa pessoal são YMYL — exigem rigor extra e cautela, o que significa
**fato certo com fonte**, não texto hesitante.

## Parágrafos e legibilidade (leitor no celular)

A maior parte dos leitores chega pelo celular (cerca de 400 px de largura). Parágrafos de
2 a 4 linhas no celular (algo como 40–70 palavras). Nada de blocos gigantes. Use listas
quando ajudar a leitura humana e a interpretação por IA. Tabela com no máximo 3 colunas
(acima disso, lista); respostas do FAQ com 1 a 3 frases; nada de vários links empilhados
na mesma frase.

**Varie os conectivos** entre seções — não repita a mesma muleta (ex.: evitar "E daí?" em
todas as seções; alternar com "Na prática,", "O resultado disso é", "Traduzindo:", ou
emendar direto).

**"Em resumo" é a muleta mais comum no acervo atual — tratar como quase proibida.**
Auditoria encontrou a expressão repetida ao final de quase todo H2 em dezenas de posts,
o que soa mecânico e repetitivo pra quem lê o artigo inteiro. Regra prática: no máximo
**uma** ocorrência de "em resumo" (ou equivalente tipo "resumindo", "em suma") por
artigo inteiro — e só se a seção for longa/complexa o bastante pra realmente precisar
de um fechamento-síntese. Na maioria das seções, feche o parágrafo com a própria ideia
(a última frase já é a conclusão) em vez de sinalizar explicitamente que está resumindo.

**Ao variar, cheque se você não está criando uma muleta nova.** Revisão de julho/2026 achou
artigos onde, ao tentar evitar "em resumo", o mesmo conectivo alternativo (ex.: "na prática",
"no fim das contas") foi usado 2+ vezes no mesmo artigo — trocou uma repetição por outra.
Antes de fechar o artigo, confira com `grep -oi` os conectivos de fechamento usados e
confirme que nenhum se repete no mesmo texto. Clusters de legislação/CAC são onde esse
chavão mais aparece (fechamento de parágrafo jurídico "denso").

Termo técnico em inglês só quando consagrado, com tradução na primeira ocorrência:
`*dry fire*` ("tiro a seco").

## Contexto brasileiro

- **Unidades métricas.** Fonte em jardas, polegadas ou galões: converta com aproximação
  ("10 jardas, cerca de 9 m").
- **Preço e taxa:** sempre com data e fonte, ou omita. Valor muda.
- **Norma brasileira prevalece.** Doutrina ou estudo estrangeiro descreve o contexto dele;
  diga isso quando a diferença importar para o leitor brasileiro.
- **Onde praticar:** disparo real só em estande ou clube; treino a seco só com arma
  descarregada, conferida e munição fora do ambiente.
- Serviços públicos quando couber: Defesa Civil (199, alertas por SMS 40199), Bombeiros
  (193), SAMU (192).

## FAQ (obrigatória)

Termine com uma seção de perguntas frequentes. Mínimo 5 perguntas; ideal 8 a 12. Use
perguntas reais e específicas do tema. **Use sempre o componente `<Faq>`**
(`src/components/Faq.astro`), que emite o schema **FAQPage** (JSON-LD) — importante para
SEO e para citação por mecanismos de IA. Não escrever a seção em markdown solto
(`## Perguntas frequentes` + `**Pergunta?**`/resposta): isso não gera dado estruturado.

Formato em MDX:

```
import Faq from '../../components/Faq.astro';
...
<Faq items={[
  { q: "O red dot funciona à noite?", a: "Resposta direta em 1–3 frases." },
  { q: "O red dot aumenta a precisão?", a: "Resposta direta." },
]} />
```

O componente já renderiza o próprio título "Perguntas frequentes" — não duplicar com um
`## Perguntas frequentes` antes dele. Negrito e links dentro da resposta devem ser **HTML
real** (`<strong>texto</strong>`, `<a href="/x/">texto</a>`), não markdown — o componente
usa `set:html`, que não converte `**negrito**` nem `[link](url)`.

**Respostas do FAQ respondem.** Comece com "Sim", "Não" ou o dado, e dê a orientação
prática. Uma resposta que só diz que "não há garantia" ou que "as fontes não estabelecem"
não serve ao leitor.

**Evitar redundância entre o corpo e o FAQ.** O FAQ não é um resumo do artigo em forma de
pergunta — leitor que já leu o corpo e chega ao FAQ não pode sentir que está lendo a mesma
frase de novo. Formas de evitar isso: (a) a resposta do FAQ pode ser mais direta/telegráfica
que o parágrafo correspondente, sem repetir a mesma frase quase palavra por palavra; (b)
prefira perguntas que cobrem ângulos que o corpo não aprofundou (caso extremo, comparação
rápida, número específico) em vez de reformular o H2 como pergunta; (c) se uma pergunta de
FAQ só existe pra repetir o que já foi dito duas seções acima, corte-a ou mescle com outra.

**Não espelhe os H2 do corpo 1:1 no FAQ.** Auditoria de julho/2026 achou esse como o padrão
mais comum de redundância no acervo. Regra prática: **pelo menos metade** das perguntas do
FAQ deve levantar algo que nenhum H2 aprofundou (uma exceção, um caso-limite, uma
comparação que só cabe numa resposta curta, um "e se...").

## Linkagem interna e clusters

Todo artigo aponta para **pelo menos 3** conteúdos relacionados do próprio site, formando
rede temática. Satélites sempre linkam de volta para o artigo-pilar do seu cluster
(ver PLANO-CONTEUDO.md). Use o slug correto, no formato `/slug-do-artigo/`. **Nunca linke
artigo que está em `revisao/` ou `revisados/`**: vira 404 no ar.

Valide os destinos antes de entregar:
```
for s in $(grep -ohP '\]\(/\K[a-z0-9-]+(?=/\))|href="/\K[a-z0-9-]+(?=/")' arquivo.mdx); do
  [ -f "src/content/posts/$s.mdx" ] || echo "QUEBRADO: $s"; done
```

### Retro-linkagem obrigatória (sempre que um artigo novo for publicado)

Linkagem é **bidirecional**: não basta o artigo novo apontar para os antigos — os antigos
também precisam apontar para o novo. Toda vez que criar/publicar um artigo, faça uma
**varredura nos artigos já existentes** em busca de oportunidades de referenciar o novo (e
artigos relacionados entre si). Passo a passo:

1. **Identifique os candidatos.** Liste os posts existentes (`src/content/posts/*.mdx`) do
   mesmo cluster e de clusters vizinhos cujo assunto se relacione com o artigo novo.
   Priorize: o **artigo-pilar** do cluster, os **satélites irmãos** e qualquer artigo que
   mencione o tema en passant sem ter um link para ele.
2. **Insira o link no contexto certo.** No artigo antigo, adicione o link para o novo onde
   o assunto já é citado naturalmente (no corpo, numa conclusão parcial ou na lista de
   "aprofunde" da conclusão). O link deve fazer sentido editorial — nada de empilhar links
   soltos só para cumprir tabela. Use texto-âncora descritivo e o slug em `/slug/`.
3. **Pilar sempre incluído.** Se o artigo novo é satélite, o pilar do cluster **tem** de
   passar a listá-lo entre os temas para aprofundar.
4. **Marque o frescor do artigo antigo.** Todo post antigo que você editar nessa varredura
   recebe `updatedDate: <data de hoje>` no frontmatter, **mantendo o `pubDate` original**.
5. **Não force nem polua.** Só adicione link onde há relação verdadeira. Um artigo antigo
   sem conexão real com o novo não deve ser editado (e, portanto, não recebe `updatedDate`).

## Originalidade e fontes

Nunca reproduza texto de outros sites. Produza síntese original, com linguagem própria e
interpretação prática. Priorize fontes: estudos científicos, doutrina militar, publicações
governamentais, pesquisas acadêmicas, instituições reconhecidas. Não invente citações nem
dados — se não tiver a fonte, não afirme o número.

**Em legislação e saúde/primeiros socorros, citar fonte nunca é opcional.** Toda afirmação
técnica factual — protocolo médico, número de lei, prazo legal, estatística — precisa vir
com instituição e, quando disponível, o ano da revisão/publicação, direto na prosa (ex.:
"segundo a revisão da American Heart Association de 2025", "conforme o Decreto
11.615/2023"). Isso vale tanto para escrever um artigo novo quanto para revisar um já
publicado: se a revisão encontrar um dado desatualizado, corrija citando a fonte nova e
marque `updatedDate` (mantendo `pubDate` original).

Nessas duas áreas, **sempre checar divergência entre fontes e se a versão usada é a mais
recente** antes de publicar ou revisar — protocolo médico e norma legal mudam (foi
exatamente o caso do desengasgo em bebês, revisão AHA 2025). Se houver mais de uma versão
circulando, sinalize a divergência no texto e explique qual é a atual e por quê.

**Legislação e CAC — específicos:**
- Obrigação, prazo ou taxa cita a norma por número e artigo, com link oficial
  (planalto.gov.br, gov.br/pf, DOU). Use o componente `<LegalSource>`.
- **Traga o dado**, não o substitua por "confirme na PF". Esse padrão genérico era comum
  nos artigos que o Google não indexava.
- Competência de CAC é da Polícia Federal desde 01/07/2025 (Decreto 11.615/2023).
- Não use "porte de trânsito" como instituto atual; descreva a guia de tráfego.

**Defesa pessoal e técnica de tiro** são técnica, tática e julgamento situacional. Aqui a
fonte reforça, mas o conhecimento consolidado do instrutor pode ser afirmado sem
citação a cada frase. Manual militar/policial descreve a prática no contexto dele; use-o
para fundamentar, não para encher o texto de condicionais.

**Equipamentos e sobrevivencialismo:** especificação vem do manual ou da ficha do
fabricante; não invente teste, nota ou autonomia. Exemplo numérico sempre com premissas
("com 4 a 6 horas de sol pleno").

### Seção "Fontes consultadas" (padrão pedido pelo autor em 22/10/2026)

Todo artigo fecha com **ao menos 3 referências técnicas ou bibliográficas** (estudos,
livros, manuais, normas, documentos institucionais) e **2 textos de blog ou opinião** que
acrescentem experiência ou contraponto. Não inclua fonte irrelevante ou inacessível para
completar a conta; se faltar, informe a lacuna ao autor.

- **Só cite o que foi realmente aberto e lido.** Obra conhecida só por catálogo vai em
  "Leitura recomendada", nunca em "Fontes consultadas" nem como respaldo de uma afirmação.
- Cada item: título com link, autor/instituição, ano e **uma linha dizendo o que a fonte
  acrescenta ao leitor**. O nível de acesso (texto completo, resumo, trecho) vai no
  **relatório ao autor**, não no artigo.
- Blog não vira evidência científica por usar linguagem técnica. Dois textos que repetem o
  mesmo estudo não são duas confirmações.

```mdx
## Fontes consultadas

**Bibliografia e documentos técnicos**

- [Título — Autor ou instituição, ano](https://link): o que a fonte acrescenta.

**Opinião e blogs especializados**

- [Título — Autor, veículo, ano](https://link): experiência ou contraponto que traz.
```

**Como obter as fontes na prática:** muitos sites recusam leitura automática (erro 403).
Tente o PDF ou a página com `curl` e User-Agent de navegador e extraia texto com
`pdftotext -layout`; para documentos fora do ar, a cópia do Wayback Machine. Prefira DOI,
PubMed, editora, repositório universitário e páginas `gov`. **Desconfie de espelhos e
páginas de spam** (domínios sem relação com o tema, `?p=<número>`, `Download_PDFS`).

## Formato técnico do post (frontmatter)

Novo rascunho: `revisao/<slug>.mdx` com `draft: true` (ou direto em `src/content/posts/`
quando o autor pedir publicação). Frontmatter:

```mdx
---
title: "Dor do leitor + resposta"
description: "Resumo de 120–160 caracteres (vira a meta description)."
category: "equipamentos"   # defesa-pessoal | defesa-residencial | equipamentos | sobrevivencialismo | tiro | ciencia-do-treinamento | fundamentos | legislacao | cac-tiro-desportivo | primeiros-socorros
pubDate: 2026-06-13
tags: ["..."]
affiliate: true            # true se houver ProductCard ou ProdutoContexto
ads: true                  # false em armas, munição e acessórios de arma
cover: "../../assets/capas/<slug>-capa.jpg"   # opcional
coverAlt: "Descrição do que aparece na imagem"
---
```

- Ao **revisar/editar** um post existente, adicionar `updatedDate: <data>` — o site mostra
  "atualizado em [data]" (sinal de frescor pro Google). Manter `pubDate` original e slug.
- Marcar `draft: true` para não publicar ainda.
- Autor convidado: campo `guestAuthor` (`name`, `credential`, `url`).
- Sem imagem definida, deixe sem capa e sinalize ao autor.

## Componentes disponíveis (importar no topo do MDX)

- **Callout** — tipos `resumo`, `atencao`, `juridico`; HTML real dentro.
- **Faq** — obrigatório, ver acima.
- **LegalSource** — "base legal e fontes oficiais" em artigos de lei e CAC
  (`norms`, `verifiedAt`, `links`).
- **Produto de afiliado próprio** (já sai com `rel="sponsored"`):
  ```
  import ProductCard from '../../components/ProductCard.astro';
  <ProductCard store="mercadolivre" name="..." url="LINK-DE-AFILIADO" price="R$ ..." take="opinião honesta de instrutor (1–2 frases)" />
  ```
  O link de afiliado é gerado pelo autor no painel da loja — usar placeholder
  `SEU-LINK-DE-AFILIADO` quando não fornecido (nunca publicar com ele).
  **No `take`, ser honesto sobre a origem da confiança na indicação:** se é uso pessoal
  testado pelo autor, dizer isso explicitamente ("a que eu uso", "tenho a minha há X anos");
  se não há uso próprio, deixar claro também ("não tenho uso pessoal desta, a indicação é
  baseada em pesquisa/depoimentos"). Nunca um texto genérico que não diz de onde vem a
  confiança.
- **Vitrine do catálogo:** `<ProdutoContexto ids={['S6']} />`, com códigos de
  `src/data/produtos-afiliados.ts` (código inexistente derruba o build).
- **Limites** (`src/consts.ts`): no máximo `maxBlocosAfiliado` (4) blocos de produto por
  artigo, contando os cards próprios; sem produto no topo nas categorias de
  `semVitrineNoTopo`. Produto só onde resolve o problema da seção. Coldre, cinto, lanterna
  tática e itens de combate só com recomendação pessoal do autor. Munição não tem afiliado.
- O **aviso de afiliado não é escrito manualmente** — o template renderiza o
  `<AffiliateDisclosure>` no **final** do artigo para todo post com `affiliate: true`.
- **Vídeo do YouTube** (embed lazy; nunca repost). ID placeholder não pode ser publicado:
  sem vídeo real, remova o embed.
  ```
  import YouTubeEmbed from '../../components/YouTubeEmbed.astro';
  <YouTubeEmbed id="ID_DO_VIDEO" title="Descrição" />
  ```

## Modo revisão

- **Publicado e não indexado** ("rastreada, mas não indexada" no Search Console): o método
  que funcionou em set.–out./2026 (6 artigos jurídicos indexados ~12 dias depois) foi
  trocar trechos genéricos por dado verificável com fonte, corrigir dado desatualizado,
  retro-links de 2 a 4 artigos relacionados, `updatedDate` de hoje e pedido de indexação
  manual após o merge. Não troque slug nem `pubDate`.
- **Rascunho de `revisao/`:** fica fora do Git — copie o original para o scratchpad antes
  de editar. Procure estatística sem fonte, precisão falsa (latências, porcentagens
  soltas), erros de português, Markdown dentro de HTML, placeholders, links para outros
  rascunhos e sobreposição com publicados.
- **Preserve o que está bom**: a voz do autor, as conclusões dele, os dados de afiliado
  (URL, `take`). Revisar é melhorar, não reescrever com outra cabeça.

Varreduras rápidas:
```
grep -n "EXPERIÊNCIA DO AUTOR\|SEU-LINK-DE-AFILIADO\|TROCAR-ID" arquivo.mdx
grep -n "\*\*" arquivo.mdx        # dentro de <Callout> ou <Faq> deve ser <strong>
grep -oi "em resumo\|resumindo\|em suma\|na prática\|no fim das contas" arquivo.mdx | sort | uniq -c
grep -oi "não é garantia\|sem promessa\|não prova\|não substitui\|fontes consultadas nesta" arquivo.mdx | sort | uniq -c
```

**Compilar rascunho:** o build ignora `revisao/` e `draft: true`. Para provar que compila,
copie para `src/content/posts/` com `draft: false`, rode `npm run build`, confira
`dist/<slug>/index.html` e apague a cópia e `dist/<slug>/`.

## Fluxo de trabalho

Gerar em **lotes pequenos (3–5 por vez)** e mostrar ao autor antes de abrir o Pull
Request. Qualidade acima de volume — artigo bom de instrutor vale mais que muitos
genéricos. Só abrir PR após aprovação. Na entrega, informe: o que mudou, fontes com o
nível de acesso de cada uma, afirmações retiradas por falta de fonte e placeholders
restantes.

## Checklist final (antes de publicar)

- [ ] Soa como o instrutor ensinando, com convicção — e a posição do autor está preservada?
- [ ] Título parte da dor do leitor e a resposta vem nos primeiros 150–250 caracteres?
- [ ] Tem a caixa `<Callout type="resumo" title="Resposta rápida">` dizendo o que fazer?
- [ ] Subtítulos em formato de pergunta?
- [ ] Nenhuma experiência inventada; nenhum placeholder inserido sem pedido do autor?
- [ ] Fundamentos corretos, sem dados inventados, e sem metacomentário de pesquisa no texto?
- [ ] Ressalvas só onde mudam a decisão — sem disclaimers em série?
- [ ] FAQ (5+ perguntas) com respostas que de fato respondem, metade com ângulo novo?
- [ ] 3+ links internos válidos, nenhum para rascunho; satélite linka pro pilar?
- [ ] Retro-linkagem feita, com `updatedDate` (e `pubDate` original mantido)?
- [ ] "Fontes consultadas" com 3 técnicas + 2 de opinião, todas realmente lidas?
- [ ] Profundidade real (o que/por quê/como/quando/vantagens/limites/aplicar/erros)?
- [ ] Execução variada (não é cópia da fôrma; sem muletas repetidas)?
- [ ] Legível no celular; frontmatter completo (`affiliate`, `ads`) e slug correto?
- [ ] O leitor resolve a dúvida sem precisar de outro site?
