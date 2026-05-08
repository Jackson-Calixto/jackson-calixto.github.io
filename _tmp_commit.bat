@echo off
cd /d "%~dp0"
git add -A
git commit -m "Add publicar.bat for GitHub Pages deploy"
del "%~f0"
