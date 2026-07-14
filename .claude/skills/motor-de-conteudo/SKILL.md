---
name: motor-de-conteudo
description: >
  Gera e edita artigos do blog Guia de Defesa (defesa pessoal, defesa residencial,
  equipamentos/EDC, sobrevivencialismo, tiro, ciência do treinamento, fundamentos).
  Use sempre que for pedido criar, escrever, revisar ou atualizar um post/artigo do
  site. Produz arquivos .mdx prontos pra publicar, otimizados para SEO e GEO
  (recuperação por mecanismos de IA), no padrão de CONTEUDO.md e PLANO-CONTEUDO.md.
---

# Motor de Conteúdo — Guia de Defesa

## Princípio fundamental

Escreva para **responder perguntas reais de forma mais completa que qualquer concorrente**.
Não escreva para palavras-chave nem para algoritmos. Google e IAs recompensam conteúdo
que resolve o problema do leitor sem ele precisar abrir outro site.

A meta não é só receber visita — é ser **a melhor fonte em português** sobre aquele
assunto, a ponto de Google, ChatGPT e Gemini usarem o conteúdo como referência natural.

## Estrutura padrão do artigo (guia, não fôrma)

1. **H1** — título com a palavra-chave principal na frente.
2. **Introdução curta** + **resposta direta** (ver regra abaixo).
3. **Explicação aprofundada** em seções com subtítulos H2/H3.
4. **Fundamentos** (científicos/legais/técnicos conforme o tema).
5. **Aplicação prática**.
6. **Erros comuns**.
7. **Perguntas frequentes (FAQ)**.
8. **Conclusão** com encerramento e CTA quando fizer sentido.

> IMPORTANTE — anti-fôrma: essa estrutura é um esqueleto de referência, não um molde
> rígido a ser copiado igual em todo post. Varie a ordem, os nomes das seções e o ritmo
> conforme o tema. Em escala, artigos idênticos na forma "cheiram a IA" e os sistemas
> anti-spam do Google penalizam conteúdo produzido em massa.

## Regra da resposta imediata

Nos primeiros **150–250 caracteres** do corpo, responda claramente à pergunta principal.
NUNCA comece com "Neste artigo vamos falar…", "Hoje veremos…", "Antes de começar…".
Isso desperdiça o trecho que o Google e as IAs mais leem.

**Na prática, o parágrafo de abertura costuma passar desse limite** (é comum ficar em
400–600 caracteres, porque mistura resposta + contexto + gancho). Isso é aceitável para o
parágrafo em si — mas não deixa o artigo escaneável para quem só quer a resposta. Por isso,
logo depois do parágrafo de abertura (antes de qualquer `<blockquote>` de aviso), adicione
uma caixa de **resposta rápida** com o componente `<Callout>` já existente:

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
prazo/o que não vale), em formato "rótulo em negrito: resposta direta" — não frases longas,
não repita o parágrafo de abertura palavra por palavra. Pense nela como o que alguém leria
se não fosse ler o resto do artigo. Use HTML real dentro do Callout (`<strong>`, `<a>`,
`<em>`), não markdown — mesma regra do `<Faq>`. Artigos muito curtos ou de resposta única
(sem múltiplas facetas) podem dispensar a caixa; a maioria dos artigos do acervo (guias de
processo, comparativos, "o que levar") se beneficia dela.

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
- Quando um trecho pediria experiência de primeira mão, **insira um placeholder** para o
  autor preencher, sempre dentro desse escopo, no formato:
  `> [EXPERIÊNCIA DO AUTOR: observação real de instrução/curso/estudo sobre X]`
- Pode escrever em linguagem técnica e impessoal o que é conhecimento consolidado do
  campo ("observa-se que, sob estresse agudo, a motricidade fina se degrada"), sem
  fingir uma experiência pessoal específica.
- **Este placeholder nunca deve ir para produção sem resolução.** Antes de publicar
  (mergear o PR), o autor precisa: (a) preencher com o relato real, ou (b) pedir para
  remover o callout, caindo de volta na linguagem técnica impessoal acima. Um placeholder
  `[EXPERIÊNCIA DO AUTOR: ...]` esquecido e publicado é um bug visível no site (já
  aconteceu — ver `CONTINUAR-AQUI.md`/memória do projeto). Ao revisar um PR antes do
  merge, sempre grep por essa string nos arquivos tocados.

## E-E-A-T e tom

Demonstre Experiência, Expertise, Autoridade e Confiança via: precisão técnica,
consistência conceitual, ausência de exagero, fontes citadas. Tom **objetivo, técnico,
claro**. Sem marketing excessivo, sem clickbait, sem sensacionalismo, sem promessas
absolutas. Lembrar: temas como legítima defesa, CAC e defesa pessoal são YMYL — exigem
rigor extra e cautela.

## Parágrafos e legibilidade

Parágrafos de 2 a 5 linhas. Nada de blocos gigantes. Use listas quando ajudar a leitura
humana e a interpretação por IA. **Varie os conectivos** entre seções — não repita a
mesma muleta (ex.: evitar "E daí?" em todas as seções; alternar com "Na prática,",
"O resultado disso é", "Traduzindo:", ou emendar direto).

**"Em resumo" é a muleta mais comum no acervo atual — tratar como quase proibida.**
Auditoria encontrou a expressão repetida ao final de quase todo H2 em dezenas de posts,
o que soa mecânico e repetitivo pra quem lê o artigo inteiro. Regra prática: no máximo
**uma** ocorrência de "em resumo" (ou equivalente tipo "resumindo", "em suma") por
artigo inteiro — e só se a seção for longa/complexa o bastante pra realmente precisar
de um fechamento-síntese. Na maioria das seções, feche o parágrafo com a própria ideia
(a última frase já é a conclusão) em vez de sinalizar explicitamente que está resumindo.
Se sentir necessidade de sintetizar toda seção, varie: "Na prática,", "O que fica disso:",
"Dito de outro jeito,", "A regra que importa aqui:", ou simplesmente não sinalizar nada.

**Ao variar, cheque se você não está criando uma muleta nova.** Revisão de julho/2026 achou
artigos onde, ao tentar evitar "em resumo", o mesmo conectivo alternativo (ex.: "na prática",
"no fim das contas") foi usado 2+ vezes no mesmo artigo — trocou uma repetição por outra.
Antes de fechar o artigo, dê um Ctrl+F mental (ou `grep -o` literal) nos conectivos de
fechamento que você usou e confirme que nenhum se repete no mesmo texto. Clusters de
legislação/CAC são onde esse chavão mais aparece (fechamento de parágrafo jurídico "denso").

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

**Evitar redundância entre o corpo e o FAQ.** O FAQ não é um resumo do artigo em forma de
pergunta — leitor que já leu o corpo e chega ao FAQ não pode sentir que está lendo a mesma
frase de novo. Formas de evitar isso: (a) a resposta do FAQ pode ser mais direta/telegráfica
que o parágrafo correspondente, sem repetir a mesma frase quase palavra por palavra; (b)
prefira perguntas que cobrem ângulos que o corpo não aprofundou (caso extremo, comparação
rápida, número específico) em vez de reformular o H2 como pergunta; (c) se uma pergunta de
FAQ só existe pra repetir o que já foi dito duas seções acima, corte-a ou mescle com outra.

**Não espelhe os H2 do corpo 1:1 no FAQ.** Auditoria de julho/2026 achou esse como o padrão
mais comum de redundância no acervo: cada pergunta do FAQ correspondia a um subtítulo do
corpo, na mesma ordem, com a resposta só resumindo aquele parágrafo — efetivamente um
segundo sumário do artigo. Regra prática: **pelo menos metade** das perguntas do FAQ deve
levantar algo que nenhum H2 aprofundou (uma exceção, um caso-limite, uma comparação que só
cabe numa resposta curta, um "e se..."). As demais podem cobrir o essencial de forma mais
telegráfica que o corpo, mas não na mesma ordem/cobertura dos subtítulos.

## Linkagem interna e clusters

Todo artigo aponta para **pelo menos 3** conteúdos relacionados do próprio site, formando
rede temática. Satélites sempre linkam de volta para o artigo-pilar do seu cluster
(ver PLANO-CONTEUDO.md). Use o slug correto, no formato `/slug-do-artigo/`.

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
   Isso sinaliza atualização real ao Google sem falsear a data de publicação.
5. **Não force nem polua.** Só adicione link onde há relação verdadeira. Um artigo antigo
   sem conexão real com o novo não deve ser editado (e, portanto, não recebe `updatedDate`).

Resultado esperado: cada artigo novo entra numa malha em que os antigos relevantes já o
referenciam — a rede temática cresce nos dois sentidos, e os artigos antigos ganham sinal
de frescor a cada vez que o acervo evolui ao redor deles.

## Originalidade e fontes

Nunca reproduza texto de outros sites. Produza síntese original, com linguagem própria e
interpretação prática. Priorize fontes: estudos científicos, doutrina militar, publicações
governamentais, pesquisas acadêmicas, instituições reconhecidas. Não invente citações nem
dados — se não tiver a fonte, não afirme o número.

**Em legislação e saúde/primeiros socorros, citar fonte nunca é opcional.** Toda afirmação
técnica factual — protocolo médico, número de lei, prazo legal, estatística — precisa vir
com instituição e, quando disponível, o ano da revisão/publicação, direto na prosa (ex.:
"segundo a revisão da American Heart Association de 2025", "conforme o Decreto
11.615/2023"). Não é preciso link nem seção formal de referências — o site não tem esse
componente —, mas a atribuição em texto é obrigatória, não "quando possível". Isso vale
tanto para escrever um artigo novo quanto para revisar um já publicado: se a revisão
encontrar um dado desatualizado, corrija citando a fonte nova e marque `updatedDate`
(mantendo `pubDate` original), do mesmo jeito que qualquer outra atualização de conteúdo.

Nessas duas áreas, **sempre checar divergência entre fontes e se a versão usada é a mais
recente** antes de publicar ou revisar — protocolo médico e norma legal mudam (foi
exatamente o caso do desengasgo em bebês, revisão AHA 2025), e uma fonte só, ou uma fonte
desatualizada, não é suficiente. Se houver mais de uma versão circulando (ex.: uma
diretriz revisada recentemente vs. o que a maioria dos sites ainda replica), sinalize a
divergência no texto e explique qual é a atual e por quê.

**Defesa pessoal é diferente: não tem o mesmo padrão de "verdade absoluta" factual** —
muito do conteúdo é técnica, tática e julgamento situacional, onde a citação de instituição
nem sempre se aplica ou faz sentido. Nunca decida sozinho se cita ou não nesse caso:
**pergunte ao autor** se ele quer citação de fonte para aquele artigo/trecho específico
antes de publicar.

Fora dessas três áreas (equipamentos, EDC, sobrevivencialismo geral), a citação continua
recomendada sempre que houver dado factual verificável, mas sem o mesmo nível de rigor
exigido.

## Formato técnico do post (frontmatter)

Criar o arquivo em `src/content/posts/<slug>.mdx`. Frontmatter:

```mdx
---
title: "Título com a palavra-chave na frente"
description: "Resumo de 120–160 caracteres (vira a meta description)."
category: "equipamentos"   # defesa-pessoal | defesa-residencial | equipamentos | sobrevivencialismo | tiro | ciencia-do-treinamento | fundamentos
pubDate: 2026-06-13
tags: ["..."]
affiliate: true            # true se houver ProductCard
---
```

- Ao **revisar/editar** um post existente, adicionar `updatedDate: <data>` — o site mostra
  "atualizado em [data]" (sinal de frescor pro Google). Manter `pubDate` original.
- Marcar `draft: true` para não publicar ainda.

## Componentes disponíveis (importar no topo do MDX)

- **Produto de afiliado** (Equipamentos/EDC; já sai com `rel="sponsored"`):
  ```
  import ProductCard from '../../components/ProductCard.astro';
  <ProductCard store="mercadolivre" name="..." url="LINK-DE-AFILIADO" price="R$ ..." take="opinião honesta de instrutor (1–2 frases)" />
  ```
  O link de afiliado é gerado pelo autor no painel da loja — usar placeholder
  `SEU-LINK-DE-AFILIADO` quando não fornecido.
  **No `take`, ser honesto sobre a origem da confiança na indicação:** se é uso pessoal
  testado pelo autor, dizer isso explicitamente ("a que eu uso", "tenho a minha há X anos",
  "é a que eu uso e é extremamente robusta"); se não há uso próprio, deixar claro também
  ("não tenho uso pessoal desta, a indicação é baseada em pesquisa/depoimentos"). Nunca
  escrever um texto genérico (tipo "modelo para começar") que não diz de onde vem a
  confiança — o leitor precisa saber se é experiência real ou não.
  O **aviso de afiliado não é escrito manualmente no `.mdx`** — o template já renderiza
  o `<AffiliateDisclosure>` sozinho, no **final** do artigo, para todo post com
  `affiliate: true`.
- **Vídeo do YouTube** (embed lazy; usar embed, nunca repost):
  ```
  import YouTubeEmbed from '../../components/YouTubeEmbed.astro';
  <YouTubeEmbed id="ID_DO_VIDEO" title="Descrição" />
  ```

## Imagem de capa

Quando houver imagem, adicionar `cover:` e `coverAlt:` no frontmatter (arquivo na mesma
pasta do post). Capa melhora o compartilhamento social. Se não houver fonte de imagem
definida, deixar sem capa e sinalizar ao autor.

## Fluxo de trabalho

Gerar em **lotes pequenos (3–5 por vez)** e mostrar ao autor antes de abrir o Pull
Request. Qualidade acima de volume — artigo bom de instrutor vale mais que muitos
genéricos. Só abrir PR após aprovação.

## Checklist final (antes de publicar)

- [ ] Responde claramente à pergunta principal?
- [ ] Resposta direta nos primeiros 150–250 caracteres?
- [ ] Tem a caixa `<Callout type="resumo" title="Resposta rápida">` logo após a abertura (quando o tema tem múltiplas facetas)?
- [ ] Subtítulos em formato de pergunta?
- [ ] Demonstra experiência real (sem inventar) / tem placeholder onde necessário?
- [ ] Tem fundamentos (científicos/legais/técnicos) corretos e sem dados inventados?
- [ ] Tem FAQ (5+ perguntas)?
- [ ] Tem 3+ links internos, e satélite linka pro pilar?
- [ ] Retro-linkagem feita: os artigos antigos relacionados agora apontam para o novo, com `updatedDate` atualizado (e `pubDate` original mantido)?
- [ ] Conteúdo original, linguagem própria?
- [ ] Profundidade real (responde o que/por quê/como/quando/vantagens/limites/aplicar/erros)?
- [ ] Execução variada (não é cópia da fôrma; sem muletas repetidas)?
- [ ] Frontmatter completo e slug correto?
- [ ] O leitor resolve a dúvida sem precisar de outro site?
