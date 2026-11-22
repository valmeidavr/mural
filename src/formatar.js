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

/** Vira um endereço amigável: "Feira de Ciências" -> "feira-de-ciencias". */
export function slugify(titulo) {
  return titulo
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Estima os minutos de leitura (200 palavras por minuto, no mínimo 1). */
export function tempoDeLeitura(texto, palavrasPorMinuto = 200) {
  const palavras = texto.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(palavras / palavrasPorMinuto));
}
