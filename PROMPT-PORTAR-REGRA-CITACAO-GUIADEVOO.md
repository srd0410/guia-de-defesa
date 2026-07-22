# Prompt para nova sessão no Guia de Voo — portar regra de citação de fonte + auditoria de conteúdo

> Este arquivo é só um rascunho de prompt pra copiar/colar (ou usar como referência) na
> próxima sessão do Guia de Voo. Ele não faz parte do conteúdo do Guia de Defesa — pode
> ser apagado depois de usado.

---

## Prompt

Numa sessão anterior no projeto irmão **Guia de Defesa** (`D:\guia-de-defesa`), formalizei
uma regra editorial sobre citação de fonte em conteúdo YMYL (saúde, legislação) e fiz uma
auditoria completa dos artigos publicados e em rascunho contra essa regra, encontrando e
corrigindo divergências reais (um decreto revogado citado como vigente, uma técnica médica
desatualizada, uma contradição factual entre dois artigos do mesmo site, artigos sem o
componente de FAQ obrigatório, um artigo duplicado esquecido, um `</content>` residual que
quebraria o build). Quero portar esse mesmo processo pro Guia de Voo, adaptado ao domínio
da aviação.

**Contexto da regra original (Guia de Defesa), pra você entender o raciocínio antes de
adaptar — não copie ao pé da letra, adapte à realidade daqui:**

> Em legislação e saúde/primeiros socorros, citar fonte nunca é opcional. Toda afirmação
> técnica factual — protocolo médico, número de lei, prazo legal, estatística — precisa
> vir com instituição e, quando disponível, o ano da revisão/publicação, direto na prosa
> (ex.: "segundo a revisão da American Heart Association de 2025", "conforme o Decreto
> 11.615/2023"). Não é preciso link nem seção formal de referências, mas a atribuição em
> texto é obrigatória, não "quando possível".
>
> Nessas áreas, sempre checar divergência entre fontes e se a versão usada é a mais
> recente antes de publicar ou revisar — protocolo médico e norma legal mudam, e uma
> fonte só, ou uma fonte desatualizada, não é suficiente.
>
> Já em conteúdo que é mais técnica/tática/julgamento situacional do que "verdade
> absoluta" factual, a citação de instituição nem sempre se aplica ou faz sentido — nesse
> caso, nunca decidir sozinho se cita ou não: perguntar ao autor antes de aplicar.

**O que fazer nesta sessão:**

1. **Localize a skill de geração de conteúdo do Guia de Voo** (equivalente à
   `motor-de-conteudo` do Guia de Defesa — procure em `.claude/skills/`) e leia o
   `CLAUDE.md` do projeto pra entender as categorias de conteúdo existentes (algo como
   regulamentação/ANAC, meteorologia, procedimentos de segurança, técnica de voo,
   glossário/dicionário de abreviações NOTAM, etc. — confirme os nomes reais).

2. **Proponha ao usuário como mapear a regra pras categorias daqui**, provavelmente:
   - **Obrigatório citar fonte + checar divergência/versão mais atual**: conteúdo
     regulatório (ANAC, ICA, RBAC, NOTAM, cartas de aproximação, meteorologia
     operacional) e conteúdo de segurança de voo com fatos técnicos verificáveis
     (procedimentos de emergência, limitações de aeronave, fisiologia de voo).
   - **Perguntar ao autor antes de citar**: conteúdo mais opinativo/técnica pessoal
     (dicas de pilotagem, mentalidade, julgamento de risco situacional) — onde nem
     tudo é "verdade absoluta" e a citação institucional nem sempre cabe.
   - Não presuma essa divisão — pergunte ao usuário antes de gravar na skill, do jeito
     que fiz no Guia de Defesa (perguntei especificamente sobre a categoria "defesa
     pessoal" antes de decidir).

3. **Depois de gravar a regra na skill**, faça uma auditoria dos artigos publicados nas
   categorias regulatórias/técnicas: leia cada um e verifique:
   - Afirmações factuais têm fonte/instituição/ano citados em prosa?
   - Alguma norma, procedimento ou número citado pode estar desatualizado? (use
     WebSearch pra checar contra a fonte primária antes de mudar qualquer coisa —
     não assuma que está errado só porque parece antigo)
   - Há contradição factual entre dois artigos do próprio site sobre o mesmo assunto?
   - Componente de FAQ (se o Guia de Voo tiver um `<Faq>`/schema FAQPage equivalente)
     sendo usado corretamente, não markdown solto?

4. **Se houver pasta de rascunhos aguardando revisão** (equivalente a `revisao/` no Guia
   de Defesa), audite também: procure por artefatos de geração quebrados (tags residuais
   tipo `</content>`, placeholders tipo `[EXPERIÊNCIA DO AUTOR]` não preenchidos,
   duplicatas de artigos já publicados, rascunhos que citam algo já revogado).

5. **Antes de publicar qualquer correção**: teste cada artigo isoladamente com
   `npm run build` (copie pra pasta de posts com um nome temporário, `draft: false`,
   builde, confira, remova o teste) — não confie que a sintaxe está certa só de olhar.

6. **Fluxo de publicação**: siga o padrão do `CLAUDE.md` daqui — branch dedicada, nunca
   direto na `main`, abrir PR, aguardar aprovação explícita do autor antes de mesclar.
   Não faça merge sozinho.

Comece confirmando com o usuário: (a) os nomes reais das categorias de conteúdo do Guia
de Voo, e (b) como ele quer mapear "obrigatório citar" vs. "perguntar antes" pra essas
categorias, antes de gravar qualquer coisa na skill ou tocar em artigos publicados.
