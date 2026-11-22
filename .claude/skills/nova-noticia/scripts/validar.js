// Confere as notícias do mural: tamanho dos campos e data válida.
// Uso: node .claude/skills/nova-noticia/scripts/validar.js
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const { noticias } = await import(pathToFileURL(resolve("src/noticias.js")).href);
const problemas = [];

noticias.forEach((n, i) => {
  const nome = `Notícia ${i + 1}`;
  if (!n.titulo || n.titulo.length > 70) problemas.push(`${nome}: o título precisa ter de 1 a 70 caracteres.`);
  if (n.titulo?.endsWith(".")) problemas.push(`${nome}: o título não leva ponto final.`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(n.data ?? "") || Number.isNaN(Date.parse(n.data))) problemas.push(`${nome}: a data precisa estar no formato AAAA-MM-DD.`);
  if (!n.texto || n.texto.length > 200) problemas.push(`${nome}: o texto precisa ter de 1 a 200 caracteres.`);
});

if (problemas.length) {
  console.log(problemas.join("\n"));
  process.exit(1);
}
console.log(`Tudo certo: ${noticias.length} notícias no formato.`);
