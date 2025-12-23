# Resume (AML/STR)

GitHub Pages로 공개되는 이력서 페이지입니다.

- **Web**: [https://minmax10.github.io/resume/](https://minmax10.github.io/resume/)

## GitHub Pages 설정

**중요**: GitHub Pages는 `docs` 폴더를 소스로 사용합니다.

1. GitHub 레포지토리에서 **Settings** → **Pages** 이동
2. **Source**: Deploy from a branch 선택
3. **Branch**: `main` 선택
4. **Folder**: `/docs` 선택
5. **Save** 클릭

## 수정 방법

`index.html` 파일을 수정한 후:

```bash
# docs 폴더에 복사
cp index.html docs/index.html

# 커밋 및 푸시
git add docs/index.html
git commit -m "이력서 업데이트"
git push origin main
```
