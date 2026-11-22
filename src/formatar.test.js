import { test } from "node:test";
import assert from "node:assert/strict";
import { filtrarPorTitulo, formatarData, resumo, slugify, tempoDeLeitura, textoContagem } from "./formatar.js";

test("textoContagem usa singular só para 1", () => {
  assert.equal(textoContagem(0), "0 notícias");
  assert.equal(textoContagem(1), "1 notícia");
  assert.equal(textoContagem(4), "4 notícias");
});

const exemplos = [
  { titulo: "Prefeitura anuncia nova ciclovia no centro" },
  { titulo: "Feira de ciências reúne mil estudantes" },
  { titulo: "Biblioteca amplia o horário de atendimento" },
];

test("filtrarPorTitulo com termo vazio devolve tudo", () => {
  assert.equal(filtrarPorTitulo(exemplos, "").length, 3);
  assert.equal(filtrarPorTitulo(exemplos, "   ").length, 3);
});

test("filtrarPorTitulo ignora maiúsculas e acentos", () => {
  assert.deepEqual(filtrarPorTitulo(exemplos, "CICLOVIA"), [exemplos[0]]);
  assert.deepEqual(filtrarPorTitulo(exemplos, "ciencias"), [exemplos[1]]);
  assert.deepEqual(filtrarPorTitulo(exemplos, "HORÁRIO"), [exemplos[2]]);
});

test("filtrarPorTitulo sem resultado devolve lista vazia", () => {
  assert.deepEqual(filtrarPorTitulo(exemplos, "futebol"), []);
});

test("formatarData troca a ordem e usa barras", () => {
  assert.equal(formatarData("2026-03-05"), "05/03/2026");
});

test("resumo não passa do limite", () => {
  assert.equal(resumo("curto", 10), "curto");
  assert.ok(resumo("um texto bem comprido", 10).length <= 10);
});

test("deve tirar acentos e trocar espaços por underline no slugify", () => {
  assert.equal(slugify("Feira de Ciências"), "feira_de_ciencias");
});

test("deve remover a pontuação no slugify", () => {
  assert.equal(slugify("Olá, mundo! 100%"), "ola_mundo_100");
});

test("tempoDeLeitura arredonda pra cima e tem mínimo de 1 minuto", () => {
  assert.equal(tempoDeLeitura(""), 1);
  assert.equal(tempoDeLeitura("poucas palavras aqui"), 1);
  assert.equal(tempoDeLeitura("palavra ".repeat(200)), 1);
  assert.equal(tempoDeLeitura("palavra ".repeat(201)), 2);
});
