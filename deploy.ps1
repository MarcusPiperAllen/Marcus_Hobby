# Deploy Script for Marcus Piper Portfolio (PowerShell)
# Automatically stages, commits, and pushes changes to GitHub

Write-Host "🚀 Starting deployment process..." -ForegroundColor Cyan
Write-Host ""

# Check if we're in a git repository
if (-not (Test-Path .git)) {
    Write-Host "❌ Error: Not a git repository" -ForegroundColor Red
    exit 1
}

# Check for uncommitted changes
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "✅ No changes to commit" -ForegroundColor Green
    Write-Host "Repository is up to date!"
    exit 0
}

# Show status
Write-Host "📋 Current changes:" -ForegroundColor Yellow
git status --short
Write-Host ""

# Prompt for commit message
$commitMsg = Read-Host "Enter commit message (or press Enter for default)"

# Use default message if none provided
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

Write-Host ""
Write-Host "📦 Staging all changes..." -ForegroundColor Cyan
git add .

Write-Host "💾 Committing changes..." -ForegroundColor Cyan
git commit -m $commitMsg

Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Your changes will be live on GitHub Pages shortly" -ForegroundColor Green
    Write-Host "🔄 Remember to pull changes in Replit to sync" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Push failed. Please check your connection and try again." -ForegroundColor Red
    exit 1
}
