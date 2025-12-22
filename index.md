---
layout: default
---

<style>
.resume-container {
  display: flex;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.resume-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: #f8f9fa;
  padding: 40px 30px;
  box-sizing: border-box;
  overflow-y: auto;
  border-right: 1px solid #e0e0e0;
}

.resume-content {
  margin-left: 300px;
  padding: 40px 60px;
  max-width: 900px;
  box-sizing: border-box;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  border: 3px solid #ddd;
  margin-bottom: 30px;
  display: block;
}

.sidebar-name {
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #333;
}

.sidebar-title {
  font-size: 18px;
  color: #666;
  margin: 0 0 30px 0;
  font-weight: normal;
}

.sidebar-info {
  margin: 15px 0;
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

.sidebar-info a {
  color: #0066cc;
  text-decoration: none;
}

.sidebar-info a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .resume-sidebar {
    position: relative;
    width: 100%;
    height: auto;
  }
  
  .resume-content {
    margin-left: 0;
    padding: 20px;
  }
}
</style>

<div class="resume-container">
  <!-- 좌측 고정 사이드바 -->
  <div class="resume-sidebar">
    <img src="{{ '/assets/profile.jpg' | relative_url }}" alt="Hwang SunWoo" class="profile-image">
    <h1 class="sidebar-name">Hwang SunWoo</h1>
    <h2 class="sidebar-title">AML/STR Specialist</h2>
    
    <div class="sidebar-info">
      <p><strong>Email:</strong><br>
      <a href="mailto:[공개용 이메일]">[공개용 이메일]</a></p>
    </div>
    
    <div class="sidebar-info">
      <p><strong>Phone:</strong><br>
      [공개용 연락처 or 생략]</p>
    </div>
    
    <div class="sidebar-info">
      <p><strong>GitHub:</strong><br>
      <a href="https://github.com/minmax10" target="_blank">github.com/minmax10</a></p>
    </div>
    
    <div class="sidebar-info">
      <p><strong>LinkedIn/Portfolio:</strong><br>
      [선택]</p>
    </div>
    
    <div class="sidebar-info">
      <p><strong>Location:</strong><br>
      [선택]</p>
    </div>
  </div>

  <!-- 우측 스크롤 콘텐츠 -->
  <div class="resume-content">
    <h2 id="about-me">About Me</h2>
    
    <p>[총 n년]차 금융권 AML 전담 경험을 보유한 AML/STR 전문가입니다.</p>

    <p>현재 [회사명]에서 STR(의심거래보고) 및 CTR(고액현금거래보고) 운영, SQL Query 기반 Rule 운영 및 정합성 검증 업무를 수행하고 있습니다. 또한, 해외 규제 기반 국외 AML 모니터링 체계 도입 프로젝트에 참여하여 컨테이너 구조와 Elasticsearch 기반 실시간 모니터링 시스템 구축 경험을 보유하고 있습니다.</p>

    <p>STR 운영 프로세스 표준화 및 단순화를 위해 전산 요건 정의, 테스트(UAT), 로직 개선, 대용량 쿼리 튜닝 등에 참여하며, 유관부서(개발/운영/컴플라이언스/현업)와의 협업을 통한 일정/품질/리스크 관리에 강점을 가지고 있습니다.</p>

    <p><strong>기술 스택</strong></p>
    <ul>
      <li>AML/STR - <mark>STR 정책/내규 운영</mark>, <mark>룰 기반 탐지</mark>, <mark>결과 검증</mark>, <mark>보고 품질 관리</mark>, <mark>운영 프로세스 표준화</mark></li>
      <li>Data/Query - <mark>SQL(룰 추출/검증)</mark>, <mark>대용량 쿼리 튜닝</mark>, <mark>데이터 정제/추출</mark>, <mark>배치 흐름 이해</mark></li>
      <li>Platform - <mark>Elasticsearch 기반 모니터링</mark>, <mark>컨테이너 환경 운영/연동</mark></li>
      <li>Delivery - <mark>전산 개발 요건 정의</mark>, <mark>테스트(UAT)</mark>, <mark>이슈 트래킹</mark>, <mark>릴리즈 리스크 관리</mark></li>
      <li>Collaboration - <mark>다부서 조율</mark>, <mark>해외 협력사 커뮤니케이션</mark></li>
    </ul>

    <h2 id="company">Company</h2>

    <h3>[회사명]</h3>
    <p><strong>AML (STR/CTR) & Monitoring</strong></p>
    <p>[YYYY.MM] ~ 현재</p>
    <p><a href="[회사 웹사이트 URL]" target="_blank">[회사 웹사이트 URL]</a></p>

    <p><strong>주요 업무</strong></p>
    <ul>
      <li>STR/CTR Rule 운영 및 정합성 검증</li>
      <li>SQL Query 기반 의심/고액현금 거래 내역 추출 및 검증</li>
      <li>STR 운영 고도화를 위한 업무 화면 개발 참여, 로직 개선, 대용량 쿼리 튜닝</li>
      <li>배치 흐름도/테이블 연계도 작성 및 공용 매뉴얼 반영</li>
      <li>해외 규제 기반 국외 AML 모니터링 체계 도입 (컨테이너 + Elasticsearch)</li>
      <li>FDS(이상금융거래탐지) 및 발신 로깅 운영</li>
    </ul>

    <h2 id="experience">Experience</h2>

    <h3>국외 AML 모니터링 체계 도입</h3>
    <p><strong>[YYYY.MM] ~ [YYYY.MM]</strong></p>

    <ul>
      <li>해외 규제 기반 국외 AML 모니터링 체계 도입 프로젝트 참여
        <ul>
          <li>컨테이너 기반 서버 구조 설계 및 구축</li>
          <li>Elasticsearch 기반 실시간 대규모 모니터링 시스템 개발</li>
          <li>기존 행내 시스템과의 갭(운영/데이터/권한/로그/성능) 해결</li>
          <li>ETL 개발 및 운영</li>
        </ul>
      </li>
      <li>사용 기술
        <ul>
          <li><mark>Elasticsearch</mark>, <mark>Container</mark>, <mark>ETL</mark>, <mark>SQL</mark>, <mark>Monitoring</mark></li>
        </ul>
      </li>
    </ul>

    <h3>STR 운영 고도화</h3>
    <p><strong>[YYYY.MM] ~ [YYYY.MM]</strong></p>

    <p>STR 운영 프로세스 개선 작업 수행</p>

    <ul>
      <li><strong>업무 화면 개발 참여</strong> 및 자체 로직 개선을 통한 운영 효율성 향상</li>
      <li>대용량 쿼리 튜닝을 통한 <strong>쿼리 수행시간 개선</strong></li>
      <li>배치 흐름도/테이블 연계도 작성 후 팀 공유 및 공용 매뉴얼 반영</li>
      <li>보고 리드타임 단축 및 오탐/재작업률 개선</li>
    </ul>

    <h3>FDS 및 발신 로깅 운영</h3>
    <p><strong>[YYYY.MM] ~ [YYYY.MM]</strong></p>

    <p>실시간 데이터 운영 및 모니터링 업무 수행</p>

    <ul>
      <li>실시간 이체 거래 이상징후 파악 업무 (Rule 기반 탐지)</li>
      <li>은행 내/외부 전송 파일 흐름 모니터링</li>
      <li>데이터 정제/추출을 통한 거래/감사 필수 데이터 제공</li>
      <li>다양한 테스트 중 크리티컬 예외 케이스 발견으로 업무 오류 미연 방지</li>
      <li>예외 케이스 재발 방지, 모니터링 누락 감소, 장애/오탐 감소</li>
    </ul>

    <h3>STR/CTR Rule 운영 및 검증</h3>
    <p><strong>[YYYY.MM] ~ [YYYY.MM]</strong></p>

    <ul>
      <li>SQL Query 기반 STR/CTR Rule 운영 및 정합성 검증 수행</li>
      <li>완료 거래 데이터 기반 의심/고액현금 거래 내역 추출 및 검증</li>
      <li>전 지점 AML 담당자 작성 보고가 규제기관 보고까지 안정적으로 이어지도록 운영 사이클 품질 관리</li>
      <li>룰 결과 검증 쿼리 작성 및 정합성 점검 체크리스트 작성</li>
      <li>운영 가이드/매뉴얼 작성 및 표준화 작업</li>
    </ul>

    <h3>전산 협업 및 요구사항 정의</h3>
    <p><strong>[YYYY.MM] ~ [YYYY.MM]</strong></p>

    <ul>
      <li>STR 운영 프로세스 표준화/단순화 관점으로 전산 요건 정의</li>
      <li>요구사항 정의서 작성 및 테스트 시나리오(UAT) 작성</li>
      <li>릴리즈 체크리스트 작성 및 이슈 트래킹</li>
      <li>유관부서(개발/운영/컴플라이언스/현업) 협업을 통한 일정/품질/리스크 관리</li>
    </ul>

    <h2 id="education">Education / Certifications</h2>

    <ul>
      <li>[학력]</li>
      <li>[자격증: AML 관련/SQL 관련/기타]</li>
    </ul>

    <hr style="margin: 40px 0; border: none; border-top: 1px solid #ddd;">

    <div style="text-align: center; color: #666; margin-top: 40px;">
      <p>Hwang SunWoo - <a href="mailto:[공개용 이메일]">[공개용 이메일]</a> - References on request</p>
    </div>
  </div>
</div>
