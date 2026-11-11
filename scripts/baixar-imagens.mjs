// Baixa as imagens do portfólio antigo para a pasta /img deste site.
// Rode UMA vez no seu computador (Node 18 ou superior):
//
//   node scripts/baixar-imagens.mjs
//
// Depois disso o site fica 100% independente: nenhuma imagem é carregada de fora.
// Este script pode ser apagado depois de rodar.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ORIGEM = ["https://sites.google.com", "view", "marcell-felipe"].join("/");
const DESTINO = join(dirname(fileURLToPath(import.meta.url)), "..", "img");

// página de origem -> prefixo do arquivo (img/<prefixo>-<n>.jpg)
const PAGINAS = {
  "biografia": "biografia",       // 0 foto antiga · 1 ferramentas · 2..9 certificações · 10..12 selos Alura
  "projetos-python": "python",    // 0 bucket · 1 BigQuery · 2 diagrama · 3..4 capas GitHub
  "projetos-sql": "sql",          // 0 saída e-commerce · 1 saída risco de cartões
};

const ehImagemDeConteudo = (u) =>
  /sitesv-images-rt\/[^"]+=w1280$/.test(u) || /lh3\.googleusercontent\.com\/docsubipk\//.test(u);

await mkdir(DESTINO, { recursive: true });
let total = 0;

for (const [slug, prefixo] of Object.entries(PAGINAS)) {
  const html = await (await fetch(`${ORIGEM}/${slug}`)).text();
  const srcs = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
  const imagens = [...new Set(srcs.filter(ehImagemDeConteudo))];
  console.log(`\n${slug}: ${imagens.length} imagens`);

  for (const [i, url] of imagens.entries()) {
    const arquivo = join(DESTINO, `${prefixo}-${i}.jpg`);
    const res = await fetch(url);
    if (!res.ok) { console.log(`  ✗ ${prefixo}-${i}.jpg (HTTP ${res.status})`); continue; }
    await writeFile(arquivo, Buffer.from(await res.arrayBuffer()));
    console.log(`  ✓ img/${prefixo}-${i}.jpg`);
    total++;
  }
}

console.log(`\nPronto: ${total} imagens salvas em /img. Confira a foto em img/biografia-0.jpg.`);
