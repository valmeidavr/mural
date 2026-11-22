---
description: Escreve a mensagem de commit em português a partir das mudanças que ainda não foram commitadas. Use quando o usuário pedir uma mensagem de commit, quiser commitar ou fechar o trabalho do dia.
allowed-tools: Bash(git status *) Bash(git diff *)
---

# Fim de dia

1. Rode `git status --short` e `git diff` pra ver o que mudou.
2. Escreva a mensagem de commit em português, no imperativo, com até 60 caracteres na primeira linha ("Adiciona", "Corrige", "Atualiza").
3. Se a mudança tiver mais de um assunto, sugira dividir em commits separados.
4. Só mostre a mensagem. Não rode `git commit`.
