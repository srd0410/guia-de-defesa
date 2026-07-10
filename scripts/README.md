# Scripts de Automação — Guia de Defesa

## Fluxo de Publicação Local

### Estrutura de Pastas

```
guia-de-defesa/
├── revisao/           # Artigos em revisão (você edita aqui)
├── revisados/         # Artigos revistos, prontos pra publicar
├── src/content/posts/ # Artigos publicados no site
└── scripts/
    └── publicar-artigos.ps1  # Script de automação
```

---

## Como Usar

### 1️⃣ **Artigo Novo → Pasta `revisao/`**
Quando a skill **motor-de-conteudo** gera um artigo, ele fica em `revisao/`.

```
revisao/
├── novo-artigo-1.mdx
├── novo-artigo-2.mdx
└── ...
```

### 2️⃣ **Você Revisa e Move para `revisados/`**
Após corrigir, você mesmo move o arquivo para `revisados/`:

```powershell
# Terminal PowerShell
mv revisao/novo-artigo-1.mdx revisados/
```

### 3️⃣ **Script Publica Automaticamente**

O script `publicar-artigos.ps1` monitora `revisados/` e publica:

```powershell
# Modo contínuo (verifica 1x ao dia):
.\scripts\publicar-artigos.ps1

# Modo uma única vez:
.\scripts\publicar-artigos.ps1 -Once

# Modo teste (sem fazer alterações):
.\scripts\publicar-artigos.ps1 -Once -DryRun
```

**O que o script faz automaticamente:**
- ✅ Move o arquivo para `src/content/posts/`
- ✅ Remove `draft: true` → `draft: false`
- ✅ Faz commit git
- ✅ Limpa a pasta `revisados/`
- ⚠️  **Avisa:** você ainda precisa fazer **retro-linkagem manualmente**

### 4️⃣ **Retro-linkagem (você faz)**

Após o artigo ser publicado:

1. Identifique 2–3 artigos relacionados já publicados
2. Adicione um link para o novo artigo no rodapé ou no corpo dos antigos
3. Atualize `updatedDate` nos antigos (mantendo `pubDate` original)
4. Exemplo:

```mdx
---
title: "..."
pubDate: 2026-01-15
updatedDate: 2026-07-08  # Mudou aqui
---
```

Detalhes completos: ver regra de **retro-linkagem obrigatória** em `CLAUDE.md`.

---

## Ambiente do Cowork → Local

Se você quiser usar isso NO COWORK também (sem Google Drive), veja o **prompt abaixo** para configurar a skill motor-de-conteudo.

