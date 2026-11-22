/** Transforma "2026-03-05" em "05/03/2026". */
export function formatarData(iso) {
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}

/** Corta o texto no limite de caracteres, sem passar dele. */
export function resumo(texto, max) {
  if (texto.length <= max) return texto;
  return texto.slice(0, max - 1).trimEnd() + "…";
}

/** Vira um endereço amigável: "Feira de Ciências" -> "feira_de_ciencias". */
export function slugify(titulo) {
  return titulo
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

/** Minúsculas e sem acentos, pra comparar textos: "Ciências" -> "ciencias". */
function normalizar(texto) {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

/** Devolve as notícias cujo título contém o termo (ignora maiúsculas e acentos). */
export function filtrarPorTitulo(noticias, termo) {
  const busca = normalizar(termo.trim());
  if (!busca) return noticias;
  return noticias.filter((n) => normalizar(n.titulo).includes(busca));
}

/** Texto da contagem: 1 -> "1 notícia", 4 -> "4 notícias", 0 -> "0 notícias". */
export function textoContagem(quantidade) {
  return `${quantidade} ${quantidade === 1 ? "notícia" : "notícias"}`;
}

/** Estima os minutos de leitura (200 palavras por minuto, no mínimo 1). */
export function tempoDeLeitura(texto, palavrasPorMinuto = 200) {
  const palavras = texto.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(palavras / palavrasPorMinuto));
}
