# Resume (AML/STR)

GitHub Pages로 공개되는 이력서 페이지임.

- Web: https://minmax10.github.io/resume/

- PDF: ./assets/resume.pdf (선택)

## Update Log

- YYYY-MM-DD: 초기 작성

- YYYY-MM-DD: STR 운영/전산 요건/SQL 섹션 보강

## Notes

- 내부 시스템명/테이블명/룰 임계치/기관 제출 양식 등 민감 정보는 비식별화하여 기재 권장

## GitHub Pages 설정 방법

### 1. Git 초기화 및 커밋

```bash
cd resume
git init
git branch -M main
git add .
git commit -m "Initial commit: Resume for AML/STR position"
```

### 2. GitHub 레포지토리 생성 및 푸시

**방법 A: GitHub CLI 사용 (권장)**

```bash
gh repo create resume --public --source . --remote origin --push
```

**방법 B: 수동 설정**

1. GitHub에서 `resume` 이름의 public 레포지토리 생성
2. 아래 명령어 실행:

```bash
git remote add origin https://github.com/[username]/resume.git
git push -u origin main
```

### 3. GitHub Pages 활성화

1. GitHub 레포지토리 페이지에서 **Settings** → **Pages** 이동
2. **Source** 섹션에서:
   - **Deploy from a branch** 선택
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
   - **Save** 클릭
3. 몇 분 후 `https://[username].github.io/resume/` 에서 확인 가능

**참고**: Jekyll 테마가 적용되려면 레포지토리 이름이 `[username].github.io`가 아닌 경우 위 설정이 필요합니다.
