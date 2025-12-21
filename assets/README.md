# Assets 폴더

이 폴더에 이미지 파일을 저장하세요.

## 프로필 사진

프로필 사진 파일명: **`profile.jpg`**

### 이미지 추가 방법

1. 프로필 사진을 이 폴더에 복사
2. 파일명을 `profile.jpg`로 변경 (또는 `profile.png`)
3. `index.md`에서 이미지 경로가 올바른지 확인

### 권장 사양

- 파일 형식: JPG 또는 PNG
- 권장 크기: 400x400px 이상 (정사각형)
- 파일 크기: 500KB 이하 권장

### 파일명 변경 시

만약 다른 파일명을 사용한다면, `index.md`의 다음 부분을 수정하세요:

```markdown
<img src="{{ '/assets/profile.jpg' | relative_url }}" ...>
```

`profile.jpg`를 실제 파일명으로 변경하세요.

