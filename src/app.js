import { noticias } from "./noticias.js";
import { filtrarPorTitulo, formatarData, resumo, tempoDeLeitura, textoContagem } from "./formatar.js";

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");
const contagem = document.querySelector("#contagem");

function renderizar(itens) {
  contagem.textContent = textoContagem(itens.length);
  lista.replaceChildren();

  if (itens.length === 0) {
    const vazio = document.createElement("p");
    vazio.className = "vazio";
    vazio.textContent = "Nenhuma notícia encontrada.";
    lista.append(vazio);
    return;
  }

  for (const n of itens) {
    const item = document.createElement("article");
    item.innerHTML = `
      <h2>${n.titulo}</h2>
      <time datetime="${n.data}">${formatarData(n.data)}</time>
      <p class="leitura">${tempoDeLeitura(n.texto)} min de leitura</p>
      <p>${resumo(n.texto, 90)}</p>
    `;
    lista.append(item);
  }
}

busca.addEventListener("input", () => {
  renderizar(filtrarPorTitulo(noticias, busca.value));
});

renderizar(noticias);
