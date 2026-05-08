# Portfólio — Jackson Calixto

Site estático (HTML, CSS, JS) do perfil profissional.

- **Perfil GitHub:** [github.com/Jackson-Calixto](https://github.com/Jackson-Calixto)
- **LinkedIn:** [linkedin.com/in/jackson-calixto](https://www.linkedin.com/in/jackson-calixto/)
- **Site (GitHub Pages):** [jackson-calixto.github.io](https://jackson-calixto.github.io/) — após criar o repositório abaixo e ativar Pages.

## Publicar com GitHub Pages (recomendado: URL curta)

Use o repositório especial **`jackson-calixto.github.io`** (mesmo nome do utilizador, em minúsculas, + `.github.io`). O site fica na raiz:

**https://jackson-calixto.github.io/**

### Primeira vez (GitHub CLI)

Na pasta `portfolio` (CMD ou PowerShell):

```bat
gh auth login --hostname github.com --git-protocol https --web
gh repo create jackson-calixto.github.io --public --source=. --remote=origin --push
```

Se o repositório **já existir** e estiver vazio:

```bat
git remote add origin https://github.com/Jackson-Calixto/jackson-calixto.github.io.git
git push -u origin main
```

No GitHub: **Settings → Pages** → branch **`main`**, pasta **`/ (root)`**.

### Criar repo só no site (sem `gh`)

1. No GitHub: **New repository**
   - **Owner:** Jackson-Calixto  
   - **Repository name:** `jackson-calixto.github.io` (tem de ser exatamente assim)  
   - **Public** → Create repository  
2. Envie **o conteúdo desta pasta** para a branch **`main`**, com **`index.html` na raiz** do repositório (não dentro de uma subpasta `portfolio`).
3. **Settings → Pages → Build and deployment**
   - **Source:** Deploy from a branch  
   - **Branch:** `main`, pasta **`/ (root)`**  
4. Aguarde 1–2 minutos e abra **https://jackson-calixto.github.io/**

### Git (exemplo)

```powershell
cd portfolio
git init
git add -A
git commit -m "Add portfolio for GitHub Pages"
git branch -M main
git remote add origin https://github.com/Jackson-Calixto/jackson-calixto.github.io.git
git push -u origin main
```

Alterações depois do primeiro envio:

```powershell
cd portfolio
git add -A
git status
git commit -m "Descreva a alteracao"
git push
```

(Se o remoto já existir com outro nome, use `git remote set-url origin ...`.)

### Outra opção

Repositório com outro nome (ex. `portfolio`) → URL seria `https://jackson-calixto.github.io/portfolio/`. A opção acima evita o sufixo `/portfolio`.

## Currículo (PDF)

O botão **Baixar currículo** / **Download resume** / **Descargar CV** aponta para um destes ficheiros conforme o idioma: `assets/Jackson-Calixto-CV-2026-PT.pdf`, `...-EN.pdf`, `...-ES.pdf`. Gere-os a partir de `../curriculos/` com `python build_pdfs.py` e copie para `assets/`.

## Testar localmente

```powershell
cd portfolio
npx --yes serve -l 5500 .
```

Abra `http://127.0.0.1:5500/`.
