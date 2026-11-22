---
paths:
  - "src/**/*.test.js"
---

# Regras dos testes

- O nome de cada teste começa com "deve" (exemplo: `test("deve cortar o resumo no limite", ...)`).
- Use `node:test` e `node:assert/strict`, como o resto do arquivo.
- Cada `test` confere um comportamento só.
