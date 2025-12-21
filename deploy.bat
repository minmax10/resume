@echo off
chcp 65001 >nul
echo === Resume GitHub Pages 배포 스크립트 ===
echo.

cd /d "%~dp0"

REM Git 확인
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git이 설치되어 있지 않습니다.
    echo Git을 설치해주세요: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo ✅ Git 설치 확인됨
echo.

REM Git 초기화
if not exist .git (
    echo Git 저장소 초기화 중...
    git init
    git branch -M main
    echo ✅ Git 저장소 초기화 완료
) else (
    echo ✅ Git 저장소가 이미 초기화되어 있습니다.
)

echo.

REM 파일 추가 및 커밋
echo 파일 추가 및 커밋 중...
git add .
git commit -m "Initial commit: Resume for AML/STR position"
if %errorlevel% equ 0 (
    echo ✅ 커밋 완료
) else (
    echo ⚠️  커밋 실패 또는 변경사항이 없습니다.
)

echo.

REM GitHub CLI 확인
where gh >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ GitHub CLI 설치 확인됨
    echo.
    echo GitHub 레포지토리 생성 및 푸시 중...
    echo ⚠️  GitHub 인증이 필요할 수 있습니다.
    echo.
    
    gh repo create resume --public --source . --remote origin --push
    if %errorlevel% equ 0 (
        echo.
        echo ✅ 푸시 완료!
        echo.
        echo === 다음 단계 ===
        echo 1. GitHub에서 레포지토리 확인: https://github.com/minmax10/resume
        echo 2. Settings → Pages → Source: Deploy from a branch
        echo 3. Branch: main, Folder: / (root) 선택 후 Save
        echo 4. 몇 분 후 확인: https://minmax10.github.io/resume/
    ) else (
        echo ❌ 푸시 실패. 수동으로 진행해주세요.
        echo.
        echo 수동 푸시 방법:
        echo 1. GitHub에서 레포지토리 생성: https://github.com/new
        echo    - Repository name: resume
        echo    - Public 선택
        echo 2. 아래 명령어 실행:
        echo    git remote add origin https://github.com/minmax10/resume.git
        echo    git push -u origin main
    )
) else (
    echo ⚠️  GitHub CLI가 설치되어 있지 않습니다.
    echo.
    echo === 수동 설정 방법 ===
    echo 1. GitHub에서 레포지토리 생성: https://github.com/new
    echo    - Repository name: resume
    echo    - Public 선택
    echo    - README, .gitignore, license는 추가하지 않기
    echo.
    echo 2. 아래 명령어 실행:
    echo    git remote add origin https://github.com/minmax10/resume.git
    echo    git push -u origin main
    echo.
    echo 3. GitHub Pages 활성화:
    echo    - Settings → Pages → Source: Deploy from a branch
    echo    - Branch: main, Folder: / (root)
)

echo.
echo === 완료 ===
pause

