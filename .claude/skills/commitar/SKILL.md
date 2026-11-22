---
description: Faz o commit das mudanças do mural, com uma mensagem em português.
argument-hint: [mensagem do commit]
disable-model-invocation: true
allowed-tools: Bash(git status *) Bash(git add *) Bash(git commit *) Bash(git log *)
---

# Commitar

Faça o commit de tudo o que mudou. Rode um comando por vez, sem juntar com `&&`.

1. Rode `git status --short` pra ver o que vai entrar.
2. Rode `git add -A`.
3. Rode `git commit` com esta mensagem: $ARGUMENTS
   Se não vier mensagem, escreva uma em português, no imperativo, com até 60 caracteres.
4. Rode `git log --oneline -1` e mostre o resultado.
