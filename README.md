# Portfólio · Marcell Felipe

Site estático (HTML, CSS e JavaScript puro) com um assistente de IA (Google Gemini) rodando numa
Vercel Function. Não precisa de build nem de framework.

## Estrutura

```
index.html                 página única
assets/styles.css          visual base (tema escuro)
assets/fx.css · fx.js      efeitos futuristas (paletas, glitch, cursor, partículas)
assets/chat.css · chat.js  assistente Marcell.AI (chat flutuante)
assets/app.js              explorador de projetos, busca Ctrl K, painel de detalhes, trajetória
assets/data.js             TODO o conteúdo: textos, links, painéis, carreira, imagens
assets/sql/*.sql.txt       queries dos projetos de SQL
api/chat.js                função serverless que conversa com o Gemini (a chave fica só aqui)
api/_knowledge/linkedin.md base de conhecimento da IA (perfil do LinkedIn, sem telefone/e-mail/endereço)
img/                       imagens (foto já incluída; o resto vem do script abaixo)
scripts/baixar-imagens.mjs baixa as imagens do portfólio antigo (rodar uma vez)
vercel.json · package.json configuração da Vercel
```

## 1. Baixar as imagens (uma vez, no seu computador)

Com o Node 20+ instalado, na pasta do projeto:

```bash
node scripts/baixar-imagens.mjs
```

Salva em `img/` a imagem de ferramentas, as 8 certificações, os 3 selos da Alura e os prints
dos projetos de Python e SQL. Depois pode apagar a pasta `scripts/`.

## 2. Subir para o GitHub

```bash
git init
git add .
git commit -m "Portfólio com IA"
git branch -M main
git remote add origin https://github.com/Pantercode/portfolio.git   # crie o repositório vazio antes
git push -u origin main
```

## 3. Publicar na Vercel

1. vercel.com → **Add New → Project** → importe o repositório.
2. **Framework Preset:** `Other`. Build Command e Output Directory: deixe em branco.
3. A chave do Gemini já está no `api/chat.js` (só no servidor). **Deixe o repositório do GitHub como Private.**
   Se quiser trocar a chave sem mexer no código, adicione em **Environment Variables**:
   - `GEMINI_API_KEY` = sua chave (pegue grátis em https://aistudio.google.com/apikey)
   - (opcional) `GEMINI_MODEL` = modelo preferido. Se não informar, o site tenta
     `gemini-flash-latest`, depois `gemini-2.5-flash` e `gemini-2.5-flash-lite`.
4. **Deploy.** Se trocar a variável depois, faça *Redeploy*.

A chave nunca vai para o navegador: o chat chama `/api/chat`, que roda no servidor da Vercel,
com limite de 20 perguntas a cada 10 minutos por visitante.

Sem a chave (ou ao abrir o site localmente), o chat funciona em **modo demonstração**:
ele busca nos projetos e devolve links, sem IA.

## Base de conhecimento da IA

A IA responde usando `assets/data.js` (projetos, trajetória, certificações) **e** `api/_knowledge/linkedin.md`
(o PDF do seu LinkedIn em texto). Para atualizar, exporte o PDF de novo no LinkedIn
(Perfil → Mais → Salvar como PDF), troque o texto desse arquivo e faça um novo deploy.

## 4. Editar conteúdo

Tudo fica em `assets/data.js`. A IA lê esse mesmo arquivo, então qualquer projeto novo
já passa a ser conhecido por ela no próximo deploy.

Categorias: powerbi, python, sql, appscript, etl-ia, langchain, dbt, looker, metabase.
Cada projeto aceita: `summary`, `intro`, `sections` (`h`, `p`, `ul`, `ol`, `pre`), `stack`,
`links` (`primary: true` destaca o botão), `embed` (`powerbi`, `looker` ou `pdf`),
`code` (arquivo .sql.txt), `images` e `live: true` (selo "No ar").

## Teste local

```bash
npx vercel dev      # com a IA (pede login na Vercel e lê o .env.local)
# ou
npx serve .         # só o site, chat em modo demonstração
```
