# 🚀 COMANDOS RÁPIDOS — Guia de Defesa

**Arquivo único com tudo que você precisa: criar artigo, revisar, publicar e mexer no site.**
Sempre que tiver dúvida de "como faço X", procure aqui primeiro.

**Regra de ouro:** tudo agora é local (sem Cowork, sem Google Drive). Duas pastas só:
- `revisao/` — artigos aguardando SUA conferência
- `revisados/` — artigos que VOCÊ já aprovou, prontos pra publicar

---

## 🤖 PARTE 1 — Pedir um Artigo Novo (é comigo, não é comando de terminal)

**Você não precisa digitar nada no PowerShell para isso.** É só me pedir, na conversa:

```
gerar novo artigo
```

ou, se já sabe o tema:

```
gerar artigo sobre [tema]
```

**O que eu faço:**
1. Consulto `PLANO-CONTEUDO.md` e `CLAUDE.md` pra saber o que falta no acervo
2. Uso a skill **motor-de-conteudo** pra escrever o artigo completo, no padrão do blog
3. Salvo direto em `revisao/{nome-do-artigo}.mdx`
4. Aviso você que está pronto pra revisar

**Depois disso, você segue a Parte 2 (revisão) normalmente.**

> ⚠️ Isso substitui o Cowork. Não precisa mais rodar nada por lá — veja a Parte 5 sobre como desligar o agendamento do Cowork.

---

## ✏️ PARTE 2 — Revisar e Aprovar um Artigo

### 2.1 Ver o que está esperando revisão

```powershell
Get-ChildItem "D:\guia-de-defesa\revisao\*.mdx" | Select-Object Name
```

### 2.2 Abrir e editar

Abra o arquivo em `D:\guia-de-defesa\revisao\{nome}.mdx` no VS Code (ou editor de sua preferência), faça as correções que quiser.

**Dica:** se quiser que eu faça algum ajuste específico no texto, é só me pedir — nem precisa comando, basta falar o que quer mudar.

### 2.3 Aprovar (mover para `revisados/`)

```powershell
Move-Item -Path "D:\guia-de-defesa\revisao\NOME-DO-ARTIGO.mdx" -Destination "D:\guia-de-defesa\revisados\"
```

**Troque `NOME-DO-ARTIGO.mdx`** pelo nome real. Exemplo:

```powershell
Move-Item -Path "D:\guia-de-defesa\revisao\treino-a-seco.mdx" -Destination "D:\guia-de-defesa\revisados\"
```

---

## 🚀 PARTE 3 — Publicar

### 3.0 Como pedir (é assim que o fluxo completo roda)

```
publica os artigos aprovados
```

**Quando você diz isso, eu faço a sequência inteira, sem pular etapa:**
1. Confirmo com você quais artigos estão em `revisados/` antes de publicar (segurança)
2. Crio uma branch dedicada pra publicação (nunca direto na `main`)
3. Rodo o script de publicação (move pra `src/content/posts/`, tira `draft: true`, commita)
4. **Faço a retro-linkagem automaticamente** — vasculho os artigos antigos relacionados,
   adiciono link para o artigo novo e atualizo `updatedDate` (mantendo `pubDate` original)
5. Abro o Pull Request e te aviso o link pra revisão
6. Quando você disser "pode mesclar", eu mesclo

**Você só participa em dois pontos:** aprovar o artigo (movendo pra `revisados/`) e aprovar o PR no final.

### 3.1 Se preferir rodar o script sozinho (sem mim)

```powershell
cd D:\guia-de-defesa
.\scripts\publicar-artigos.ps1 -Once -DryRun
```

```powershell
cd D:\guia-de-defesa
.\scripts\publicar-artigos.ps1 -Once
```

**O que o script faz:**
- Move cada artigo de `revisados/` para `src/content/posts/`
- Troca `draft: true` → `draft: false`
- Faz commit no git automaticamente
- Esvazia `revisados/`

**⚠️ O script NÃO faz a retro-linkagem sozinho** — se rodar por conta própria, essa etapa continua manual (ou peça pra mim depois: "faz a retro-linkagem do artigo X").

### 3.2 Retro-linkagem manual (só se você não pedir pra mim)

1. Abra os artigos relacionados em `src/content/posts/`
2. Adicione um link pro artigo novo
3. Atualize `updatedDate` (mantendo `pubDate` original)
4. Suba:

```powershell
cd D:\guia-de-defesa
git add .
git commit -m "fix: retro-linkagem para NOME-DO-ARTIGO"
git push
```

### 3.3 Conferir que subiu

```powershell
cd D:\guia-de-defesa
git log --oneline -n 5
git status
```

O site no Vercel atualiza sozinho ~2 minutos depois do `git push`.

---

## 🌐 PARTE 4 — Mexer no Site (arquitetura, visual, config)

Essas tarefas não passam pelas pastas de conteúdo — são mudanças de código/configuração.

### 4.1 Rodar o site no seu computador (ver antes de publicar)

```powershell
cd D:\guia-de-defesa
npm run dev
```

Depois abra `http://localhost:4321` no navegador. `Ctrl+C` no terminal pra parar.

### 4.2 Gerar o site completo (build de produção, teste local)

```powershell
cd D:\guia-de-defesa
npm run build
```

### 4.3 Pedir uma mudança de arquitetura/visual/config

Assim como os artigos, **não tem comando fixo pra isso** — é só me pedir em linguagem natural:

```
mexer no menu do site
mudar a cor do botão X
trocar o ID do AdSense em consts.ts
adicionar uma nova categoria
```

Eu faço a mudança, te aviso o que mudou, e te dou o comando de commit no final (ou já ofereço fazer).

### 4.4 Subir mudança de código (depois que eu editei ou você editou)

```powershell
cd D:\guia-de-defesa
git add .
git commit -m "descreva a mudança aqui"
git push
```

> Se for mudança grande, prefira pedir pra eu abrir um **Pull Request** (dá pra ver a prévia no Vercel antes de ir pro ar). Basta falar: "abre PR dessa mudança".

### 4.5 Ativar o Google AdSense (quando for aprovado)

O código já está pronto e esperando — os espaços de anúncio existem no site (home, categoria,
topo e fim de artigo), mas ficam **invisíveis** até você preencher os IDs. Nada aparece sozinho.

**Passo 1 — Cadastro (você faz, no navegador):**
1. Acesse [google.com/adsense](https://www.google.com/adsense) e cadastre o site
   (`www.guiadedefesa.com.br`)
2. Aguarde a análise do Google (de alguns dias a ~2 semanas)
3. Quando aprovado, você recebe um **ID do editor**, formato `ca-pub-XXXXXXXXXXXXXXXX`

**Passo 2 — Ativar o ID (me peça, ou faça você mesmo):**

Me diga: `"aprovaram o AdSense, o ID é ca-pub-XXXXXXXXXXXXXXXX"` — eu colo em
`src/consts.ts` (campo `adsenseClientId`) e confirmo o build.

Ou, se preferir sozinho: abra `src/consts.ts`, ache a linha `adsenseClientId: ''` e cole o ID
entre as aspas.

**Passo 3 — Criar as unidades de anúncio (você faz, no painel do AdSense) e me passar os IDs:**

Existem 4 posições já preparadas no código, cada uma com um comentário indicando o nome
sugerido pra unidade que você cria no painel:

| Posição | Arquivo | Nome sugerido no AdSense |
|---|---|---|
| Barra lateral da home | `src/pages/index.astro` | Home — lateral |
| Topo da lista de categoria | `src/pages/categoria/[category].astro` | Categoria — topo |
| Topo do artigo | `src/pages/[slug].astro` (1º `<AdSlot>`) | Artigo — topo |
| Fim do artigo | `src/pages/[slug].astro` (2º `<AdSlot>`) | Artigo — fim |

No painel do AdSense: **Anúncios → Por unidade de anúncio → Anúncio de display** → crie uma
pra cada posição da tabela → copie o **ID do slot** (número) de cada uma.

Me passe os 4 números (ou só os que quiser ativar primeiro) que eu colo cada um no
`slot=""` certo. Não precisa ativar as 4 de uma vez — pode ativar uma só pra testar.

**Passo 4 — Conferir:**

Depois de colar os IDs, rode `npm run build` (ou peça pra mim) — se aparecer o elemento
`adsbygoogle` no HTML gerado, está ativo. O anúncio de verdade só aparece depois que o
Google "aquece" o slot (pode levar algumas horas após a primeira publicação).

---

## 🗑️ PARTE 5 — Desligar o Cowork (fazer uma vez só)

Isso **não dá pra fazer por aqui** — precisa ser feito no próprio app/site do Cowork:

1. Abra o Cowork
2. Localize a tarefa agendada de geração de artigos (a cada 2 dias)
3. **Pause ou delete** essa tarefa/agente
4. Confirme que não há mais nada apontando pra pasta do Google Drive antiga

Depois disso, **tudo passa a acontecer aqui** (Parte 1 em diante).

---

## 📁 PARTE 6 — Onde Ficam as Coisas (mapa rápido)

```
D:\guia-de-defesa\
│
├── revisao/          ← artigos aguardando SUA revisão (eu ou você coloca aqui)
├── revisados/        ← artigos aprovados por você, prontos pra publicar
│
├── src/content/posts/  ← artigos publicados de verdade no site
├── src/components/     ← componentes do site (ProductCard, SEO, etc.)
├── src/consts.ts        ← configurações gerais (URL, AdSense, categorias)
│
├── scripts/
│   └── publicar-artigos.ps1  ← script de publicação (Parte 3)
│
├── CLAUDE.md            ← regras permanentes do projeto (leio sempre)
├── CONTEUDO.md          ← padrão de artigo/componentes
├── PLANO-CONTEUDO.md    ← roteiro de artigos e cadência
└── COMANDOS-RAPIDOS.md  ← este arquivo
```

---

## 📋 CHECKLIST DO DIA A DIA

```
☐ "gerar novo artigo"  (me peça — eu escrevo e salvo em revisao/)
☐ Revisar em revisao/ (você edita, ou me pede ajustes)
☐ Move-Item ... revisados/  (aprovar)
☐ "publica os artigos aprovados"  (me peça — eu publico + retro-linkagem + PR, tudo junto)
☐ Revisar e aprovar o PR ("pode mesclar")
☐ Conferir no Vercel (~2 min depois)
```

---

## ❓ DÚVIDAS RÁPIDAS

**P: Não sei se um comando deu certo.**
R: Cole a saída (o que apareceu no terminal) pra mim que eu confirmo.

**P: Posso simplesmente te pedir tudo em vez de rodar comando?**
R: Sim — comandos aqui são pra quando você quer fazer sozinho e rápido. Se preferir, é só pedir "publica os artigos aprovados" ou "gera um artigo sobre X" que eu cuido de tudo.

**P: E os scripts de email antigos (`email_config.py`, `send_article_email.py`)?**
R: Não são mais usados (o fluxo agora é 100% local, sem email). Podem ficar parados sem problema — não custam nada e já estão fora do git. Se quiser, posso apagá-los quando você confirmar.

**P: E a pasta `revisoes/` antiga?**
R: Só tem os `.txt` históricos das revisões por email. Não faz mais parte do fluxo. Pode ficar como arquivo morto ou posso apagar — me avise.

---

**Sempre que tiver dúvida: me pergunte em português normal. Os comandos acima são só pra quando você quiser fazer sozinho.**
