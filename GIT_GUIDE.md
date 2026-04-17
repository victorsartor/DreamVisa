# 🚀 Guia Rápido de Git - DV Visa

Este guia contém os comandos que usamos para manter seu site atualizado no GitHub e na Vercel.

## 🔄 Fluxo Diário (Sempre que mudar algo)
Use esta sequência para enviar suas alterações para o site:

```powershell
# 1. Preparar as mudanças
git add .

# 2. Salvar a versão localmente (Sempre use aspas!)
git commit -m "Explique aqui o que você mudou"

# 3. Enviar para a internet (GitHub/Vercel)
git push
```

---

## 🛠️ Comandos de Emergência / Úteis

### Ver o que está acontecendo
```powershell
# Mostra quais arquivos foram modificados e se o Git está pronto
git status
```

### Se o GitHub der erro de "Rejected" (Conflito)
Se você mudou algo direto no site do GitHub e o `git push` falhar:
```powershell
# Tenta baixar as mudanças do site e juntar com as suas
git pull origin main --rebase
```

### Forçar o seu código (CUIDADO)
Se a sincronização acima der erro e você quiser que o código do seu PC **apague** o que está no GitHub:
```powershell
git push -f origin main
```

---

## 💡 Dicas de Ouro
- **Aspas no Commit**: Nunca esqueça as aspas no `-m "mensagem"`.
- **Vercel**: Assim que você dá o `git push`, a Vercel leva cerca de 20 a 30 segundos para atualizar o link oficial.
- **Ponto (.)**: O ponto no `git add .` significa "TUDO desta pasta".

---
*Criado com a ajuda do Antigravity AI* 🤖
