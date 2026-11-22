// Depois de uma edição em src/, roda os testes. Se algum falhar, o Claude fica sabendo.
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { relative } from "node:path";

const entrada = JSON.parse(readFileSync(0, "utf8"));
const raiz = process.env.CLAUDE_PROJECT_DIR ?? entrada.cwd;
const arquivo = relative(raiz, entrada.tool_input?.file_path ?? "").replaceAll("\\", "/");

if (!arquivo.startsWith("src/") || !arquivo.endsWith(".js")) process.exit(0);

const teste = spawnSync(process.execPath, ["--test", "--test-reporter=tap"], { cwd: raiz, encoding: "utf8" });
if (teste.status !== 0) {
  // só o que importa: o teste que falhou, o esperado e o recebido
  const falhas = teste.stdout.split("\n").filter((l) => /^\s*(not ok|expected:|actual:)/.test(l)).join("\n");
  console.error(`Os testes falharam depois de editar ${arquivo}:\n${falhas}`);
  process.exit(2);
}
