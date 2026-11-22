---
name: nova-noticia
description: Cadastra uma notícia nova no mural, no formato certo. Use quando o usuário pedir pra adicionar, cadastrar ou escrever uma notícia no mural.
argument-hint: [o que aconteceu, com quando e onde]
allowed-tools: Bash(node ${CLAUDE_SKILL_DIR}/scripts/validar.js)
---

# Nova notícia

A notícia a cadastrar: $ARGUMENTS

1. Leia o formato e os exemplos em [modelo.md](modelo.md).
2. Adicione a notícia no fim da lista de `src/noticias.js`, só com fatos que o usuário informou. Não invente nomes, horários nem números.
3. Rode `node ${CLAUDE_SKILL_DIR}/scripts/validar.js`, sozinho, sem juntar com outro comando, e corrija o que ele apontar.
4. Rode `npm test` e mostre o resultado.
