# 이력서 업데이트 PowerShell 스크립트

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "이력서 업데이트 스크립트" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 현재 디렉토리로 이동
Set-Location $PSScriptRoot

# Git 경로
$gitPath = "C:\Program Files\Git\bin\git.exe"

Write-Host "[1/3] 변경사항 확인 중..." -ForegroundColor Yellow
& $gitPath status
Write-Host ""

Write-Host "[2/3] 변경사항 추가 및 커밋..." -ForegroundColor Yellow
$commitMsg = Read-Host "커밋 메시지를 입력하세요 (예: 이력서 업데이트)"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "이력서 업데이트"
}

& $gitPath add .
& $gitPath commit -m $commitMsg

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "⚠️  커밋 실패 또는 변경사항이 없습니다." -ForegroundColor Yellow
    Read-Host "계속하려면 Enter를 누르세요"
    exit 1
}

Write-Host ""
Write-Host "[3/3] GitHub에 푸시 중..." -ForegroundColor Yellow
& $gitPath push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ 업데이트 완료!" -ForegroundColor Green
    Write-Host ""
    Write-Host "웹사이트에서 확인하세요:" -ForegroundColor Cyan
    Write-Host "https://minmax10.github.io/resume/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "(몇 분 후 반영됩니다)" -ForegroundColor Gray
} else {
    Write-Host ""
    Write-Host "❌ 푸시 실패" -ForegroundColor Red
}

Write-Host ""
Read-Host "계속하려면 Enter를 누르세요"

