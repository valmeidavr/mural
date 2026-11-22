import { test } from "node:test";
import assert from "node:assert/strict";
import { formatarData, resumo, slugify } from "./formatar.js";

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
