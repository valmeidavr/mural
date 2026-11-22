// Barra qualquer edição em arquivos .env (só o .env.example pode ser editado).
import { readFileSync } from "node:fs";
import { basename } from "node:path";

const entrada = JSON.parse(readFileSync(0, "utf8"));
const nome = basename((entrada.tool_input?.file_path ?? "").replaceAll("\\", "/"));

if (/^\.env(\..+)?$/.test(nome) && nome !== ".env.example") {
  console.error(`Bloqueado: ${nome} guarda segredos e o Claude não edita esse arquivo. Peça pra pessoa editar.`);
  process.exit(2);
}
