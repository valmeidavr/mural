// Quando o Claude acha que terminou, confere os testes. Se falharem, ele continua trabalhando.
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const entrada = JSON.parse(readFileSync(0, "utf8"));
if (entrada.stop_hook_active) process.exit(0);

const raiz = process.env.CLAUDE_PROJECT_DIR ?? entrada.cwd;
const teste = spawnSync(process.execPath, ["--test", "--test-reporter=tap"], { cwd: raiz, encoding: "utf8" });
if (teste.status !== 0) {
  const falhas = teste.stdout.split("\n").filter((l) => /^\s*(not ok|expected:|actual:)/.test(l)).join("\n");
  console.error(`Ainda há testes falhando. Corrija antes de terminar:\n${falhas}`);
  process.exit(2);
}
