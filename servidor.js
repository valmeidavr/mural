import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const PORTA = 5500;
const TIPOS = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8" };

createServer(async (req, res) => {
  const caminho = new URL(req.url, "http://localhost").pathname;
  const arquivo = normalize(caminho === "/" ? "/index.html" : caminho).replace(/^(\.\.[/\\])+/, "");
  try {
    const conteudo = await readFile(join(import.meta.dirname, arquivo));
    res.writeHead(200, { "Content-Type": TIPOS[extname(arquivo)] ?? "text/plain" });
    res.end(conteudo);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Não encontrado");
  }
}).listen(PORTA, () => console.log(`Mural no ar em http://localhost:${PORTA}`));
