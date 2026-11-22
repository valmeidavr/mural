---
name: nova-noticia
description: Cadastra uma notícia nova no mural, no formato certo. Use quando o usuário pedir pra adicionar, cadastrar ou escrever uma notícia no mural.
---

# Nova notícia

Adicione a notícia no fim da lista de `src/noticias.js`, com os três campos:

- `titulo`: curto, até 70 caracteres, sem ponto final.
- `data`: no formato `AAAA-MM-DD`. Se o usuário não disser a data, use a de hoje.
- `texto`: uma ou duas frases, até 200 caracteres, só com fatos que o usuário informou.

Não invente nomes, horários nem números. Depois de editar, rode `npm test` e mostre o resultado.
