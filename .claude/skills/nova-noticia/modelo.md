# Formato de uma notícia do mural

Cada notícia é um objeto com três campos, sempre nesta ordem:

- `titulo`: até 70 caracteres, sem ponto final.
- `data`: `AAAA-MM-DD`. Se o usuário não disser a data, use a de hoje.
- `texto`: uma ou duas frases, até 200 caracteres.

## Exemplos

```js
{
  titulo: "Biblioteca amplia o horário de atendimento",
  data: "2026-04-02",
  texto: "A partir da próxima semana, a biblioteca central passa a abrir também aos sábados, das 9h às 15h.",
},
{
  titulo: "Feira de ciências reúne mil estudantes",
  data: "2026-03-12",
  texto: "Os projetos ficam abertos à visitação durante todo o fim de semana, com entrada gratuita.",
},
```

Tom: direto, sem adjetivo de opinião ("incrível", "maravilhoso").
