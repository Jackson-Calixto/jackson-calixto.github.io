@echo off
setlocal
cd /d "%~dp0"

where git >nul 2>&1 || (echo Instale o Git for Windows. & exit /b 1)
where gh >nul 2>&1 || (echo Instale o GitHub CLI: https://cli.github.com/ & exit /b 1)

if not exist .git (
  git init
  git add -A
  git commit -m "Initial portfolio for GitHub Pages"
  git branch -M main
)

gh auth status >nul 2>&1
if errorlevel 1 (
  echo.
  echo [Passo 1] Autentique o GitHub CLI no navegador:
  echo   gh auth login --hostname github.com --git-protocol https --web
  echo.
  echo [Passo 2] Execute este ficheiro outra vez: publicar.bat
  exit /b 1
)

git remote get-url origin >nul 2>&1
if errorlevel 1 (
  echo A criar repositorio jackson-calixto.github.io e a enviar codigo...
  gh repo create jackson-calixto.github.io --public --source=. --remote=origin --push
  if errorlevel 1 exit /b 1
) else (
  echo A enviar alteracoes para origin...
  git add -A
  git diff --cached --quiet
  if errorlevel 1 git commit -m "Update portfolio"
  git push -u origin main
  if errorlevel 1 exit /b 1
)

echo.
echo Pronto. No GitHub: Settings -^> Pages -^> branch main, pasta / (root^)
echo Site: https://jackson-calixto.github.io/
endlocal
