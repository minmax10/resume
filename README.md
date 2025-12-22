# Resume (AML/STR)

Next.js 기반 이력서 페이지입니다.

- **Web**: [https://minmax10.github.io/resume/](https://minmax10.github.io/resume/)

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 모드 실행
npm run dev

# 정적 HTML 빌드 (GitHub Pages용)
npm run export
```

## 구조

- `payload/` - 이력서 데이터 (수정하면 내용이 변경됩니다)
- `component/` - React 컴포넌트
- `pages/` - Next.js 페이지
- `asset/` - 이미지 등 리소스

## 수정 방법

`payload/` 폴더의 파일들을 수정하면 이력서 내용이 변경됩니다:

- `profile.ts` - 프로필 정보
- `introduce.ts` - 자기소개
- `skill.ts` - 기술 스택
- `experience.ts` - 회사 경력
- `project.ts` - 프로젝트 경험
- `education.ts` - 학력/자격증

수정 후:

```bash
npm run export
git add .
git commit -m "이력서 업데이트"
git push origin main
```
