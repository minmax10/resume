# Resume (AML/STR)

GitHub Pages로 공개되는 이력서 페이지입니다.

- **Web**: [https://minmax10.github.io/resume/](https://minmax10.github.io/resume/)
- **PDF**: [./assets/resume.pdf](./assets/resume.pdf) (선택)

## 기술 스택

- GitHub Pages
- Jekyll
- Markdown

## 📝 이력서 수정하기

### 가장 쉬운 방법 (자동화 스크립트)

1. **`index.md`** 파일을 열어서 내용 수정
2. **`update.bat`** 파일을 더블클릭
3. 커밋 메시지 입력 (또는 Enter로 기본값 사용)
4. 완료! 몇 분 후 웹사이트에 반영됩니다

### 수동으로 수정하기

```bash
# 1. index.md 파일 수정
# 2. 터미널에서 실행
cd C:\Users\john\Desktop\re-light\resume
git add index.md
git commit -m "이력서 업데이트"
git push origin main
```

**자세한 가이드**: [EDIT_GUIDE.md](./EDIT_GUIDE.md) 참고

## 로컬에서 미리보기 (선택사항)

```bash
# Jekyll 설치 (Ruby 필요)
gem install bundler jekyll

# 로컬 서버 실행
bundle exec jekyll serve
```

## Update Log

- YYYY-MM-DD: 초기 작성
- YYYY-MM-DD: STR 운영/전산 요건/SQL 섹션 보강

## Notes

- 내부 시스템명/테이블명/룰 임계치/기관 제출 양식 등 민감 정보는 비식별화하여 기재 권장
