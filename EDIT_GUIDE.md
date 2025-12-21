# 이력서 수정 가이드

이 문서는 로컬에서 이력서를 수정하고 GitHub에 반영하는 방법을 안내합니다.

## 📝 수정 방법

### 1. 파일 수정하기

이력서 내용은 **`index.md`** 파일을 수정하면 됩니다.

#### 주요 수정 파일
- **`index.md`**: 메인 이력서 내용 (이것만 수정하면 됩니다!)
- **`README.md`**: 레포지토리 설명 (선택사항)
- **`_config.yml`**: Jekyll 테마 설정 (선택사항)

#### index.md 수정 예시

```markdown
# Resume (AML/STR)

- Email: your.email@example.com  ← 여기 수정
- Phone: 010-1234-5678          ← 여기 수정
- GitHub: https://github.com/minmax10

## Summary

- 금융권 AML 전담 경험 5년 보유  ← 여기 수정
...
```

### 2. 변경사항 확인하기

터미널에서 현재 디렉토리로 이동 후:

```bash
cd C:\Users\john\Desktop\re-light\resume

# 변경된 파일 확인
git status

# 변경 내용 미리보기
git diff
```

### 3. 변경사항 커밋하기

```bash
# 모든 변경사항 추가
git add .

# 또는 특정 파일만 추가
git add index.md

# 커밋 (의미있는 메시지 작성)
git commit -m "이력서 내용 업데이트: 경력 정보 추가"
```

**커밋 메시지 예시:**
- `"이력서 업데이트: 경력 정보 추가"`
- `"이력서 수정: 연락처 정보 업데이트"`
- `"이력서 보완: 프로젝트 경험 추가"`

### 4. GitHub에 푸시하기

```bash
# GitHub에 업로드
git push origin main
```

### 5. 웹사이트 확인하기

푸시 후 몇 분 기다리면 자동으로 반영됩니다:
- https://minmax10.github.io/resume/

---

## 🚀 빠른 수정 워크플로우

### 방법 1: 한 번에 처리

```bash
cd C:\Users\john\Desktop\re-light\resume
# 1. index.md 파일을 에디터로 열어서 수정
# 2. 아래 명령어 실행
git add index.md
git commit -m "이력서 업데이트"
git push origin main
```

### 방법 2: 배치 파일 사용 (자동화)

`update.bat` 파일을 만들어서 더블클릭만으로 업데이트할 수 있습니다.

---

## 📋 자주 수정하는 항목

### 연락처 정보
```markdown
- Email: [여기 수정]
- Phone: [여기 수정]
```

### 경력 정보
```markdown
### [회사명] / AML (STR/CTR) & Monitoring | [직무명] | [YYYY.MM ~ YYYY.MM]
```

### 경험 내용
각 항목의 불릿 포인트를 수정하거나 추가/삭제할 수 있습니다.

### 학력/자격증
```markdown
## Education / Certifications (선택)

- [학력]  ← 여기 수정
- [자격증]  ← 여기 수정
```

---

## 💡 팁

1. **로컬에서 미리보기**: GitHub에 푸시하기 전에 Markdown 에디터(VS Code, Typora 등)로 미리 확인
2. **작은 단위로 커밋**: 한 번에 너무 많이 수정하지 말고, 의미있는 단위로 나눠서 커밋
3. **백업**: 중요한 변경 전에 `git log`로 이전 버전 확인 가능
4. **실수 복구**: `git restore index.md`로 마지막 커밋 상태로 되돌리기 가능

---

## ❓ 문제 해결

### 푸시가 안 될 때
```bash
# 원격 저장소 상태 확인
git fetch origin

# 최신 상태로 업데이트
git pull origin main

# 다시 푸시
git push origin main
```

### 변경사항 되돌리기
```bash
# 특정 파일만 되돌리기
git restore index.md

# 마지막 커밋 취소 (변경사항은 유지)
git reset --soft HEAD~1
```

---

## 📚 참고 자료

- Markdown 문법: https://www.markdownguide.org/
- Git 기본 명령어: https://git-scm.com/docs

