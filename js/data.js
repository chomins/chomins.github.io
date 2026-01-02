// Projects Data
const projects = [
  {
    id: 'connectedge',
    title: 'ConnectEdge 프로젝트 인수인계 및 개발',
    period: '2025',
    type: 'company',
    role: '풀스택 개발자',
    description: '전임 개발자 이탈로 인한 긴급 인수인계 및 프로젝트 안정화 작업 수행. 대규모 엔터프라이즈 통합 플랫폼의 코드베이스 분석 및 리팩토링을 통한 코드 품질 개선 및 유지보수성 향상. Spring Boot + React 기반 Admin 웹 애플리케이션 개발 및 개선. Zookeeper 기반 분산 시스템 아키텍처 이해 및 클러스터 관리 기능 개발.',
    shortDescription: '대규모 엔터프라이즈 통합 플랫폼 인수인계 및 안정화',
    technologies: ['Java 17', 'Spring Boot', 'React', 'Gradle', 'Apache Zookeeper', 'Jetty', 'HikariCP', 'SAP JCO', 'Micrometer'],
    highlights: [
      '30개 이상의 버그 수정 및 이슈 해결',
      'Spring Boot + React 기반 Admin 웹 애플리케이션 개발',
      'Zookeeper 기반 분산 시스템 아키텍처 이해',
      '플러그인 기반 아키텍처를 활용한 다양한 Connector 개발',
      'Gradle 멀티 프로젝트를 통한 React 빌드 및 Spring Boot 통합 빌드 시스템 구축'
    ],
    achievements: [
      '오픈 준비 완료 및 안정적인 운영 환경 구축',
      '처리 로그 로깅/중앙검색, 설정 내보내기/가져오기 등 신규 기능 개발',
      'Connector 삭제, Import, JDBC Selector, Mail 기능 등 다양한 기능 추가'
    ],
    featured: true
  },
  {
    id: 'ibn-monitoring',
    title: 'IBN Monitoring 시스템 개발',
    period: '2025',
    type: 'company',
    role: '풀스택 개발자',
    description: 'IBN Hub의 핵심 모니터링 인프라로, 실시간으로 변화하는 메시지 상태를 특정 시점 기준으로 추적하여 운영 및 장애 대응을 지원하는 시스템 개발.',
    shortDescription: '실시간 메시지 상태 모니터링 시스템',
    technologies: ['Java', 'Spring Framework', 'React', 'EFS', 'CSV'],
    highlights: [
      '1분 단위 메시지 상태 스냅샷 생성 시스템 설계 및 개발',
      '이벤트 기반 실시간 상태 집계 엔진 구현 (LongAdder 활용)',
      '날짜별 버킷 관리 및 Cross-Day 전이 지원하는 상태 추적 시스템',
      '리더 노드 기반 스케줄링 및 EFS 기반 CSV 파일 관리 시스템',
      'React 기반 실시간 모니터링 UI 및 REST API 개발'
    ],
    achievements: [
      'IBN 서비스 운영자가 실시간으로 채널 상태 오류를 체크하고 확인할 수 있는 모니터링 시스템 구축',
      '데이터 기반 운영 및 장애 대응을 위한 Point-in-Time 분석 기능 제공',
      '동시성 안전한 카운팅 및 메모리 효율적인 설계로 안정적인 운영 환경 구축'
    ],
    featured: true
  },
  {
    id: 'autocommit',
    title: 'AutoCommit - AI 기반 자동 커밋 도구',
    period: '2025',
    type: 'personal',
    role: '개발자',
    description: 'Git 변경사항을 분석하여 AI 기반으로 의미있는 커밋 메시지를 자동 생성하는 CLI 도구. Google Gemini, OpenAI GPT-4, Anthropic Claude 등 다중 AI 제공자 지원 및 무료 할당량 활용.',
    shortDescription: 'AI 기반 자동 커밋 메시지 생성 도구',
    technologies: ['Python', 'GitPython', 'Google Gemini API', 'OpenAI API', 'Anthropic API', 'Rich', 'PyYAML'],
    highlights: [
      'Conventional Commits 형식 준수로 일관성 있는 커밋 메시지 생성',
      '토큰 효율 최적화 (스마트 Diff 압축으로 70-80% 절감)',
      '3단계 리뷰 레벨 제공 (Quick, Normal, Detailed)',
      '계층적 설정 시스템 (전역/프로젝트별/환경변수)',
      'Rich 라이브러리 기반 사용자 친화적 터미널 UI 및 대화형 인터페이스'
    ],
    achievements: [
      '회사 AI 경진대회 개인전 1등 수상',
      '전역 CLI 설치 지원으로 개발자 생산성 향상'
    ],
    featured: true
  },
  {
    id: 'aishotformgen',
    title: 'AIShotformGen (Insight Cast) - AI 기반 마케팅 콘텐츠 자동 생성',
    period: '2025',
    type: 'personal',
    role: '개발자 (팀 프로젝트)',
    description: '보안 뉴스 및 경쟁사 EDI 뉴스를 크롤링하여 AI 기반으로 제품과 연결된 마케팅 콘텐츠를 자동 생성하는 시스템. 뉴스 크롤링부터 영상(MP4)/카드뉴스(HTML) 생성까지 완전 자동화된 파이프라인 구현.',
    shortDescription: 'AI 기반 마케팅 콘텐츠 자동 생성 시스템',
    technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Google Gemini API', 'OpenAI API', 'moviepy', 'ffmpeg', 'PIL', 'pandas'],
    highlights: [
      '3가지 시나리오 전략 (보안 트렌드, 경쟁사 대비, 기술 전문성)',
      '뉴스 크롤링부터 영상/카드뉴스 생성까지 완전 자동화',
      'Google Gemini, OpenAI GPT-4를 활용한 AI 기반 콘텐츠 생성',
      'Pexels API를 활용한 비디오 검색, TTS 음성 생성, 영상 합성',
      '다국어 지원, 산업별 맞춤형 마케팅 포인트 추출'
    ],
    achievements: [
      '회사 AI 경진대회 팀전 2등 수상',
      '마케팅 콘텐츠 제작 시간 대폭 단축'
    ],
    featured: true
  },
  {
    id: 'kcs-ebxml',
    title: 'KCSEbxmlAdapter 개발',
    period: '2024',
    type: 'company',
    role: '풀스택 개발자',
    description: '관세청 EbXML 표준 프로토콜 문서 분석 및 직접 구현. 판토스 고객사가 관세청과 EbXML 프로토콜로 원활한 데이터 통신을 진행할 수 있도록 개발한 B2G 통신 인프라.',
    shortDescription: '관세청 EbXML 표준 프로토콜 구현',
    technologies: ['Java', 'React', 'OSGI', 'EbXML', 'SOAP', 'XMLSec', 'BouncyCastle'],
    highlights: [
      '관세청 EbXML 표준 프로토콜 문서 분석 및 직접 구현',
      'EbXML 메시지 생성/처리 시스템 및 SOAP 기반 메시지 교환 로직 개발',
      'XML 암호화(SEED-CBC) 및 디지털 서명 생성/검증 시스템 구현',
      '관세청 인증서 관리 및 PKI 시스템 구현',
      '메시지 검증 시스템 및 React 기반 관리 UI 개발'
    ],
    achievements: [
      '판토스 고객사가 관세청과 EbXML 프로토콜로 원활한 데이터 통신 진행',
      '추가 고객사들도 관세청 전용 EbXML 표준 프로토콜을 문제없이 사용 가능',
      'B2G 통신을 위한 안전하고 표준 준수하는 데이터 통신 인프라 구축'
    ],
    featured: false
  },
  {
    id: 'backoffice',
    title: 'BackOffice 연계 시스템 개발',
    period: '2023',
    type: 'company',
    role: '풀스택 개발자',
    description: 'Spring 기반 백오피스와 OSGI 기반 커넥트 시스템 간 연계 시스템 설계 및 개발. Kafka 기반 비동기 메시지 통신으로 구독 관리 및 사용량 측정 시스템 구현.',
    shortDescription: '백오피스와 커넥트 시스템 간 연계 시스템',
    technologies: ['Java', 'React', 'OSGI', 'Kafka', 'Druid', 'JOOQ', 'Maven'],
    highlights: [
      'Kafka 기반 비동기 메시지 통신으로 구독 관리 및 사용량 측정 시스템 구현',
      'Periodic Job Scheduler를 통한 자동화된 사용량 수집 및 Druid 분석 쿼리 통합',
      'Workspace, MessageBox, API Gateway 등 다양한 서비스 카테고리 구독 관리 지원',
      '백오피스를 통한 커넥트 서비스 상품 구매 및 사용량 측정 기능 제공'
    ],
    achievements: [
      '백오피스를 통한 커넥트 서비스 상품 구매 및 사용량 측정 기능 제공'
    ],
    featured: false
  },
  {
    id: 'keymanager',
    title: 'KeyManagerService 개발',
    period: '2023',
    type: 'company',
    role: '풀스택 개발자',
    description: '커넥트 서비스의 다양한 고객사 및 파트너사 인증서/개인키를 중앙 집중식으로 관리하는 시스템 설계 및 개발.',
    shortDescription: '인증서 및 개인키 중앙 관리 시스템',
    technologies: ['Java', 'React', 'OSGI', 'BouncyCastle', 'JOOQ', 'Maven'],
    highlights: [
      'JKS, PKCS12, JCEKS, PrivateKey+Certificate 등 다양한 키스토어 형식 지원 및 자동 변환 기능',
      'BouncyCastle을 활용한 PEM 형식 개인키 파싱 및 X.509 인증서 정보 자동 추출',
      '인증서 만료일 기반 자동 알림 시스템 및 알림 템플릿/수신자 관리 기능',
      'OSGI 서비스 패턴을 통한 표준화된 KeyManagerService API 제공',
      'Coordinator-Node 간 Configuration Service를 통한 키 파일 자동 동기화 시스템'
    ],
    achievements: [
      '커넥트 서비스 사용자들이 인증서 및 개인키를 안정적으로 관리할 수 있는 시스템 구축',
      '워크스페이스별 독립적인 키 관리 및 권한 검증을 통한 보안성 확보'
    ],
    featured: false
  },
  {
    id: 'mapping-adapter',
    title: 'Mapping-Adapter 시스템 개발 및 운영',
    period: '2022 ~ 2024',
    type: 'company',
    role: '풀스택 개발자',
    description: 'Google Blockly 기반 시각적 데이터 매핑 UI 시스템 신규 개발. 다양한 고객사와 서로 다른 구조의 데이터를 안정적으로 매핑하여 통신 및 인터페이스 개발 지원.',
    shortDescription: '시각적 데이터 매핑 시스템',
    technologies: ['Java', 'React', 'TypeScript', 'OSGI', 'Blockly', 'Lua', 'EDI (EDIFACT, X12)'],
    highlights: [
      'Google Blockly 기반 시각적 데이터 매핑 UI 시스템 신규 개발',
      'Lua 스크립트 기반 데이터 변환 엔진 구현 및 Blockly-Lua 변환 로직 개발',
      'EDI 포맷 (EDIFACT, X12) 매핑 지원 및 Envelope 처리 기능 구현',
      'Composite Mapping을 통한 복합 데이터 변환 파이프라인 구축',
      'React + TypeScript 기반 매핑 관리자 UI 개발 및 OSGI 프레임워크 통합'
    ],
    achievements: [
      '다양한 고객사와 서로 다른 구조의 데이터를 안정적으로 매핑하여 통신 및 인터페이스 개발 지원',
      '시각적 매핑 도구로 개발 효율성 향상 및 매핑 오류 감소',
      '비개발자도 사용 가능한 직관적인 데이터 매핑 시스템 구축'
    ],
    featured: false
  },
  {
    id: 'ediint-adapter',
    title: 'EDIINT-Adapter 시스템 개발 및 운영',
    period: '2021 ~ 2024',
    type: 'company',
    role: '풀스택 개발자',
    description: 'EDIINT (AS2) 프로토콜 표준 기반 B2B 통신 시스템 신규 개발. RFC 4130 준수하는 메시지 암호화/서명 및 MDN 처리 로직 구현.',
    shortDescription: 'EDIINT (AS2) 프로토콜 기반 B2B 통신 시스템',
    technologies: ['Java', 'Spring Boot', 'React', 'OSGI', 'AS2 Protocol', 'BouncyCastle'],
    highlights: [
      'EDIINT (AS2) 프로토콜 표준 기반 B2B 통신 시스템 신규 개발',
      'RFC 4130 준수하는 메시지 암호화/서명 및 MDN 처리 로직 구현',
      'React 기반 관리자 UI 개발 및 OSGI 프레임워크 통합',
      '다양한 고객사와의 호환성 개선 및 지속적 유지보수'
    ],
    achievements: [
      '여러 고객사가 안정적으로 운영 중인 EDIINT 통신 시스템 구축',
      '기존 시스템에 없던 EDIINT 통신 기능 신규 도입',
      '표준 프로토콜 준수로 호환성 및 보안성 확보'
    ],
    featured: false
  },
  {
    id: 'http-service',
    title: 'HTTPService 시스템 개발',
    period: '2021',
    type: 'company',
    role: '풀스택 개발자',
    description: 'Connect 서비스가 다양한 고객사와 HTTP 프로토콜로 통신할 수 있도록 Outbound 및 Inbound 시스템 설계 및 개발.',
    shortDescription: 'HTTP/HTTPS 통신 인프라 시스템',
    technologies: ['Java', 'React', 'OSGI', 'Apache HttpClient', 'Jetty', 'Velocity', 'SSL/TLS'],
    highlights: [
      'Apache HttpClient 기반 HTTP 요청 전송 엔진 및 Jetty 기반 HTTP 서버 구축',
      'URI 패턴 기반 동적 라우팅 시스템 및 Shared Inbound 관리 구현',
      'SSL/TLS 보안 통신 지원 및 TrustStore/Keystore 기반 인증서 관리 시스템 개발',
      'Velocity 템플릿 엔진을 활용한 동적 URL/헤더 생성 및 타임아웃 관리 기능 구현',
      'React 기반 HTTP 서비스 설정 관리 UI 및 REST API 개발'
    ],
    achievements: [
      'Connect 서비스 이용자들이 다양한 고객사와 HTTP 통신 연결이 가능하도록 범용 HTTP 통신 인프라 구축',
      '표준 HTTP/HTTPS 프로토콜 지원으로 다양한 B2B 통신 시나리오 지원',
      'UI를 통한 쉬운 설정 관리로 운영 효율성 향상 및 안정적인 통신 서비스 제공'
    ],
    featured: false
  }
];

// Experience Data
const experiences = [
  {
    id: 'inspien',
    company: '인스피언주식회사',
    position: '선임연구원 (풀스택 개발)',
    period: '2021.07 ~ 현재',
    description: '엔터프라이즈 B2B 통합 및 연동 시스템 설계 및 개발',
    responsibilities: [
      '클라우드 기반 EDI 전송 플랫폼 Connect 2.0 개발',
      'JAVA 기반 OSGI 프레임워크를 통한 백엔드 API 및 서비스 개발',
      'React.js를 통한 플랫폼 프론트엔드 개발',
      'Spring 프레임워크를 활용한 백엔드 API 및 서비스 개발',
      'Apache Kafka를 이용한 컨슈머 및 프로듀서 개발',
      'AWS (EC2, S3, EFS) 등을 이용한 서비스 개발',
      'Docker, Docker-Compose를 통한 서비스 환경 구현 및 Image 관리',
      'Swagger (Open API)를 이용한 API 문서화'
    ],
    technologies: ['Java', 'React', 'Spring Boot', 'OSGI', 'Kafka', 'AWS', 'Docker', 'TypeScript']
  },
  {
    id: 'designstudio',
    company: '(주)디자인스튜디오 에이',
    position: '웹 개발자',
    period: '2020.12 ~ 2021.07',
    description: '전자정부 프레임워크 기반 웹 서비스 개발',
    responsibilities: [
      '시흥시와 서울여대와 연계하여 문화융복합 시스템인 ArtDive 사이트 개발',
      '전자정부 프레임워크 기반 MVC 구조 웹 서비스 개발',
      'Ajax, jQuery 등을 이용한 비동기 처리 개발 진행',
      '개발문서 관리 및 협업툴 사용 (Notion, Git)'
    ],
    technologies: ['Java', 'Spring', 'JSP', 'JavaScript', 'jQuery', 'MySQL']
  },
  {
    id: 'scop',
    company: '(주)SCOP',
    position: '웹 개발자',
    period: '2020.03 ~ 2020.05, 2020.10 ~ 2020.12',
    description: '웹앱 및 웹 서비스 개발',
    responsibilities: [
      'Ionic Framework를 이용한 웹앱 개발 및 유지보수',
      'FavorFit 웹에 Kakao 로그인 API 도입',
      'Django를 이용한 MVC 구조의 웹 서비스 개발',
      '쇼핑몰 DB 설계 및 비즈니스 로직 구현',
      'Kakao API와 Google API를 통한 소셜 로그인 기능 구현'
    ],
    technologies: ['Python', 'Django', 'Ionic', 'Angular', 'Firebase', 'TypeScript']
  },
  {
    id: 'deliverylab',
    company: '딜리버리랩',
    position: '개발팀 인턴',
    period: '2020.06 ~ 2020.08',
    description: '관리자 페이지 리팩토링 및 웹 크롤링',
    responsibilities: [
      'PHP 기반 관리자 페이지 리팩토링',
      'Ajax, jQuery 등을 이용한 비동기 처리 개발 진행',
      'Bootstrap을 이용하여 반응형 웹페이지 개발',
      '중복코드 제거, 쿼리문 수정, UI/UX 개선 등 리팩토링을 통한 생산성 및 효율성 향상',
      'Python을 이용한 경쟁사 가격 웹 크롤링'
    ],
    technologies: ['PHP', 'Python', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL']
  }
];

// Skills Data
const skills = [
  // Backend
  { name: 'Java', category: 'backend', level: 'expert' },
  { name: 'Spring Boot', category: 'backend', level: 'expert' },
  { name: 'Spring Framework', category: 'backend', level: 'expert' },
  { name: 'OSGI', category: 'backend', level: 'proficient' },
  { name: 'Python', category: 'backend', level: 'proficient' },
  { name: 'Django', category: 'backend', level: 'proficient' },
  
  // Frontend
  { name: 'React', category: 'frontend', level: 'expert' },
  { name: 'TypeScript', category: 'frontend', level: 'proficient' },
  { name: 'JavaScript', category: 'frontend', level: 'expert' },
  
  // Protocol
  { name: 'EDIINT (AS2)', category: 'protocol', level: 'expert' },
  { name: 'EbXML', category: 'protocol', level: 'proficient' },
  { name: 'HTTP/HTTPS', category: 'protocol', level: 'expert' },
  { name: 'EDI (EDIFACT, X12)', category: 'protocol', level: 'proficient' },
  
  // Security
  { name: 'BouncyCastle', category: 'security', level: 'proficient' },
  { name: 'SSL/TLS', category: 'security', level: 'proficient' },
  { name: 'XMLSec', category: 'security', level: 'proficient' },
  
  // AI/ML
  { name: 'Google Gemini API', category: 'ai', level: 'proficient' },
  { name: 'OpenAI GPT-4', category: 'ai', level: 'proficient' },
  { name: 'Anthropic Claude', category: 'ai', level: 'proficient' },
  
  // Database
  { name: 'MariaDB', category: 'database', level: 'proficient' },
  { name: 'MySQL', category: 'database', level: 'proficient' },
  { name: 'HikariCP', category: 'database', level: 'proficient' },
  
  // Tools
  { name: 'Git', category: 'tools', level: 'expert' },
  { name: 'Docker', category: 'tools', level: 'proficient' },
  { name: 'AWS', category: 'tools', level: 'proficient' },
  { name: 'Kafka', category: 'tools', level: 'proficient' },
  { name: 'Zookeeper', category: 'tools', level: 'proficient' },
  { name: 'Maven', category: 'tools', level: 'expert' },
  { name: 'Gradle', category: 'tools', level: 'proficient' }
];

const skillCategories = {
  backend: 'Backend',
  frontend: 'Frontend',
  protocol: 'Protocol',
  security: 'Security',
  ai: 'AI/ML',
  database: 'Database',
  tools: 'Tools'
};

// Achievements Data
const achievements = [
  {
    id: 'autocommit-award',
    title: '회사 AI 경진대회 개인전 1등',
    description: 'AutoCommit 프로젝트로 AI 경진대회 개인전 1등 수상',
    date: '2025',
    type: 'award',
    projectId: 'autocommit'
  },
  {
    id: 'aishotformgen-award',
    title: '회사 AI 경진대회 팀전 2등',
    description: 'AIShotformGen (Insight Cast) 프로젝트로 AI 경진대회 팀전 2등 수상',
    date: '2025',
    type: 'award',
    projectId: 'aishotformgen'
  },
  {
    id: 'startup-300',
    title: '2020 학생 창업유망 팀 300',
    description: 'SCOP FAVORFIT 앱으로 300팀 최종선정',
    date: '2020.09.24',
    type: 'award',
    link: 'https://www.donga.com/news/article/all/20200924/103095258/1'
  },
  {
    id: 'connectedge-stabilization',
    title: 'ConnectEdge 프로젝트 안정화',
    description: '인수인계 프로젝트 안정화 및 오픈 준비 완료',
    date: '2025',
    type: 'project',
    projectId: 'connectedge'
  },
  {
    id: 'multiple-clients',
    title: '다양한 고객사와의 안정적인 B2B 통신 시스템 구축',
    description: '여러 고객사가 안정적으로 운영 중인 통신 시스템 구축',
    date: '2021-2024',
    type: 'contribution'
  }
];

