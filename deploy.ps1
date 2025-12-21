# GitHub Pages 배포 자동화 스크립트
# 사용자: minmax10

Write-Host "=== Resume GitHub Pages 배포 스크립트 ===" -ForegroundColor Green
Write-Host ""

# 현재 디렉토리 확인
$currentDir = Get-Location
Write-Host "현재 디렉토리: $currentDir" -ForegroundColor Yellow

# Git 설치 확인
$gitPath = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitPath) {
    Write-Host "❌ Git이 설치되어 있지 않습니다." -ForegroundColor Red
    Write-Host "Git을 설치해주세요: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Git 설치 후 이 스크립트를 다시 실행하세요." -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Git 설치 확인됨: $($gitPath.Source)" -ForegroundColor Green
Write-Host ""

# Git 초기화
if (-not (Test-Path .git)) {
    Write-Host "Git 저장소 초기화 중..." -ForegroundColor Cyan
    git init
    git branch -M main
    Write-Host "✅ Git 저장소 초기화 완료" -ForegroundColor Green
} else {
    Write-Host "✅ Git 저장소가 이미 초기화되어 있습니다." -ForegroundColor Green
}

Write-Host ""

# 파일 추가 및 커밋
Write-Host "파일 추가 및 커밋 중..." -ForegroundColor Cyan
git add .
$commitMessage = "Initial commit: Resume for AML/STR position"
git commit -m $commitMessage
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ 커밋 완료" -ForegroundColor Green
} else {
    Write-Host "⚠️  커밋 실패 또는 변경사항이 없습니다." -ForegroundColor Yellow
}

Write-Host ""

# GitHub CLI 확인
$ghPath = Get-Command gh -ErrorAction SilentlyContinue
if ($ghPath) {
    Write-Host "✅ GitHub CLI 설치 확인됨" -ForegroundColor Green
    Write-Host ""
    Write-Host "GitHub 레포지토리 생성 및 푸시 중..." -ForegroundColor Cyan
    Write-Host "⚠️  GitHub 인증이 필요할 수 있습니다. (gh auth login)" -ForegroundColor Yellow
    Write-Host ""
    
    # 레포지토리 존재 확인
    $repoExists = gh repo view minmax10/resume --json name -q .name 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ 레포지토리가 이미 존재합니다. 푸시만 진행합니다." -ForegroundColor Green
        git remote add origin https://github.com/minmax10/resume.git 2>$null
        git remote set-url origin https://github.com/minmax10/resume.git 2>$null
        git push -u origin main
    } else {
        Write-Host "새 레포지토리 생성 중..." -ForegroundColor Cyan
        gh repo create resume --public --source . --remote origin --push
    }
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ 푸시 완료!" -ForegroundColor Green
        Write-Host ""
        Write-Host "=== 다음 단계 ===" -ForegroundColor Cyan
        Write-Host "1. GitHub에서 레포지토리 확인: https://github.com/minmax10/resume" -ForegroundColor Yellow
        Write-Host "2. Settings → Pages → Source: Deploy from a branch" -ForegroundColor Yellow
        Write-Host "3. Branch: main, Folder: / (root) 선택 후 Save" -ForegroundColor Yellow
        Write-Host "4. 몇 분 후 확인: https://minmax10.github.io/resume/" -ForegroundColor Yellow
    } else {
        Write-Host "❌ 푸시 실패. 수동으로 진행해주세요." -ForegroundColor Red
        Write-Host ""
        Write-Host "수동 푸시 방법:" -ForegroundColor Yellow
        Write-Host "1. GitHub에서 레포지토리 생성: https://github.com/new" -ForegroundColor Yellow
        Write-Host "   - Repository name: resume" -ForegroundColor Yellow
        Write-Host "   - Public 선택" -ForegroundColor Yellow
        Write-Host "2. 아래 명령어 실행:" -ForegroundColor Yellow
        Write-Host "   git remote add origin https://github.com/minmax10/resume.git" -ForegroundColor Cyan
        Write-Host "   git push -u origin main" -ForegroundColor Cyan
    }
} else {
    Write-Host "⚠️  GitHub CLI가 설치되어 있지 않습니다." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "=== 수동 설정 방법 ===" -ForegroundColor Cyan
    Write-Host "1. GitHub에서 레포지토리 생성: https://github.com/new" -ForegroundColor Yellow
    Write-Host "   - Repository name: resume" -ForegroundColor Yellow
    Write-Host "   - Public 선택" -ForegroundColor Yellow
    Write-Host "   - README, .gitignore, license는 추가하지 않기" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "2. 아래 명령어 실행:" -ForegroundColor Yellow
    Write-Host "   git remote add origin https://github.com/minmax10/resume.git" -ForegroundColor Cyan
    Write-Host "   git push -u origin main" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "3. GitHub Pages 활성화:" -ForegroundColor Yellow
    Write-Host "   - Settings → Pages → Source: Deploy from a branch" -ForegroundColor Yellow
    Write-Host "   - Branch: main, Folder: / (root)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== 완료 ===" -ForegroundColor Green

