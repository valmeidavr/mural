import { noticias } from "./noticias.js";
import { formatarData, resumo, tempoDeLeitura } from "./formatar.js";

const lista = document.querySelector("#lista");

for (const n of noticias) {
  const item = document.createElement("article");
  item.innerHTML = `
    <h2>${n.titulo}</h2>
    <time datetime="${n.data}">${formatarData(n.data)}</time>
    <p class="leitura">${tempoDeLeitura(n.texto)} min de leitura</p>
    <p>${resumo(n.texto, 90)}</p>
  `;
  lista.append(item);
}
