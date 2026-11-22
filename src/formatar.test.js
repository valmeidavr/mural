import { test } from "node:test";
import assert from "node:assert/strict";
import { formatarData, resumo, slugify, tempoDeLeitura } from "./formatar.js";

test("formatarData troca a ordem e usa barras", () => {
  assert.equal(formatarData("2026-03-05"), "05/03/2026");
});

test("resumo não passa do limite", () => {
  assert.equal(resumo("curto", 10), "curto");
  assert.ok(resumo("um texto bem comprido", 10).length <= 10);
});

test("slugify tira acentos e espaços", () => {
  assert.equal(slugify("Feira de Ciências"), "feira-de-ciencias");
});

test("tempoDeLeitura arredonda pra cima e tem mínimo de 1 minuto", () => {
  assert.equal(tempoDeLeitura(""), 1);
  assert.equal(tempoDeLeitura("poucas palavras aqui"), 1);
  assert.equal(tempoDeLeitura("palavra ".repeat(200)), 1);
  assert.equal(tempoDeLeitura("palavra ".repeat(201)), 2);
});
