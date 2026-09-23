# Creates frontend/deploy/doconnect-production.zip from build/ (run after npm run build)
$ErrorActionPreference = "Stop"
$root = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
$build = Join-Path $root "frontend\build"
$deployDir = Join-Path $root "frontend\deploy"
$zipPath = Join-Path $deployDir "doconnect-production.zip"

if (-not (Test-Path (Join-Path $build "index.html"))) {
  Write-Error "Run 'npm run build' in frontend first."
}

New-Item -ItemType Directory -Force -Path $deployDir | Out-Null
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

Compress-Archive -Path (Join-Path $build "*") -DestinationPath $zipPath -Force
Write-Host "Created: $zipPath"
Write-Host "Upload and extract to ~/doconnect.org/ via cPanel File Manager."
