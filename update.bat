@echo off
chcp 65001 >nul
echo ========================================
echo 이력서 업데이트 스크립트
echo ========================================
echo.

cd /d "%~dp0"

echo [1/3] 변경사항 확인 중...
git status
echo.

echo [2/3] 변경사항 추가 및 커밋...
set /p commit_msg="커밋 메시지를 입력하세요 (예: 이력서 업데이트): "
if "%commit_msg%"=="" set commit_msg=이력서 업데이트

git add .
git commit -m "%commit_msg%"

if %errorlevel% neq 0 (
    echo.
    echo ⚠️  커밋 실패 또는 변경사항이 없습니다.
    pause
    exit /b 1
)

echo.
echo [3/3] GitHub에 푸시 중...
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ✅ 업데이트 완료!
    echo.
    echo 웹사이트에서 확인하세요:
    echo https://minmax10.github.io/resume/
    echo.
    echo (몇 분 후 반영됩니다)
) else (
    echo.
    echo ❌ 푸시 실패
)

echo.
pause

