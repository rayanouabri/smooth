# Script pour pousser vers le repository "smooth"
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Push vers GitHub - Repository 'smooth'" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Demander le nom d'utilisateur GitHub
$username = Read-Host "Entrez votre nom d'utilisateur GitHub"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "❌ Le nom d'utilisateur est requis!" -ForegroundColor Red
    exit
}

$repoUrl = "https://github.com/$username/smooth.git"

Write-Host ""
Write-Host "Repository: $repoUrl" -ForegroundColor Yellow
Write-Host ""

# Vérifier si remote existe
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "⚠️  Remote existant trouvé: $existingRemote" -ForegroundColor Yellow
    git remote remove origin
    Write-Host "✓ Remote supprimé" -ForegroundColor Green
}

# Ajouter le remote
Write-Host "Ajout du remote..." -ForegroundColor Cyan
git remote add origin $repoUrl

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors de l'ajout du remote" -ForegroundColor Red
    exit
}

Write-Host "✓ Remote ajouté!" -ForegroundColor Green
Write-Host ""

# Pousser vers GitHub
Write-Host "Envoi du code vers GitHub..." -ForegroundColor Cyan
Write-Host "(Cela peut prendre quelques secondes...)" -ForegroundColor Gray
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Green
    Write-Host "  ✓ SUCCÈS! Code poussé sur GitHub!" -ForegroundColor Green
    Write-Host "================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Votre repository est disponible ici:" -ForegroundColor Cyan
    Write-Host "https://github.com/$username/smooth" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Red
    Write-Host "  ❌ Erreur lors du push" -ForegroundColor Red
    Write-Host "================================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Vérifications à faire:" -ForegroundColor Yellow
    Write-Host "1. Le repository smooth existe bien sur GitHub" -ForegroundColor Yellow
    Write-Host "2. Vous êtes connecté à GitHub" -ForegroundColor Yellow
    Write-Host "3. Si Git demande un mot de passe, utilisez un token GitHub" -ForegroundColor Yellow
    Write-Host ""
}

