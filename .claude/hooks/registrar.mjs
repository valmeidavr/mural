// Hook de estudo: anota no log tudo o que o Claude Code mandou pro hook.
import { appendFileSync, readFileSync } from "node:fs";
import { isAbsolute, relative } from "node:path";

const entrada = JSON.parse(readFileSync(0, "utf8"));
const alvo = entrada.tool_input?.file_path ?? entrada.tool_input?.command ?? "";
const nome = isAbsolute(alvo) ? relative(entrada.cwd, alvo) : alvo;

appendFileSync(".claude/hooks.log", `${entrada.hook_event_name} ${entrada.tool_name} ${nome}\n`);
