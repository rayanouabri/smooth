Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Push vers GitHub - Repository smooth" -ForegroundColor Cyan  
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$username = Read-Host "Votre nom d'utilisateur GitHub"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Erreur: Le nom d'utilisateur est requis" -ForegroundColor Red
    exit
}

$repoUrl = "https://github.com/$username/smooth.git"

Write-Host ""
Write-Host "Ajout du remote: $repoUrl" -ForegroundColor Yellow
Write-Host ""

# Supprimer remote existant si nécessaire
git remote remove origin 2>$null

# Ajouter le remote
git remote add origin $repoUrl

if ($LASTEXITCODE -ne 0) {
    Write-Host "Erreur lors de l'ajout du remote" -ForegroundColor Red
    exit
}

Write-Host "Remote ajoute avec succes!" -ForegroundColor Green
Write-Host ""
Write-Host "Envoi du code vers GitHub..." -ForegroundColor Cyan
Write-Host ""

# Pousser vers GitHub
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  SUCCES! Code pousse sur GitHub!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Repository: https://github.com/$username/smooth" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  Erreur lors du push" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Verifications:" -ForegroundColor Yellow
    Write-Host "1. Le repository smooth existe sur GitHub" -ForegroundColor Yellow
    Write-Host "2. Vous etes connecte a GitHub" -ForegroundColor Yellow
    Write-Host "3. Si demande, utilisez un token GitHub comme mot de passe" -ForegroundColor Yellow
    Write-Host ""
}

