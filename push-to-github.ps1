# Script pour pousser le code sur GitHub
# Remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Script de Push vers GitHub" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Demander le nom d'utilisateur GitHub
$username = Read-Host "Entrez votre nom d'utilisateur GitHub"
$repoName = Read-Host "Entrez le nom du repository (ou appuyez sur Entrée pour 'franceprep-academy')"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "franceprep-academy"
}

$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "URL du repository: $repoUrl" -ForegroundColor Yellow
Write-Host ""

# Vérifier si le remote existe déjà
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "Un remote 'origin' existe déjà: $existingRemote" -ForegroundColor Yellow
    $change = Read-Host "Voulez-vous le remplacer? (o/n)"
    if ($change -eq "o" -or $change -eq "O") {
        git remote remove origin
        Write-Host "Remote 'origin' supprimé." -ForegroundColor Green
    } else {
        Write-Host "Opération annulée." -ForegroundColor Red
        exit
    }
}

# Ajouter le remote
Write-Host "Ajout du remote origin..." -ForegroundColor Cyan
git remote add origin $repoUrl

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Remote ajouté avec succès!" -ForegroundColor Green
} else {
    Write-Host "✗ Erreur lors de l'ajout du remote" -ForegroundColor Red
    exit
}

# Pousser vers GitHub
Write-Host ""
Write-Host "Envoi du code vers GitHub..." -ForegroundColor Cyan
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Green
    Write-Host "  ✓ Code poussé avec succès sur GitHub!" -ForegroundColor Green
    Write-Host "================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Votre repository est disponible à:" -ForegroundColor Cyan
    Write-Host "https://github.com/$username/$repoName" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Red
    Write-Host "  ✗ Erreur lors du push" -ForegroundColor Red
    Write-Host "================================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Assurez-vous que:" -ForegroundColor Yellow
    Write-Host "1. Le repository '$repoName' existe sur GitHub" -ForegroundColor Yellow
    Write-Host "2. Vous avez les permissions pour pousser" -ForegroundColor Yellow
    Write-Host "3. Vous êtes authentifié avec GitHub (git config)" -ForegroundColor Yellow
    Write-Host ""
}

