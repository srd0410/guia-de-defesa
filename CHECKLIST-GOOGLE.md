# Checklist — Linkar Guia de Defesa ao Google

**Data:** 16/06/2026  
**Status:** Pronto para começar (80% automático, 20% manual)

---

## ✅ Já está configurado (não precisa mexer)

- [x] **Domínio no `astro.config.mjs`:** https://guiadedefesa.com.br
- [x] **Domínio no `src/consts.ts`:** https://guiadedefesa.com.br
- [x] **Integração de Sitemap:** `@astrojs/sitemap` ativa (gera automaticamente)
- [x] **Sitemap gerado:** `sitemap-index.xml` pronto em `dist/`
- [x] **robots.txt:** existe e aponta para o sitemap correto
- [x] **Meta tags:** title, description, canonical (SEO.astro)
- [x] **Schema.org:** Article (para posts) e WebSite (para home)
- [x] **OpenGraph:** og:title, og:description, og:image
- [x] **Twitter Card:** summary_large_image
- [x] **Sitemap URL:** https://guiadedefesa.com.br/sitemap-index.xml

---

## 📋 O que você precisa fazer (3 passos manuais)

### **PASSO 1 — Google Search Console**

1. Abra: https://search.google.com/search-console
2. Clique: **"Adicionar propriedade"**
3. Escolha: **"Domínio"**
4. Digite: `guiadedefesa.com.br` (sem https, sem www)
5. Google vai gerar um código TXT tipo:
   ```
   google-site-verification=abc123xyz456...
   ```
6. **Copie esse código** — você vai colar na Hostinger no próximo passo
7. **Não clique em "Verificar" ainda** — só depois que o DNS estiver atualizado

---

### **PASSO 2 — Hostinger DNS**

1. Abra sua conta Hostinger: https://www.hostinger.com
2. Vá para: **Domínios** → seu domínio **guiadedefesa.com.br**
3. Procure: **DNS Zone Editor** (ou "Zona DNS")
4. Clique: **"Adicionar Record"** (ou "New Record")
5. Preencha:
   | Campo | Valor |
   |-------|-------|
   | **Tipo** | `TXT` |
   | **Nome** | `@` |
   | **Valor** | cole o código do Google (`google-site-verification=...`) |
   | **TTL** | deixe padrão (ex.: 3600) |
6. Clique: **Salvar**
7. **Espere 5 a 60 minutos** — DNS leva tempo para propagar

---

### **PASSO 3 — Verificar DNS e Search Console**

1. Após 15+ minutos, volte ao **Google Search Console**
2. Clique: **"Verificar"**
3. Se der certo → você verá: ✅ Propriedade verificada com sucesso
4. Se não der certo ainda:
   - Espere mais tempo (propagação de DNS é lenta)
   - Verifique que o código TXT foi salvo correto na Hostinger
   - Tente novamente

---

### **PASSO 4 — Enviar Sitemap ao Google**

1. Dentro do **Google Search Console** (já verificado acima)
2. Menu lateral: **Sitemaps**
3. Clique: **"Adicionar novo sitemap"**
4. Cole:
   ```
   sitemap-index.xml
   ```
5. Clique: **"Enviar"**
6. Você verá: "Sitemap enviado com sucesso"
7. Google começará a rastrear as páginas automaticamente

---

### **PASSO 5 — (Opcional) Solicitar indexação rápida**

1. Ainda no **Google Search Console**
2. Campo no topo: **"Inspecionar URL"**
3. Digite a página principal:
   ```
   https://guiadedefesa.com.br
   ```
4. Clique: **"Solicitar indexação"**
5. Repita para as páginas mais importantes:
   - /sobre/
   - /autor/
   - Os posts publicados (8 atualmente)

---

## 📊 Google Analytics (opcional, mas recomendado)

### Se você quer rastrear tráfego:

1. Acesse: https://analytics.google.com
2. Clique: **"Criar propriedade"**
3. Nome: `Guia de Defesa`
4. URL: `https://guiadedefesa.com.br`
5. País: Brasil
6. Timezone: America/Sao_Paulo
7. Google vai gerar um **ID tipo:** `G-XXXXXXXXXX`
8. **Copie esse ID**

### Inserir o Analytics no site:

Avise-me quando tiver o ID do Google Analytics e eu vou:
- Adicionar o script ao código (src/consts.ts)
- Fazer deploy na Vercel
- Pronto! Começará a rastrear tráfego

---

## ⏳ Cronograma esperado

| Etapa | Tempo |
|-------|-------|
| DNS propagar | 5–60 minutos |
| Google indexar sitemap | 24–48 horas |
| Primeiras páginas no índice | 2–7 dias |
| Primeiros resultados de busca | 2–4 semanas |

---

## 🔍 Como verificar se funcionou

Após **3–7 dias**, teste no Google:

```
site:guiadedefesa.com.br
```

Se aparecerem resultados, a indexação está funcionando! 🎉

---

## 📝 Notas importantes

- **Todos os 8 posts publicados** estão no sitemap e serão indexados
- Os **6 rascunhos** (com `draft: true`) **não aparecem no sitemap** — correto, eles não estão no ar
- Quando você publicar novos posts, o sitemap atualiza automaticamente
- Google **re-rastreia a cada semana** — sem necessidade de re-enviar

---

## Próximos passos após indexação

1. Acompanhe as **palavras-chave** no Google Search Console (Search Analytics)
2. Quando tiver **~25 artigos no ar**, solicite o Google AdSense
3. Continue publicando 2–3 posts/dia conforme o PLANO-CONTEUDO.md

---

**Pronto?** Comece pelo Passo 1 e me avisa quando tiver o código TXT ou o ID do Analytics!
